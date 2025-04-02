//One is a parent Component sending data to the child component Two.
//This can be the example of props passing data from parent to child. 
function One()
{
 return (
    <Two msg1={"hello"} msg2={"This is Parent"}></Two>
 )
}

// now the parameter p contains data like : p={msg1:"hello",msg2:"This is from parent"}
function Two(p)
{

return (
    <div>
   {p.msg1}
   <p>{p.msg2}</p>
    </div>
)
}
function Props1() {
  return (
    <One></One>
  );
}

export default Props1;