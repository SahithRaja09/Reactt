function Recieve(props)
{
 return(
    <div>
        <h3>{props.name}</h3>
        <p>{props.age}</p>
    </div>
 )
}

function Message()
{

 return <Recieve name="Ram" age="23"></Recieve>
}
export default Message;