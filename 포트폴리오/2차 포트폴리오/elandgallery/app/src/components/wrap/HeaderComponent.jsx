import React, { Component } from 'react';
import '../../scss/style_header.scss'

class HeaderComponent extends Component {
    render() {
        return (
            <header id="header">
                <div className="nav_top">
                    <div className="container">
                        <div className="gap">
                            <div className="content">
                                <ul>
                                    <li><a href="!#">Login</a></li>
                                    <li><a href="!#">Join</a></li>
                                    <li><a href="!#">작가 등록</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav_bottom">
                    <div className="container">
                        <div className="gap">
                            <div className="content">
                                <a href="!#"><img src="./img/a078b5180d7d267fb2f4300458afeb74.png" alt="" /></a>
                                <ul>
                                    <li><a href="!#">ARTWORKS</a></li>
                                    <li><a href="!#">EXHIBITIONS</a></li>
                                    <li><a href="!#">FOR GIFT</a></li>
                                </ul>
                                <div className='nav'>
                                    <ul>
                                        <li><i></i></li>
                                        <li><i></i></li>
                                        <li><i></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderComponent;