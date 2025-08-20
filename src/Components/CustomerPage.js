import { Box, Button, Grid, MenuItem, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import {
  Form,
  redirect,
  useNavigation,
  useSubmit,
  useActionData,
} from "react-router-dom";

const CustomerPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [errorgst, setErrorGST] = useState(false);
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [formError, setFormError] = useState({
    status: false,
    msg: "",
  });
  const actionData = useActionData();

  const [gstin, setGstin] = useState("");
  const submit = useSubmit();
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];
  useEffect(() => {
    if (actionData) {
      setFormError({
        status: true,
        msg: actionData,
      });
    }
  }, [setFormError, actionData]);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError(!emailRegex.test(value));
  };

  const handleEnter = (e) => {
    const val = e.target.value;
    setPhone(val);
    const phvalid = /^\d{11}$/;

    if (phvalid.test(val)) {
      setPhone(phone);
    }
  };

  const handlePin = (e) => {
    const num = e.target.value;
    setPin(num);
    const pinvalid = /^\d{7}$/;

    if (pinvalid.test(num)) {
      setPin(pin);
    }
  };

  const handleGST = (e) => {
    const gst = e.target.value.toUpperCase();
    if (gst.length > 15) return;
    setGstin(gst);

    const gstRegex =
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    setErrorGST(gst.length === 15 && !gstRegex.test(gst));
  };
  function handleSubmit(e) {
    e.preventDefault();
    setFormError({
      status: false,
      msg: "",
    });
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());

    const {
      address,
      city,
      companyName,
      email,
      firstName,
      phone,
      pincode,
      state,
    } = data;
    if (
      address.trim().length === 0 ||
      city.trim().length === 0 ||
      companyName.trim().length === 0 ||
      email.trim().length === 0 ||
      firstName.trim().length === 0 ||
      phone.trim().length === 0 ||
      pincode.trim().length === 0 ||
      state.trim().length === 0
    ) {
      return setFormError({
        status: true,
        msg: "Please enter all the mandatory fields",
      });
    }
    submit(data, { method: "POST" });
  }
  function handleReset(e) {
    e.preventDefault();
    e.target.reset();
    setEmail("");
    setError(false);
    setErrorGST(false);
    setPhone("");
    setState("");
    setPin("");
    setGstin("");
  }
  return (
    <Form onSubmit={(e) => handleSubmit(e)} method="POST">
      <div style={{ padding: "30px" }}>
        <Typography variant="h4" sx={{ py: 2 }}>
          New Customer
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          {formError.status && (
            <p style={{ fontSize: "1.3rem", color: "red" }}>{formError.msg}</p>
          )}
          <Grid container spacing={2}>
            <Grid size={{ xs: 6, md: 8 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ py: 2 }}>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    md={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label
                        style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          width: "120px",
                          color: "#030b58ff",
                        }}
                      >
                        First Name
                      </label>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <TextField
                          label="Enter First Name"
                          name="firstName"
                          size="small"
                          sx={{
                            width: {
                              xs: "320px",
                              sm: "450px",
                              md: "242px",
                            },
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          label="Enter Last Name"
                          name="lastName"
                          size="small"
                          sx={{
                            width: {
                              xs: "320px",
                              sm: "450px",
                              md: "242px",
                            },
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ py: 2 }}>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    md={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label
                        style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          width: "120px",
                          color: "#030b58ff",
                        }}
                      >
                        Company Name
                      </label>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={9} md={10}>
                    <TextField
                      required
                      id="outlined-required"
                      label="Enter Company Name"
                      name="companyName"
                      size="small"
                      sx={{
                        width: {
                          xs: "320px",
                          sm: "450px",
                          md: "500px",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ py: 2 }}>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    md={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label
                        style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          width: "120px",
                          color: "#030b58ff",
                        }}
                      >
                        Email Address
                      </label>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={9} md={10}>
                    <Grid item xs={10}>
                      <TextField
                        required
                        id="email"
                        label="Email Address"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        error={error}
                        helperText={error ? "Enter a valid email address" : ""}
                        size="small"
                        sx={{
                          width: {
                            xs: "320px",
                            sm: "450px",
                            md: "500px",
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ py: 2 }}>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    md={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label
                        style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          width: "120px",
                          color: "#030b58ff",
                        }}
                      >
                        Contact Number
                      </label>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={9} md={10}>
                    <TextField
                      required
                      id="outlined-required"
                      label="Enter Contact Number"
                      name="phone"
                      value={phone}
                      onChange={handleEnter}
                      size="small"
                      sx={{
                        width: {
                          xs: "320px",
                          sm: "450px",
                          md: "500px",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ py: 2 }}>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    md={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label
                        style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          width: "120px",
                          color: "#030b58ff",
                        }}
                      >
                        GSTIN/UIN{" "}
                        <span style={{ color: "grey" }}>(optional)</span>
                      </label>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={9} md={10}>
                    <TextField
                      id="outlined-required"
                      label="Enter GSTIN Number"
                      value={gstin}
                      name="gstin"
                      onChange={handleGST}
                      error={errorgst && gstin.length > 0}
                      helperText={
                        errorgst && gstin.length > 0
                          ? "Invalid GSTIN Number"
                          : ""
                      }
                      size="small"
                      sx={{
                        width: {
                          xs: "320px",
                          sm: "450px",
                          md: "500px",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Typography variant="h4" sx={{ py: 2 }}>
                Address
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ py: 2 }}>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    md={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label
                        style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          width: "120px",
                          color: "#030b58ff",
                        }}
                      >
                        Billing Address
                      </label>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={9} md={10}>
                    <TextField
                      required
                      type="address"
                      id="outlined-required"
                      multiline
                      rows={5}
                      name="address"
                      label="Enter Address "
                      size="small"
                      sx={{
                        width: {
                          xs: "320px",
                          sm: "450px",
                          md: "500px",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ py: 2 }}>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    md={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label
                        style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          width: "120px",
                          color: "#030b58ff",
                        }}
                      >
                        City
                      </label>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={9} md={10}>
                    <TextField
                      required
                      id="outlined-required"
                      label="City Name"
                      name="city"
                      size="small"
                      sx={{
                        width: {
                          xs: "320px",
                          sm: "450px",
                          md: "500px",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ py: 2 }}>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    md={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label
                        style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          width: "120px",
                          color: "#030b58ff",
                        }}
                      >
                        State
                      </label>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={9} md={10}>
                    <TextField
                      sx={{
                        width: {
                          xs: "320px",
                          sm: "450px",
                          md: "500px",
                        },
                      }}
                      select
                      fullWidth
                      name="state"
                      label="Select State"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      size="small"
                    >
                      {states.map((s) => (
                        <MenuItem key={s} value={s}>
                          {s}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ py: 2 }}>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    md={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label
                        style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          width: "120px",
                          color: "#030b58ff",
                        }}
                      >
                        PIN Code
                      </label>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={9} md={10}>
                    <TextField
                      required
                      id="outlined-required"
                      label="Enter PIN Code"
                      value={pin}
                      name="pincode"
                      onChange={handlePin}
                      size="small"
                      sx={{
                        width: {
                          xs: "320px",
                          sm: "450px",
                          md: "500px",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Grid size={{ xs: 6, md: 4 }}></Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div style={{ borderTop: "2px solid #e1e1e1" }}>
        <Button
          variant="contained"
          sx={{
            marginTop: "20px",
            marginLeft: "20px",
            backgroundColor: "#217ffe",
            color: "white",
          }}
          type="submit"
        >
          {isSubmitting ? "Submitting" : "Save"}
        </Button>
        <Button
          variant="outlined"
          sx={{ marginTop: "20px", marginLeft: "20px", color: "#217ffe" }}
          type="button"
          onClick={(e) => handleReset(e)}
        >
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default CustomerPage;
export async function action({ request }) {
  const fd = await request.formData();
  const data = Object.fromEntries(fd.entries());
  const remember = JSON.parse(localStorage.getItem("remember"));
  let token = remember
    ? localStorage.getItem("token")
    : sessionStorage.getItem("token");

  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/customers`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  );
  const resValue = await response.json();

  if (!response.ok) {
    if (
      response.status === 500 &&
      resValue?.error?.name === "ValidationError"
    ) {
      const errMsg = `${resValue.error.message}`.split(":")[2];

      return errMsg;
    }
    return resValue.message || "Server Error Failed to submit";
  } else {
    return redirect("/");
  }
}
