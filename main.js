import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import './public/css/style.css'
import Home from './components/home'
import Header from './components/header/Header'
import Footer from './components/footer/footer'
import Conversion from './components/conversion/conversion'

class MeteDesign extends React.Component {
    render() {
        return (
            <div className="main-container">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

render((
    <Router history={hashHistory}>
        <Route path="/" component={MeteDesign}>
            <IndexRoute component={Home} />
            <Route path="conversion" component={Conversion} />
        </Route>
    </Router>
),
    document.getElementById("root")
)