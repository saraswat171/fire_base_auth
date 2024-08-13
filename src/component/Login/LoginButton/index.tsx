import  Box  from "@mui/material/Box";
import "./style.css";
import { Button, Typography } from "@mui/material";

const LogInButton = () => {
  return (
    <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} >
        <Button className="login-button-container" >      
              <Typography sx={{ color: "#0000008A" }}  id="login-button-title">
          Sign In with Google
        </Typography></Button>
    </Box>
  );
};
export default LogInButton;
