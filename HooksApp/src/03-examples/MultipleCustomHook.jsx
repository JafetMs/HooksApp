import { useFetch } from "../hooks"

export const MultipleCustomHook = () => {


  const {data,isLoading,hasError}=  useFetch('https://pokeapi.co/api/v2/pokemon/4');

  console.log(data);
 

  return (
    <>
        <h1>Pokemon Information</h1>
        <br />
        { isLoading && <p> Loading...</p>}
        <pre>{ data?.name }</pre>
    

        <button
          className="btn btn-primary mt-2 "
        >
          Previous
        </button>

        <button
          className="btn btn-primary mt-2"
        >
          Next
        </button>
    </>
  )
}
