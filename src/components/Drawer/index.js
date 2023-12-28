import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { TextField, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function ConnectionDrawer(props) {
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        props.handleOpenDrawer()
    };

    const list = (anchor) => (
        <Box
            sx={{ width: window.innerWidth / 3, padding: "10px", display: "flex", flexDirection: "column", gap: "10px" ,justifyContent:"center",alignItems:"center"}}
            role="presentation"
        //onClick={toggleDrawer(anchor, false)}
        //onKeyDown={toggleDrawer(anchor, false)}
        >
            <Typography variant="h5" sx={{ width: "100%", textAlign: "center", fontFamily: "Lato", fontStyle: "normal" }}>Thank You soo much to connect with me.</Typography>
            <Divider sx={{ width:"100%"}}/>
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: `${window.innerHeight / 2}px`,
                gap: "10px"
            }}>
                <TextField id="outlined-basic" label="Email || Gmail" variant="outlined" sx={{ width: "80%", fontFamily: "Lato", fontSize: "10px", fontStyle: "normal" }} />
                <span style={{ fontFamily: "Lato", fontWeight: 400, }}>Message:</span>
                <textarea style={{
                    width: "90%",
                    height: "90%",
                    padding: "10px"
                }} />
            </div>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{ width:"50%"}}>
                Upload file
                <VisuallyHiddenInput type="file" />
            </Button>
            <Button type='submit' variant="contained" sx={{ top:"20%"}}>
                Submit
            </Button>
        </Box>
    );

    return (
        <div style={{ width: `${window.innerWidth}px` }}>
            <React.Fragment key={""}>
                <Drawer
                    anchor={"right"}
                    open={props.openDrawer}
                    onClose={toggleDrawer("right", false)}
                >
                    {list("right")}
                </Drawer>
            </React.Fragment>
        </div>
    );
}

export {
    ConnectionDrawer
}
