import React from 'react';
import StringDetailComponent from './stringDetailComponent';
import { StringDetail } from '@/models/strings/StringDetail';


interface StringCompareServerProps {
  data: any;
}


const StringCompareServerComponent: React.FC<StringCompareServerProps> = ({ data }) => {
  console.log('StringCompareServerComponent Received data :', data);
  if (!data) {
    return <p>No data to display.</p>;
  }
  // Render the data in a table or any other UI elements
  return (
    <div>
      <h2>Results</h2>
      {Object.entries(data).map(([key, value], index) => (
          <div key={index}>
            <h2>{key}</h2>
            <StringDetailComponent  data={value as StringDetail}  />
          </div>
        ))
      }
    </div>
  );
};

export default StringCompareServerComponent;
