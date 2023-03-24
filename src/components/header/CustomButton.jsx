import { useState } from "react";
import { Box, Button, Typography, styled, TextField } from "@mui/material";
import { Height, ShoppingCart } from "@mui/icons-material";
import Modal from "react-bootstrap/Modal";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { Link } from "react-router-dom";
import "./login.css";
import { ModalBody, ModalHeader } from "react-bootstrap";
const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
    align-items: center;
  }
`;
const Container = styled(Box)`
  display: flex;
`;

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  text-transforn: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;
export const CustomButton = () => {
  let model = {
    login: {
      heading: "Login",
      subHeading: " Get access to your  Orders,Wishlist and  Recommendations",
      buttonText: "Request OTP",
    },
    signup: {
      heading: "Looks like you're new here!",
      subHeading: " Sign up with your mobile number to get started",
      buttonText: "Continue",
    },
  };
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleStatus = () => setStatus(true);
  const handleStatusFalse = () => setStatus(false);

  const handleClick = () => {
    setShow(false);
    setStatus(false);
  };
  return (
    <>
      <Wrapper>
        <LoginButton variant="contained" onClick={handleShow}>
          Login
        </LoginButton>
        <Typography style={{ marginTop: 3, width: 135 }}>
          Become a Seller
        </Typography>
        <Typography style={{ marginTop: 3 }}>More</Typography>
        <Container>
          <ShoppingCart />
          <Typography>Cart</Typography>
        </Container>
      </Wrapper>
      <Modal
        modalClassName="modal-dialog"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        closeButton
      >
        {/* <ClearOutlinedIcon /> */}
        <div style={{ display: "flex" }}>
          <div className="leftdiv" style={{ height: "70vh" }}>
            <span className="logintext">
              {status ? model.signup.heading : model.login.heading}
            </span>
            <p className="para">
              <span className="loginbelowtext">
                {status ? model.signup.subHeading : model.login.subHeading}
              </span>
            </p>
          </div>
          <div className="rightdiv">
            <div>
              <div className="inputdiv">
                <TextField
                  className="inputtaglogin"
                  variant="standard"
                  label="Enter Email/Mobile number"
                />
              </div>
            </div>
            <span className="termspan">
              By continuing, you agree to Flipkart's{" "}
              <a href="" style={{ textDecoration: "none", color: "#2874f0;" }}>
                {" "}
                Terms of Use{" "}
              </a>
              and{" "}
              <a href="" style={{ textDecoration: "none", color: "#2874f0;" }}>
                {" "}
                Privacy Policy.
              </a>
            </span>
            <div>
              {" "}
              <button className="otpbutton">
                {status ? model.signup.buttonText : model.login.buttonText}
              </button>
              <span>
                {" "}
                {status ? (
                  <button className="exitingbutton" onClick={handleStatusFalse}>
                    Existing User? Log in
                  </button>
                ) : null}
              </span>
            </div>
          </div>
          <div>
            <ClearOutlinedIcon onClick={handleClick} />
          </div>
        </div>
        <div className="signatagdiv">
          {" "}
          <a className="signupatag text" onClick={handleStatus}>
            {" "}
            {status ? null : " New to Flipkart? Create an account"}
          </a>{" "}
        </div>
      </Modal>
    </>
  );
};
