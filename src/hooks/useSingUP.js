import { useState } from "react";
import { UseFetchUsersByName, UserFetchEmailByEmail, UseFetchAddUser } from '../helpers/fetchUsers';

export const useSingUp = () => {
    const [user, setUser] = useState({});

    const createNewUser = async (e) => {
        e.preventDefault();
        return await UseFetchAddUser(user);
    }

    const handleUsernameOnBlur = async (e) => {
        const value = e.target.value;
        const result = await UseFetchUsersByName(value);
        if (!result) {
            setUser({...user, errorIsValid: true, descName: `Username is required!`})
            return
        }
        if (result.isValid) {
            setUser({...user, errorIsValid: true, descName: `Username ${value} already exist!`})
        } else {
            setUser({...user, isValid: result.isValid, username: value, errorIsValid: false, descName: ''})

        }
    }

    const handlerLastNameOnBlur = async (e) => {
        const value = e.target.value;
        if (value) {
            setUser({...user, lastName: value, errorLastname: false, descLast: ''})
        } else {
            setUser({...user, errorLastname: true, descLast: 'LastName is required!'})
        }
    }

    const handleEmailOnBlur = async (e) => {
        const value = e.target.value;
        const emailValid = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!emailValid.test(value))
        {
            setUser({ ...user, errorEmail: true, descEmail:'email is invalid!' })
            return
        }
        const email = await UserFetchEmailByEmail(value)
        if (email.isValid) {
            setUser({ ...user, email: value, errorEmail: false, descEmail:'' })
        }
        else {
            setUser({...user, errorEmail: true, descEmail: 'email already exist!'})
        }
    }

    const handlePasswordOnBlur = (e) =>{
        let value = e.target.value;
        if (value && value.length >= 6)
        {
            setUser({ ...user, pass: value,  errorPass: false, descPass: ''});
        }
        else
        {
            setUser({...user, pass: value,  errorPass: true, descPass: '6 caracteres minimo'});
        }
    }

    return {
        user,
        handleEmailOnBlur,
        handlePasswordOnBlur,
        handleUsernameOnBlur,
        handlerLastNameOnBlur,
        createNewUser
    };
}


