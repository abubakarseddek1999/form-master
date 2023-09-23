import useInputState from "../../hooks/useInputState";


const HookForm = () => {
    // const[name, handleNameChange] =useInputState('Rojoni')
    const emailState =useInputState('rojoni@sojoni.go')

    
    const handleSubmit = e =>{
        console.log('form data', emailState.value)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                 <br />

                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="number" name="number" id="" />
                <br />
                <input type="Submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;