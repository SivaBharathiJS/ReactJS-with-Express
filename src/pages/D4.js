import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import './d1.css'
import React, {useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useFormik} from 'formik';
import axios from 'axios';
function Page4() {
    let  {id } = useParams();
    const [Name,setName] = useState("");
    const [Con,setCon] = useState("");
    const [Loc,setLoc] = useState("");
  console.log(id)
  useEffect(()=>{
    axios({
      method: 'get',
      url: 'http://127.0.0.1:5000/api/view:'+id
      })
    .then((response) => {
        const b=Object.values(response)
        const a=Object.values(b[0])
    //   let a=response.data.length
    setName(a[0]["Name"])
    setCon(a[0]["Contact"])
    setLoc(a[0]["Location"])
    console.log(a[0]["Name"])})},[])

    return(
<Table striped bordered hover>
<thead>
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Location</th>
    <th>Contact</th>
  </tr>
  <tr>
    <td>{id}</td>
    <td>{Name}</td>
    <td>{Loc}</td>
    <td>{Con}</td>
  </tr>
</thead>
<tbody>


  
</tbody>
</Table>
    )}
export default Page4;