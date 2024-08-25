import { useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";

const WaitingRoom=({joinChatRoom})=>{
const[username,setUsername]=useState();
const[chatRoom,setChatRoom]=useState();
return <Form onSubmit={e=>{e.preventDefault(); joinChatRoom(username,chatRoom)}}>
<Row className="px-5 py-5"><Col sm={12}><FormGroup>
    <Form.Control placeholder="Username"
onChange={e=>setUsername(e.target.value)}
></Form.Control>
<Form.Control placeholder="ChatRoom"
onChange={e=>setChatRoom(e.target.value)}
></Form.Control>
</FormGroup></Col>
<Col sm={12}><hr></hr><Button variant="success" type="submit">Join</Button></Col>
</Row>

</Form>
}
export default WaitingRoom;