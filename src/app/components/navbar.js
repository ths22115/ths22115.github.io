"use client"
import Link from "next/link";
import "./navbar.css";
import { useStaticEffects } from "../contexts/static-effects-context";
import Logotype from "./logotype";

const pageDisplayName = {
  landing: "HOME",
  about: "ME",
  exp: "CV",
  port: "WORK",
  contact: "MORE",
};

const Navbar = ({ page }) => {
  const { isStaticEnabled, toggleStaticEffects } = useStaticEffects();
  const pages = Object.keys(pageDisplayName);
  const currPage = pageDisplayName[page];

  return (
    <div className="nav-container">
      <div className="nav-logotype-container">
        <Link href="/" aria-label="Home">
          <Logotype className="nav-logotype" />
        </Link>
      </div>
      <div className="nav-links-container">
        {pages.map((pageKey) => (
          <div
            key={pageKey}
            className={
              "nav-link" + (currPage == pageDisplayName[pageKey] ? " active" : "")
            }
          >
            <Link href={`/${pageKey == "landing" ? "" : pageKey}`}>
              {pageDisplayName[pageKey]}
            </Link>
          </div>
        ))}
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
