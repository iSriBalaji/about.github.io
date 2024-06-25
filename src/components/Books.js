import data from "../resources/data";
import React, { Component }  from 'react';

const Books = () => {
    return (
        <>
            <h1 className="section-header">Books</h1>
            <div className="section">
                {data.books.map((club, index) => (
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

export default Books;