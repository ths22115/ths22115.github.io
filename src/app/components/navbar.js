"use client"
import Link from "next/link";
import "./navbar.css";
import { useStaticEffects } from "../contexts/static-effects-context";
import { usePort } from "../contexts/port-context";
import { useExp } from "../contexts/exp-context";
import Logotype from "./logotype";

const pageDisplayName = {
  landing: "HOME",
  about: "ME",
  exp: "CV",
  port: "WORK",
  contact: "MORE",
};

const nestedNavTabs = {
  port: [
    { id: "webdev", label: "UI/UX" },
    { id: "design", label: "GRAPHIC" },
  ],
  exp: [
    // { id: "all", label: "*" },
    { id: "swe", label: "SWE" },
    { id: "design", label: "DESIGN" },
  ],
};

function NestedNavTabButton({ label, isActive, modeClass, modeInnerClass, onClick }) {
  return (
    <div
      className={`page-tab ${modeClass} ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}

const Navbar = ({ page }) => {
  const { isStaticEnabled, toggleStaticEffects } = useStaticEffects();
  const { portSection, updatePortSection } = usePort();
  const { jobFilter, updateJobFilter, resetJobFilter } = useExp();
  const pages = Object.keys(pageDisplayName);
  const currPage = pageDisplayName[page];
  const modeClass = isStaticEnabled ? "radio" : "bw";

  function handleExpLinkClick(e) {
    if (page === "exp") e.preventDefault();
    resetJobFilter();
  }

  function getNestedNavState(pageKey) {
    if (pageKey === "port") {
      return { tabs: nestedNavTabs.port, activeTab: portSection, updateTab: updatePortSection };
    }
    if (pageKey === "exp") {
      return { tabs: nestedNavTabs.exp, activeTab: jobFilter, updateTab: updateJobFilter };
    }
    return null;
  }

  return (
    <div className="nav-container">
      <div className="nav-logotype-container">
        <Link href="/" aria-label="Home">
          <Logotype className="nav-logotype" />
        </Link>
      </div>
      <div className={"nav-links-container"}>
        {pages.map((pageKey) => {
          const nestedNav = getNestedNavState(pageKey);

          return (
            <div
              key={pageKey}
              className={
                "nav-link"
                + (currPage == pageDisplayName[pageKey] ? " active" : "")
                + (pageKey == "port" || pageKey == "exp" ? " nested-nav-link" : "")
              }
            >
              <Link
                href={`/${pageKey == "landing" ? "" : pageKey}`}
                onClick={pageKey === "exp" ? handleExpLinkClick : undefined}
              >
                {pageDisplayName[pageKey]}
              </Link>
              {nestedNav && page === pageKey && (
                <div className="nested-nav-tabs">
                  {nestedNav.tabs.map(({ id, label }) => (
                    <NestedNavTabButton
                      key={id}
                      label={label}
                      isActive={nestedNav.activeTab === id}
                      modeClass={modeClass}
                      onClick={() => nestedNav.updateTab(id)}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="viewing-mode-container">
        <div
          className={`viewing-mode-button bw-button ${!isStaticEnabled ? "active" : ""}`}
          onClick={toggleStaticEffects}
        >
          <div className="viewing-mode-button-inner bw-button-inner">B/W</div>
        </div>
        <div
          className={`viewing-mode-button radio-button ${isStaticEnabled ? "active" : ""}`}
          onClick={toggleStaticEffects}
        >
          <div className="viewing-mode-button-inner radio-button-inner">TV</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
