import React from 'react';
import './Vaccine.css';

const Vaccine = () => {
    return (
        <div>
            <header>
                <h1>Government Vaccine Portal</h1>
            </header>

            <div className="container">
                <div className="vaccine-category">
                    <h2>Vaccines for Children</h2>
                    <ul className="vaccine-list">
                        <li className="vaccine-item">
                            <h3>COVID-19 Vaccine for Children</h3>
                            <p>Age Group: 12-18 years</p>
                            <p>The COVID-19 vaccine for children is specifically designed to provide protection to individuals aged 12-18 years. It has been authorized for emergency use and has shown strong efficacy in clinical trials. The recommended dosage schedule involves two doses administered a few weeks apart. Common side effects include mild pain at the injection site, fatigue, and mild fever, which usually resolve within a few days. Please consult with your healthcare provider for more specific information and to schedule your vaccination.</p>
                        </li>
                        <li className="vaccine-item">
                            <h3>Measles-Mumps-Rubella (MMR) Vaccine</h3>
                            <p>Age Group: 1 year and above</p>
                            <p>The Measles-Mumps-Rubella (MMR) vaccine is a combination vaccine that provides protection against three highly contagious viral diseases: measles, mumps, and rubella (also known as German measles). The MMR vaccine is an essential part of childhood immunization programs in many countries and is typically administered in two doses during early childhood, with the first dose usually given around the age of 1 and the second dose given before starting school.</p>
                        </li>
                        <li className="vaccine-item">
                            <h3>Diphtheria-Tetanus-Pertussis (DTP) Vaccine</h3>
                            <p>Age Group: 6 weeks to 6 years</p>
                            <p>The Diphtheria-Tetanus-Pertussis (DTP) vaccine is a combination vaccine that protects against three serious bacterial infections: diphtheria, tetanus, and pertussis (whooping cough). It is an essential part of childhood immunization programs in many countries and is typically administered as a series of shots during infancy and early childhood.</p>
                        </li>
                        {/* Add more child vaccines here */}
                    </ul>
                </div>

                <div className="vaccine-category">
                    <h2>Vaccines for Adults</h2>
                    <ul className="vaccine-list">
                        <li className="vaccine-item">
                            <h3>COVID-19 Vaccine for Adults</h3>
                            <p>Age Group: 18+ years</p>
                            <p>The COVID-19 vaccine for adults is specifically designed to provide protection to individuals of age 18+. It has been authorized for emergency use and has shown strong efficacy in clinical trials. The recommended dosage schedule involves two doses administered a few weeks apart. Common side effects include mild pain at the injection site, fatigue, and mild fever, which usually resolve within a few days. Please consult with your healthcare provider for more specific information and to schedule your vaccination.</p>
                        </li>
                        {/* Add more adult vaccines here */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Vaccine;
