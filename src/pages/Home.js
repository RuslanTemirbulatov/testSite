import React from 'react';
import Header from '../components/header/Header';
import Datepicker from '../components/Datepicker';

const Home = () => {
    return (
        <div>
            <Header />
		<div>
            <main className="section">
                <div className="container">

                        <ul className="content-list">
                            <li className="content-list__item">
                                <h2 className="title-2">Frontend</h2>
                                <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
                            </li>
                            <li className="content-list__item">
                                <h2 className="title-2">Backend</h2>
                                <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                            </li>
                        </ul>
                    <Datepicker />
                </div>
            </main>
        </div>
        </div>
    );
};

export default Home;