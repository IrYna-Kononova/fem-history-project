import React, { useState, useEffect } from 'react';
import Filters from './Filters';
import { motion } from 'framer-motion';
import './History.css';

const History = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        era: '',
        region: '',
        type: '',
    });

    useEffect(() => {
        fetch('/data/events.json')
        .then(res => res.json())
        .then(data => {
            setEvents(data);
            setFilteredEvents(data);
        })
        .catch(error => console.error('Error fetching events:', error));
    }, []);

    useEffect(() => {
        let filtered = events.filter(event =>
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filters.era) {
            filtered = filtered.filter(event => event.era === filters.era);
        }

        if (filters.region) {
            filtered = filtered.filter(event => event.region === filters.region);
        }

        if (filters.type) {
            filtered = filtered.filter(event => event.type === filters.type);
        }
        
        setFilteredEvents(filtered);
    }, [searchTerm, filters, events]);


  return (
    <div className='history-container'>
        <h1>Feminist History Timeline</h1>
        <Filters searchTerm={searchTerm} setSearchTerm={setSearchTerm} filters={filters} setFilters={setFilters} />
        <button onClick={() => setSearchTerm(searchTerm)} className="search-button">Search</button>
        <ul>
            {filteredEvents.map((event, index) => (
                <motion.li key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                >
                    <h2>{event.title}</h2>
                    <p>{event.year}</p>
                    <p> {event.description}</p>
                </motion.li>
            ))}
        </ul>
    </div>
  );
};

export default History;