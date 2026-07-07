'use client';

import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { formatPieceType } from "../lib/piece-format";
import { AnimatedPieceMedia, PieceMedia } from "../lib/piece-media";
import { useMobile } from "../contexts/mobile-context";
import { useStaticEffects } from "../contexts/static-effects-context";

function RichText({ text }) {
  if (!text) {
    return null;
  }

  const content = Array.isArray(text) ? text.join("<br />") : text;
  const lines = content.split("<br />");

  return (
    <>
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < lines.length - 1 && <><br /> <br /></>}
        </React.Fragment>
      ))}
    </>
  );
}

function ExternalLink({ href, label }) {
  return (
    <a className="hyperlink" target="_blank" rel="noreferrer" href={href}>
      {label}
      <div className="hyperlink-arrow">&#8599;&#xFE0E;</div>
    </a>
  );
}

function getLinkLabel(type) {
  const types = Array.isArray(type) ? type : [type];

  if (types.includes("ux study")) {
    return "VIEW STUDY";
  }

  if (types.includes("web app") || types.includes("digital portfolio")) {
    return "VIEW LIVE";
  }

  return "VIEW PROJECT";
}

function Subtitle({ piece, hasLinks }) {
  return (
    <div className="piece-subtitle">
      <div className="piece-type">{formatPieceType(piece.type)}</div>
      <div className="piece-date">{piece.date}</div>
      {hasLinks ? (
        <>
          {piece.link ? (
            <ExternalLink href={piece.link} label={getLinkLabel(piece.type)} />
          ) : null}
          {piece.repo ? (
            <ExternalLink href={piece.repo} label="GITHUB REPO" />
          ) : null}
        </>
      ) : null}
    </div>
  );
}

function NavLinks({ prevPiece, nextPiece }) {
  if (!(prevPiece && nextPiece)) {
    return null;
  }

  return (
    <nav className="piece-nav-links">
      <Link href={`/port/piece/${prevPiece.id}`} className="piece-nav-link piece-nav-link-prev">
        <span>PREV</span>
        <span className="piece-nav-link-title">{prevPiece.title}</span>
      </Link>
      <Link href={`/port/piece/${nextPiece.id}`} className="piece-nav-link piece-nav-link-next">
        <span className="piece-nav-link-next">NEXT</span>
        <span className="piece-nav-link-title">{nextPiece.title}</span>
      </Link>
    </nav>
  );
}

function getSections(piece) {
  const backgroundImages =
    piece.backgroundImages && piece.backgroundImages.length
      ? piece.backgroundImages
      : piece.thumbnail
      ? [{ src: piece.thumbnail, alt: piece.title }]
      : [];

  return [
    { key: "background", label: "Background", text: piece.background, images: backgroundImages },
    { key: "process", label: "Process", text: piece.process, images: piece.processImages ?? [] },
    { key: "result", label: "Result", text: piece.result, images: piece.resultImages ?? [] },
  ];
}

function MobilePieceDetails({ piece, prevPiece, nextPiece }) {
  const hasLinks = piece.link || piece.repo;

  return (
    <div className="details details-active piece-details">
      <div className="piece-page-title piece-title">{piece.title}</div>
      <div className="expanded piece-expanded">
        <Subtitle piece={piece} hasLinks={hasLinks} />

        <div className="piece-background">
          <RichText text={piece.background} />
        </div>

        <div className="piece-process">
          <div className="piece-header">Process</div>
          <RichText text={piece.process} />
        </div>

        <div className="piece-images piece-process-images">
          {piece.processImages.map((image, index) => (
            <PieceMedia
              key={`${image.src}-${index}`}
              item={image}
              className="piece-image"
              fallbackAlt={piece.title}
            />
          ))}
        </div>

        <div className="piece-result">
          <div className="piece-header">Result</div>
          <RichText text={piece.result} />
        </div>

        <div className="piece-images piece-result-images">
          {piece.resultImages.map((image, index) => (
            <PieceMedia
              key={`${image.src}-${index}`}
              item={image}
              className="piece-image"
              fallbackAlt={piece.title}
            />
          ))}
        </div>
      </div>
      <NavLinks prevPiece={prevPiece} nextPiece={nextPiece} />
    </div>
  );
}

const ADVANCE_THRESHOLD = 600;
const ADVANCE_COOLDOWN = 650;

function DesktopPieceDetails({ piece, prevPiece, nextPiece }) {
  const hasLinks = piece.link || piece.repo;
  const { isStaticEnabled } = useStaticEffects();
  const sections = getSections(piece);
  const sectionCount = sections.length;

  const tabBodyMotion = isStaticEnabled
    ? {
        initial: { height: 0, width: 0 },
        animate: { height: "auto", width: "auto" },
        exit: { height: 0, width: 0 },
        transition: { duration: 0.4, ease: "easeOut" },
      }
    : {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.4, ease: "easeInOut" },
      };

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const tabsRef = useRef(null);
  const lockRef = useRef(false);
  const accRef = useRef(0);

  const goTo = useCallback(
    (index) => {
      setActiveIndex(Math.max(0, Math.min(sectionCount - 1, index)));
    },
    [sectionCount]
  );

  useEffect(() => {
    if (stageRef.current) {
      stageRef.current.scrollTop = 0;
    }
    if (tabsRef.current) {
      tabsRef.current.scrollTop = 0;
    }
    accRef.current = 0;
  }, [activeIndex]);

  useEffect(() => {
    const container = containerRef.current;
    const stage = stageRef.current;

    if (!container || !stage) {
      return undefined;
    }

    function advance(delta) {
      lockRef.current = true;
      accRef.current = 0;
      setActiveIndex((index) => Math.max(0, Math.min(sectionCount - 1, index + delta)));
      window.setTimeout(() => {
        lockRef.current = false;
      }, ADVANCE_COOLDOWN);
    }

    function onWheel(event) {
      if (lockRef.current) {
        event.preventDefault();
        return;
      }

      const goingDown = event.deltaY > 0;
      const tabs = tabsRef.current;
      const overStage = stage.contains(event.target);
      const overTabs = tabs?.contains(event.target);

      const stageAtBottom = stage.scrollTop + stage.clientHeight >= stage.scrollHeight - 2;
      const stageAtTop = stage.scrollTop <= 2;
      const stageCanScroll = goingDown ? !stageAtBottom : !stageAtTop;

      const tabsAtBottom = !tabs || tabs.scrollTop + tabs.clientHeight >= tabs.scrollHeight - 2;
      const tabsAtTop = !tabs || tabs.scrollTop <= 2;
      const tabsCanScroll = tabs ? (goingDown ? !tabsAtBottom : !tabsAtTop) : false;

      if (overTabs && tabsCanScroll) {
        accRef.current = 0;
        return;
      }

      if (!overTabs && stageCanScroll) {
        accRef.current = 0;
        if (!overStage) {
          event.preventDefault();
          stage.scrollTop += event.deltaY;
        }
        return;
      }

      if (overTabs && !tabsCanScroll && stageCanScroll) {
        accRef.current = 0;
        event.preventDefault();
        stage.scrollTop += event.deltaY;
        return;
      }

      if (!overTabs && !stageCanScroll && tabsCanScroll) {
        accRef.current = 0;
        event.preventDefault();
        tabs.scrollTop += event.deltaY;
        return;
      }

      event.preventDefault();
      accRef.current += event.deltaY;

      const canAdvanceDown = stageAtBottom && tabsAtBottom;
      const canAdvanceUp = stageAtTop && tabsAtTop;

      if (goingDown && accRef.current > ADVANCE_THRESHOLD && activeIndex < sectionCount - 1 && canAdvanceDown) {
        advance(1);
      } else if (!goingDown && accRef.current < -ADVANCE_THRESHOLD && activeIndex > 0 && canAdvanceUp) {
        advance(-1);
      }
    }

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [activeIndex, sectionCount]);

  const active = sections[activeIndex];

  return (
    <div className="piece-details piece-details-desktop" ref={containerRef}>
      <div className="piece-stage" ref={stageRef}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.key}
            className="piece-stage-track"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {active.images.map((image, index) => (
              <AnimatedPieceMedia
                key={`${image.src}-${index}`}
                item={image}
                fallbackAlt={piece.title}
                motionProps={{
                  initial: { opacity: 0, y: 14 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.3, delay: index * 0.06, ease: "easeOut" },
                }}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <aside className={"dead-pixel-zone " + (isStaticEnabled ? "dpz-static" : "dpz-bw")}>
        <div className="dpz-head">
          <div className="piece-page-title piece-title">{piece.title}</div>
          <Subtitle piece={piece} hasLinks={hasLinks} />
        </div>

        <div className="dpz-tabs" ref={tabsRef}>
          {sections.map((section, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                className={
                  "dpz-tab" +
                  (isActive ? " is-active" : "") +
                  (isStaticEnabled ? " pixel-corners" : "")
                }
                key={section.key}
              >
                <button
                  type="button"
                  className={"dpz-tab-header" + (isStaticEnabled ? " dpz-static" : "")}
                  onClick={() => goTo(index)}
                  aria-expanded={isActive}
                >
                  <span className="dpz-tab-label">{section.label}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isActive ? (
                    <motion.div className="dpz-tab-body" key="body" {...tabBodyMotion}>
                      <div className="dpz-tab-text">
                        <RichText text={section.text} />
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <NavLinks prevPiece={prevPiece} nextPiece={nextPiece} />
      </aside>
    </div>
  );
}

export default function PieceDetails(props) {
  const { isMobile } = useMobile();

  if (isMobile) {
    return <MobilePieceDetails {...props} />;
  }

  return <DesktopPieceDetails {...props} />;
}
