import React from "react";
// @ts-ignore
import pfp from "./profile.jpg";
// @ts-ignore
import gmailLogo from "./gmailLogo.png";
// @ts-ignore
import githubLogo from "./githubLogo.png";
// @ts-ignore
import linkedInLogo from "./linkedInLogo.png";
// @ts-ignore
import resume from "./Resume.pdf";
// @ts-ignore
import triangle from "./triangle.png";
import "./Header.css";

type HeaderProps = {
  jumpToID: string;
};

function Header(props: HeaderProps) {
  return (
    <header className="App-header">
      <h2>
        Hello I'm <strong className="highlight">Yuyang (Rain) Zhao</strong>,
        <br />
        and welcome to my page.
      </h2>
      <div className="Header-inline">
        <div>
          <img src={pfp} className="Header-pfp" alt="logo" />
          <a href={resume} target="_blank">
            Resume
          </a>
        </div>
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
      <p>
        I am a third year Computer Science and Statistics student with
        experience in software development. My hobbies include photography,
        badminton, and video games. Come check out what I've been up to.
      </p>
      <a href={`#${props.jumpToID}`}>
        <img src={triangle} className="Header-jump-arrow" alt="jump" />
      </a>
    </header>
  );
}

export default Header;
