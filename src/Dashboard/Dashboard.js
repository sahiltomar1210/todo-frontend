import React from 'react'
import "./Dashboard.css"
import { useNavigate } from "react-router-dom";
const data = require("./mockdata.json");

function Dashboard() { 
    const username = window.localStorage.username;
    const navigate = useNavigate();
    const logout =()=>{
        window.localStorage.clear();
    navigate("/")
    }
  return (
    <div className='dashboard-container'>
      <header className='dashboard-header'><label className='dashboard-username'>{username}</label></header>
      <div className='dashboard-bottom'>
      <aside className='dashboard-aside'>
          <label>To do List</label>
          <label>History</label>
          <label onClick={logout}>Logout</label>
      </aside>
      <div className='dashboard-main'>
          <button className='dashboard-button'>Add new activity</button>
          <table className='dashboard-table'>
              <thead>
                  <tr>Activity</tr>
                  <tr>Status</tr>
                  <tr>
                      Time taken
                      (Hrs:Min:Sec)
                  </tr>
                  <tr>Action</tr>
              </thead>
              <tbody>
                  {
                      data.map((data)=>{ return(
                          <div className='tbody-tr'>
                          <tr>{data.activity}</tr>
                          <tr>{data.status}</tr>
                          <tr>{data.time}</tr>
                          <tr>{data.action}</tr>
                          </div>
                      )
                      })
                  }
              </tbody>
          </table>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
