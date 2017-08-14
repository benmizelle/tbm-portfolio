import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Projects extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link className="btn btn-danger" to="/">
                        About Me
                    </Link>
                </div>

                <div>
                    <a  className="btn btn-success" href="mailto:benmizelle@gmail.com?subject=Viewed Portfolio">
                        Email Me
                    </a>
                </div>

                <div>
                    <Link className="btn btn-primary"  to="https://drive.google.com/drive/folders/0B8kZFEEatSt3YzdCSm12bGhhejg" target="blank">
                        Resume
                    </Link>
                </div>


               <header>
                  Selected Projects:
               </header>
                <ul className="projectsList">
                    <li>
                        <Link to="https://battle-for-skyrim.herokuapp.com/" target="blank">
                            <h4>"Battle For Skyrim"</h4>
                            <p>
                                Basic RPG game. The player can choose a character class, then battle for glory against the other factions to conquer Skyrim. Built with HTML, CSS, Javascript and jQuery.
                            </p>
                        </Link>
                    </li>

                    <li>
                        <Link to="https://read-all-about-it.herokuapp.com/" target="blank">
                            <h4>"Read All About It"</h4>
                            <p>
                                The user can search for New York Times articles for a quick read, or save the article for later. Built with React, Node, Express and MongoDB.
                            </p>
                        </Link>
                    </li>

                        <li>
                            <Link to="https://weather-mania.herokuapp.com/" target="blank">
                                <h4>"Weather Mania"</h4>
                                <p>
                                    Allows the user to search for the weather forecast of US  cities of their choosing. Built with React, Redux, Node and Express. Also utilizes the google maps API as well as the openwetahermap API.
                                </p>
                            </Link>
                        </li>

                    <li>
                        <h4>"Project under construction"</h4>
                    </li>
                </ul>
            </div>

        );
    }
}

export default Projects;