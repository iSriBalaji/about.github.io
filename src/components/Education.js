import data from "../resources/data";
import React, { Component }  from 'react';
const Education = () => {
    return (
        <>
            <h1 className="section-header">Education</h1>
            <div className="section">
                {data.education.map((edu, index) => (
                    <div className="card" key={index}>
                        {edu.type === "College" ? (
                            <>
                                <div>
                                <center><img src={require("../resources/" + edu.logo)} alt="institution logo"></img></center>
                                <center><p className="title">{edu.course}</p></center>
                                <center><p className="institution">{edu.institution}</p></center>
                                <center><p className="dates">{`${edu.start_year} - ${edu.end_year}`}</p></center>
                                </div>
                                <p className="highlight">{edu.cgpa}  {edu.cgpa_condition}</p>
                            </>
                        ) : (
                            <>
                                <div>
                                <center><img src={require("../resources/" + edu.logo)} alt="institution logo"></img></center>
                                <center><p className="title">Grade {edu.grade}</p></center>
                                <center><p className="institution">{edu.institution}</p></center>
                                <center><p className="dates">{edu.year}</p></center>
                                </div>
                                <p className="highlight">{edu.marks && edu.marks + " - "}{edu.percentage}</p>
                            </>
                        )}
                        <div>
                            <p className="subheader">Activities</p>
                            {edu.awards.map((award, idx) => <p className="subtext" key={idx}>{award}</p>)}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Education;