import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import './d1.css'
import React, {useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useFormik} from 'formik';
import axios from 'axios';
function Page2() {
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
// });
    
    const [State, setState] = useState([]);
    const formik = useFormik({
        initialValues: {
          Name:Name,Location:Loc,Contact:Con
        },
        onSubmit: (values) => {
          console.log(values);
          let form_data=new FormData()
          form_data.append("Name",Name)
          console.log(Name)
          form_data.append("Location",Loc)
          form_data.append("Contact",Con)
          const d=form_data 
          console.log(d)
  
                            axios({
                                method: 'put',
                                url: 'http://127.0.0.1:5000/api/update:'+id,
                                data: form_data,
                                headers:{"Content-Type":"application/json"}
                            }).then((response) => {
                                console.log(response);
                            console.log("success");
                            }, (error) => {
                                console.log("error");
                            });
        },
      });


  
  return (
    <>
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='n1'>Name</Form.Label>
        <Form.Control 
                type="text"   
                name='name'
                placeholder='enter your name'
                onChange={(e)=>{
                  setName(e.target.value)
                }}
                value={Name} />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contact</Form.Label>
        <Form.Control 
                 type="number" 
                 name='contact'
                 placeholder="contact details"   
                 onChange={(e)=>{
                 setCon(e.target.value)
               }}
               value={Con} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="FormBasicPassword">
        <Form.Label>Location</Form.Label>
        <Form.Control 
                 type="text" 
                 name='location'  
                 onChange={(e)=>{
                 setLoc(e.target.value)
               }}
               value={Loc} 
               placeholder="Add your location" />
      </Form.Group>
      <Form.Text className="text-muted">
         Deliverly location
        </Form.Text> <br></br>
      <Button variant="primary" type="submit">
        update
      </Button>
    </Form>

    </>
  );
}

export default Page2;