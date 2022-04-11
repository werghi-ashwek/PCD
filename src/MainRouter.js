import React from "react";
import Charts from "../src/components/Charts";

import {Container} from "react-bootstrap";
import {
  BrowserRouter as 
  Switch,
  Route,
} from "react-router-dom";

export default function MainRouter()
{
    return (
        <Switch>
            <Route exact path="/">
            <Container>
                <HomePg/>
                </Container>
            </Route>
            <Route exact path="/Men">
            <Container>
                <Menpg/>
                </Container>
            </Route>
        
            <Route exact path="/women">
            <Container>
                <WomenPg />
                </Container>
            </Route>
        </Switch>
    );
}