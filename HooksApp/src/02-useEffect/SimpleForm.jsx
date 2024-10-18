import { useEffect, useState } from "react"
import { Message } from "./Message";



export const SimpleForm = () => {


  const [formState, setFormState] = useState({
    username:'strider',
    email:'a20216357@alumnos.uady.mx'
  })

  const { username,email} = formState;

  const onInputChange = ({target}) =>{
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value,
    })
  }


  // useEffect : Efectos secundarios

  useEffect( () => {
    // console.log('useEffect')
  },[])

  useEffect( () => {

    // console.log('useEffect formState')

  }, [formState] )

  useEffect( () =>{
    // console.log('Email changed')
    // console.log(email);
  },[email])
  return (
    <>  
        <h1>Simple Form</h1>

        <hr />

        <input type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          value={username}
          onChange={ onInputChange}
        
        />
         <input type="email"
          className="form-control mt-2"
          placeholder="a20216357@alumnos.uady.mx"
          name="email"
          value={email}
          onChange={ onInputChange}
        
        />

        {
           (username ==='strider2') && <Message/>
        }
       
    </>

    )
}
