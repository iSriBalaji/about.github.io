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
                                {/* <div> */}
                                <center><img src={require("../resources/" + edu.logo)} alt="institution logo"></img></center>
                                <center><p className="title">{edu.course}</p></center>
                                <p className="subheader">Activities</p>
                                {edu.awards.map((award, idx) => <p className="subtext" key={idx}>{award}</p>)}
                                    <div className = "inst">
                                        <p className="dates">{`${edu.start_year} - ${edu.end_year}`}</p>
                                        <p className="institution">{edu.institution}</p>
                                        <p className="highlight">{edu.cgpa}  {edu.cgpa_condition}</p>
                                    </div>
                            </>
                        ) : (
                            <>

                            </>
                        )}
                        {/* <div>
                            <p className="subheader">Activities</p>
                            {edu.awards.map((award, idx) => <p className="subtext" key={idx}>{award}</p>)}
                        </div> */}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Education;