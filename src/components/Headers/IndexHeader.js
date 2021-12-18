/*eslint-disable*/
import React from "react";

import { Container } from "reactstrap";

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/backgroundimage.png").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Spring Soccer</h1>
              <div className="fog-low">
                <img
                  alt="..."
                  src={require("assets/img/fog-low.png").default}
                />
              </div>
              <div className="fog-low right">
                <img
                  alt="..."
                  src={require("assets/img/fog-low.png").default}
                />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Be the president of your NFT club!
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(" + require("assets/img/clouds.png").default + ")",
          }}
        />
        {/* <h6 className="category category-absolute">
          Designed and coded by{" "}
          <a
            href="https://www.linkedin.com/company/74686692"
            target="_blank"
          >
            <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/creative-tim-white-slim2.png").default}
            />
          </a>
        </h6> */}
      </div>
    </>
  );
}

export default IndexHeader;
