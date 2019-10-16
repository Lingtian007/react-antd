import React, { Component } from "react";
import { Spin, Alert, Card, Switch} from "antd";

export default class Buttons extends Component {


  state = { loading: false };

  toggle = value => {
    this.setState({ loading: value });
  };
  render() {
    const container = (
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    );
    return (
      <div>
        <Card title="加载">
          <Spin tip="Loading...">
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Spin>,
          mountNode,
        </Card>
        <Card title="自定义加载">
          <Spin spinning={this.state.loading} delay={500}>
            {container}
          </Spin>
          <div style={{ marginTop: 16 }}>
            Loading state：
          <Switch checked={this.state.loading} onChange={this.toggle} />
          </div>
        </Card>
      </div>
    );
  }
}
