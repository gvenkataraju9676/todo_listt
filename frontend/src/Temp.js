import React, { useState } from 'react';

function Temp() {
  const [data, setData] = useState(null);
  return (
    <React.Fragment>
      <label htmlFor="text">Enter data: </label>
      <input type="text" id="text" onChange={e => setData(e.target.value)} />
      <br />
      {data}
    </React.Fragment>
  );
}

export default Temp;
