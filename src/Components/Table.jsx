import React, { useEffect, useState } from "react";
export const Table = () => {
  const [isAcceding, setIsAcceding] = useState(false);
  const [data, setData] = useState();
  let allScanData = [
    ["AvayaSBC", "F332B7", "25/05/2021 15:00", 23],
    ["AvayaSBC", "F332B8", "25/05/2021 15:01", 29],
    ["AvayaSBC", "F332B9", "25/05/2021 15:02", 30],
    ["AvayaSBC", "F332B10", "25/05/2021 15:03", 45],
    ["AvayaSBC", "F332B11", "25/05/2021 15:04", 12],
    ["AvayaSBC", "F332B12", "25/05/2021 15:05", 5],
    ["OracleSBC", "S455D31", "28/05/2021 12:35", 34],
    ["OracleSBC", "S455D32", "28/05/2021 12:36", 32],
    ["OracleSBC", "S455D33", "28/05/2021 12:37", 54],
    ["OracleSBC", "S455D34", "28/05/2021 12:38", 35],
    ["OracleSBC", "S455D35", "28/05/2021 12:39", 13],
    ["OracleSBC", "S455D36", "28/05/2021 12:40", 10],
  ];
  useEffect(() => {
    setData(allScanData);
  }, []);
  const handleChange = () => {
    setIsAcceding(!isAcceding ? true : false);
    if (isAcceding == false) {
      data.sort((acc, cur) => acc[3] - cur[3]);
    } else if (isAcceding == true) {
      data.sort((acc, cur) => cur[3] - acc[3]);
    }
  };
  return (
    <div>
      <table>
        <th>Language</th>
        <th>Code</th>
        <th>Date and Time</th>
        <th onClick={handleChange}>Allocation</th>

        {data &&
          data.map((item) => {
            return (
              <tr>
                {item.map((items) => {
                  return <td>{items}</td>;
                })}
              </tr>
            );
          })}
      </table>
    </div>
  );
};
