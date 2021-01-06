import React from "react";
import "./Section.css";

type SectionProps = {
  id: string;
  title: string;
  isSub?: boolean;
  children?: React.ReactNode;
};

function Section(props: SectionProps) {
  const { isSub = false } = props;
  return isSub ? (
    <div id={props.id} className="App-subsection">
      <h3 className="App-heading">{props.title}</h3>
      {props.children}
    </div>
  ) : (
    <div id={props.id} className="App-section">
      <h2 className="App-heading">{props.title}</h2>
      {props.children}
    </div>
  );
}

export default Section;
