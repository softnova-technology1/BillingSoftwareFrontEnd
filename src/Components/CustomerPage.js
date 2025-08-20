import { Box, Button, Grid, MenuItem, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { useNavigate } from 'react-router-dom';

const CustomerPage = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [errorgst, setErrorGST] = useState(false);
    const [phone, setPhone] = useState("");
    const [state, setState] = useState("");
    const [pin, setPin] = useState("");
    const [gstin, setGstin] = useState("");
    const [errorPhone, setErrorPhone] = useState(false);

    const [customerForm, setCustomerForm] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phone: "",
        gstNumber: "",
    })

    const navigate = useNavigate("")

    const states = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
        "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
        "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
        "Uttar Pradesh", "Uttarakhand", "West Bengal",
        "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
        "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
    ];

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setError(!emailRegex.test(value));
    };

    const handleEnter = (e) => {
        const val = e.target.value;
        if (!/^\d*$/.test(val)) return;
        if (val.length > 10) return;
        setPhone(val)
        setErrorPhone(val.length !== 10);
    };

    const handlePin = (e) => {
        const num = e.target.value;
        setPin(num)
        const pinvalid = /^\d{7}$/;

        if (pinvalid.test(num)) {
            setPin(pin)
        }
    };

    const handleGST = (e) => {
        const gst = e.target.value.toUpperCase();
        if (gst.length > 15) return;
        setGstin(gst);

        const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

        if (gst.length === 15) {
            setErrorGST(!gstRegex.test(gst));
        } else {
            setErrorGST(true);
        }
    }

    const handleSaveCustomer = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/customers`,
            {
                method: "POST",
                headers: { "content-type": "application/json" },
            }

        )
        console.log(response);
        navigate('/customer-entry')
    }

    const handleSaveDetails = (item, value) => {
        setCustomerForm((prev) => {
            return {
                ...prev,[item]:value
            }
        })
    }

    return (
        <>
            <div style={{ padding: '30px' }}>
                <Typography variant="h4" sx={{ py: 2 }}>New Customer</Typography>
                <Box sx={{ flexGrow: 1 }} onSubmit={handleSaveDetails}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 6, md: 8 }} >
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2} sx={{ py: 2 }}>
                                    <Grid item xs={12} sm={3} md={2} sx={{ display: "flex", alignItems: "center" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <label style={{ fontSize: "15px", fontWeight: 600, width: "120px", color: '#030b58ff' }}>
                                                Customer Name
                                            </label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <TextField
                                                    required
                                                    label="Enter First Name"
                                                    size="small"
                                                    value={customerForm.firstName}
                                                    sx={{
                                                        width: {
                                                            xs: "320px",
                                                            sm: "450px",
                                                            md: "242px"
                                                        }
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    label="Enter Last Name (optional)"
                                                    size="small"
                                                    value={customerForm.lastName}
                                                    sx={{
                                                        width: {
                                                            xs: "320px",
                                                            sm: "450px",
                                                            md: "242px"
                                                        }
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2} sx={{ py: 2 }}>
                                    <Grid item xs={12} sm={3} md={2} sx={{ display: "flex", alignItems: "center" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <label style={{ fontSize: "15px", fontWeight: 600, width: "120px", color: '#030b58ff' }}>
                                                Company Name
                                            </label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={9} md={10}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Enter Company Name"
                                            value={customerForm.companyName}
                                            size="small" sx={{
                                                width: {
                                                    xs: "320px",
                                                    sm: "450px",
                                                    md: "500px"
                                                }
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2} sx={{ py: 2 }}>
                                    <Grid item xs={12} sm={3} md={2} sx={{ display: "flex", alignItems: "center" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <label style={{ fontSize: "15px", fontWeight: 600, width: "120px", color: '#030b58ff' }}>
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
                                                value={customerForm.email}
                                                onChange={handleChange}
                                                error={error}
                                                helperText={error ? "Enter a valid email address" : ""}
                                                size="small" sx={{
                                                    width: {
                                                        xs: "320px",
                                                        sm: "450px",
                                                        md: "500px"
                                                    }
                                                }}
                                                InputProps={{
                                                    startAdornment: (
                                                        <EmailOutlinedIcon sx={{ color: "#030b58ff" }} />
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2} sx={{ py: 2 }}>
                                    <Grid item xs={12} sm={3} md={2} sx={{ display: "flex", alignItems: "center" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <label style={{ fontSize: "15px", fontWeight: 600, width: "120px", color: '#030b58ff' }}>
                                                Contact Number
                                            </label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={9} md={10}>
                                        <TextField
                                            type='number'
                                            required
                                            id="outlined-required"
                                            label="Enter Contact Number"
                                            value={customerForm.phone}
                                            onChange={handleEnter}
                                            error={errorPhone}
                                            helperText={errorPhone ? "Phone number must be exactly 10 digits" : ""}
                                            size="small" sx={{
                                                width: {
                                                    xs: "320px",
                                                    sm: "450px",
                                                    md: "500px"
                                                }
                                            }}
                                            InputProps={{
                                                startAdornment: (
                                                    <LocalPhoneOutlinedIcon sx={{ color: "#030b58ff" }} />
                                                ),
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2} sx={{ py: 2 }}>
                                    <Grid item xs={12} sm={3} md={2} sx={{ display: "flex", alignItems: "center" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <label style={{ fontSize: "15px", fontWeight: 600, width: "120px", color: '#030b58ff' }}>
                                                GSTIN/UIN <span style={{ color: 'grey' }}>(optional)</span>
                                            </label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={9} md={10}>
                                        <TextField
                                            id="outlined-required"
                                            label="Enter GSTIN Number"
                                            value={customerForm.gstNumber}
                                            onChange={handleGST}
                                            error={errorgst}
                                            helperText={errorgst ? "Invalid GSTIN Number" : ""}
                                            size="small" sx={{
                                                width: {
                                                    xs: "320px",
                                                    sm: "450px",
                                                    md: "500px"
                                                }
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Typography variant='h4' sx={{ py: 2 }}>Address</Typography>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2} sx={{ py: 2 }}>
                                    <Grid item xs={12} sm={3} md={2} sx={{ display: "flex", alignItems: "center" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <label style={{ fontSize: "15px", fontWeight: 600, width: "120px", color: '#030b58ff' }}>
                                                Billing Address
                                            </label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={9} md={10}>
                                        <TextField
                                            required
                                            type='address'
                                            id="outlined-required"
                                            multiline
                                            rows={5}
                                            label="Enter Address "
                                            size="small" sx={{
                                                width: {
                                                    xs: "320px",
                                                    sm: "450px",
                                                    md: "500px"
                                                }
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2} sx={{ py: 2 }}>
                                    <Grid item xs={12} sm={3} md={2} sx={{ display: "flex", alignItems: "center" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <label style={{ fontSize: "15px", fontWeight: 600, width: "120px", color: '#030b58ff' }}>
                                                City
                                            </label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={9} md={10}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="City Name"
                                            size="small" sx={{
                                                width: {
                                                    xs: "320px",
                                                    sm: "450px",
                                                    md: "500px"
                                                }
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2} sx={{ py: 2 }}>
                                    <Grid item xs={12} sm={3} md={2} sx={{ display: "flex", alignItems: "center" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <label style={{ fontSize: "15px", fontWeight: 600, width: "120px", color: '#030b58ff' }}>
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
                                                    md: "500px"
                                                }
                                            }}
                                            select
                                            fullWidth
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
                                    <Grid item xs={12} sm={3} md={2} sx={{ display: "flex", alignItems: "center" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <label style={{ fontSize: "15px", fontWeight: 600, width: "120px", color: '#030b58ff' }}>
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
                                            onChange={handlePin}
                                            size="small" sx={{
                                                width: {
                                                    xs: "320px",
                                                    sm: "450px",
                                                    md: "500px"
                                                }
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
            <div style={{ borderTop: '2px solid #e1e1e1' }}>
                <Button variant="contained" color='success' sx={{ marginTop: '20px', marginLeft: '20px' }} onClick={handleSaveCustomer}>Save</Button>
                <Button variant="outlined" color='success' sx={{ marginTop: '20px', marginLeft: '20px' }}>Cancel</Button>
            </div>
        </>
    )
}

export default CustomerPage