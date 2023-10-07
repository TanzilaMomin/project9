import React,{useState} from "react";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";

export const Emp=()=>{
    const [name, setName]=useState("");
    const [data,setData]=useState(["Revan","Sameer"]);
    return(
        <Grid container spacing={3} sx={{marginTop: 5}}>
            <Grid item xs={8}>
                <TextField onChange={(e)=>setName(e.target.value)} variant="outlined" label="Enter Name" fullWidth />
            </Grid>
            <Grid item xs={4}>
                <Button sx={{height:"55px"}} onClick={()=>setData([...data,name])} variant="contained" color="success" fullWidth>Submit</Button>
            </Grid>
            {
                data.map((item)=>
                 <Grid item xs={3}>
                    <Card sx={{bgcolor: "skyblue"}}>
                        <CardContent>
                            <h2> Mr.{item.toUpperCase()}</h2>
                        </CardContent>
                    </Card>
                 </Grid>
                )
            }
        </Grid>
    );
}