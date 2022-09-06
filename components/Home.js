import React,{Fragment} from "react";
import {Button, Table} from "react-bootstrap";
import Vendors from "./Vendors";
import {Link,useNavigate} from "react-router-dom"
export default function Home(){
    let history=useNavigate();
    const handleDelete=(id)=>{
        var index= Vendors.map(function(e){
            return e.id
        }).indexOf(id);

        Vendors.splice(index,1);
         history("/");
    }
    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Vendors && Vendors.length >0 
                            ?
                            Vendors.map((item)=>{
                                return(
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.about}</td>
                                        <td>
                                            <Link to={"/edit"}><Button onClick={()=>alert(item.id)}>Edit</Button></Link>
                                            &nbsp;
                                            <Button onClick={()=>handleDelete(item.id)}>DELETE</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No Data Available"
                        }
                    </tbody>
                </Table>
                <br/>
                <Link className="d-grid gap-2" to="/create">
                    <Button size="lg">Create</Button>
                </Link>
            </div>
        </Fragment>
    )
}