import React from 'react'
import '../../public/css/color.css'
import './footer.css'

class Footer extends React.Component {
    render() {
        return(
            <div className="foot">
                <div className="foot--nav">
                    <div className="foot--help foot--logo">
                        <img src="https://angular.cn/resources/images/logos/inverse/shield/shield-large.png" alt="" />
                        <span>METE DESIGN</span>
                    </div>
                    <div className="foot--help">
                        <h2>热门框架</h2>
                        <ul>
                            <li><a href="">Angular</a></li>
                            <li><a href="">React</a></li>
                            <li><a href="">Vue</a></li>
                        </ul>
                    </div>
                    <div className="foot--help">
                        <h2>推荐网站</h2>
                        <ul>
                            <li><a href="">GitHub</a></li>
                            <li><a href="">Stackoverflow</a></li>
                            <li><a href="">简书</a></li>
                            <li><a href="">掘金</a></li>
                        </ul>
                    </div>
                    <div className="foot--help">
                        <h2>网站记录</h2>
                        <ul>
                            <li><a href="">版本更新</a></li>
                            <li><a href="">报告问题</a></li>
                            <li><a href="">网站反馈</a></li>
                        </ul>
                    </div>
                    <span className="foot--split"></span>
                </div>
                <div className="foot--rights">
                    <h2>© 2016 SuperMap Meteorology Department All Rights Reserved</h2>
                    <span>技术支持：北京超图软件股份有限公司气象事业部成都分部</span>
                </div>


            </div>
        )
    }
}

export default Footer