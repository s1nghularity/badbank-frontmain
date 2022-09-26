import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavLink,
    NavItem,
    Nav,
    NavbarToggler,
} from 'reactstrap';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

//material UI
import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
//end materialUI


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default function Navi() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);



    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    return (
        <div>
            <Navbar color='light' light expand='lg' className='nav nav-pills'>
                <NavbarBrand
                    tag={Link}
                    to='/'
                    className='navBarItem'
                >
                    Bad Bank App
                </NavbarBrand>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>

                    <Nav className='mr-auto' navbar>

                        <NavItem>
                            <NavLink tag={Link} to='/'>
                            Home
                            </NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <NavLink tag={Link} to='/Deposit'>
                            Deposit
                            </NavLink>
                        </NavItem>
{/* 
                        <NavItem>
                            <NavLink tag={Link} to='/Withdraw'>
                            Withdraw
                            </NavLink>
                        </NavItem> */}

                        {/*<NavItem>
                            <NavLink tag={Link} to='/alldata'>
                            All Data
                            </NavLink>
                        </NavItem> */}

                        <NavItem>
                            <NavLink tag={Link} to='/Login'>
                            Login
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                            tag={Link}
                            to='/CreateAccount'
                            className='btn btn-info'>
                                <Tooltip title="Begin your stable financial journey into the future with us! Bad Bank! $Put your moneys here$">
                                
                                <b> Create Account </b>                                
                                </Tooltip>            
                            </NavLink>
                        </NavItem>



                    </Nav>
                </Collapse>
            </Navbar>
            <Outlet />
           </div>

    )
}
