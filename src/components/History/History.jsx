import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Filters from '../Filters/Filters';
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
        <VerticalTimeline>
            {filteredEvents.map((event, index) => (
                <VerticalTimelineElement 
                key={index}
                date={event.year}
                iconStyle={{ background: 'rgb(71, 140, 207)', color: '#fff' }}
                icon={<i className="fa-solid fa-person"></i>}
                >
                    <h3 className="vertical-timeline-element-title">{event.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{event.era}</h4>
                    <p> {event.description}</p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    </div>
  );
};

export default History;