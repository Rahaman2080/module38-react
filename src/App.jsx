import './App.css'
import Todo from './Todo';
import Sahabi from './Sahabi';
import Kholipa from './Kholipa';


function App() {
  
  function handleClick(){
    alert('React এর প্রথম কনচেপ্ট হল component যা একটি function লিখে। এবং function er প্রথম অক্ষর বড় হয়। এবং return করে xml অর্থাৎ component এর ভিতর HTML লেখা। যদিও তা এইচটিএমএল নয়।');
  }

  const sahabies = ['Hazrat Abu Bokkor(R)', 'Hazrat Umor(R)', 'Hazrat Usman(R)', 'Hazrat Ali(R)'];

  const khulapas =[
    {kholipa: 'First kholipa', name:'Hazrat Abu Bokkor(R)', age: 61, duration:'2 years'},
    {kholipa: 'Second kholipa', name:'Hazrat Umor(R)', age: 60, duration:'10 years'},
    {kholipa: 'Third kholipa', name:'Hazrat Usman(R)', age: 77, duration:'12 years'},
    {kholipa: 'Fourth kholipa', name:'Hazrat Ali(R)', age: 60, duration:'5 years'},
  ]

  return (
    <div className='body'>
      <Content></Content>
      <Person></Person>
      <Developer></Developer>
      <Device name="Laptop"></Device>
      <Device name="Mobile"></Device>
      <Device name="Tablet"></Device>
      <Device name="Watch"></Device>
      <Student name='Sakib' grade='7' score='99'></Student>
      <Student name={'Jalal'}></Student>
      <Student></Student>
      <Todo task ='Learn React' isDone={true}></Todo>
      <Todo task ='Core Concept' isDone={false}></Todo>
      <Todo task = 'Try jsx' isDone={true}></Todo>
      <button onClick={handleClick} className='button'>Know more</button>
      {
        sahabies.map(sahabi => <Sahabi name={sahabi}></Sahabi>)
      }
      {
        khulapas.map(khulapa => <Kholipa khulapa={khulapa}></Kholipa>)
      }
    </div>
  )
}
// paramiter diye dynamically component creat kora root function e name add kore dekano holo
  function Device(props){
      return (
        <div>
          <h4>Device: {props.name}</h4>
        </div>
      )
  }

  function Student({name='undefined', grade=1, score=0}){ //ekane props er jaigai object destructuring kora holo and default value dewa holo

    return(
      <div className='content'>
        <h3>This is a Student.</h3>
        <p>Name: {name}</p>
        <p>Class: {grade}</p>
        <p>Score: {score}</p>
      </div>
    )
  }

function Person(){
  const age = 25;
  const person ={name:'Sakib',money:1500}
  return (
    <div className="content">
  <h3>I am {person.name}. I am {age} years old. I have {person.money} tk.</h3>
    </div>
  )
}
function Content(){
  return(
    <div className="content">
      <h3>React first core concept</h3>
      <p>React এর প্রথম কনচেপ্ট হল component</p>
      <li>React এর ছোট অথচ গুরুত্বপূর্ণ অংশ হল component যা একটি function লিখে। এবং function er প্রথম অক্ষর বড় হয়।</li>
      <li>এবং return করে xml অর্থাৎ component এর ভিতর HTML লেখা। যদিও তা এইচটিএমএল নয়।  </li>
    </div>
  )
}
function Developer(){
  const developerStyle = {
          border: '3px solid blue',
          padding: '20px',
          margin: '20px',
          borderRadius: '10px'
        }
  const name = 'Rahman';
  const designition ='Dhaka';
  const expart ='Web design & development'
  return(
    <div style={developerStyle}>
      <h5>Name: {name}</h5>
      <h5>Designition: {designition}</h5>
      <h5>Expart in: {expart}</h5>
    </div>
  )
}
export default App
