import classes from "../Styles/Footer.module.css";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Facebook, WhatsApp, Instagram } from "@mui/icons-material";
export default function Footer() {
  return (
    <Grid container className={`${classes.footerConatiner}`} spacing={2}>
      <Grid size={{ xs: 12, sm: 12, md: 12 }}>
        <div className={`${classes.flexConatiner}`}>
          <div className={`${classes.linkstyle}`}>
            <Link to="#">Company</Link>
          </div>
          <div className={`${classes.linkstyle}`}>
            <Link to="#">About Us</Link>
          </div>
          <div className={`${classes.linkstyle}`}>
            <Link to="#">Team</Link>
          </div>
          <div className={`${classes.linkstyle}`}>
            <Link to="#">Products</Link>
          </div>
          <div className={`${classes.linkstyle}`}>
            <Link to="#">Blog</Link>
          </div>
          <div className={`${classes.linkstyle}`}>
            <Link to="#">Pricing</Link>
          </div>
        </div>
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 12 }}>
        <div className={`${classes.flexConatiner}`}>
          <div className={`${classes.linkstyle}`}>
            <Link to="#">
              <Facebook sx={{ fontSize: 30 }} />
            </Link>
          </div>
          <div className={`${classes.linkstyle}`}>
            <Link to="#">
              <WhatsApp sx={{ fontSize: 30 }} />
            </Link>
          </div>
          <div className={`${classes.linkstyle}`}>
            <Link to="#">
              <Instagram sx={{ fontSize: 30 }} />
            </Link>
          </div>
        </div>
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 12 }}>
        <div className={`${classes.flexConatiner}`}>
          <p className={`${classes.copyRight}`}>
            Copyright &copy; 2025 Softnova by Creators.
          </p>
        </div>
      </Grid>
    </Grid>
  );
}
