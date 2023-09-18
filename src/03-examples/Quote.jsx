



export const Quote = (  {image, name}  ) => {
    
    return (
    <>
        <blockquote className="blockquote text-end">
            {/* <p className="mb-1">{results[0].id}</p> */}
            <img src={ image } alt="" />
            <footer className="blockquote-footer"><h4>{ name } </h4></footer>
        </blockquote>


    </>
  )
}
