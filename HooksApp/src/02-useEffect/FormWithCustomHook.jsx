import { Message } from "./Message";
import { useForm } from "../hooks/useForm";



export const FormWithCustomHook = () => {

    // Custom Hook
    const {formState,onInputChange, onSubmit,username,email,password} = useForm(   {
        username:'',
        email:'',
        password:'',
    })

    // const { username,email, password} = formState;
    

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
          placeholder="Email"
          name="email"
          value={email}
          onChange={ onInputChange}
        
        />

        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Password" 
            value={password}
            name="password"
            onChange={ onInputChange }
        />

        <button 
            onClick={onSubmit}
            className="btn btn-primary mt-2"
        >Borrar</button>


        {
           (username ==='strider2') && <Message/>
        }
       
    </>

    )
}
