import React from 'react';
import './academic.css';

const Academic = () => {
    return (
        <div className="bottom-right-box">
            <h2>Bachelor</h2>
            <table className="academic-table">
                <tbody>
                    <tr>
                        <td>Institution</td>
                        <td><a href='https://su.edu.bd/' target="_blank" rel="noopener noreferrer">Sonargaon University</a> ↗ </td>
                    </tr>
                    <tr>
                        <td>Department</td>
                        <td>Computer Science & Engineering</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>Running 8<sup>th</sup> semester (12) [As of May 2025]  </td>
                    </tr>
                    <tr>
                        <td>Group</td>
                        <td>Science</td>
                    </tr>
                    <tr>
                        <td>CGPA</td>
                        <td>3.96 (out of 4.00)</td>
                    </tr>
                </tbody>
            </table>

            <h2>Higher Secondary</h2>
            <table className="academic-table">
                <tbody>
                    <tr>
                        <td>Institution</td>
                        <td><a href="https://sgtc.gov.bd/" target="_blank" rel="noopener noreferrer">Saidpur Govt. Technical College</a> ↗</td>
                    </tr>
                    <tr>
                        <td>Passing Year</td>
                        <td>2020</td>
                    </tr>
                    <tr>
                        <td>GPA</td>
                        <td>5.00 (out of 5.00)</td>
                    </tr>
                    <tr>
                        <td>Group</td>
                        <td>Science</td>
                    </tr>
                </tbody>
            </table>

            <h2>Secondary</h2>
            <table className="academic-table">
                <tbody>
                    <tr>
                        <td>Institution</td>
                        <td><a href="https://sgtc.gov.bd/" target="_blank" rel="noopener noreferrer">Saidpur Govt. Technical College</a> ↗</td>
                    </tr>
                    <tr>
                        <td>Passing Year</td>
                        <td>2018</td>
                    </tr>
                    <tr>
                        <td>GPA</td>
                        <td>5.00 (out of 5.00)</td>
                    </tr>
                    <tr>
                        <td>Group</td>
                        <td>Science</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Academic;
