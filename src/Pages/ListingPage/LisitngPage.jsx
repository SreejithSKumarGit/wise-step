import React from "react";
import { useState } from "react";
import ListingPageStyles from "./LisitngPage.module.css";


export function ListingPage()
{
const [data,setData]=useState([]);
    let outlets=[
        {   "id":1,
            "name":"Outlet 1",
            "location":"1km away from your location",
            "vehicles":[
                {
                    "id":1,
                    "vehicle_name":"Activa",
                    "price":300
                },
                {
                    "id":2,
                    "vehicle_name":"Activa",
                    "price":300
                },
                {
                    "id":3,
                    "vehicle_name":"Activa",
                    "price":300
                },
        ]
        },
        {   "id":2,
            "name":"Outlet 2",
            "location":"2km away from your location",
            "vehicles":[
                {
                    "id":1,
                    "vehicle_name":"Activa",
                    "price":300
                },
                {
                    "id":2,
                    "vehicle_name":"Activa",
                    "price":300
                },
                {
                    "id":3,
                    "vehicle_name":"Activa",
                    "price":300
                },
        ]
        },
        {   "id":3,
            "name":"Outlet 3",
            "location":"3km away from your location",
            "vehicles":[
                {
                    "id":1,
                    "vehicle_name":"Activa",
                    "price":300
                },
                {
                    "id":2,
                    "vehicle_name":"Activa",
                    "price":300
                },
                {
                    "id":3,
                    "vehicle_name":"Activa",
                    "price":300
                },
        ]
        }
    ]
    React.useEffect(()=>
    {
        setData(outlets);
    },[]);
    return (
        <div className={ListingPageStyles.Container}>
            <table>
                <thead>
                    <tr>
                        <th>Name of the outlet</th>
                        <th>Location</th>
                        <th>Checkout Link</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item)=>
                        (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.location}</td>
                                <td><button>Checkout</button></td>
                            </tr>
                            
                        ))
                    }
                    <tr></tr>
                </tbody>
            </table>

        </div>
    )
}