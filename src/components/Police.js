import React, { useState } from 'react';
import axios from 'axios';
import './Police.css';

const Police = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        query: '',
        document: null,
    });
    const [submittedQueries, setSubmittedQueries] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: name === 'document' ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        try {
            const response = await axios.post('http://localhost:5000/api/police', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 201) {
                setSubmittedQueries(prevQueries => [...prevQueries, {
                    name: formData.name,
                    email: formData.email,
                    query: formData.query,
                }]);
                setSuccessMessage('Submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    query: '',
                    document: null,
                });
            }
        } catch (error) {
            console.error('Error submitting the query:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <header>
                <h1>Police Department</h1>
                <nav>
                    <ul>
                        <li><a href="#queries">Queries</a></li>
                        <li><a href="#reports">Reports</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <section id="queries">
                <h2>Submit Your Query</h2>
                <form id="queryForm" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="query">Query:</label>
                    <textarea
                        id="query"
                        name="query"
                        rows="4"
                        value={formData.query}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <label htmlFor="document">Upload Supporting Document:</label>
                    <input
                        type="file"
                        id="document"
                        name="document"
                        onChange={handleChange}
                        accept=".pdf"
                    />

                    <button type="submit">Submit Query</button>
                </form>

                {successMessage && (
                    <div className="success-message" id="successMessage">
                        {successMessage}
                    </div>
                )}
            </section>

            <section className="submitted-queries">
                <h2>Submitted Queries</h2>
                {submittedQueries.map((query, index) => (
                    <div key={index} className="query-item">
                        <p><strong>Name:</strong> {query.name}</p>
                        <p><strong>Email:</strong> {query.email}</p>
                        <p><strong>Query:</strong> {query.query}</p>
                    </div>
                ))}
            </section>

            <section id="reports">
                <h2>Reports</h2>
                <p>Details about reports...</p>
            </section>

            <section id="contact">
                <h2>Contact Us</h2>
                <p>Information on how to contact the police department...</p>
            </section>
        </div>
    );
};

export default Police;
