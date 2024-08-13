
import LogIn from "@/component/Login"
import LoginBg from '@/assests/images/LoginBG.jpg'
import  Box  from "@mui/material/Box";

export default function Home() {
  return (
    <Box  sx={{ backgroundImage: `url(${LoginBg?.src})`, height: '100svh', width: '100svw' }}>
      <LogIn />
    </Box>
  );
}    
