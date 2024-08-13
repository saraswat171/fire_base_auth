'use client'

import {  Stack } from '@mui/material'
import React, { useState } from 'react'
import MenuAppBar from './NavbarComponent/Navbar';
import TemporaryDrawer from './Drawer/Drawer';

function Dashboard () {
    const [opencontrol , setOpenControl]=useState(false)
    console.log('opencontrol: ', opencontrol);
    const handleMenuClick=()=>{
    setOpenControl(!opencontrol);
    }
return (
<Stack direction="column" sx={{height:'100%'}}>
    <MenuAppBar onMenuClick={handleMenuClick}/>
    <TemporaryDrawer open={opencontrol} onMenuClick={handleMenuClick} />
</Stack>
 )
}
export default Dashboard