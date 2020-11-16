import React from "react";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Section from "../section/Section";
// @ts-ignore
import gifIdentityRGBSlices from "./identity_rgb_slices-min.gif";
// @ts-ignore
import gifIdentityHSLSlices from "./identity_hsl_slices-min.gif";
// @ts-ignore
import gifPrintRGBSlices from "./print_rgb_slices-min.gif";
// @ts-ignore
import gifPrintHSLSlices from "./print_hsl_slices-min.gif";
// @ts-ignore
import pngCube from "./cube-min.jpg";
// @ts-ignore
import imgLut from "./lut.png";
// @ts-ignore
import pngGraph from "./grapher.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-body">
        <Header jumpToID="Section-website" />
        <Section id="Section-website" title="This website">
          <p>
            There are so many tools to build a website, but I chose to build
            this webpage with{" "}
            <a href="https://reactjs.org/" target="_blank">
              React
            </a>{" "}
            and host on{" "}
            <a href="https://aws.amazon.com/s3/" target="_blank">
              AWS S3
            </a>
            . I opted to further my experience with React because it is
            undoubtedly flexible and in high demand. Having helped build
            homepage widgets with React components previously at{" "}
            <a href="https://loopio.com/" target="_blank">
              Loopio
            </a>
            , I've gained a great deal of best practices and experience. I will
            continue to explore new web technologies either on this website or
            side projects you find here. Follow my progress at this{" "}
            <a
              href="https://github.com/rainzhao2000/rainzhao.com"
              target="_blank"
            >
              Github repo
            </a>
            .
          </p>
        </Section>
        <Section id="Section-colour-data" title="Data Visualization">
          <img
            src={pngCube}
            className="App-flex-width-medium"
            alt="A 3D LUT cube"
          />
          <p className="highlight">
            3D cube LUT viewed inside Davinci Resolve Fusion
          </p>
          <p>
            I've always been interested in the power of computation and how I
            can manipulate data.
            <br />
            The most satisfying results for me are often{" "}
            <span className="highlight">visual</span>.
          </p>
          <div className="App-inline-tight">
            <img
              src={gifIdentityRGBSlices}
              className="App-flex-width-medium"
              alt="Identity LUT RGB Cross Sections"
            />
            <img
              src={gifPrintRGBSlices}
              className="App-flex-width-medium"
              alt="Print Film LUT RGB Cross Sections"
            />
          </div>
          <p>
            Above are two GIFs I generated using an R script that iteratively
            plots the slices of some 3-dimensional data set.
            <br />
            In particular, I was interested in examining Look Up Tables (LUTs)
            that represent RGB colour transformations.
            <br />
            The left visualization is of the identity mapping represented as a
            33x33x33 cube LUT, while the right is of a film emulation LUT.
          </p>
          <div className="App-inline">
            <img
              src={imgLut}
              className="App-flex-width-medium"
              alt="Inside a LUT file"
            />
            <p>
              A LUT in this context is a table of RGB points confined to some
              cube. A colour grading tool suite like Photoshop or{" "}
              <a
                href="https://www.blackmagicdesign.com/ca/products/davinciresolve/"
                target="_blank"
              >
                Davinci Resolve
              </a>{" "}
              can apply a LUT via interpolation to transform all the colours of
              an image.
            </p>
          </div>
          <p>
            I wanted to peek inside one of these LUTs and see whats going on.
            Davinci Resolve's Fusion compositor actually provides a nice way to
            view the 3-dimensional plot as the cube you saw above, but I lack
            the technical knowledge of Fusion and their scripting API to have
            more flexibility.
          </p>
          <p>
            I happened to be taking an introductory course to data analysis in
            R, and out of convenience, figured I could use it to generate my own
            visualizations. Thus the two GIFs above were born by tilting the the
            cube diagonal (brightness) vertically and slicing up through the
            brightness axis.
          </p>
          <img
            src={pngGraph}
            className="App-flex-width-medium"
            alt="Grapher view of how I'm slicing the cube"
          />
          <p>
            Here are also the visualizations for the same LUTs in the HSL colour
            model. Notice the L in HSL stands for Lightness, which is a similar
            but different concept from Brightness.
          </p>
          <div className="App-inline-tight">
            <img
              src={gifIdentityHSLSlices}
              className="App-flex-width-medium"
              alt="Identity LUT HSL Cross Sections"
            />
            <img
              src={gifPrintHSLSlices}
              className="App-flex-width-medium"
              alt="Print Film LUT HSL Cross Sections"
            />
          </div>
          <div className="App-inline">
            <p>
              It was a great exercise in R and review of some linear algebra;
              the documentation of which can be viewed{" "}
              <a href="lut_analysis.html" target="_blank">
                here
              </a>
              .
              <br />I just wanted to quickly throw together a proof of concept,
              so performance wasn't my concern. I look forward to creating more
              visualizations, and also looking into Python and JavaScript
              graphics libraries.
            </p>
          </div>
        </Section>
        <Section id="Section-computer-vision" title="Computer Vision">
          <p>
            Computer vision and computer graphics are some future interests of
            mine.
            <br />
            For now here's a side project to consider:
          </p>
          <ul>
            Real Time Image Processing App
            <li>
              Android app using OpenCV to process images and OpenGL to
              incoporate data visualizations
            </li>
            <li>
              Field monitor for both external/internal cameras: apply LUTs in
              real time, view false colour, histograms etc.
            </li>
            <li>Colour grading: post corrections/adjustments, edit LUTs</li>
          </ul>
        </Section>
      </div>
    </div>
  );
}

export default App;
