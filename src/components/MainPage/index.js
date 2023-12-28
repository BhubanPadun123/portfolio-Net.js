import React from "react";
import { PropTypes } from "@mui/material";
import { Typography } from "@mui/material"
import avater from "../pictures/avatar.svg"
import background from "../pictures/background.svg"
import Specialist from "../card/specialist";
import frontEnd from "../pictures/frontend.png"
import backend from "../pictures/background.svg"
import mern from "../pictures/mern.png"
import fullStack from "../pictures/fullStask.png"
import mentor from "../pictures/mentor.png"


function MainPage() {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography variant="h3" sx={{ fontStyle: "italic", fontFamily: "Lato", width: "100%", textAlign: "center" }}>Designer, Web Developer & Mentor</Typography>
            <Typography variant="h6" sx={{ fontStyle: "normal", fontFamily: "monospace", width: "100%", textAlign: 'center' }}>I design and code beautifully simple things, and I love what I do.</Typography>
            <Typography sx={{ width: "100%", textAlign: "center", marginTop: "60px" }}>
                <img src={avater} alt="avter" style={{ width: "200px" }} />
            </Typography>
            <div>
                <Typography sx={{ width: "100%", textAlign: "center", paddingTop: "60px" }}>
                    <img src={background} alt="background" style={{ width: "60%" }} />
                </Typography>
                <Typography sx={{ background: "#6E07F3", minHeight: "400px",marginTop:"-10px",paddingTop:"100px" }}>
                    <Typography variant="h4" sx={{ fontFamily:"Lato",width:"100%",  textAlign:"center",color:"white",padding:"4px"}}>Hi, I’m Bhuban Padun. Nice to meet you.</Typography>
                    <Typography variant="h6" sx={{fontFamily:"Lato",width:"100%",textAlign:"center",color:"white",padding:"2px"}} >Since beginning my journey as a freelance designer over 2 years ago now full time software Developer, I've done remote</Typography>
                    <Typography variant="h6" sx={{fontFamily:"Lato",width:"100%",textAlign:"center",color:"white",padding:"2px"}}>work for agencies, consulted for startups, and collaborated with talented people to create</Typography>
                    <Typography variant="h6" sx={{fontFamily:"Lato",width:"100%",textAlign:"center",color:"white",padding:"2px"}}>digital products for both business and consumer use. I'm quietly confident, naturally</Typography>
                    <Typography variant="h6" sx={{fontFamily:"Lato",width:"100%",textAlign:"center",color:"white",padding:"2px"}}>curious, and perpetually working on improving my chops one design problem at a time.</Typography>
                </Typography>
            </div>
            <div style={{ position:"relative",display:"flex",gap:"4px",width:"100%",justifyContent:"center",zIndex:"10px",marginTop:"-150px"}}>
                <Specialist 
                   title = {"Front-End development."}                  
                   imgSRC = {frontEnd}
                   description = {"I like to code things from scratch, and enjoy bringing ideas to life in the browser."}
                   tech = {["JavaScript.","HTML.","CSS | bootstrap | talwin.","MUI.","React.js.","Redux-toolkit.","Firebase.","Typescript."]}
                />
                <Specialist 
                   title = {"Back-End Devepment."}
                   imgSRC = {mern}
                   description = "I like to code api logic from scratch,and enjoy bringing ideas to scallable and optimal api"
                   tech = {["Node.js.","Express.js.","MongoDB.","sql.","NoSql.","Java","RestApi.","github","gitlab"]}
                />
                <Specialist 
                   title={"MentorShip"}
                   imgSRC = {mentor}
                   tech = {["Math","DSA","Reasoning","Front-End development.","Back-End development.","4+ years experience"]}
                   description = "I genuinely care about people, and love helping fellow designers work on their craft."
                />
                {/* <Specialist />
                <Specialist />
                <Specialist /> */}

            </div>
        </div>
    )
}

MainPage.prototype = {

}

export default MainPage
