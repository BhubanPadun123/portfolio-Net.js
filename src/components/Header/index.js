import React from "react";
import { Button, PropTypes } from "@mui/material";
import logo from "../pictures/logo.png"
import { Typography } from "@mui/material"

function Header(props) {
    console.log("Header Props==>",props)
    return (
        <div style={{ width: "100%",display:"flex",justifyContent:"space-around",padding:"10px" }}>
            <Typography>
                <img src={logo} alt="logo" />
            </Typography>
            <div style={{display:"flex",height:"100%",alignItems:"center",gap:"8px"}}>
                <Typography variant="h4" sx={{fontFamily:"Lato"}}>
                    Mentorship
                </Typography>
                <Typography>
                    <Button sx={{ fontSize:"25px",fontFamily:"Lato"}} variant="outlined" onClick={()=> props.handleOpenDrawer()}>
                        Say Hello.
                    </Button>
                </Typography>
            </div>
        </div>
    )
}

Header.prototype = {

}

export default Header
