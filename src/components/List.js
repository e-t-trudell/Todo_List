import React from 'react'

export const List = (props) => {
    const {list, setList}=props

    const handleDelete=(index)=>{
        const newList = list.filter((item,idx)=>(idx !== index))
        setList(newList)
    }

    const handleToggle = (index)=> {
        const mutList = [...list]
        mutList[index].complete = !mutList[index].complete
        setList(mutList)
    }

    const todoComplete = {
        textDecoration: 'line-through',
        color:'green'
    }
    const listStyle={
        marginTop:'15px',
        border:'3px solid blue',
        width:'200px',
        borderRadius:'20px'
    }
  return (
    <div style={{marginTop:'15px',display:'flex', flexDirection:'column', alignItems:'center',}}>
        Todo List:
        {
        list.map((item,idx)=>(
            <div style={listStyle} key={idx}>
            <input type="checkbox" onClick={() => handleToggle(idx)} checked={item.complete}/>
            <p style={item.complete ? todoComplete : null }>{item.todo}</p>
            <button style={{backgroundColor:'green', border:'2px solid black', borderRadius:'10px'}} onClick={()=>(handleDelete(idx))} disabled = {!item.complete}>Delete</button>
            </div>
        ))
        }
    </div>
  )
}