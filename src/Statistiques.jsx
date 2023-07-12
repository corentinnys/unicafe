
import { useState ,useEffect} from 'react'
function Statistiques(props)
{
    const [all, setAll] = useState(0)
  const [positive, setPositive] = useState(0)
  
  useEffect(()=>
  {
    setAll(props.good+props.neutre+props.bad)
    
    setPositive(props.good/all)
    
    
  })


    return (
    <>
        <li> good {props.good} </li>
        <li>bad {props.bad}</li>
        <li >neutre {props.neutre} </li>
        <li>all {all}</li>
          <li>positive {positive}</li>
         
    </>
)
 
}

export default Statistiques