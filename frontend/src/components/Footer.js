import React, { Component } from "react";
import { inject } from "mobx-react";
import styled from "styled-components";
import { autorun } from "mobx";

const FormWrapper = styled.div`
    @import url(https://fonts.googleapis.com/css?family=Lato);
    @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);
    body {
        font-family: 'Lato', sans-serif;
        color: #FFF;
        background: #322f30;
        -webkit-font-smoothing: antialiased;
        margin: 0 auto;
    }
    a {
        text-decoration: none;
        color: #fff;
    }
    p > a:hover{
        color: #d9d9d9;
        text-decoration:  underline;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin:  1% 0 1% 0;
    }
    ._12 {
        font-size: 1.0em;
    }
    ._14 {
        font-size: 0.9em;
    }
    ul {
        padding:0;
        list-style: none;
    }
    .footer-social-icons {
        width: 350px;
        display:block;
        margin: 0 auto;
    }
    .social-icon {
        color: #fff;
    }
    ul.social-icons {
        margin-top: 10px;
    }
    .social-icons li {
        vertical-align: top;
        display: inline;
        height: 100px;
    }
    .social-icons a {
        color: #fff;
        text-decoration: none;
    }
    .fa-facebook {
        padding:10px 14px;
        -o-transition:.5s;
        -ms-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition: .5s;
        background-color: #322f30;
    }
    .fa-facebook:hover {
        background-color: #3d5b99;
    }
    .fa-twitter {
        padding:10px 12px;
        -o-transition:.5s;
        -ms-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition: .5s;
        background-color: #322f30;
    }
    .fa-twitter:hover {
        background-color: #00aced;
    }
    .fa-rss {
        padding:10px 14px;
        -o-transition:.5s;
        -ms-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition: .5s;
        background-color: #322f30;
    }
    .fa-rss:hover {
        background-color: #eb8231;
    }
    .fa-youtube {
        padding:10px 14px;
        -o-transition:.5s;
        -ms-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition: .5s;
        background-color: #322f30;
    }
    .fa-youtube:hover {
        background-color: #e64a41;
    }
    .fa-linkedin {
        padding:10px 14px;
        -o-transition:.5s;
        -ms-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition: .5s;
        background-color: #322f30;
    }
    .fa-linkedin:hover {
        background-color: #0073a4;
    }
    .fa-github {
        padding:10px 14px;
        -o-transition:.5s;
        -ms-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition: .5s;
        background-color: #322f30;
    }
    .fa-github:hover {
        background-color: #5a32a3;
    }
`;

@inject()
class Footer extends Component {
    render() {
        return (
            <div>
            <FormWrapper>
                <div className="footer-social-icons" style={{
                    position: "fixed",
                    height: "100px",
                    width:"100%",
                    bottom: "0px",
                    left: "44%",
                    right: "auto",
                }}>
                <h4 className="_14" style={{color:"#ffffff"}}>Follow Sirdev developer on</h4>
                    <ul className="social-icons">
                        <li><a href="https://facebook.com" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://youtube.com" className="social-icon"> <i className="fa fa-youtube"></i></a></li>
                        <li><a href="https://www.github.com/minhthong582000" className="social-icon"> <i className="fa fa-github"></i></a></li>
                    </ul>
                </div>
            </FormWrapper>
            </div>
        );
    }
}

export default Footer;
