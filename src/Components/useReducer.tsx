import { useReducer } from "react";

type Action = {type:'increment'} | {type:'decrement'} | {type:"reset"} | {type:"setStep",payload:number}
interface State {count:number,step:number};

const ReducerApp=()=>{
    const initialState={count:0,step:1};
    const [state,dispatch] = useReducer(reducer,initialState);
    function reducer(state:State,action:Action):State{
        switch(action.type){
            case'increment':
            return {...state,count:state.count+state.step};
            case"decrement":
            return {...state,count:state.count-state.step};
            case"reset":
            return {...state,count:0};
            case "setStep":
                return {...state,step:action.payload}
        }
    }
    console.log(state);
    return(
        <div>
            <h3>Counter</h3>
            <h3>{state.count}</h3>
            <button onClick={() => {dispatch({ type: "increment" })}}>Increase</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Decrease</button>
            <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
            <div>
                <label>Set Step:</label>
                <input
                 type="number"
                 placeholder="Enter step"
                 value={state.step}
                 onChange={(e)=>dispatch({type:"setStep",payload:Number(e.target.value)})}
                 />
            </div>
        </div>
    )
}

export default ReducerApp;