
import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import {v4 as uuid } from 'uuid';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
}   from 'reactstrap';

export default function AddUser() {
    const [name, setName] = useState('');
    const { addUser } = useContext(GlobalContext);
    const history = useHistory();

    const onSubmit= ()=>{
        const newUser ={
            id:uuid(),
            name
        }
        addUser(newUser);
        history.push('/');
    }

    const onChange = (e)=>{
        setName(e.target.value);
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <br/><br/>
                <Input type='text' name='name' onChange={onChange} placeholder='Enter Name'></Input>
            </FormGroup>
            <br/>
            <Button type='submit' >Submit</Button>
            <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
        </Form>
    )
}
