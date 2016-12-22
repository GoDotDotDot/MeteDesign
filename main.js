import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory, Redirect } from 'react-router';
import './public/css/style.css';
import Home from './pages/index/home';
import Header from './components/header/Header';
import Footer from './components/footer/footer';
import Conversion from './pages/conversion/conversion';
import CssMmgf from './pages/conversion/cssmmgf';
import CssGgys from './pages/conversion/cssggys';
import JsSjgf from './pages/conversion/jssjgf';
import JsYfjc from './pages/conversion/jsyfjc';
import Wjml from './pages/conversion/wjml';
import Zjjg from './pages/conversion/zjjg';
import Zjyz from './pages/conversion/zjyz';
import Zjmm from './pages/conversion/zjmm';
class MeteDesign extends React.Component {
    render() {
        return (<div className="main-container"><Header/>{this.props.children||<Home/>}<Footer/></div>);
    }
}

render((
    <Router history={hashHistory}>
        <Route path="/" component={MeteDesign}>
            <IndexRoute component={Home} />
            <Redirect from="conversion" to="conversion/css-mmgf"/>
            <Route path="conversion" component={Conversion} >          
                <Route path="css-mmgf" component={CssMmgf} />
                <Route path="css-ggys" component={CssGgys} />
                <Route path="js-sjgf" component={JsSjgf} />
                <Route path="js-yfjc" component={JsYfjc} />
                <Route path="wjml" component={Wjml} />
                <Route path="com-zjyz" component={Zjyz} />
                <Route path="com-zjjg" component={Zjjg} />
                <Route path="com-zjmm" component={Zjmm} />
            </Route>
        </Route>
        <Route path="**" component={MeteDesign}/>
    </Router>
),
    document.getElementById('root')
);