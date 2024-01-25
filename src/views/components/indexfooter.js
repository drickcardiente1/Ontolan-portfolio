import React from "react";
import { Row, Container } from "reactstrap";



export default function Footer() {
    return (
        <footer className="footer footer-black footer-white">
            <Container>
                <Row>
                    <nav className="footer-nav">
                        <ul>
                            <li>
                                <a style={{cursor:"default"}} href="/">
                                    Coded by ME
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="credits ml-auto">
                        <span className="copyright">
                            © {new Date().getFullYear()}, made with{" "}
                            <i className="fa fa-heart heart" /> by Me
                        </span>
                    </div>
                </Row>
            </Container>
        </footer>
    );
}
