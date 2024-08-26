import React from 'react';

interface StringCompareServerProps {
  data: any;
}


const StringCompareServerComponent: React.FC<StringCompareServerProps> = ({ data }) => {
  console.log('Received data:', data);
  if (!data) {
    return <p>No data to display.</p>;
  }
  // Render the data in a table or any other UI elements
  return (
    <div>
      <h2>Results</h2>
      
      {typeof data === 'object' ? (
        <table>
          <thead>
            <tr>
              {Object.keys(data).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.values(data).map((value, index) => (
                <td key={index}>{String(value)}</td>
              ))}
            </tr>
          </tbody>
        </table>
      ) : (
        <p>{data}</p>
      )}
    </div>
  );
};

export default StringCompareServerComponent;
