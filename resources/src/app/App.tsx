import React from "react";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Section from "../section/Section";
import ImgCaption from "../imgcaption/ImgCaption";
// @ts-ignore
import gifIdentityRGBSlices from "./identity_rgb_slices-min.gif";
// @ts-ignore
import gifIdentityHSLSlices from "./identity_hsl_slices-min.gif";
// @ts-ignore
import gifPrintRGBSlices from "./print_rgb_slices-min.gif";
// @ts-ignore
import gifPrintHSLSlices from "./print_hsl_slices-min.gif";
// @ts-ignore
import imgCube from "./cube-min.jpg";
// @ts-ignore
import imgLut from "./lut.png";
// @ts-ignore
import imgGraph from "./grapher.png";
// @ts-ignore
import sampleStill from "./sample_still-min.jpg";
// @ts-ignore
import imgSLog3 from "./slog3.png";
// @ts-ignore
import imgSGamut3cine from "./sgamut3cine.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/*<Navbar />*/}
      <div className="App-body">
        <Header jumpToID="Section-website" />
        <Section id="Section-website" title="This website">
          <p>
            Built with{" "}
            <a href="https://reactjs.org/" target="_blank">
              React
            </a>{" "}
            and host on{" "}
            <a href="https://aws.amazon.com/s3/" target="_blank">
              AWS S3
            </a>
            .
          </p>
        </Section>
        <Section id="Section-grapher" title="Grapher">
          <a href="Grapher.html" target="_blank">
            Jupyter Notebook Matplotlib Grapher
          </a>
        </Section>
        <Section id="Section-color-data" title="Playing with LUTs">
          <ImgCaption
            src={imgCube}
            alt="A 3D LUT cube"
            caption="3D cube LUT viewed inside Davinci Resolve Fusion"
            loading="lazy"
            imgClass="App-flex-width-medium"
          />
          {/* <p>
            I've always been interested in the power of computation and how I
            can manipulate data.
            <br />
            The most satisfying results for me are often{" "}
            <span className="highlight">visual</span>.
          </p> */}
          <div className="App-inline-tight">
            <img
              src={gifIdentityRGBSlices}
              className="App-flex-width-medium"
              alt="Identity LUT RGB Cross Sections"
              loading="lazy"
            />
            <img
              src={gifPrintRGBSlices}
              className="App-flex-width-medium"
              alt="Print Film LUT RGB Cross Sections"
              loading="lazy"
            />
          </div>
          <p>
            Above are two GIFs I generated using an R script that iteratively
            plots the slices of some 3-dimensional vector field.
            <br />
            LUTs representing RGB color transformations were an interesting
            subject to be plotted this way. These animations gave me a
            qualitative understanding of the transformation.
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
              cube. A color grading tool suite like Photoshop or{" "}
              <a
                href="https://www.blackmagicdesign.com/ca/products/davinciresolve/"
                target="_blank"
              >
                Davinci Resolve
              </a>{" "}
              can apply a LUT via interpolation to transform all the colors of
              an image.
            </p>
          </div>
          {/* <p>
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
            src={imgGraph}
            className="App-flex-width-medium"
            alt="Grapher view of how I'm slicing the cube"
            loading="lazy"
          /> */}
          <p>
            Here are also the visualizations for the same LUTs in the HSL color
            model.
          </p>
          <div className="App-inline-tight">
            <img
              src={gifIdentityHSLSlices}
              className="App-flex-width-medium"
              alt="Identity LUT HSL Cross Sections"
              loading="lazy"
            />
            <img
              src={gifPrintHSLSlices}
              className="App-flex-width-medium"
              alt="Print Film LUT HSL Cross Sections"
              loading="lazy"
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
            </p>
          </div>
        </Section>
        {/*<Section id="Section-computer-vision" title="Computer Vision">
          <p>
            Computer vision and computer graphics are some future interests of
            mine.
            <br />
            For now here's a side project idea to consider:
          </p>
          <ul>
            Real Time Image Processing App
            <li>
              Android app using OpenCV to process images and OpenGL to
              incoporate data visualizations
            </li>
            <li>
              Field monitor for both external/internal cameras: apply LUTs in
              real time, view false color, histograms etc.
            </li>
            <li>Color grading: post corrections/adjustments, edit LUTs</li>
          </ul>
        </Section>
        <Section id="Section-algorithms" title="Algorithms">
          <Section
            id="Section-sub-p5"
            title="LeetCode Problem 5"
            isSub={true}
          ></Section>
        </Section>
        <Section id="Section-color" title="Color Grading">
          <Section id="Section-sub-film" title="Film Emulation" isSub={true}>
            <ImgCaption
              src={sampleStill}
              alt="Sample Still"
              loading="lazy"
              caption="Crop of digital still image I shot and processed to emulate film grain, color, and halation."
            />
            <p>
              In the world of photography, film is a highly sought after
              creative medium for its{" "}
              <span className="highlight">grain, colors, and halation</span>.
              Emulating film on digital media is made easy by software like{" "}
              <a href="https://www.filmconvert.com/" target="_blank">
                filmconvert nitrate from FilmConvert
              </a>
              . They offer a proprietary grain algorithm, and have scanned color
              targets on film and various digital cameras to create color
              transformation profiles.
            </p>
            <p>
              As a hobby photographer, I achieve a film look by preparing
              digital media from my{" "}
              <span className="highlight">
                Sony A7III camera in an SLog3 picture profile, then applying
                halation, filmconvert nitrate, and a print film emulation LUT
              </span>
              . In particular, I shoot{" "}
              <a
                href="https://pro.sony/s3/cms-static-content/uploadfile/06/1237494271406.pdf"
                target="_blank"
              >
                SLog3 gamma with SGamut3.cine gamut
              </a>{" "}
              <span className="highlight">with +16 in-camera saturation</span>.
              This defines a massive color space, too large to be properly
              displayed, but giving us the most flexibility in post processing.
              Since the A7III can only shoot 8 bit video, this massive color
              space is stretched thin, introducing unwanted color and other
              artifacts discussed in{" "}
              <a
                href="http://xdcam-user.com/2012/04/can-i-use-8-bit-to-record-s-log/"
                target="_blank"
              >
                detail by Alister Chapman
              </a>
              . Thus the in-camera saturation was increased to combat this issue
              at the expense of some color accuracy in the film emulation down
              the line.
            </p>
            <div className="App-inline">
              <ImgCaption
                src={imgSLog3}
                alt="graph of SLog3 gamma"
                caption="SLog3 graph of output vs input exposure levels (logarithmic)"
                loading="lazy"
                imgClass="App-flex-width-medium"
              />
              <ImgCaption
                src={imgSGamut3cine}
                alt="chromaticity diagram of SGamut3.cine gamut"
                caption="CIE Chromaticity diagram of SGamut3.cine gamut"
                loading="lazy"
                imgClass="App-flex-width-medium"
              />
            </div>
            <p>halation</p>
            <p>filmconvert cineon</p>
            <p>print film rec709</p>
          </Section>
          <Section
            id="Section-sub-match"
            title="Color Matching"
            isSub={true}
          ></Section>
        </Section>*/}
      </div>
    </div>
  );
}

export default App;
