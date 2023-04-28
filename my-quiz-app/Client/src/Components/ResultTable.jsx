import React, { useEffect, useState } from 'react';
import { getServerData } from '../Helper/Helper';

const ResultTable = () => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        getServerData("https://whoknowmebetter.onrender.com/result", (res) => {
            setData(res);
        })
    },[]);

  return (
      <div>
          <table>
              <thead className='table-header'>
                  <tr className='table-row'>
                      <td>Name</td>
                      <td>Attempts</td>
                      <td>Earn Points</td>
                      <td>Result</td>
                  </tr>
              </thead>
              <tbody>
                {!data ?? <div>No Result Found</div>}
                  {
                      data.map((element, index) => (
                      <tr className='table-body' key={index}>
                          <td>{element?.username || "" }</td>
                          <td>{element?.attempts || 0 }</td>
                          <td>{element?.points || 0 }</td>
                          <td>{element?.achieved || ""}</td>
                      </tr>
                    ))
                  }
              </tbody>
          </table>
    </div>
  )
}

export default ResultTable;