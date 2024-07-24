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
        <div className='myths-list'>
            {myths.map((myth, index) => (
                <motion.div key={index}
                className='myth-item'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                    <div className='myth-content'>
                        <h3>Myth</h3>
                        <p>{myth.myth}</p>
                    </div>
                    <div className='icon'>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                    <div className='myth-content'>
                        <h3>Debunk</h3>
                        <p>{myth.debunk}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  );
};

export default Myths;