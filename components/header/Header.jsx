import React from 'react'
import '../../public/css/color.css'
import './Header.css'
class Header extends React.Component {
    render() {
        return (
            <div className="banner bgBlue500">
                <h1 className="header-left">
                    <a className="header--img">
                        <span style={{fontWeight: "normal"}}>METE DESIGN</span>
                    </a>
                </h1>
                <button className="heder--menu" >
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <ul className="header-right" id="menu">
                    <li className="header-li"  >
                        <a  >
                            <span>首页</span>
                        </a>
                    </li>
                    <li className="header-li"  >
                        <a   >
                            <span>规范</span>
                        </a>
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