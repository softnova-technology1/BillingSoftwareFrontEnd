import Grid from "@mui/material/Grid";
import classes from "../Styles/Signup.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Form, Link } from "react-router-dom";
import Footer from "./Footer";

export default function SignUp() {
  return (
    <>
      <Grid container className={`${classes.outerContainer}`}>
        <Grid size={{ xs: 12, md: 12 }}>
          <div className={`${classes.background}`}></div>
          <div className={`${classes.SignUpTitleContainer}`}>
            <p className={`${classes.title}`}>Sign Up</p>
            <p className={`${classes.content}`}>
              Use this awesome forms to login or create new account in your
              project for free.
            </p>
          </div>
        </Grid>
        <Grid className={`${classes.formOuterGrid}`} size={{ xs: 12, md: 12 }}>
          <Form>
            <Grid container className={`${classes.formContainer}`} spacing={3}>
              <Grid size={{ md: 12 }}>
                <p
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  Register With Us
                </p>
              </Grid>
              <Grid size={{ md: 6 }}>
                <TextField
                  id="outlined-basic"
                  label="Company Name"
                  name="comapanyName"
                  variant="outlined"
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>

              <Grid size={{ md: 6 }}>
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  name="phoneNumber"
                  type="number"
                  variant="outlined"
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid size={{ md: 6 }}>
                <TextField
                  id="outlined-basic"
                  label="UserName"
                  name="userName"
                  variant="outlined"
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid size={{ md: 6 }}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  name="email"
                  variant="outlined"
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid size={{ md: 6 }}>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid size={{ md: 6 }}>
                <TextField
                  id="outlined-basic"
                  label="Re-type Password"
                  name="confirmPassword"
                  type="password"
                  variant="outlined"
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid size={{ md: 6 }}>
                <TextField
                  id="outlined-basic"
                  label="Company Address"
                  name="companyAddress"
                  variant="outlined"
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
              </Grid>
              <Grid size={{ md: 12 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    className={`${classes.buttonColorSet}`}
                    style={{
                      width: "40%",
                      padding: "1rem",
                      fontSize: "1.3rem",
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
              </Grid>
              <Grid size={{ md: 12 }}>
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
