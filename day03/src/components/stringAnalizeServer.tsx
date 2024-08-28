import React from 'react';

interface StringAnalizeServerProps {
  data: any;
}


const StringAnalizeComponentServer: React.FC<StringAnalizeServerProps> = ({ data }) => {
  if (!data) {
    return <p>No data to display.</p>;
  }
  // Render the data in a table or any other UI elements
  return (
    <div>
      <h2>Results</h2>
      
      {typeof data === 'object' ? (
        <div className="overflow-x-auto">
        <table className="table">
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
        </div>
      ) : (
        <p>{data}</p>
      )}
    </div>
  );
};

export default StringAnalizeComponentServer;
