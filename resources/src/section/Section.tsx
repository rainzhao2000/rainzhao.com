import React from "react";
import "./Section.css";

type SectionProps = {
  id: string;
  title: string;
  children?: React.ReactNode;
};

function Section(props: SectionProps) {
  return (
    <div id={props.id} className="App-section">
      <h2 className="highlight">{props.title}</h2>
      {props.children}
    </div>
  );
}

export default Section;
