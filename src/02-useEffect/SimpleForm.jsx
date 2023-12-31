import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState(
        {
            username:'Flavio',
            email:'gonzagargantini20@gmail.com'
        }
    );

    const { username, email } = formState;

    const onInputChange = ( {target} ) => {
        const { name, value } = target;
        // console.log({name, value})
        setFormState( {
            ...formState,
            [ name ]: value
        } )
    }
    useEffect(() => {
      console.log('useEffect username');
    }, [username]) 
    useEffect(() => {
        console.log('useEffect email');
      }, [email]) 
    

  return (
  <>
  <h1>SimpleForm</h1>
  <hr />
  <input 
  type="text" 
  className="form-control"
//   placeholder="Username"
  name="username"
  value={ username }
  onChange={ onInputChange }

  />
  <input 
  type="email" 
  className="form-control mt-2 mb-2"
//   placeholder="gonzagargantini20@gmail.com"
  name="email"
  value={ email }
  onChange={ onInputChange }

  />

  {
    (username === 'FlavioVG') && <Message/>
  }
  
  </>
    
  )
}
