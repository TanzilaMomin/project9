import React,{useState} from "react";
import { Grid, TextField, Button } from "@mui/material";

export const Home=()=>{
    const [cat, setCat]=useState("");
    const [data, setData]=useState(["Fashion","Cosmatics","Kids","Toys"]);
    return(
        <Grid container spacing={2} sx={{marginTop:5}}>
            <Grid item xs={8}>
                <TextField onChange={(e)=>setCat(e.target.value)} variant="outlined" label="Add Category" fullWidth />
            </Grid>
            <Grid item xs={4}>
                <Button onClick={()=>setData([...data,cat])} variant="contained" color="secondary" fullWidth sx={{height:55}}>Submit</Button>
            </Grid>
            {
                data.map((item)=>
                    <Grid item xs={2}>
                        <Button variant="outlined" fullWidth color="secondary">{item}</Button>
                    </Grid>
                )
            }
        </Grid>
    );
}