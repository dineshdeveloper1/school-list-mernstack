import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [students, setStudent] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9991/studentslist')
      .then((students) => {
        setStudent(students.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })


  return (
    <>
      <h1>Sunday School Application</h1>
      {
        students.map(setStudent => {
          return <div key={setStudent.id}>
            <div>{setStudent.name}</div>
            <div>{setStudent.phone}</div>
          </div>
        })
      }
    </>
  )
}

export default App
