import data from "../resources/data";
import React, { Component }  from 'react';


const Contact = () => {
    return (
        <>
            <h1 className="section-header">Courses & Certifications</h1>
            <div className="section">
                {data.courses.map((course, index) => (
                    <div className="card" key={index}>
                        {/* <!-- Calendly inline widget begin --> */}
                            <div class="calendly-inline-widget" data-url="https://calendly.com/isribalaji" style="min-width:320px;height:700px;"></div>
                        {/* <!-- Calendly inline widget end --> */}

                    </div>
                ))}
            </div>
        </>
    )
}

export default Contact;