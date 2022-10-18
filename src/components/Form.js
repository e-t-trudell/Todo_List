import {useState} from 'react'

const Form = (props) => {
    const {list, setList} = props
    const [todo,setTodo] = useState([])

    const handleChange=(e) => {
        setTodo({todo:e.target.value,complete:false})
    }

    const handleSubmit=(e) =>{
        e.preventDefault()
        setList([...list,todo])
        setTodo({todo:""})
    }
    const todoStyle = {
        // marginTop:'30px',
        margin: '20px 10px 30px 10px',
        padding:'10px',
        display:'inline',
        backgroundColor:'cyan',
        border:'3px solid black'
        
        
      }
  return (
    <div  >
        <form style={todoStyle} onSubmit={handleSubmit}>
            <label htmlFor="">Todo Item: </label>
            <input onChange={handleChange} type="text" value={todo.todo} />
            <button style= {{marginLeft:'10px', backgroundColor:'gold', borderRadius:'5px' }}type='submit'>Create Todo</button>
        </form>
    </div>
  )
}

export default Form