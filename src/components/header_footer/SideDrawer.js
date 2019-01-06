import React from 'react';


import Drawer from '@material-ui/core/Drawer';


const SideDrawer = (props) => {
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={props.onClose}
        >
        
        <div>
            <div>Menu 1</div>
            <div>Menu 2</div>
            <div>Menu 3</div>
        </div>


        </Drawer>
    );
};

export default SideDrawer;