import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { personalData } from './utils';
import './style.scss';

const About = () => {
    return (
        <section className='about' id='about'>
            <PageHeaderContent
                headerText='About Me brr'
                icon={<BsInfoCircleFill size={20} />}
            />


            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <h3 className='developerContent'>
                        Front End Developer
                    </h3>
                    <p>
                        I am a qualified web developer with two years of experience in client
                        side administration and website design. Strong creative and analytical
                        skills. Team player with an eye for detail.
                    </p>
                    <h3 className='personalContent'>Personal Information</h3>
                    <ul>
                        {
                            personalData.map((item, key) => {
                                return <li key={key}>{item.label} : {item.value}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="about__content__servicesWrapper">
                    Service data
                </div>
            </div>
        </section>
    )
}

export default About;