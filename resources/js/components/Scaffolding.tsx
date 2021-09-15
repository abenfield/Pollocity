import * as React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Navigation from '../Navigation/Navigation';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes } from '../Navigation/Routes';


function Scaffolding() {
    
    return (
        <div>
        <Router>
            <ChakraProvider>
                <Navigation>
                <Routes/>
                </Navigation>
            </ChakraProvider>
        </Router>
        </div>
        
        );
    
}

export default Scaffolding;

