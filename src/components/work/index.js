import React from "react";
import { Typography } from "@mui/material"
import Project from "../card/project";


function WorkExperience(props) {
    return (
        <div style={{ width: "100%", paddingTop: "100px", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h4" sx={{ width: "100%", textAlign: 'center', fontFamily: "Lato", fontStyle: "bold" }}>My Recent Work.</Typography>
            <Typography variant="h5" sx={{ width: " 100%", textAlign: "center", fontFamily: "Lato" }}>Here are a few past projects I've worked on. Want to see more? <a onClick={() => props.handleOpenDrawer()} style={{ color: "red", cursor: "pointer" }}>Email me.</a></Typography>
            <div style={{ width: "100%", backgroundColor: "GrayText",display:"flex",justifyContent:"center" }}>
                <div style={{
                    width: "60%",
                    // display:"flex",
                    // justifyContent:"center",
                    // alignItems:"center",
                    display: "grid",
                    gridTemplateColumns: "auto auto auto",
                    paddingTop: "60px"
                }}>
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </div>
    )
}

export default WorkExperience