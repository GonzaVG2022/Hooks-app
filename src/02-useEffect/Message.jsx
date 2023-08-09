import { useEffect, useState } from "react"


export const Message = () => {
  
  const [coords, setCords] = useState( { x:0, y:0 } )
  useEffect(() => {
    const onMouseMove = ( { x, y } ) => {
        setCords( { x, y } )
    }
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.addEventListener('mousemove', onMouseMove);
    }
  }, [])
  
  
return (
    <>
        <div>Ya existe</div>
        { JSON.stringify( coords ) }
    </>
  )
}
