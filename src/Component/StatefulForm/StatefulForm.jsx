import { useState } from "react";

const StatefulForm = () => {
    const[email, setEmail]= useState(null);
    const[name, setName]= useState(null);
    const[number, setNumber]= useState(null);
    const [error, setError ]=useState('')
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(number.length <6){
            setError('password must be 6 characters or longer');
        }
        else{
            setError('');
            console.log('email:-',email,'name:-',name, 'number:-',number);
        }
        

    }
    const handleChangeName =e =>{
        setName(e.target.value);
    }
    const handleChangeNumber =e =>{
        setNumber(e.target.value);
    }
     const handleEmailChange=(e)=>{
        console.log(e.target.value);
        setEmail(e.target.value)
     }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChangeName} type="text" name="name" />
                <br />

                <input
                    onChange={handleEmailChange}
                type="email" name="email" id="" />
                <br />
                <input onChange={handleChangeNumber} type="number" name="number" id="" required />
                <br />
                <input type="Submit" value="Submit" />

                {
                    error && <p> {error}</p>
                }
            </form>

        </div>
    );
};

export default StatefulForm;