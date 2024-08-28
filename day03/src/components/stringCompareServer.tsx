import React from 'react';
import StringDetailComponent from './stringDetailComponent';
import { StringDetail } from '@/models/strings/StringDetail';
import StringDetailComponentCard from './stringDetailComponentCard';


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
    <div className="card rounded-box flex-row" >
      
      {Object.entries(data).map(([key, value], index) => (
          <div key={index}>
              <StringDetailComponentCard  data={value as StringDetail}  />
          </div>
        ))
      }
    </div>
  );
};

export default StringCompareServerComponent;
