import { useEffect, useRef } from "react";


const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const numberRef = useRef(null);

    useEffect( ()=>{
        nameRef.current.focus()
    },[])

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(numberRef.current.value)


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" />
                 <br />

                <input ref={emailRef} type="email" name="email" id="" />
                <br />
                <input ref={numberRef} type="number" name="number" id="" />
                <br />
                <input type="Submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default RefForm;