import React, { Component } from "react";
import { Button, Card } from "antd";
import  './button.less'

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <Card title="基本按钮">
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
        </Card>
        <Card title="图形按钮">
          <Button type="primary" shape="circle" icon="search" />
          <Button type="primary" shape="circle">
            A
          </Button>
          <Button type="primary" icon="search">
            Search
          </Button>
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <br />
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <Button type="dashed" shape="circle" icon="search" />
          <Button type="dashed" icon="search">
            Search
          </Button>
        </Card>
        <Card title="按钮组合">
          <Button type="primary" block>
            Primary
          </Button>
          <Button block>Default</Button>
          <Button type="dashed" block>
            Dashed
          </Button>
          <Button type="danger" block>
            Danger
          </Button>
          <Button type="link" block>
            Link
          </Button>
        </Card>
      </div>
    );
  }
}
