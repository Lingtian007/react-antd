import React, { Component } from "react";
import MenuCofig from "../../resouce/menuCofig";
import { NavLink, BrowserRouter } from "react-router-dom";
import { Menu, Icon } from "antd";
import "./index.css";
const SubMenu = Menu.SubMenu;
export default class NavLeft extends Component {
  componentWillMount() {
    const menuTree = this.renderMeun(MenuCofig);
    this.setState({
      menuTree
    });
  }

  // 菜单渲染
  renderMeun = data => {
    console.log("当前数据", data);
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMeun(item.children)}
          </SubMenu>
        );
      }
      // console.log('当前数据',  );
       return <Menu.Item title={item.title} key={item.key}>
          {item.title}
          <NavLink to={item.key}>{item.title}</NavLink>
         </Menu.Item>
      
    });
  };
  render() {
    return (
      // <BrowserRouter>
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg"></img>
          <h1>imooc NS</h1>
        </div>
        <Menu theme="dark">{this.state.menuTree}</Menu>
        </div>
      // </BrowserRouter>
    );
  }
}
