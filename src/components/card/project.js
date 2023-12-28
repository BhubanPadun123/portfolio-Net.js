import React, { useState } from "react";
import "./project.css"
import homeRent from "../pictures/homeRent.jpg"
import { Button,IconButton, Typography,Tooltip,Popover, Divider } from "@mui/material";
import { Close, GitHub, More} from "@mui/icons-material";

function Project(props) {
    const [state,setState] = useState({
        anchorEl:null,
        isPopoverOpen : false
    })
    const handleOpenPopover=(event)=>{
        setState((prevState) => ({
            ...prevState,
            anchorEl : event.currentTarget,
            isPopoverOpen: true
        }))
    }
    const handlePopoverClosed =()=> {
        setState((prevState) => ({
            ...prevState,
            isPopoverOpen: false
        }))
    }
    return (
        <div className="card">
            <Typography sx={{ width:"100%",textAlign:"left"}}>
                <IconButton onClick={handleOpenPopover}>
                    <Tooltip title="More About Project">
                        <More />
                    </Tooltip>                    
                </IconButton>
            </Typography>
            <div className="cardWrapper" style={{
                width: "300px",
                height: "400px",
                backgroundImage: `url(${homeRent})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px"
            }}>
                <Typography variant="h6" sx={{ width: "80%", textAlign: "center", color: "white", backgroundColor: "GrayText", borderRadius: "4px" }}>
                    Room Rent Search Web App.
                </Typography>
                <Typography sx={{ display:"flex",gap:"4px"}}>
                    <Button variant="outlined">
                        Live
                    </Button>
                    <Button variant="outlined"><GitHub /></Button>
                </Typography>
            </div>
            <Popover 
               open = {state.isPopoverOpen}
               anchorEl={state.anchorEl}
               onClose={handlePopoverClosed}
               anchorOrigin={{
                vertical:"bottom",
                horizontal:"center"
               }}
            >
                <div style={{
                    width:"50vw",
                    display:"flex",
                    justifyContent:"space-between",                   
                    margin:"10px",
                }}
                >
                    <Typography sx={{width:"100%",textAlign:"center",fontFamily:"Lato",fontStyle:"normal",fontWeight:400,color:"green"}}>More about project: name</Typography>
                    <IconButton sx={{ textAlign:"center"}}>
                        <Close />
                    </IconButton>
                </div>    
                <Divider sx={{ border:"2px solid red"}} />
                <div style={{
                    padding:"10px"
                }}>
                    <Typography>
                        Project Objective:- Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br/>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </div>
                <div style={{
                    padding:"10px"
                }}>
                    <Typography>Use Cases of the Project :- </Typography>
                    <ul>
                        <li>A.</li>
                        <li>B.</li>
                        <li>C.</li>
                        <li>D.</li>
                        <li>E.</li>
                        <li>F.</li>
                    </ul>
                </div>
                <div style={{
                    padding:"10px"
                }}>
                    <Typography>Technology used in Project:</Typography>
                    <ul>
                        <li>A.</li>
                        <li>B.</li>
                        <li>C.</li>
                        <li>D.</li>
                        <li>E.</li>
                        <li>F.</li>
                    </ul>
                </div>
            </Popover>
        </div>
    )
}

export default Project