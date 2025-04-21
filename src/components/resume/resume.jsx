import React from 'react';
import { IoNewspaperOutline } from 'react-icons/io5';
import './resume.css';  // Импортируем стили

const Resume = () => {
    return (
        <div className='resume-container'>
            <a href="https://drive.google.com">
                <div className='resume-bg'>
                </div>
                <div className='resume-button'>
                    <div className='icon'>
                        <IoNewspaperOutline size={20}/>
                    </div>
                    <div>
                        <h1 className='resume-text'>View Resume</h1>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Resume;
