import React, { useState } from 'react';
import Flowers from './components/flowersList';
import Header from './components/header';

import api from "./api"

const App = () => {

    const [flowers, setFlowers] = useState(api.flowers.fetchAll())
    return ( 
    <div>
        <Header/>
        <Flowers flowers={flowers}/>
    </div> 
    )
}
 
export default App;