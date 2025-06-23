import React from 'react';

function History({ grievances }) {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Grievance History</h2>
      {grievances.length === 0 ? (
        <p>No grievances submitted yet.</p>
      ) : (
        <ul>
          {grievances.map((g, i) => (
            <li key={i}>
              <strong>{g.date}</strong>: {g.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default History;
