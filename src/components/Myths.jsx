import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Myths.css';

const Myths = () => {
    const [myths, setMyths] = useState([]);

    useEffect(() => {
        fetch('/data/myths.json')
        .then(res => res.json())
        .then(data => setMyths(data))
        .catch(error => console.error('Error fetching myths:', error));   
    }, []);


  return (
    <div className='myths-container'>
        <h1>Debunking Myths About Feminism</h1>
        <ul>
            {myths.map((myth, index) => (
                <motion.li key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                    <h3>Myth: {myth.myth}</h3>
                    <p>Debunk: {myth.debunk}</p>
                </motion.li>
            ))}
        </ul>
    </div>
  );
};

export default Myths;