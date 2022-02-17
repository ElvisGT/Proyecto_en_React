import React from 'react';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound.js';


function App(){
    return (
        <BrowserRouter>
            <Layout>
                    <Routes>
                        <Route exact path='/badges' element={<Badges/>}/>
                        <Route exact path='/badges/new' element={<BadgeNew/>}/>
                        <Route exact path='/' element={<NotFound/>}/>
                    </Routes>
            </Layout>          
        </BrowserRouter>

    );
}

export default App;