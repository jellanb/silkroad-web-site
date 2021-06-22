import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Main from './pages/Main'
import SingUp from './pages/SingUp';
import SingIn from './pages/SingIn';
import Download from './pages/Download';
import Reload from './pages/Reload';
import Politics from './pages/Politics';
import { UserContext } from './hooks/UserContext';


export default function SilkRoadAllianzApp (){
    const [userCtx, setUserCtx] = useState({})

    return (
        <UserContext.Provider value={{userCtx, setUserCtx}}>
        <React.Fragment>            
            <Router>
            <Header/>
                <Switch>
                    <Route exact path='/'>
                        <Main/>
                    </Route>
                    <Route exact path='/singUp'>
                        <SingUp/>
                    </Route>
                    <Route exact path='/singIn'>
                        <SingIn/>
                    </Route>
                    <Route exact path='/reload'>
                        <Reload/>
                    </Route>                    
                    <Route exact path='/download'>
                        <Download/>
                    </Route>
                    <Route exact path='/politics'>
                        <Politics/>
                    </Route>
                </Switch>
            </Router>
            <Footer title="Silkroad Survival" description="Servidor Privado" />
        </React.Fragment>
        </UserContext.Provider>
    );
}

