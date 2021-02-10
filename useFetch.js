import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
const isMounted = useRef(true);
   const [state, setState] = useState({ data: null, loading: true, error: null });
   
   useEffect(() => {

        return() => {
            isMounted.current = false;
        }
   }, []);

    useEffect(() => {
        setState({ data: null, loading: true, error: null });
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                setTimeout(() =>{
                    if(isMounted.current){
                        setState({
                            error: null, 
                            data: data,
                            loading: false 
                        });
                        
                    }else{
                        console.log('Se previnio el setState')
                    }

                }, 4000);
            });
        
    }, [ url ])

    return state;
}
