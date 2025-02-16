import React from 'react';
import {LuLightbulb} from "react-icons/lu";
import pytest from './icons/pytest.svg';
import playwright from './icons/playwright.svg';
import python from './icons/python.svg';
import grafana from './icons/grafana.svg';
import kibana from './icons/kibana.svg';
import postman from './icons/postman.svg';
import jmeter from './icons/jmeter.svg';
import charles from './icons/charles.svg';
import linux from './icons/linux.svg';
import powershell from './icons/powershell.svg';
import bash from './icons/bash.svg';
import docker from './icons/docker.svg';
import mongodb from './icons/mongodb.svg';
import redis from './icons/redis.svg';
import pg from './icons/pg.svg';
import ch from './icons/ch.svg';
import '@dotlottie/react-player/dist/index.css';


const Skills = () => {
    return (
        <div
            className='md:p-22 md:pt-24 p-8 flex justify-between md:pb-22 md:px-40 md:h-full select-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] md:mt-0 mt-6 pt-16'>
            <div className=''>
                <div className='md:w-6/12'>
                    <div className='md:w-28 md:h-7 rounded-full w-20 h-5 bg-black md:px-1 space-x-3.5 mb-6'>
                        <LuLightbulb
                            className='md:inline-block text-white font-semibold relative md:left-1.5 hidden scale-50 md:scale-100 md:-top-px'
                            size={22}/>
                        <span
                            className='text-white font-poppins text-xs md:text-xs font-normal md:font-medium relative md:-left-0 -left-0 md:-top-0 -top-1 md:pb-0'>My Skills</span>
                    </div>
                </div>
                <div>
                    <h1 className='font-poppins text-4xl font-medium'>My <span
                        className='bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent'>QA</span><br
                        className='md:block hidden'/> Experience/<span
                        className='md:hidden block'> </span><span>Skills.</span></h1>
                    <hr className='md:w-44 w-32 md:mb-0 mb-4 h-3 mt-3 md:ml-0 lg:mt-4 bg-gradient-to-r from-[#bf77eced] to-[#c580f0c8]'></hr>
                </div>

                <div>
                    <h1 className='md:font-semibold font-bold md:text-2xl md:pt-1.5 md:inline-block md:mr-5 md:mb-0 mb-2.5 md:mt-0 mt-2'>AQA</h1>
                    <img src={python} alt="python" style={{width: 45, height: 45}}
                         className='inline md:pb-3 mr-2 md:mr-1'/>
                    <img src={playwright} alt="Playwright" style={{width: 45, height: 45}}
                         className='inline md:pb-3 md:mr-1'/>
                    <img src={pytest} alt="Pytest"
                         style={{width: 45, height: 45}}
                         className='inline md:pb-3 md:mr-1'/>
                </div>

                <div>
                    <h1 className='md:font-semibold font-bold md:text-2xl md:pt-1.5 md:inline-block md:mr-5 md:mb-0 mb-2.5 md:mt-0 mt-2'>Logs</h1>
                    <img src={grafana} alt="Grafana" style={{width: 45, height: 45}}
                         className='inline md:pb-3 md:mr-1'/>
                    <img src={kibana} alt="Kibana" style={{width: 45, height: 45}} className='inline md:pb-3 md:mr-1'/>
                </div>

                <div>
                    <h1 className='md:font-semibold font-bold md:text-2xl md:pt-1.5 md:inline-block md:mr-5 md:mb-0 mb-2.5 md:mt-0 mt-2'>QA
                        Tools</h1>
                    <img src={postman} alt="Postman" style={{width: 45, height: 45}}
                         className='inline md:pb-3 md:mr-1'/>
                    <img src={jmeter} alt="JMeter" style={{width: 45, height: 45}} className='inline md:pb-3 md:mr-1'/>
                    <img src={charles} alt="Charles" style={{width: 45, height: 45}}
                         className='inline md:pb-3 md:mr-1'/>
                </div>

                <div>
                    <h1 className='md:font-semibold font-bold md:text-2xl md:pt-1.5 md:inline-block md:mr-5 md:mb-0 mb-2 md:mt-0 mt-2'>Other</h1>
                    <img src={linux} alt="Linux" style={{width: 45, height: 45}} className='inline md:pb-3 md:mr-1'/>
                    <img src={powershell} alt="PowerShell"
                         style={{width: 45, height: 45}} className='inline md:pb-3 md:mr-1'/>
                    <img src={bash} alt="Bash" style={{width: 45, height: 45}} className='inline md:pb-3 md:mr-1'/>

                </div>

                <div>
                    <h1 className='md:font-semibold font-bold md:text-2xl md:pt-1.5 md:inline-block md:mr-5 md:mb-0 mb-2 md:mt-0 mt-2'>Databases</h1>
                    <img src={pg} alt="PostgreSQL" style={{width: 45, height: 45}} className='inline md:pb-3 md:mr-1'/>
                    <img src={ch} alt="Ch" style={{width: 45, height: 45}} className='inline md:pb-3 md:mr-1'/>
                    <img src={redis} alt="Redis" style={{width: 45, height: 45}} className='inline md:pb-3 md:mr-1'/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
