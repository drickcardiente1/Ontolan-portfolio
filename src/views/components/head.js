import React from "react";
import { Container } from "reactstrap";

export default function Head() {
    return (
        <>
            <div
                className="page-header section-dark"
                style={{
                    backgroundImage:
                        "url(" + require("assets/img/antoine-barres.jpg") + ")",
                }}
            >
                <div className="filter" />
                <div className="content-center">
                    <Container>
                        <div className="title-brand">
                            <h1 className="presentation-title">My Portfolio</h1>
                            <div className="fog-low">
                                <img alt="..." src={require("assets/img/fog-low.png")} />
                            </div>
                            <div className="fog-low right">
                                <img alt="..." src={require("assets/img/fog-low.png")} />
                            </div>
                        </div>
                    </Container>
                </div>
                <div
                    className="moving-clouds"
                    style={{
                        backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
                    }}
                />
            </div>
        </>
    );
}
