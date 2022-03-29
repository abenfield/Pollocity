import {
    BrowserRouter as Router,
} from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react';
import { Routes } from 'routes';


function Scaffolding() {
    
    return (
        <div>
        <Router>
            <ChakraProvider>
                <Routes/>
            </ChakraProvider>
        </Router>
        </div>
        
        );
    
}

export default Scaffolding;

