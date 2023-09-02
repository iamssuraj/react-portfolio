import React from 'react';
import "./Template.css";

function Template({ head, link, content }) {
    return (
        <div className="features-container__feature">

            {link &&
                <div className="features-container__feature-title">
                    <div />
                    <h1> <a href={link} target="_blank">{head} </a></h1>
                </div>
            }
            {
                !link &&
                <div className="features-container__feature-title">
                    <div />
                    <h1> {head} </h1>
                </div>
            }
            <div className="features-container_feature-text">
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Template;
