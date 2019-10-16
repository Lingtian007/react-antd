import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import NavLeft from './components/NavLeft/index'

import Home from './page/home/index'
import './style/common.css'


 export default class Admin extends Component {
        render() {
          return (
            <Row className='container'>
              <Col span='4' className='navleft'>
                <NavLeft></NavLeft>
              </Col>
              <Col span='20' className='main'>
                <Header></Header>
                <Row className='content'>   
                  {this.props.children}
                  {/* <Home/> */}
                </Row>
                <Footer></Footer>
              </Col>
            </Row>
           )
        }
  }