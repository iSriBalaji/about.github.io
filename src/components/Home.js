import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt, faMapMarkerAlt, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import data from "../resources/data";

const Home = () => {
    const details = data.personal_details;

    if (!details) {
        return null; // Or handle the absence of details
    }

    return (
        <>
            <h1 className="about-me">About Me</h1>
            <div className="card personal">
                <img className="profile-img" src={require(`../resources/${details.picture}`)} alt="profile pic" />
                <h1 className="name">{details.name}</h1>
                <div className="tag-container">
                    {details.highlights && details.highlights.map((highlight, idx) => (
                        <p className="tag" key={idx}>{highlight}</p>
                    ))}
                </div>
                <div className="description-section">
                    {details.description && details.description.map((desc, idx) => (
                        <p className="description" key={idx}>{desc}</p>
                    ))}
                </div>
                <div className="contact-links">
                    <a className="link" href={details.github} target="_blank" rel="noreferrer" aria-label="GitHub Profile">
                        <FontAwesomeIcon className="icon" size="2x" icon={faGithub} />
                        <p>{details.github_short}</p>
                    </a>
                    <a className="link" href={details.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
                        <FontAwesomeIcon className="icon" size="2x" icon={faLinkedin} />
                        <p>{details.linkedin_short}</p>
                    </a>
                    <a className="link" href={`mailto:${details.email}`} aria-label="Email">
                        <FontAwesomeIcon className="icon" size="2x" icon={faAt} />
                        <p>{details.email}</p>
                    </a>
                    <div className="link">
                        <FontAwesomeIcon className="icon" size="2x" icon={faMapMarkerAlt} />
                        <p>{details.location}</p>
                    </div>
                    {/* New resume link */}
                    <a className="link" href={details.resume} target="_blank" rel="noreferrer" aria-label="Resume">
                        <FontAwesomeIcon className="icon" size="2x" icon={faFileAlt} />
                        <p>Resume</p>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Home;
