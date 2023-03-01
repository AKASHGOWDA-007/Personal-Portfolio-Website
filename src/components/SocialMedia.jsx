import React from "react";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

export default function SocialMedia() {
    return (
        <div className="app__social">
            <div>
                <a href="https://www.linkedin.com/in/akash712/" target="_blank"><BsLinkedin /></a>
            </div>
            <div>
                <a href="https://twitter.com/iakashgowda" target="_blank"><BsTwitter /></a>                
            </div>
            <div>
                <a href="https://github.com/AKASHGOWDA-007" target="_blank"><BsGithub /></a>
                
            </div>
        </div>
    );
}
