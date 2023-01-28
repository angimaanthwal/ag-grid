import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
class Form extends Component{
render(){
return(
<Container>
<Dropdown> Choose Your Dataset
<Dropdown.Menu>
<Dropdown.Item href="https://jsonplaceholder.typicode.com/posts">Dataset-1</Dropdown.Item>
<Dropdown.Item href="https://jsonplaceholder.typicode.com/comments">Dataset-2</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<Form.Group controlid="formName>
<Form.Label>Name</Form.label>
<Form.Control type="text" placeholder="Enter name"/>
</Form.Group>
</Form>
</Container>
)
}
}
export default Form;