
import { useState ,useEffect} from 'react'
import StatisticLine from './StatisticLine'
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
        <StatisticLine text="good" value={props.good}/>
        <StatisticLine text="bad" value={props.bad}/>
        <StatisticLine text="neutre" value={props.neutre}/>
        <StatisticLine text="all" value={all}/>
        <StatisticLine text="positive" value={positive}/>
    </>
)
 
}

export default Statistiques