import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Statistiques from './Statistiques'
import Btn from './Btn'

function App() {
  const [good, setGood] = useState(0)
  const [neutre, setNeutre] = useState(0)
  const [bad, setBad] = useState(0)
  /*const [all, setAll] = useState(0)
  const [positive, setPositive] = useState(0)
  const [score_moyen,setScoreMoyen] =useState(0)*/


    function handleClick(e){
    
   
   if (e.currentTarget.getAttribute('name') == 'good')
   {
    setGood (good+1)
    
   }else if(e.currentTarget.getAttribute('name')=='neutre')
   {
    setNeutre(neutre+1)
   }else{
    setBad(bad+1)
   }
  }

 
  return (
    <>
     <div>
      <h1>Give feedback</h1>
      <Btn name={'good'} handleClick={handleClick}/>
      <Btn name={'neutre'} handleClick={handleClick}/>
      <Btn name={'bad'} handleClick={handleClick}/>
    
    

      <h2>Stats</h2>
      <ul>
        <Statistiques good={good} bad={bad} neutre={neutre}/>
          
      </ul>
     </div>
    </>
  )
}
    
export default App
