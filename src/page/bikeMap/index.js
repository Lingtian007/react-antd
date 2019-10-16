import React, { Component } from "react";
import { Card } from "antd";
import "./index.less";

class FormLogin extends Component {
  renderMap = () => {
    this.map = new window.BMap.Map("orderDetailMap", {
      enableMapClick: false
    });
    // 创建地图实例
    var point = new window.BMap.Point(116.404, 39.915);
    // 创建点坐标
    this.map.centerAndZoom(point, 15);
    // 初始化地图，设置中心点坐标和地图级别
    // 添加控件
    this.addMapControl();
  };
  addMapControl = () => {
    let map = this.map;
    // 左上角，添加比例尺
    var top_right_control = new window.BMap.ScaleControl({
      anchor: window.BMAP_ANCHOR_TOP_RIGHT
    });
    var top_right_navigation = new window.BMap.NavigationControl({
      anchor: window.BMAP_ANCHOR_TOP_RIGHT
    });
    //添加控件和比例尺
    map.addControl(top_right_control);
    map.addControl(top_right_navigation);
    map.enableScrollWheelZoom(true);
    // legend.addLegend(map);
  };

  render() {
    return (
      <Card className="order-map1">
        <div id="orderDetailMap" className="order-map"></div>
        <div className="detail-items">
          <div className="item-title">基础信息</div>
          <ul className="detail-form">
            <li>
              <div className="detail-form-left">用车模式</div>
              <div className="detail-form-content">停车点</div>
            </li>
            <li>
              <div className="detail-form-left">订单编号</div>
              <div className="detail-form-content">575545</div>
            </li>
            <li>
              <div className="detail-form-left">车辆编号</div>
              <div className="detail-form-content">4588</div>
            </li>
            <li>
              <div className="detail-form-left">用户姓名</div>
              <div className="detail-form-content">21</div>
            </li>
            <li>
              <div className="detail-form-left">手机号码</div>
              <div className="detail-form-content">155555888</div>
            </li>
          </ul>
        </div>
        <div className="detail-items">
          <div className="item-title">行驶轨迹</div>
          <ul className="detail-form">
            <li>
              <div className="detail-form-left">行程起点</div>
              <div className="detail-form-content">3333</div>
            </li>
            <li>
              <div className="detail-form-left">行程终点</div>
              <div className="detail-form-content">2222</div>
            </li>
            <li>
              <div className="detail-form-left">行驶里程</div>
              <div className="detail-form-content">1000公里</div>
            </li>
          </ul>
        </div>
      </Card>
    );
  }
}
export default FormLogin;
