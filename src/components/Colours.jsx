import React, {useState} from "react";
import { Grid, Card, CardContent, TextField, Button } from "@mui/material";

export const Colours=()=>{
    const [clr, setClr]=useState("orange");
    const [data, setData]=useState(["yellow","brown"]);
    return(
        <Grid container spacing={2} sx={{marginBottom:5}}>
            <Grid item xs={8}>
                <TextField onChange={(e)=>setClr(e.target.value)} variant="outlined" label="Enter Colour" fullWidth />
            </Grid>
            <Grid item xs={4}>
                <Button onClick={()=>setData([...data,clr])} sx={{height:55}} fullWidth variant="contained" color="success">Submit</Button>
            </Grid>
            {
                data.map((item)=>
                    <Grid item xs={3} >
                        <Card sx={{bgcolor: item , height:100}}>
                            <CardContent>
                                {item}
                            </CardContent>
                        </Card>
                    </Grid>
                )
            }
        </Grid>
    );
}