import React, { useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Link  } from 'react-router-dom';
import {
    ListGroupItem,
    ListGroup,
    Button
}   from 'reactstrap';

export default function UserList() {
    const { users, removeUser } = useContext(GlobalContext);

    return (
        <ListGroup className='mt-4'>
        {users.length > 0 ? (
            <>
        {users.map(user => (
            <ListGroupItem key={user.id} >
            <div className='m1-auto' style={{display: 'flex', justifyContent: 'space-between'}}>
            <strong>{user.name}</strong>
            
            <span>
                <Link className='btn btn-warning mr-1' to={'/edit/'+user.id} >Edit</Link>
                <Button onClick={()=> removeUser(user.id)}  color='danger' >Delete</Button> 
            </span>
                
            </div>
            </ListGroupItem>

        ))}
            </>
        ) : (
            <h4 className='text-center'>No User</h4>
        ) }

        </ListGroup>
        
    )
}
