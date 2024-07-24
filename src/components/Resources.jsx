import React, { useState, useEffect } from 'react';
import './Resources.css';
import { motion } from 'framer-motion';

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
            <div className='resources-grid'>
                {resources.map((resource, index) => (
                    <motion.li key={index}
                     initial={{ opacity: 0, y: 50 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     className="resource-card"
                    >
                        <h2>{resource.title}</h2>
                        <h3>{resource.author}</h3>
                        <p>{resource.description}</p>
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-external-link-alt"></i> Learn More
                        </a>
                    </motion.li>
                ))}
            </div>
        </div>
    );
};


export default Resources;