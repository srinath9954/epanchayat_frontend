import React, { useState } from 'react';
import axios from 'axios';
import './Insurance.css'; // Ensure your CSS file is in the same directory

const Insurance = () => {
    const [formData, setFormData] = useState({
        name: '',
        aadhaarCard: '',
        address: '',
        annualIncome: '',
        incomeCertificate: null,
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: name === 'incomeCertificate' ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('name', formData.name);
        form.append('aadhaarCard', formData.aadhaarCard);
        form.append('address', formData.address);
        form.append('annualIncome', formData.annualIncome);
        form.append('incomeCertificate', formData.incomeCertificate);

        try {
            await axios.post('/api/insurance', form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSuccessMessage('Submitted successfully!');
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <div>
            <header>
                <h1>Free Health Insurance Application</h1>
            </header>
            
            <main>
                <section className="application-form">
                    <h2>Application Form</h2>
                    <form id="insurance-application-form" encType="multipart/form-data" onSubmit={handleSubmit}>
                        <label htmlFor="name">Full Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        
                        <label htmlFor="aadhaar-card">Aadhaar Card Number:</label>
                        <input
                            type="text"
                            id="aadhaar-card"
                            name="aadhaarCard"
                            value={formData.aadhaarCard}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="annual-income">Annual Income:</label>
                        <input
                            type="number"
                            id="annual-income"
                            name="annualIncome"
                            value={formData.annualIncome}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="income-certificate">Upload Income Certificate (PDF):</label>
                        <input
                            type="file"
                            id="income-certificate"
                            name="incomeCertificate"
                            onChange={handleChange}
                            accept=".pdf"
                            required
                        />
                        
                        <div id="eligibility-message"></div>
                        <button type="submit">Submit Application</button>
                    </form>

                    {successMessage && (
                        <div className="success-message" id="successMessage">
                            {successMessage}
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
};

export default Insurance;
