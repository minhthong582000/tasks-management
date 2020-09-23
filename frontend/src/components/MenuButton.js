import React, { Component } from "react";
import { inject } from "mobx-react";
import styled from "styled-components";

const FormWrapper = styled.div`
    body {
        margin: 0;
        padding: 0;

        /* make it look decent enough */
        background: #232323;
        color: #cdcdcd;
        font-family: "Avenir Next", "Avenir", sans-serif;
    }

    #menuToggle {
        display: block;
        position: absolute;
        top: 50px;
        left: 30px;

        z-index: 1;

        -webkit-user-select: none;
        user-select: none;
    }

    #menuToggle a {
        text-decoration: none;
        color: #232323;

        transition: color 0.3s ease;
    }

    #menuToggle a:hover {
        color: tomato;
    }

    #menuToggle input {
        display: block;
        width: 40px;
        height: 32px;
        position: absolute;
        top: -7px;
        left: -5px;

        cursor: pointer;

        opacity: 0; /* hide this */
        z-index: 2; /* and place it over the hamburger */

        -webkit-touch-callout: none;
    }

    /*
 * Just a quick hamburger
 */
    #menuToggle span {
        display: block;
        width: 25px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;

        background: #ffffff;
        border-radius: 3px;

        z-index: 1;

        transform-origin: 4px 0px;

        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
            background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    }

    #menuToggle span:first-child {
        transform-origin: 0% 0%;
    }

    #menuToggle span:nth-last-child(2) {
        transform-origin: 0% 100%;
    }

    /* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
    #menuToggle input:checked ~ span {
        opacity: 1;
        transform: rotate(45deg) translate(-2px, -1px);
        background: #ffffff;
    }

    /*
 * But let's hide the middle one.

    // #menuToggle input:checked ~ span:nth-last-child(3) {
    //     opacity: 0;
    //     transform: rotate(0deg) scale(0.2, 0.2);
    // }


 * Ohyeah and the last one should go the other direction
 */
    #menuToggle input:checked ~ span:nth-last-child(2) {
        transform: rotate(-45deg) translate(0, -1px);
    }

    /*
 * Make this absolute positioned
 * at the top left of the screen
 */
    #menu {
        position:absolute;
        width:1250px;
        margin: -100px 0 0 -50px;
        padding: 50px;
        padding-top: 125px;

        background: #303030;
        opacity: 0.8;
        
        list-style-type: none;
        -webkit-font-smoothing: antialiased;
        /* to stop flickering of text in safari */

        transform-origin: 0% 0%;
        transform: translate(-100%, 0);

        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    }

    #menu li {
        padding: 10px 0;
        font-size: 22px;
        color:white;
    }
    #menuToggle input:checked ~ ul {
        transform: none;
    }
`;

@inject()
class Header extends Component {
    render() {
        return (
            <FormWrapper>
                <nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>

                        <ul id="menu">
                            <a href="/">
                                <li>Home</li>
                            </a>
                            <a href="/signin">
                                <li>Sign In</li>
                            </a>
                            <a href="/signup">
                                <li>Sign Up</li>
                            </a>
                            <a href="/About">
                                <li>About</li>
                            </a>
                            <a href="/contack">
                                <li>Contact</li>
                            </a>
                        </ul>
                    </div>
                </nav>
            </FormWrapper>
        );
    }
}

export default Header;
