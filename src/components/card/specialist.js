import React from "react";
import { CardMedia, IconButton, ListItemText, PropTypes } from "@mui/material";
import { Box, Card, CardContent, Button, Typography, CardHeader, Avatar, Divider } from "@mui/material"
import { MoreVert } from "@mui/icons-material";
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

function Specialist(props) {
    return (
        <Card sx={{ minHeight: 500, width: 300 }}>
            <CardHeader
                avatar={
                    <Avatar>
                        <CardMedia
                            component={"img"}
                            height={"50"}
                            image={props.imgSRC}
                            alt="specialist_logo"
                        />
                    </Avatar>
                }
                title={props.title}
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
            />
            <Divider />
            <CardContent>
                <Typography variant="h6" sx={{ color: "red", fontFamily: "Lato", fontStyle: "normal", width: "100%", textAlign: "center" }} >
                    {props.description}
                </Typography>
                <Typography variant="h5" sx={{ fontFamily: "Lato", width: "100%", textAlign: "center", marginTop: "12px" }}>
                    Languages I speak:
                </Typography>
                {
                    Array.isArray(props.tech) && props.tech.map((item, idx) => (
                        <Typography key={idx} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "4px" }}>
                            <SubdirectoryArrowRightIcon sx={{ color: "red" }} />
                            <ListItemText primary={item} />
                        </Typography>
                    ))
                }                
            </CardContent>
        </Card>
    )
}
Specialist.prototype = {
    imgURL: ""

}

export default Specialist

