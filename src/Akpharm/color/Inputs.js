const Inputs =({colorvalue, setcolorvalue})=>{
    return(<>
         <form onSubmit={(e)=> e.preventDefault()}>
            <label>Add color name</label>
            <input
             autoFocus
             type="text"
             placeholder="Add color name"
             onChange={(e)=> setcolorvalue(e.target.value)}
            >
            </input>
         </form>
    </>);
}
export default Inputs;