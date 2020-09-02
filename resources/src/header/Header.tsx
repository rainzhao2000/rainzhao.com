import React from "react";
// @ts-ignore
import pfp from "./profile.jpg";
// @ts-ignore
import gmailLogo from "./gmailLogo.png";
// @ts-ignore
import githubLogo from "./githubLogo.png";
// @ts-ignore
import linkedInLogo from "./linkedInLogo.png";
import "./Header.css";

function Header() {
  return (
    <header className="App-header">
      <p>
        Hello, I'm <strong className="highlight">Rain Zhao</strong>
        <br />
        and welcome to my playground.
      </p>
      <div className="Header-inline">
        <img src={pfp} className="Header-pfp" alt="logo" />
        <div className="Header-socials">
          <a href="mailto:rainzhao2000@gmail.com" target="_blank">
            <img src={gmailLogo} className="App-logo" alt="Gmail" />
          </a>
          <a href="https://github.com/rainzhao2000" target="_blank">
            <img src={githubLogo} className="App-logo" alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/rain-zhao/" target="_blank">
            <img src={linkedInLogo} className="App-logo" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
