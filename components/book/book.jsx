import React from 'react'
import '../../public/css/color.css'
import './book.css'
import { Link } from 'react-router'
class BookAside extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render() {
        return (

            <ul>
                {
                    this.props.config.map((item, index) => {
                        //debugger
                        return (
                            <li key={index}>
                                <Link to={item.route}>{item.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>

        )

    }
}

export default class Book extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container bgGrey300">
                <div className="Book-container">
                    <BookAside config={this.props.config} />
                    <div>{this.props.children}</div>
                </div>
            </div>
        )
    }
}

