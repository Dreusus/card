import React from 'react';
import { FaTelegram, FaVk } from "react-icons/fa6";
import { LuInstagram, LuLinkedin } from "react-icons/lu";
import Resume from '../resume/resume';
import Frontpageanimation from '../frontpageanimation';
import Github from "../github";
import './main_page.css';

const MainPage = () => {
    return (
        <div className="main-container">
            <div className="left-panel">
                <div className='text-center'>
                    <br/>
                    <h1 className="firstname">Andrey</h1>
                    <h1 className='lastname'>Polyakov</h1>
                    <hr className='underline'/>
                </div>
                <div className='description'>
                    <h1 className='highlight'>QA Engineer</h1>
                </div>
                <div className="links">
                    <div className="social-icons">
                        <a href="https://t.me/dreusus" className="social-btn">
                            <FaTelegram size={23}/>
                        </a>
                        <a href="https://www.linkedin.com/in/dreusus/" className="social-btn">
                            <LuLinkedin size={23}/>
                        </a>
                        <a href="https://www.instagram.com/dreusus" className="social-btn">
                            <LuInstagram size={23}/>
                        </a>
                        <a href="https://vk.com/jesusgodfather97" className="social-btn">
                            <FaVk size={23}/>
                        </a>
                    </div>
                    <Resume/>
                </div>
            </div>
            <div className="right-panel">
                <Frontpageanimation/>
            </div>
            <Github/>
        </div>
    );
};

export default MainPage;
