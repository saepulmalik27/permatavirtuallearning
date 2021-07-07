import React, {useState} from 'react'
import Illu from "components/molecules/Illu";

const Input = (props) => {
    const [inputType] = useState(props.type)
    const [inputValue, setInputValue] = useState('')
  
    function handleChange(event){
      setInputValue(event.target.value);
      if(props.onChange) props.onChange(inputValue)
    }
    return (
      <div>
          <Illu src={props.icon}/>
        <input type={inputType} value={inputValue} name="input-form" onChange={handleChange} class="inputclass"/>
      </div>
    );
  }
export default Input;