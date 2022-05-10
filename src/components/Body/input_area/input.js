
import './input.css'

const InputArea = ({message , func})=>{
    
    return(
        <input type='text' placeholder='message' className="input__text" onKeyUp={(e)=>(message)} onKeyPress={(e)=> e.key === 'Enter' ? func: null}/>
    )
}

export default InputArea