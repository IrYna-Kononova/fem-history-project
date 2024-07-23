import React, { useState, useEffect } from 'react';
import './Resources.css';

const Resources = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        fetch('/data/resources.json')
            .then(res => res.json())
            .then(data => setResources(data))
            .catch(error => console.error('Error fetching resources:', error));
    }, []);

    return (
        <div className="resources-container">
            <h1>Feminist Literature Resources</h1>
            <ul>
                {resources.map((resource, index) => (
                    <li key={index}>
                        <h3> <i className="fa-brands fa-pagelines"></i> {resource.title}</h3>
                        <p>Author: {resource.author}</p>
                        <p>Year: {resource.year}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Resources;