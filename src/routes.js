import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart'
import Men from './Components/Men/Men'
import Women from './Components/Women/Women'
import Kids from './Components/Kids/Kids'
import Dashboard from './Components/Dashboard/Dashboard'
import Shoes from './Components/allItems/shoes'
import Tops from './Components/allItems/tops'
import Pants from './Components/allItems/pants'
import Hoodies from './Components/allItems/hoodies'
import Cleats from './Components/allItems/cleats'
import Other from './Components/allItems/other'
import MenShoes from './Components/menItems/menShoes'
import MenTops from './Components/menItems/MenTops'
import MenPants from './Components/menItems/menPants'
import MenHoodies from './Components/menItems/menHoodies'
import MenCleats from './Components/menItems/menCleats'
import MenOther from './Components/menItems/menOther'
import WomenShoes from './Components/womenItems/womenShoes'
import WomenTops from './Components/womenItems/womenTops'
import WomenPants from './Components/womenItems/womenPants'
import WomenHoodies from './Components/womenItems/womenHoodies'
import WomenCleats from './Components/womenItems/womenCleats'
import WomenOther from './Components/womenItems/womenOther'
import FullInv from './Components/fullInv/fullInv'
import Login from './Components/Login/Login'


export default (
    < Switch >
        <Route component={Dashboard} path='/' exact />
        <Route component={Men} path='/men' exact />
        <Route component={Women} path='/women' exact />
        <Route component={Kids} path='/kids' exact />
        <Route component={Cart} path='/cart' exact />
        <Route component={Shoes} path='/inventory/shoes' />
        <Route component={Tops} path='/inventory/tops' />
        <Route component={Pants} path='/inventory/pants' />
        <Route component={Hoodies} path='/inventory/hoodies' />
        <Route component={Cleats} path='/inventory/cleats' />
        <Route component={Other} path='/inventory/other' />
        <Route component={MenShoes} path='/men/shoes' />
        <Route component={MenTops} path='/men/tops' />
        <Route component={MenPants} path='/men/pants' />
        <Route component={MenHoodies} path='/men/hoodies' />
        <Route component={MenCleats} path='/men/cleats' />
        <Route component={MenOther} path='/men/other' />
        <Route component={WomenShoes} path='/women/shoes' />
        <Route component={WomenTops} path='/women/tops' />
        <Route component={WomenPants} path='/women/pants' />
        <Route component={WomenHoodies} path='/women/hoodies' />
        <Route component={WomenCleats} path='/women/cleats' />
        <Route component={WomenOther} path='/women/other' />
        <Route component={FullInv} path='/inventory' exact />
        <Route component={Login} path='/login' />
    </Switch>
)