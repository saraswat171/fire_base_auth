import  Box  from "@mui/material/Box";
import "./style.css";
import { Typography } from "@mui/material";
import LogInButton from "./LoginButton";

const LogIn = () => {
  return (
    <Box className="login-container" display={'flex'} flexDirection={'column'}>
     
<Typography>Its me here !!</Typography>
<LogInButton/>
<Typography>Sign In using above button </Typography>
    </Box>
  );
};
export default LogIn;
