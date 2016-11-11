import React from 'react'
import '../../public/css/color.css'
import './conversion.css'
import Book from '../book/book'


let items = [
      {
        title: "开始",
        route: "../css"
      },
      {
        title: "CSS命名规范",
        route: "conventions"
      },

      {
        title: "项目文件目录命名",
        route: "filename"
      },
      {
        title: "SASS自动化构建",
        route: "sass"
      }, {
        title: "API参考",
        route: "api"
      },

    ]
export default class Conversion extends React.Component{
   
   constructor(props){
       super(props)
   }
    render(){
        return (
            <Book config={items}/>
        )
    }
}
