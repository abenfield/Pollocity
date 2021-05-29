import React, {Component, useEffect, useState} from "react";
import ReactDataGrid from 'react-data-grid';
import axios from 'axios';
import {Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataGrid } from '@material-ui/data-grid';
import {Doughnut} from "react-chartjs-2";

export default function ResponseTable(props){



    const columns = [
        { field: 'response', headerName: 'Response', width: 150 },
        { field: 'created_at', headerName: 'Date Created', width: 250 }
    ];







    function  countResponses(responseObject) {

    let responseArray = Array.from(responseObject);

    let labels = [];
    let data = [];

responseArray.map(item => {
let found = null;

    if (labels.indexOf(item.response) >= 0)
    {

        found = labels.indexOf(item.response);
            data[found] += 1;
    }
    else {
        labels.push(item.response);
        data.push(1);
    }




})

   return  [labels,data];





}


    let initalArray = [];


    const [rows, setRows] = useState(initalArray);
    const[data,setData] = useState(initalArray);
    const[label,setLabel] = useState(initalArray);


    let token = sessionStorage.getItem("token");


    React.useEffect(() => {
        (async () => {
            try {
                const result = await  axios({
                    method: 'get',
                    url: props.Url,
                    data: { },
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                });
                //const rows = [];


                setRows(result.data.data);
                let array = await(countResponses(result.data.data))
                setLabel(await array[0]);
                setData(await array[1]);

            }
            catch(e){

            }
        })();
    }, []);


console.log(label);


    return (

        <div style={{ height: 200, width: '100%' }}>

            <DataGrid rows={rows} columns={columns} pageSize={20}  />
            <div style={{ height: 100, width: '100%' }}>
                <Doughnut data={

                    {


                        labels: label,
                        datasets: [
                            {
                                label: '# of Votes',
                                data: data,
                                backgroundColor: [
                                    'rgb(255, 99, 132)',
                                    'rgb(54, 162, 235)',
                                    'rgb(255, 205, 86)'
                                ],
                            },
                        ],


                    }} type='doughtnut'/>
        </div>
        </div>

    )



}
