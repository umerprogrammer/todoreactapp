import React from 'react';
import logo from './logo.svg';
import '../addtodo/addtodo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck, faCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function AddTodo() {
    return (
        <div className='AddTodo'>
            <div className="container">
               <div className="row">
                <div className="col-md-6">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="col-md-6">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
               </div>
            </div>
        </div>
    )
}