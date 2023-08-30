import data from "../resources/data";
import React, { Component }  from 'react';

const Clubs = () => {
    return (
        <>
            <h1 className="section-header">Books</h1>
            <div className="section">
                {data.clubs.map((club, index) => (
                    <div className="card" key={index}>
                        <img src={require("../resources/" + club.logo)} alt="club logo"></img>
                        <p className="title">{club.name}</p>
                        <p className="dates">{club.role}</p>
                        {club.description && club.description.map((desc, idx) => <p className="subtext" key={idx}>{desc}</p>)}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Clubs;