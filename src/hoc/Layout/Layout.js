import React, { Component } from 'react';

import Auxiliary from '../Auxiliary';
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
                <Auxiliary>
       <Toolbar openSideDrawer={this.sideDrawerOpenHandler} />
       <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
    <main className={classes.Content}>
        {this.props.children}
    </main>  
    </Auxiliary>
         );
    }
}
 
export default Layout;
