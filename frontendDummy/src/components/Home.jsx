import { useReducer } from "react"
const initialState = {name:"Home"}
function handleClick(state,action){
    if(action.type === "prevState"){
        state.name = "Home"
        return {name: state.name};
    }
    else if(action.type === "currState"){
        state.name = "Page"
        return {name: state.name};
    }
}
const Home = () =>{
    const [name,setName] = useReducer(handleClick,initialState)
    // const handleClick = () => {
    //     setName("Hello")
    // }
    // const handlePreviousClick = () => {
    //     setName("Hello")
    // }
    return(
        <div className="mainContent">
            <h1>This page is your {name.name} Page.</h1>
            <button onClick={() => setName({type: "prevState"})}>Click Me to see the new state</button>
            <button onClick={() => setName({type: "currState"})}>Click Me to go for previous state</button>
        </div>
    )
}
export default Home