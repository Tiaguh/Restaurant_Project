import React, { useState } from "react";

import "./Drawer.css"

import DrawerContent from '../DrawerContent/DrawerContent.jsx'

import 'react-modern-drawer/dist/index.css'

import Drawer from 'react-modern-drawer'

export default function Teste() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleDrawer () {
        setIsOpen((prevState) => !prevState);

        console.log("AAAAAAAAAA")
    }   

    console.log(isOpen);

    return (
        <div className="drawer-container">

            {
                isOpen ? (
                    <Drawer
                        open={isOpen}
                        onClose={toggleDrawer}
                        direction='left'
                        enableOverlay={false}
                    >
                        <DrawerContent setIsOpen={setIsOpen} />
                    </Drawer>
                ) : null
            }

        </div>
    )
}