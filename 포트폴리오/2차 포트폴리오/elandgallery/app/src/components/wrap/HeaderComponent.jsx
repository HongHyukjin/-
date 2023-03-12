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
                                <ul>
                                    <li><a href="!#"></a></li>
                                    <li><a href="!#"></a></li>
                                    <li><a href="!#"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderComponent;