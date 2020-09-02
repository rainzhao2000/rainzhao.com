import React from "react";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Section from "../section/Section";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header jumpToID="Section-website" />
      <Section id="Section-website" title="This website">
        <p>
          There are so many tools to build a website, but I chose to build this
          webpage with{" "}
          <a href="https://reactjs.org/" target="_blank">
            React
          </a>{" "}
          and host on{" "}
          <a href="https://aws.amazon.com/s3/" target="_blank">
            AWS S3
          </a>
          . I opted to further my experience with React because it is
          undoubtedly flexible and in high demand. Having helped build homepage
          widgets with React components previously at{" "}
          <a href="https://loopio.com/" target="_blank">
            Loopio
          </a>
          , I've gained a great deal of best practices and experience.
        </p>
      </Section>
    </div>
  );
}

export default App;
