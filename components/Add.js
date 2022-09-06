import React,{useState} from "react";
import {Button, Form} from "react-bootstrap";
import Vendors from "./Vendors";
import {v4 as uuid} from "uuid";
import {useNavigate} from "react-router-dom";
export default function Add(){
 const[name, setName]=useState("");
 const[about,setAbout]=useState("");
 let history=useNavigate();

 const handleSubmit=(e)=>{
    e.preventDefault();
    const ids=uuid();
    let uniqueId=ids.slice(0,8);

    let a=name,
    b=about;

    Vendors.push({id:uniqueId, name: a, about :b})
    history("/");
 }
    return(
        <>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlID="forName">
                <Form.Control type="text" placeholder="Enter Name" required onChange={(e)=>setName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlID="forAbout">
                <Form.Control type="text" placeholder="Enter About Yourself" required onChange={(e)=>setAbout(e.target.value)}></Form.Control>
            </Form.Group>
            <Button onClick={(e)=>handleSubmit(e)} type="submit">Submit</Button>
        </Form>
        </>
    );
}