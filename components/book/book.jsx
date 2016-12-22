import React from 'react';
import '../../public/css/color.css';
import './book.css';
import { Link } from 'react-router';
import $ from 'jquery';
import anime from 'animejs';

let obj = Object;
var _self;
class BookAside extends React.Component {
    constructor(props) {
        super(props)
        // _self = this;
    }
    render() {
        let ulPar = [];
        let ulChil = [];
        return (
            <ul className="book-aside">
                {
                    this.props.config.map((item, index) => {
                        if (item.children) {
                            item.children.map((item_child, index_child) => {
                                ulChil.push(<li key={index_child}>
                                    <Link to={item_child.route} activeClassName="book-aside-active" >{item_child.title}</Link>
                                </li>)
                            })
                            ulPar.push(
                                <li key={index} className="book-aside--li__par" >
                                    {item.title}<ul className="book-aside--ul__child">{ulChil}</ul>
                                </li>)
                            ulChil = [];
                        } else {
                            ulPar.push(
                                <li key={index}>
                                    <Link to={item.route} activeClassName="book-aside-active" className="book-aside--li__par">{item.title}</Link>
                                </li>
                            )
                        }

                    })
                }
                {ulPar}
            </ul>

        )

    }
}

export default class Book extends React.Component {
    constructor(props) {
        super(props);
        _self = this;
        obj = this.props.obj;
    }
    componentDidMount() {
        var book = anime({
            targets: document.getElementById("book"),
            translateX: {
                value:"50%",
                duration:500,
                easing: 'easeInOutQuart'
            },
            direction: 'alternate',
            // loop: true
        });
    }
    render() {
        return (
            <div className="container bgGrey300 padingTop56" id="book">
                <div className="Book-container">
                    <BookAside config={this.props._routes} />
                    {obj.props.children || "没有路由"}
                </div>
            </div>
        )
    }
}

