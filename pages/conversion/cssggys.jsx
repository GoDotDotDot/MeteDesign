import React from 'react';
import $ from 'jquery';

let _self;
export default class CssGgys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _doc: ''
    }
    _self = this;
  }
  createMarkup() {
    return { __html: this.state._doc };
  }
  componentDidMount() {
    $.when(
      $.post(ctx1+"/conversions/docs", { id: 2 })).
      then(function (data) {

        _self.setState({ _doc: data })
      })
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={this.createMarkup()} className="book-content" ></div>
    )
  }
}
