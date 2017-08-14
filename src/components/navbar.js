import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header pull-xs-left">
                <h1>Thomas Mizelle</h1>
                <h5>Full Stack Web Developer</h5>
            </div>

                <div className="nav-list pull-xs-right">

                    <ul>
                        <li>
                            <Link to="https://drive.google.com/drive/folders/0B8kZFEEatSt3YzdCSm12bGhhejg"  target="blank">
                                Resume
                            </Link>
                        </li>

                        <li>
                            <a href="mailto:benmizelle@gmail.com?subject=Viewed Portfolio">
                                Email Me
                            </a>
                        </li>

                        <li>
                            <Link to="/projects">
                                Projects
                            </Link>
                        </li>
                    </ul>

                </div>
        </div>

    </nav>
);

export default Navbar;