import React, { Component } from 'react';

import Aux from '../Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false,
        showHamburguer: false
    }
    


    sideDrawerCloseHandler = () =>{
        this.setState({showSideDrawer: false});
    }

    sideDrawerOpenHandler = () =>{
        this.setState({showSideDrawer: true});
    }

    render() { 
        return ( 
                <Aux>
       <Toolbar openSideDrawer={this.sideDrawerOpenHandler} />
       <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
    <main className={classes.Content}>
        {this.props.children}
    </main>  
    </Aux>
         );
    }
}
 
export default Layout;
