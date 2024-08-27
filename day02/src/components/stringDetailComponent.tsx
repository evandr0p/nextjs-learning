import React from 'react';
import { StringDetail } from "@/models/strings/StringDetail";

interface StringDetailProps {
    data: StringDetail;
  }
  
export const StringDetailComponent: React.FC<StringDetailProps> = ({ data }) => {
    return (
      <table>
        <thead>
          <tr>
            {Object.keys(data).map(key => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.values(data).map((value, index) => <td key={index}>{value}</td>)}
          </tr>
        </tbody>
      </table>
    );
  };

export default StringDetailComponent;