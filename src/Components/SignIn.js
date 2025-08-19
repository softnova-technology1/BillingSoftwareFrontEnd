import { Grid, TextField, Button, Switch, useMediaQuery } from "@mui/material";
import classes from "../Styles/SignIn.module.css";
import signInImage from "../Images/SignInPageimage.png";
import { useNavigation, Link, Form, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function SignIn() {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isTab = useMediaQuery("(max-width:1000px)");
  const navigationState = navigation.state === "submitting";
  const label = { inputProps: { "aria-label": "Size switch demo" } };
  const [signIndata, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [checked, setChecked] = useState(true);
  const [error, setError] = useState({
    status: false,
    msg: "",
  });
  function onChangeHandler(identifier, value) {
    setError({
      status: false,
      msg: "",
    });
    setSignInData((pre) => {
      return {
        ...pre,
        [identifier]: value,
      };
    });
  }
  async function onSubmitHandler(e) {
    e.preventDefault();
    console.log(signIndata);
    const { email, password } = signIndata;
    if (
      !email ||
      !password ||
      email.trim().length === 0 ||
      password.trim().length === 0
    ) {
      return setError({
        status: true,
        msg: "Please enter both Email and Password",
      });
    }
    const data = {
      email: email,
      password: password,
      rememberMe: checked,
    };

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/users/sign-in`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    const responseVal = await response.json();
    if (!response.ok) {
      return setError({
        status: false,
        msg: responseVal.message || "Server Error Failed to submit",
      });
    } else {
      checked
        ? localStorage.setItem("token", responseVal.token)
        : sessionStorage.setItem("token", responseVal.token);
      navigate("/");
    }
  }
  return (
    <Grid container className={classes.signInOuterContainer}>
      <Grid
        size={{ xs: 12, sm: 12, md: isTab ? 12 : 6 }}
        className={classes.outerContainerWidth}
      >
        <Grid container spacing={2} className={classes.containerWidth}>
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <p className={classes.signInTitle}>Sign In</p>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <p className={classes.textBelowTitle}>
              Enter Your User Id and password to sign in
            </p>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <Form onSubmit={(e) => onSubmitHandler(e)} method="POST">
              {error.status && <p className={classes.errorMsg}>{error.msg}</p>}
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                  <div className={classes.flexContainer}>
                    <label htmlFor="Email" className={classes.labelText}>
                      User ID
                    </label>
                    <TextField
                      id="email"
                      label="Enter Email"
                      name="email"
                      value={signIndata.email}
                      onChange={(e) => onChangeHandler("email", e.target.value)}
                      variant="outlined"
                      sx={{
                        width: "100%",
                      }}
                    />
                  </div>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                  <div className={classes.flexContainer}>
                    <label htmlFor="password" className={classes.labelText}>
                      Password
                    </label>
                    <TextField
                      id="password"
                      label="Enter Password"
                      name="password"
                      onChange={(e) =>
                        onChangeHandler("password", e.target.value)
                      }
                      value={signIndata.password}
                      variant="outlined"
                      sx={{
                        width: "100%",
                      }}
                      type="password"
                    />
                  </div>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                  <Grid container>
                    <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          marginLeft: "-10px",
                        }}
                      >
                        <Switch
                          {...label}
                          checked={checked}
                          name="rememberMe"
                          onChange={(e) => setChecked((pre) => !pre)}
                        />
                        <span style={{ fontWeight: 600, fontSize: "1.2rem" }}>
                          Remember me
                        </span>
                      </div>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          marginTop: "10px",
                        }}
                      >
                        <Link
                          style={{
                            fontSize: "1.2rem",
                            float: "right",
                            color: "#21a1fe",
                            fontWeight: 700,
                          }}
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                  <div>
                    <Button
                      type="submit"
                      variant="contained"
                      className={`${classes.buttonColorSet}`}
                      disabled={navigationState}
                      sx={{ fontSize: "1.5rem" }}
                    >
                      {navigationState ? "Submitting" : "Sign In"}
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Form>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <p style={{ color: "grey", fontSize: "1.3rem" }}>
              Do you have an account?{" "}
              <Link to="/sign-up" style={{ color: "#21a1fe", fontWeight: 700 }}>
                Sign Up
              </Link>
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 12, md: 6 }}
        style={{ display: isTab ? "none" : "" }}
      >
        <img
          src={signInImage}
          alt="signIn_Image"
          className={classes.gridContainer2}
        />
      </Grid>
    </Grid>
  );
}
