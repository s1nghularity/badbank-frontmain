import { useState } from 'react'
// import { useUserContext, } from "./UserContext";
import SignUpForm from "./SignUpForm";
import { Outlet } from "react-router-dom";
// will include authorization

function CreateAccount() {
    return <Account />;
}

function Account() {
    
    // const { user, setUser } = [useUserContext()];

    return (
        <div>
            <SignUpForm
            bgcolor="primary"
            label="Create Account"
            // handle={handle}
            successButton="Add another account"
            />
            <Outlet />
        </div>
    );}

    


export default CreateAccount
