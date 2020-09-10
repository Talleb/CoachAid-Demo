import React, { useState } from "react";
import tw from "twin.macro";
import { useHistory } from 'react-router-dom';
import { auth } from "../../firebase";

import styled from "styled-components";
// import illustration from "images/login-illustration.svg";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
const FormContainer = tw.div`w-full flex-1 mt-2`;
const Label = tw.label`text-sm text-gray-600`
const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full mb-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const Text = tw.p`mt-2 text-xs text-gray-600`
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-green-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;


const SignIn = ({
    submitButtonText = "Sign In",
    SubmitButtonIcon = LoginIcon,
    forgotPasswordUrl = "#",
    signupUrl = "/signup",


}) => {
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
            setError("Error signing in with password and email!");
            console.error("Error signing in with password and email", error);
        });
        history.push('/application')
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name === 'userPassword') {
            setPassword(value);
        }
    };

    return (
        <FormContainer>
            <Form>
                <Label>Email:</Label>
                <Input
                    type="email"
                    placeholder="Email"
                    name="userEmail"
                    value={email}
                    id="userEmail"
                    onChange={(event) => onChangeHandler(event)}
                />
                <Label>Password:</Label>
                <Input
                    type="password"
                    placeholder="Password"
                    name="userPassword"
                    value={password}
                    id="userPassword"
                    onChange={(event) => onChangeHandler(event)}
                />
                <SubmitButton onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}>
                    <SubmitButtonIcon className="icon" />
                    <span className="text">{submitButtonText}</span>
                </SubmitButton>

                <Text>
                    <a href={forgotPasswordUrl} tw="border-b border-gray-500 border-dotted">
                        Forgot Password ?
                </a>
                </Text>
                <Text>
                    Dont have an account?{" "}
                    <a href={signupUrl} tw="border-b border-gray-500 border-dotted">
                        Sign Up
                </a>
                </Text>
            </Form>
        </FormContainer >
    );
};
export default SignIn;

