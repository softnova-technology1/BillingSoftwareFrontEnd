import classes from "../Styles/Footer.module.css";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Facebook, WhatsApp, Instagram } from "@mui/icons-material";
export default function Footer() {
  return (
    <Grid container className={`${classes.footerConatiner}`} spacing={2}>
      <Grid size={{ md: 12 }}>
        <div className={`${classes.flexConatiner}`}>
          <div className={`${classes.linkstyle}`}>
            <Link>Company</Link>
          </div>
          <div className={`${classes.linkstyle}`}>
            <Link>About Us</Link>
          </div>
          <div className={`${classes.linkstyle}`}>
            <Link>Team</Link>
          </div>
          <div className={`${classes.linkstyle}`}>
            <Link>Products</Link>
          </div>
          <div className={`${classes.linkstyle}`}>
            <Link>Blog</Link>
          </div>
          <div className={`${classes.linkstyle}`}>
            <Link>Pricing</Link>
          </div>
        </div>
      </Grid>
      <Grid size={{ md: 12 }}>
        <div className={`${classes.flexConatiner}`}>
          <div className={`${classes.linkstyle}`}>
            <Link>
              <Facebook sx={{ fontSize: 30 }} />
            </Link>
          </div>
          <div className={`${classes.linkstyle}`}>
            <Link>
              <WhatsApp sx={{ fontSize: 30 }} />
            </Link>
          </div>
          <div className={`${classes.linkstyle}`}>
            <Link>
              <Instagram sx={{ fontSize: 30 }} />
            </Link>
          </div>
        </div>
      </Grid>
      <Grid size={{ md: 12 }}>
        <div className={`${classes.flexConatiner}`}>
          <p className={`${classes.copyRight}`}>
            Copyright &copy; 2025 Softnova by Creators.
          </p>
        </div>
      </Grid>
    </Grid>
  );
}
