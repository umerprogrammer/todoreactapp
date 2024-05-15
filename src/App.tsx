import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck, faCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons'

function App() {

  const todo = {
    id : 0,
    priority: "",
    status: "",
    userName: "",
    task: ""
  }


  const [todos, setTodos] = useState<any>([]);
  const [mytask, setMyTask] = useState(todo);

  const submitForm = (event: any) => {
    mytask.id = todos.length== 0 ? 1 :(todos[todos.length - 1].id) +1;
    todos.push({ ...mytask });
    setTodos([...todos]);
    setMyTask(todo);
  }

  const deleteData = (event:any) =>{
    
    if(todos.length > 0){
      const id = event;
      todos.splice(id,1);
      setTodos([...todos]);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container-body">

          {/***************** Main Grid Container Start ****************/}
          <div className="container">
            <div className="container-fluid border shadow g-0 main-container d-flex justify-content-between  flex-column  ">


              {/***************** Top Header Start ****************/}
              <div className="header-top sticky-top d-flex align-items-center gap-2 border border-0 border-bottom px-2 text-secondary ">
                <FontAwesomeIcon icon={faListCheck} className='fs-25' ></FontAwesomeIcon>
                <h5 className='fs-25 mt-1 '>
                  Task List
                </h5>
              </div>
              {/***************** Top Header End ****************/}

              {/***************** Data Grid Start ****************/}
              <div className="data-grid px-2 overflow-y-auto ">
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Employee</th>
                      <th>Asign Task</th>
                      <th>Priority</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      todos?.map((x: any, index: any,todoList:any) => {
                        return <tr key={index}>
                          <td>{parseInt( x.id) == 0 ? parseInt(todos[todos.length - 1].id) + 1 : parseInt(x.id)}</td>
                          {/* <td>{ x.id}</td> */}
                          <td>{x.userName}</td>
                          <td>{x.task}</td>
                          <td><div className='text-light bg-danger w-50 fs-14 text-center rounded-1 p-1 '>{x.priority == "H" ? "High" : x.priority == "M" ? "Medium" : "Low"}</div></td>
                          <td>{x.priority == "C" ? "Complete" : x.priority == "P" ? "Pending" : "In-Process"}</td>
                          <td>
                            <div className='d-flex gap-1'>
                              <button className='btn' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"><FontAwesomeIcon icon={faCheck} className='text-success fw-bold'></FontAwesomeIcon></button>
                              <button className='btn' onClick={() => deleteData(index)}><FontAwesomeIcon icon={faTrashCan} className='text-danger'></FontAwesomeIcon></button></div>
                          </td>
                        </tr>
                      })}
                  </tbody>
                </table>
              </div>
              {/***************** Data Grid End ****************/}

              {/***************** Footer Start ****************/}
              <div className="myfooter border b order-0  border-top d-flex justify-content-end  ">
                <div className='d-flex gap-3 p-2'>
                  <a href="#" className='btn btn-cancel '>Cancel</a>
                  <button className='btn btn-primary shadow btn-add d-flex gap-2 align-items-center justify-content-center '
                    data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">
                    <FontAwesomeIcon icon={faCheck} className='text-light fw-bold'></FontAwesomeIcon>
                    Add
                  </button>
                  <a href="#"></a></div>
              </div>
              {/***************** Footer End ****************/}

            </div>
          </div>
          {/***************** Main Grid Container END ****************/}
        </div>


        {/***************** Add Todo Modal Start ****************/}
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add New Task</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

                {/***************** Modal Form Start ****************/}

                <form onSubmit={submitForm}>
                  <div className="row row mb-3 ">
                  <div className="col-md-6">
                  <label htmlFor="id" className="col-form-label-sm">Id</label>
                      <input type="text" className="form-control form-control-sm" id="id" value={mytask.id} onChange={(e) => {
                        setMyTask({ ...mytask, id: parseInt(e.target.value) })
                      }} disabled />
                    </div>
                    <div className="col-md-6">
                      <label className="col-form-label-sm ">Task Priority</label>
                      <select className="form-select form-select-sm " aria-label="Default select example" value={mytask.priority} onChange={(e) => {
                        setMyTask({ ...mytask, priority: e.target.value })
                      }}>
                        <option value="">-- Select Task Priority --</option>
                        <option value="H">Hight</option>
                        <option value="L">Low</option>
                        <option value="M">Medium</option>
                      </select>
                    </div>
                   
                  </div>
                  <div className="row mb-3 ">
                    <div className="col-md-12">
                      <label htmlFor="recipient-name" className="col-form-label-sm">User Name</label>
                      <input type="text" className="form-control form-control-sm" id="recipient-name" value={mytask.userName} onChange={(e) => {
                        setMyTask({ ...mytask, userName: e.target.value })
                      }} />
                    </div>
                  </div>
                  <div className="row mb-3 ">
                    <div className="col-md-12">
                      <label htmlFor="message-text" className="col-form-label col-form-label-sm">Message:</label>
                      <textarea className="form-control form-control-sm" id="message-text" value={mytask.task} onChange={(e) => {
                        setMyTask({ ...mytask, task: e.target.value })
                      }}></textarea>
                    </div>
                  </div>
                  <div className="row mb-3 ">
                  <div className="col-md-12">
                      <label className="col-form-label-sm">Status</label>
                      <select className="form-select form-select-sm " aria-label="Default select example" value={mytask.status} onChange={(e) => {
                        setMyTask({ ...mytask, status: e.target.value })
                      }}>
                        <option value="">-- Select Task Status --</option>
                        <option value="P">Pending</option>
                        <option value="C">Complete</option>
                        <option value="R">Process</option>
                      </select>
                    </div>
                    </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                  </div>
                </form>

                {/***************** Modal Form End ****************/}

              </div>

            </div>
          </div>
        </div>
        {/***************** Add Todo Modal Ends ****************/}
      </header>
    </div>
  );
}

export default App;
