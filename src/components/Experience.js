import data from "../resources/data";
import React, { Component }  from 'react';

const Experience = () => {
    return (
        <>
            <h1 className="section-header">Work Experience</h1>
            <div className="section">
                {data.experience.map((exp, index) => (
                    <div className="card" key={index}>
                        <div>
                        <center><img src={require("../resources/" + exp.logo)} alt="company logo"></img></center>
                            <center><p className="title">{exp.title}</p></center>
                            <center><p className="institution">{`${exp.company}, ${exp.location}`}</p></center>
                            <center><p className="dates">{`${exp.start_date} - ${exp.end_date}`}</p></center>
                        </div>
                        {exp.description && <p className="subtext">{exp.description}</p>}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Experience;