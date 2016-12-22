import React from 'react';
import { Link, IndexLink } from 'react-router';
import '../../public/css/color.css';
import './Header.css';
class Header extends React.Component {
    render() {
        return (
            <div className="banner bgBlue500">
                <h1 className="header-left">
                    <Link className="header--img" to="">
                        <span style={{fontWeight: "normal"}}>METE DESIGN</span>
                    </Link>
                </h1>
                <button className="heder--menu" >
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <ul className="header-right" id="menu">
                    <li className="header-li"  >                   
                        <IndexLink to="/" activeClassName="header-active">首页</IndexLink>
                    </li>
                    <li className="header-li"  >
                        <Link to="/conversion" activeClassName="header-active">规范</Link>
                    </li>
                    <li className="header-li">
                        <a >
                            <span>组件</span>
                        </a>
                    </li >
                    <li className="header-li">
                        <a  >
                            <span>资源</span>
                        </a>
                    </li >
                    <li className="header-li">
                        <a >
                            <span>NativeScript</span>
                        </a>
                    </li>

                </ul >
            </div >
        )
    }
}

export default  Header;