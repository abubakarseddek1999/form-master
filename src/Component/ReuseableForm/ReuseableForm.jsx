

const ReuseableForm = ({ formTitle,handleSubmit, SubmitBtnText = 'Submit', children }) => {
    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data ={
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }
   
    return (
        <div>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" />
                <br />

                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="Submit" value={SubmitBtnText} />
            </form>

        </div>
    );
};

export default ReuseableForm;