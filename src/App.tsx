import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Footer, Header } from './components/common';
import { StudentCard } from './features/labs/Student';
import { Student } from '@/models';

function App() {
  const [count, setCount] = useState(0);
  const studentInt: Student = {
    name: 'Batman',
    age: 2,
  };
  const [student, setStudent] = useState(studentInt);

  const handleUpdateStudent = (studentData: Student) => {
    console.log(studentData);
    setStudent({
      ...student,
      name: Math.random().toString(),
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Header />
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <StudentCard updateStudent={handleUpdateStudent} student={student} />
        <Footer />
      </header>
    </div>
  );
}

export default App;
