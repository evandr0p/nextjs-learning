import React from 'react';
import { StringDetail } from "@/models/strings/StringDetail";

interface StringDetailProps {
    data: StringDetail;
  }
  
export const StringDetailComponent: React.FC<StringDetailProps> = ({ data }) => {
    return (
      <div className="overflow-x-auto">
        <table className="table">
        <thead>
          <tr>
            {Object.keys(data).filter(key => key !== 'BestFor').map(key => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.entries(data).filter(([key]) => key !== 'BestFor').map(([key, value], index) => <td key={index}>{value}</td>)}
          </tr>
        </tbody>
      </table>
      </div>
    );
  };

export default StringDetailComponent;