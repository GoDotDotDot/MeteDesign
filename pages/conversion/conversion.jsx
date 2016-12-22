import React from 'react';
import '../../public/css/color.css';
import './conversion.css';
import Book from '../../components/book/book';
import CssMmgf from './cssmmgf';
import $ from 'jquery';
import * as conversionList from './list';

var test;
var _self;
let List = conversionList.conversionList;

export default class Conversion extends React.Component {

  constructor(props) {
    console.log("Conversion")
    super(props);
    this.state = {
      _routes: [],
      _doc: null
    }
    _self = this;
  }
  
  render() {
    return (
      <Book _routes={List} obj={this} />
    )
  }
}
