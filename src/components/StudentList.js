import React, { useState, useEffect } from 'react'
import StudentCard from './StudentCard';
import './StudentList.css';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import InputForm from './InputForm'
import { bindActionCreators } from 'redux';
import { studentActions } from '../redux/store'

// ส่วนแสดงรายชื่อนักเรียนทั้งหมดที่มาจาก server

const StudentList = props => {

  const students = useSelector(state => state.student);

  console.log('Student = = = ' + students);
  const dispatch = useDispatch();

  const actionsStudent = bindActionCreators(studentActions, useDispatch())

  // const getStudents = async () => {

  //   const result = await axios.get(`http://localhost/api/students`)
  //   const action = { type: 'GET_STUDENTS', students: result.data };
  //   dispatch(action)
  // }

  useEffect(() => {

    actionsStudent.getStudents()

  }, [])

  if (!students || !students.length)

    return (

      <h1>Not Student Now</h1>
    )

  return (

    <div>{
      
      students.map((student, index) => (
        <div key={index} style={{ margin: 5 }}>
          <StudentCard {...student}/>
        </div>


      ))


    }

    </div>

  )

  }

export default StudentList;