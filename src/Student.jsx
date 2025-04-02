import "./Student.css"
import PropTypes from 'prop-types'
function Student(props)
{
  return (
    <div className="details">
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Student:{props.student ?" yes":"no"}</p>
    </div>
  )
}

Student.propTypes ={
    name:PropTypes.string,
    age:PropTypes.number,
    student:PropTypes.bool,
}

Student.defaultProps =
{
 name:"Guest",
 age:0,
 student:false,
}
export default Student