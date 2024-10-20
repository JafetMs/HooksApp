import { useCounter } from "../hooks"
import { Small } from "./Small";

export const Memorize = () => {

    const { counter, increment } = useCounter(10);

    return (
    <>
        <h1>Counter : <Small value ={counter }/></h1>
        <hr />


        <button
            className="btn btn-primary"
            onClick={ () => increment()}
        ></button>
    </>
  )
}
