import React from 'react';
import { Animate } from 'react-simple-animate';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'
import './style.scss'

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Dienye.
                    <br />
                </h1>
                <h3>
                    Front End Developer
                    JS | React
                </h3>
            </div>
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateY(600px)'
                }}

                end={{
                    transform: 'translateX(0px)'
                }}
            >
                <div className="contact-me">
                    <div className="contact-me__buttons-wrapper">
                        <button>Hire Me</button>
                        <a href="#">Download Resume</a>
                    </div>
                    <div className="contact-me__socials-wrapper">
                        <a href="https://myfacebook.com" target="_blank">
                            <FaFacebook size={25} />
                        </a>
                        <FaLinkedin size={25} />
                        <FaInstagram size={25} />
                        <FaTwitter size={25} />
                    </div>
                </div>

            </Animate>
        </section>
    )
}

export default Home;