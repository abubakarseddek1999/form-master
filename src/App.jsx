
import './App.css'
import Grandpa from './Component/Grandpa/Grandpa'
// import ReuseableForm from './Component/ReuseableForm/ReuseableForm'
// import HookForm from './Component/hookForm/HookForm'
// import RefForm from './Component/refForm/RefForm'
// import SimpleForm from './Component/SimpleForm/SimpleForm'
// import StatefulForm from './Component/StatefulForm/StatefulForm'

function App() {
  // const handleSignUpSubmit = data => {
  //  console.log('sign up data', data);
  // }
  // const handleUpdateProfile = data =>{
  //   console.log('update profile', data)
  // }

  return (
    <>

      <h1>Form master</h1>


      <Grandpa></Grandpa>


      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign up</h2>
          <p>please sign up right now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} SubmitBtnText='Update'>
        <div>
          <h2>update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReuseableForm> */}

    </>
  )
}

export default App
