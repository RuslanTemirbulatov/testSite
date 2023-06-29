import "./style.css";
import gitHubIcon from "./gitHub-black.svg";



import React from 'react';

const BtnGitHub = ({ link }) => {
    return (
        <div>
            <a href={link} target="_blanc" rel="noreferrer" className="btn-outline">
                <img src={gitHubIcon} alt="" />
                GitHub repo
            </a>
        </div>
    );
};

export default BtnGitHub;