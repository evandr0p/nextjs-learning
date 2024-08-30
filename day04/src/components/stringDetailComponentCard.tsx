import React from "react";
import { StringDetail } from "@/models/strings/StringDetail";

interface StringDetailProps {
  data: StringDetail;
}

export const StringDetailComponentCard: React.FC<StringDetailProps> = ({
  data,
}) => {
  return (
    <div className="flex w-full text-center">
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          {Object.entries(data).map(([key, value], index) => (
            <div key={index}>
              {key === "Name" && <h2 className="card-title">{value}</h2>}
              {key === "Material" && (
                <p className="font-semibold">Material: {value}</p>
              )}
              {key === "BestFor" && <p className="font-semibold">{value}</p>}
              {typeof value === "number" && (
                <div>
                  <div className="flex-row-reverse">
                    <span className="indicator-item badge badge-shadow">
                      {key}: {value}
                    </span>
                    <progress
                      value={value}
                      max="10"
                      className={
                        value <= 5
                          ? "progress w-full progress-warning"
                          : value <= 8
                          ? "progress progress-secondary"
                          : "progress progress-primary"
                      }
                    />
                    <div className="flex w-full justify-between px-2 text-xs">
                      <span>|</span>
                      <span>|</span>
                      <span>|</span>
                      <span>|</span>
                      <span>|</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="divider lg:divider-horizontal"></div>
    </div>
  );
};

export default StringDetailComponentCard;
