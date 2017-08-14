import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutMe extends Component {
    render() {
        return (
            <div className="col-lg-8 pull-xs-right">

                <div>
                    <ul>
                        <Link to="https://github.com/benmizelle" target="blank">
                            <img src="../../style/images/github_icon_pic.jpeg" alt="github pic" className="img-responsive" id="github-img"></img>
                        </Link>

                        <Link to="https://www.linkedin.com/in/thomas-b-mizelle-3601a9133/" target="blank">
                            <img src="../../style/images/linkedin_icon_pic.jpeg" alt="linkedin pic" className="img-responsive" id="linkedin-img"></img>
                        </Link>
                    </ul>
                </div>

                <div id="aboutMe">
                    <h2>A little bit about me:</h2>
                    <p>
                        My name is Thomas B. Mizelle. I attended the University of Central Florida where I received a bachelor's degree in Crminal Justice Administration. Upon graduating, I studied law at Florida A&M University College of Law for one year. During law school, I worked for an established process serving company called Firefly Legal.</p>

                    <p>After stepping away from law school I opened my own process serving company, of which, I am currently the sole owner and operator. I have been running my business for a little over two years now, and I am again seeking to further my education albeit in a slightly different field. I have always had a passion to learn about computers and how they work which led me to attend the UCF Coding Bootcamp. I am now a full stack developer with a strong skill base in Javascript, HTML and CSS with a heavy focus on React.js with Redux.js.</p>

                </div>

            </div>
        );
    }
}

export default AboutMe;