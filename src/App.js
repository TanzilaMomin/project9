import React from "react";
import { Card, CardContent, Divider } from "@mui/material" ;
import { Home } from "./components/Home";
import { Colours } from "./components/Colours";
import { Emp } from "./components/Emp";

function App() {
  return (
    <Card>
      <CardContent>
        {/* <Colours />
        <Divider />
        <Home />
        <Divider /> */}
        <Emp />
      </CardContent>
    </Card>
  );
}

export default App;
