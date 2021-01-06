import React from "react";
import "./ImgCaption.css";

type ImgCaptionProps = {
  src: string;
  alt: string;
  caption: string;
  loading?: "eager" | "lazy";
  imgClass?: string;
};

function ImgCaption(props: ImgCaptionProps) {
  const { imgClass = "App-flex-width-large" } = props;
  return (
    <div className="App-imgcaption">
      <img
        className={imgClass}
        src={props.src}
        alt={props.alt}
        loading={props.loading}
      />
      <span className="highlight">{props.caption}</span>
    </div>
  );
}

export default ImgCaption;
