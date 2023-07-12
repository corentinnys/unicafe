

function Btn(props)
{
 
    return (
         <button name={props.name}  onClick={props.handleClick}>{props.name}</button> 
    )
 
}

export default Btn