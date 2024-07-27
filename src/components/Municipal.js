import React, { useState } from 'react';
import axios from 'axios';
import './Municipal.css';

const Municipal = () => {
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
            const response = await axios.post('https://epanchayat-backend.onrender.com/api/municipal', data, {
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
                <h1>Municipal Corporation</h1>
                <nav>
                    <ul>
                        <li><a href="#queries">Queries</a></li>
                        <li><a href="#schemes">New Schemes</a></li>
                        <li><a href="#locality">Locality</a></li>
                        <li><a href="#about">About Us</a></li>
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

                    <input type="submit" value="Submit Query" />
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

            <section id="schemes">
                <h2>New Schemes</h2>
                <p>Details about new schemes...</p>
            </section>

            <section id="locality">
                <h2>Locality Information</h2>
                <p>Details about the locality...</p>
            </section>

            <section id="about">
                <h2>About Us</h2>
                <p>Information about the Municipal Corporation...</p>
            </section>
        </div>
    );
};

export default Municipal;
