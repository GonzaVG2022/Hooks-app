



export const Quote = (  {results}  ) => {
    
    return (
    <>
        <blockquote className="blockquote text-end">
            {/* <p className="mb-1">{results[0].id}</p> */}
            <img src={ results[0].image } alt="" />
            <footer className="blockquote-footer">{ results[0].name }</footer>
        </blockquote>


    </>
  )
}
