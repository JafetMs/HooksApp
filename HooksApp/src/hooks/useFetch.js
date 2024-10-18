import { useEffect, useState } from "react"


export const useFetch = (url) => {

  const initialState = {
      data:null,
      isLoading:true,
      hasError: false,
      errorMesage:null,
    }
  

  const [state, setState] = useState( initialState)

  useEffect( () => {
    getFetch();
  },[ url ]);

  const setLoadingState = () => {
    setState(initialState)
  }

  const getFetch = async() => {

    setLoadingState();
    const response = await fetch(url);

    // Sleep
    await new Promise( resolve => setTimeout(resolve,500))

      if( !response.ok){
        setState({
          data:null,
          isLoading:false,
          hasError:true,
          error:{
            code: response.status,
            message: response.statusText
          }
        })
        return;
      }

      const data = await response.json();
      
      setState({
        data,
        isLoading:false,
        hasError:false,
        
      })


  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}
