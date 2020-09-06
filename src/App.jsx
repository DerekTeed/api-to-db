import React, { useState, useEffect } from 'react';
import Datatable from "./datatable"

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default function App() {
  const [data, setData] =  useState([])
  const [q, setQ] = useState("")

  useEffect(() => {
   // fetch("https://devmentor.live/api/examples/contacts?api_key=b7c58b")
    fetch("https://eodhistoricaldata.com/api/fundamentals/AAPL.US?api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX&filter=outstandingShares::annual")
    .then(response => response.json())
    .then(json => setData(json))

  }, [])

  return (
    <div>
     <div>filter goes here</div>
     <div>
       <Datatable data={data}/>
       </div>
    </div>
  );
}