import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <div className={"page"}>
      {/* <div className={"tv-static"}></div> */}
      <svg>
        <filter id="grainy">
            <feTurbulence type="fractalNoise" baseFrequency="0.6"/>
            <feComposite operator="in" in2="SourceGraphic" result="monoNoise"/>
        </filter>
        {/* <path xmlns="http://www.w3.org/2000/svg" d="M76.5 361.5C-14.9753 272.022 59.4634 213.991 108.3 196.073C104.711 197.276 85.0286 198.846 32.5 196C-34.5 192.37 9.99998 135.5 108.5 172C207 208.5 164.5 86 445.5 18.5C726.5 -49 457 88.5 391.5 252.5C326 416.5 541 260.5 617.5 423C694 585.5 476.5 508 358.5 571C240.5 634 191 473.5 76.5 361.5Z" filter="url(#grainy)"/> */}
      </svg>
      <div id="title-mius">MIUS THOMAS</div>
      {/* <div id="nav-div"> */}
        <ul id="nav-list">
          <li className="nav-item">ABOUT</li>
          <li className="nav-item">PORTFOLIO</li>
          <li className="nav-item">EXPERIENCE</li>
          <li className="nav-item">CONTACT</li>
        </ul>
      {/* </div> */}
    </div>
  );
}
