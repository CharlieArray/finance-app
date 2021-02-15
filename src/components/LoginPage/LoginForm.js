import React, { useContext } from "react";
import { BoxContainer } from "./CommonComponents";
import { Marginer } from "../marginer/index";
import {
  FormContainer,
  Input,
  MutedLink,
  BoldLink,
  SubmitButton,
} from "./CommonComponents";
import { AccountContext } from "./AccountContext";
import { withRouter } from "react-router-dom";
import TokenService from '../../services/Token-Service'

function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8000/users", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user_name: event.target.user_name.value,
        password: event.target.password.value,
      }),
    })
    .then(res => res.json())
    .then(data => {
      TokenService.saveAuthToken(data.authToken)
      props.history.push("/main");
    })
  };

  return (
    <BoxContainer>
      <FormContainer onSubmit={onSubmit}>
        <Input type="username" placeholder="Username" name="user_name" />
        <Input type="password" placeholder="Password" name="password" />
        <Marginer direction="vertical" margin={5} />
        <MutedLink href="#">Forgot your password</MutedLink>
        <Marginer direction="vertical" margin="1.6 em" />
        <SubmitButton type="submit">Sign in</SubmitButton>
        <MutedLink href="#">
          Don't have account?
          <BoldLink href="#" onClick={switchToSignup}>
            Sign up
          </BoldLink>
        </MutedLink>
      </FormContainer>
    </BoxContainer>
  );
}

export default withRouter(LoginForm);
