import React, { useState } from "react";
import "./Drawer.css";
import DrawerContent from '../DrawerContent/DrawerContent.jsx';
import Drawer from 'react-modern-drawer';

export default function Teste() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    console.log(isDrawerOpen);

    return (
        <div className="drawer-container">
            <Drawer
                open={isDrawerOpen}
                onClose={toggleDrawer}
                direction='left'
                enableOverlay={false}
            >
                <DrawerContent setIsOpen={setIsDrawerOpen} />
            </Drawer>
        </div>
    )
}
