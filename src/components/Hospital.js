import React, { useState } from 'react';
import axios from 'axios';
import './Hospital.css';

const Hospital = () => {
  const [name, setName] = useState('');
  const [hospName, setHospName] = useState('');
  const [hospitalAddress, setHospitalAddress] = useState('');
  const [query, setQuery] = useState('');
  const [queries, setQueries] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newQuery = {
      name,
      hospName,
      hospitalAddress,
      query
    };

    try {
      const response = await axios.post('https://epanchayat-backend.onrender.com/api/hospital', newQuery);
      if (response.status === 200) {
        setQueries([...queries, newQuery]);
        setName('');
        setHospName('');
        setHospitalAddress('');
        setQuery('');
      }
    } catch (error) {
      console.error('Error submitting the query:', error);
    }
  };

  return (
    <div>
      <header>
        <h1>Hospital Query Portal</h1>
      </header>
      <section className="query-form">
        <h2>Submit Your Query</h2>
        <form id="queryForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          /><br /><br />

          <label htmlFor="hospname">Hospital Name:</label>
          <input
            type="text"
            id="hospname"
            name="hospitalname"
            value={hospName}
            onChange={(e) => setHospName(e.target.value)}
            required
          /><br /><br />

          <label htmlFor="hospitalAddress">Hospital Address:</label>
          <input
            type="text"
            id="hospitalAddress"
            name="hospitalAddress"
            value={hospitalAddress}
            onChange={(e) => setHospitalAddress(e.target.value)}
            required
          /><br /><br />

          <label htmlFor="query">Query:</label>
          <textarea
            id="query"
            name="query"
            rows="4"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          ></textarea><br /><br />

          <label htmlFor="document">Upload Supporting Document:</label>
          <input type="file" id="document" name="document" /><br /><br />

          <button type="submit">Submit Query</button>
        </form>
      </section>

      <section className="queries">
        <h2>Recent Queries</h2>
        {queries.map((q, index) => (
          <div key={index} className="query-item">
            <strong>Name:</strong> {q.name}<br />
            <strong>Hospital Name:</strong> {q.hospName}<br />
            <strong>Hospital Address:</strong> {q.hospitalAddress}<br />
            <strong>Query:</strong> {q.query}<br /><br />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Hospital;
