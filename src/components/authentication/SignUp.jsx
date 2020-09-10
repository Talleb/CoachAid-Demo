import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { auth, generateUserDocument } from "../../firebase";
import { useHistory } from 'react-router-dom';
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";

const Label = tw.label`text-xs text-gray-600`
const FormContainer = tw.div`w-full flex-1 mt-2`;
const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full mb-3 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
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

const SignUp = ({
    submitButtonText = "Sign Up",
    SubmitButtonIcon = LoginIcon,
    // forgotPasswordUrl = "#",
    signInUrl = "/login",


}) => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState(null);

    const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
        event.preventDefault();
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            generateUserDocument(user, { displayName });
            history.push('/application')
        }
        catch (error) {
            setError('Error Signing up with email and password');
        }

        setEmail("");
        setPassword("");
        setDisplayName("");
    };

    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;

        if (name === "userEmail") {
            setEmail(value);
        } else if (name === "userPassword") {
            setPassword(value);
        } else if (name === "displayName") {
            setDisplayName(value);
        }
    };

    return (
        <div className="mt-8">
            <FormContainer>
                <Form>
                    <Label>Display name:</Label>
                    <Input
                        type="text"
                        name="displayName"
                        value={displayName}
                        placeholder="Displayname"
                        id="displayName"
                        onChange={event => onChangeHandler(event)}
                    />
                    <Label>Email:</Label>
                    <Input
                        type="email"
                        name="userEmail"
                        value={email}
                        placeholder="Email"
                        id="userEmail"
                        onChange={event => onChangeHandler(event)}
                    />
                    <Label>Password:</Label>
                    <Input
                        type="password"
                        name="userPassword"
                        value={password}
                        placeholder="Password"
                        id="userPassword"
                        onChange={event => onChangeHandler(event)}
                    />
                    <SubmitButton>
                        <SubmitButtonIcon className="icon" />
                        <span className="text" onClick={event => {
                            createUserWithEmailAndPasswordHandler(event, email, password);
                        }}>{submitButtonText}</span>
                    </SubmitButton>
                    <Text>
                        Already have an account?{" "}
                        <a href={signInUrl}>
                            Sign In
                  </a>
                    </Text>
                </Form>
            </FormContainer>
        </div>
    );
};
export default SignUp;

