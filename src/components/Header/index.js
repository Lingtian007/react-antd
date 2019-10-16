import React, { Component } from 'react'
import { Row, Col } from 'antd';
import './index.less';
import Units from '../../units/units'
// import  Axios from '../../axios/index'
export default class Header extends Component {
       state = {}
       componentWillMount() {
          this.setState({
             useNname:"河畔一角"
          })
          setInterval(() => {
            let date =  Units.formateDate(new Date().getTime())
             this.setState({
                date
            }) 
          }, 1000);
          this.getWeather() 
   }
   getWeather() {
      // Axios.jsonp({
      //    url: 'www.pubtian.com/freeservice/weather/index?city=上海市'
      // }).then((res) => {
      //    console.log('当前数据',  res);
      // })
   }
   
       
        render() {
          return (
            <div className="header">
                <Row className="header-top">
                   <Col span="24">
                      <span>欢迎,{this.state.useNname}</span>
                      <a href="#">退出</a>
                   </Col>
               </Row>
                <Row className="header-buttom">
                   <Col span="4" className="header-left">
                     首页
                   </Col>
                   <Col span="20" className="header-right">
                      <span className="data">{this.state.date}</span>
                      <span className="weather">晴转多云</span>
                   </Col>
               </Row>
            </div>
           )
        }
  }