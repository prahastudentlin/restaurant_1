import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SideDrawer from './SideDrawer';

class Header extends Component {
    
    state = {
        drawerOpen: false
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }
    
    render() {
        return (
            <AppBar
                style={{
                    backgroundColor: '#2f2f2f',
                    padding: '10px',
                    // boxShadow: 'none'
                }}
            >
                <Toolbar>
                    
                    <div className="header_logo">
                        <div className="font_righteous header_logo_name">
                            MyRestaurant
                        </div>
                        <div className="header_logo_title">
                            Chinese Restaurant
                        </div>
                    </div>

                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={()=>this.toggleDrawer(true)}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <SideDrawer
                        open={this.state.drawerOpen}
                        onClose={()=>this.toggleDrawer(false)}
                    />
                    
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;