import React,{useState} from 'react';
import Input from 'components/atoms/Input'
import Illu from 'components/molecules/Illu'


const Login = () => {
    const [name, setName] = useState("")
    const [NIP, setNIP] = useState("")

    const handleChange = (e) => {
        console.log("hallo", e.target);
        setName("test")
    }

    return <div>
        <Input label="Nama" value={name} onInput={(e) => handleChange(e)}  />
    </div>
}

export default Login;