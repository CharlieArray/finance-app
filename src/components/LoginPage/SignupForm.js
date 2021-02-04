import React, { useContext } from "react";
import { BoxContainer } from "./CommonComponents";
import { Marginer } from "../marginer/index";
import {FormContainer,Input,MutedLink,BoldLink,SubmitButton} from "./CommonComponents";
import { AccountContext } from "./AccountContext";
import {withRouter} from 'react-router-dom'


 function SignupForm(props) {

  const {switchToSignin} = useContext(AccountContext);

  const onSubmit = (event) =>{
    event.preventDefault();
    props.history.push("/main")
  }

  return (
    <BoxContainer>
      <FormContainer onSubmit={onSubmit}>
        <Input type="text" placeholder="Username" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />

        <Marginer direction="vertical" margin={5} />
        {/* <MutedLink href="#">Forgot your password</MutedLink>
        <Marginer direction="vertical" margin="1.6 em" /> */}
        <SubmitButton type="submit" >Create Account</SubmitButton>
        <MutedLink href="#">
          Already have an account?<BoldLink href="#" onClick={switchToSignin}>Login</BoldLink>
        </MutedLink>
      </FormContainer>
    </BoxContainer>
  );
}

export default withRouter(SignupForm)