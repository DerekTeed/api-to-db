
import React from 'react';

export default function Datatable({ data }) {
    //consider going after just objects in eod, bc it starts as an array in devmentor api.
    console.log(data['1'])
    console.log('hellos',data['1'] )
    //console.log('objects',Object.keys(data['1']))
    const columns = data['0'] && Object.keys(data['0'])
    const columns2 = Object.values(data)
    return ( 
    <table cellPadding={0} cellSpacing={0}>
        <thead>
     
            <tr>{data['0'] && columns.map((heading) => <th>{heading}</th>) } </tr>
        </thead>
        <tbody>
            {console.log('weo',columns2)}
            {console.log('weo2',data)}
            {columns2.map(row => <tr>
                {
                    columns.map(column => <td>{row[column]}</td> )
                }
            </tr>)} 
        </tbody>

    
    </table>
    )
}