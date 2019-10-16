import React, { Component } from "react";
import { Button, Card, Modal} from "antd";

export default class Buttons extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <div>
        <Card title="弹窗">
          <Button type="primary" onClick={this.showModal}>
            Modal
        </Button>
          <Modal
            title="Modal"
            visible={this.state.visible}
            onOk={this.hideModal}
            onCancel={this.hideModal}
            okText="确认"
            cancelText="取消"
          >
            <p>Bla bla ...</p>
            <p>Bla bla ...</p>
            <p>Bla bla ...</p>
          </Modal>
        </Card>
      </div>
    );
  }
}
