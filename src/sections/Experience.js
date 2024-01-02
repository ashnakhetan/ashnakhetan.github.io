import React from 'react';
import experienceData from '../data/experienceData';

const Experience = () => {
    const boldStyle = {
        textDecoration: 'bold',
        fontWeight: '20px'
      };

    return (
        <>
            <h1 style={{ alignSelf: 'flex-start' }}>Internships & Jobs</h1>
            <table style={{ margin: '40px', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    <th style={{ padding: '8px', textAlign: 'left'  }}></th>
                    <th style={{ padding: '8px', textAlign: 'left'  }}>Company</th>
                    <th style={{ padding: '8px', textAlign: 'left'  }}>Role</th>
                    <th style={{ padding: '8px', textAlign: 'left'  }}>Dates</th>
                    <th style={{ padding: '8px', textAlign: 'left'  }}>Description</th>
                </tr>
            </thead>
                <tbody>
                    {experienceData.internships.map((item, index) => (
                    <tr key={index} style={{ borderBottom: index !== experienceData.internships.length - 1 ? '1px solid black' : 'none' }}>
                        <td style={{ padding: '8px' }}>{item.emoji}</td>
                        <td style={{ padding: '8px' }}>{item.company}</td>
                        <td style={{ padding: '8px' }}>{item.role}</td>
                        <td style={{ padding: '8px' }}>{item.dates}</td>
                        <td style={{ padding: '8px' }}>{item.description}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <h1 style={{fontSize: '50px', textAlign:'center'}}>Currently working on ideas in conversational NLP, generative design, and luxury experiences. <span style={{color: 'blue'}}>Happy New Year!</span></h1>
        </>
    );
};

export default Experience;