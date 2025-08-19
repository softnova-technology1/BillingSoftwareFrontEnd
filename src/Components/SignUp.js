import Grid from "@mui/material/Grid";
import classes from "../Styles/Signup.module.css";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Button from "@mui/material/Button";
import {
  Form,
  Link,
  useSubmit,
  useNavigation,
  redirect,
  useActionData,
} from "react-router-dom";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import {
  emailCheck,
  nameCheck,
  phoneNumberCheck,
  passwordCheck,
  confirmPasswordCheck,
} from "../util/validation";
export default function SignUp() {
  const [formdata, setFormData] = useState({
    comapanyName: "",
    phoneNumber: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyAddress: "",
  });
  const [hasEdit, setEdit] = useState({
    comapanyName: false,
    phoneNumber: false,
    userName: false,
    email: false,
    password: false,
    confirmPassword: false,
    companyAddress: false,
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [error, setError] = useState({
    status: false,
    msg: "",
  });
  const submit = useSubmit();
  const navigation = useNavigation();
  const actionData = useActionData();
  useEffect(() => {
    if (actionData) {
      if (actionData.startsWith("E11000")) {
        setError({
          status: true,
          msg: "Given Email is already registered .Please try to SignIn with Registered Email or perform SignUp with new Email",
        });
      } else {
        setError({
          status: true,
          msg: actionData,
        });
      }
    }
  }, [setError, actionData]);

  const navigationState = navigation.state === "submitting";
  const comapanyNameError =
    hasEdit.comapanyName && !nameCheck(formdata.comapanyName);
  const phoneNumberError =
    hasEdit.phoneNumber && !phoneNumberCheck(formdata.phoneNumber);

  const userNameError = hasEdit.userName && !nameCheck(formdata.userName);
  const emailError = hasEdit.email && !emailCheck(formdata.email);
  const passwordError = hasEdit.password && !passwordCheck(formdata.password);
  const passwordConfirmError =
    hasEdit.confirmPassword &&
    !confirmPasswordCheck(formdata.confirmPassword, formdata.password);
  const companyAddressError =
    hasEdit.companyAddress && !nameCheck(formdata.companyAddress);

  function onChangeHandler(value, identifier) {
    setError({
      status: false,
      msg: "",
    });
    setFormData((pre) => {
      return {
        ...pre,
        [identifier]: value,
      };
    });
    setEdit((pre) => {
      return {
        ...pre,
        [identifier]: false,
      };
    });
  }
  function onSubmitHandler(e) {
    e.preventDefault();
    const {
      comapanyName,
      companyAddress,
      phoneNumber,
      password,
      confirmPassword,
      userName,
      email,
    } = formdata;
    if (
      comapanyNameError ||
      phoneNumberError ||
      userNameError ||
      emailError ||
      passwordError ||
      passwordConfirmError ||
      companyAddressError ||
      comapanyName.trim().length === 0 ||
      companyAddress.trim().length === 0 ||
      password.trim().length === 0 ||
      confirmPassword.trim().length === 0 ||
      email.trim().length === 0 ||
      phoneNumber.trim().length === 0 ||
      userName.trim().length === 0
    ) {
      setError({
        status: true,
        msg: "Please enter valid value for all fields",
      });
      return;
    }

    submit(formdata, { method: "POST" });
  }
  function handleClickShowPassword(identifier, value) {
    setShowPassword((pre) => {
      return {
        ...pre,
        [identifier]: !value,
      };
    });
  }
  function onBlurHandler(identifier) {
    setEdit((pre) => {
      return {
        ...pre,
        [identifier]: true,
      };
    });
  }

  return (
    <>
      <Grid container className={`${classes.outerContainer}`}>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <div className={`${classes.background}`}></div>
          <div className={`${classes.SignUpTitleContainer}`}>
            <p className={`${classes.title}`}>Sign Up</p>
            <p className={`${classes.content}`}>
              Use this awesome forms to login or create new account in your
              project for free.
            </p>
          </div>
        </Grid>
        <Grid
          className={`${classes.formOuterGrid}`}
          size={{ xs: 12, sm: 12, md: 12 }}
        >
          <Form onSubmit={(e) => onSubmitHandler(e)} method="POST">
            <Grid container className={`${classes.formContainer}`} spacing={3}>
              <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                <p
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  Register With Us
                </p>
                {error.status && (
                  <p className={`${classes.errorMsg}`}>{error.msg}</p>
                )}
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextField
                  id="comapanyName"
                  label="Company Name"
                  name="comapanyName"
                  variant="outlined"
                  value={formdata.comapanyName}
                  onChange={(e) =>
                    onChangeHandler(e.target.value, "comapanyName")
                  }
                  onBlur={() => onBlurHandler("comapanyName")}
                  sx={{
                    width: "100%",
                  }}
                />
                {comapanyNameError && (
                  <p className={`${classes.errorMsg}`}>
                    Please Enter a Valid Company Name
                  </p>
                )}
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextField
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  variant="outlined"
                  slotProps={{
                    input: {
                      maxLength: 10,
                      pattern: "[0-9]{10}",
                    },
                  }}
                  onBlur={() => onBlurHandler("phoneNumber")}
                  onInput={(e) =>
                    (e.target.value = e.target.value
                      .replace(/[^0-9]/g, "")
                      .slice(0, 10))
                  }
                  value={formdata.phoneNumber}
                  onChange={(e) =>
                    onChangeHandler(e.target.value, "phoneNumber")
                  }
                  sx={{
                    width: "100%",
                  }}
                />
                {phoneNumberError && (
                  <p className={`${classes.errorMsg}`}>
                    Please Enter Valid Phone Number
                  </p>
                )}
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextField
                  id="userName"
                  label="UserName"
                  name="userName"
                  value={formdata.userName}
                  onChange={(e) => onChangeHandler(e.target.value, "userName")}
                  onBlur={() => onBlurHandler("userName")}
                  variant="outlined"
                  sx={{
                    width: "100%",
                  }}
                />
                {userNameError && (
                  <p className={`${classes.errorMsg}`}>
                    Please Enter Valid User Name
                  </p>
                )}
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextField
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  value={formdata.email}
                  onBlur={() => onBlurHandler("email")}
                  onChange={(e) => onChangeHandler(e.target.value, "email")}
                  sx={{
                    width: "100%",
                  }}
                />
                {emailError && (
                  <p className={`${classes.errorMsg}`}>
                    Please Enter Valid Email
                  </p>
                )}
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextField
                  id="password"
                  label="Password"
                  name="password"
                  type={`${showPassword.password ? "text" : "password"}`}
                  variant="outlined"
                  value={formdata.password}
                  onBlur={() => onBlurHandler("password")}
                  onChange={(e) => onChangeHandler(e.target.value, "password")}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              handleClickShowPassword(
                                "password",
                                showPassword.password
                              )
                            }
                            edge="end"
                          >
                            {showPassword.password ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{
                    width: "100%",
                  }}
                />
                {passwordError && (
                  <p className={`${classes.errorMsg}`}>
                    Password must be greater than or equal to 8 characters
                  </p>
                )}
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextField
                  id="confirmPassword"
                  label="Re-type Password"
                  name="confirmPassword"
                  type={`${showPassword.confirmPassword ? "text" : "password"}`}
                  value={formdata.confirmPassword}
                  onBlur={() => onBlurHandler("confirmPassword")}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              handleClickShowPassword(
                                "confirmPassword",
                                showPassword.confirmPassword
                              )
                            }
                            edge="end"
                          >
                            {showPassword.confirmPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                  onChange={(e) =>
                    onChangeHandler(e.target.value, "confirmPassword")
                  }
                  variant="outlined"
                  sx={{
                    width: "100%",
                  }}
                />
                {passwordConfirmError && (
                  <p className={`${classes.errorMsg}`}>Password mismatch</p>
                )}
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextField
                  id="companyAddress"
                  label="Company Address"
                  name="companyAddress"
                  variant="outlined"
                  value={formdata.companyAddress}
                  onChange={(e) =>
                    onChangeHandler(e.target.value, "companyAddress")
                  }
                  onBlur={() => onBlurHandler("companyAddress")}
                  multiline
                  rows={4}
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                  sx={{
                    width: "100%",
                  }}
                />
                {companyAddressError && (
                  <p className={`${classes.errorMsg}`}>
                    Please Enter Valid Company Address
                  </p>
                )}
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    className={`${classes.buttonColorSet}`}
                    disabled={navigationState}
                    style={{
                      width: "40%",
                      padding: "1rem",
                      fontSize: "1.3rem",
                    }}
                  >
                    {navigationState ? "Submitting" : "Sign Up"}
                  </Button>
                </div>
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ color: "grey", fontSize: "1.3rem" }}>
                    Already have an account? <Link to="/sign-in">Sign In</Link>
                  </p>
                </div>
              </Grid>
            </Grid>
          </Form>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export async function action({ request }) {
  const fd = await request.formData();
  const data = Object.fromEntries(fd.entries());
  console.log(data);
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/users/sign-up`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  const responseVal = await response.json();
  console.log(responseVal);
  if (!response.ok) {
    return responseVal.message || "Server Error Failed to submit";
  } else {
    if (responseVal.token) {
      localStorage.setItem("token", responseVal.token);
      return redirect("/");
    } else {
      return "Server Error Failed to submit";
    }
  }
}
