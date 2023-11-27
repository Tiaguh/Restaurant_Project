import React, { useState } from "react";

import "./Drawer.css"

import DrawerContent from '../DrawerContent/DrawerContent'

import 'react-modern-drawer/dist/index.css'

import Drawer from 'react-modern-drawer'

import { SlMenu } from 'react-icons/sl'

export default function Teste() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

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
                ) : (
                    <div className="drawer-closed">
                        <button onClick={() => setIsOpen(true)} >
                            <SlMenu color="#FFF" size={50} />
                        </button>
                    </div>
                )
            }

        </div>
    )
}