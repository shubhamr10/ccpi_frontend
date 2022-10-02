import React from 'react';
import ignouLogo from "../../assets/img/ignou_logo.png";


const NavBar = () => {
    return (
        <div className={"container-fluid"}>
            <nav className={"navbar navbar-expand-lg navbar-dark bg-primary"}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navToggler" aria-controls="navToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse p-0" id="navToggler">
                    <a href={"/"} className="navbar-brand">
                        &emsp;<img src={ignouLogo} alt="logo" width={"80px"}/>
                    </a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a href={"/"}  className="nav-link text-light" >Home <span className="sr-only">("545")</span></a>
                        </li>
                        <li className="nav-item ">
                            <a href={"/"}  className="nav-link text-light" >Users <span className="sr-only">("545")</span></a>
                        </li>
                        <li className="nav-item ">
                            <a href={"/"}  className="nav-link text-light" >Information <span className="sr-only">("545")</span></a>
                        </li>
                        <li className="nav-item ">
                            <a href={"/"}  className="nav-link text-light" >Centres <span className="sr-only">("545")</span></a>
                        </li>
                        <li className="nav-item ">
                            <a href={"/programme"} className="nav-link text-light" >Programmes <span className="sr-only">("545")</span></a>
                        </li>

                        <li className="nav-item">
                            <a href={"/"} className="nav-link text-light" >Logout <span className="sr-only">("545")</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
