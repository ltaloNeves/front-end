
import React, {useState} from 'react';
import './style.css';


import Card from '../../components/Card';

//para refletir na interface precisa utilizar estado 
//toda vez que ele muda gera uma nova renderização 


function Home() {
  //criando um estado
  //primeiro parametro é ond evai ficar armazenado
  const [studentName, setStudentName] = useState('')

  const [students, setStudents] = useState([]);
//toda vez que esssa função é chamada um novo objeto é criado e ele vai ter duas propriedas
  function handleAddStudent(){

    const newStudent = {
      name: studentName,

      //definindo a hora de maneira automatica 
      time: new Date().toLocaleDateString("pt-br",{ 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',


      }),
    
    }; 
//pegando o estudant e substituindo 
//...sprede operetor pegar um conteudo do estado e mudar ele
    setStudents((prevState) => [...prevState, newStudent]);

  }


//{} colocar o nome dentro disso para que ele fique mutavel
  return (
    <div className='container'>

      <h1>Lista de presença</h1>
      <input type="text" 
      placeholder="digite um nome"
      onChange={e => setStudentName(e.target.value) }
      />

      {/* chamando quando o botão for clicado */}
      <button type='button' onClick={handleAddStudent}>
        Adcionar</button>


    {

      students.map((student) => (

      <Card 
   
      key = {student.time}
      name={student.name} time={student.time} />))}
    


    </div>
    


  )
}

//key prop

export default Home 
