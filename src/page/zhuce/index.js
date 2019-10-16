import React from 'react'
import { Card, Form, Button, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, message, InputNumber } from 'antd'
import moment from 'moment';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;
class FormRegister extends React.Component {

  state = {}

  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    console.log(JSON.stringify(userInfo))
    message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`)
  }

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        userImg: imageUrl,
        loading: false,
      }));
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 12
      }
    }
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4
        }
      }
    }
    const rowObject = {
      minRows: 4, maxRows: 6
    }
    return (
      <div className="all">
        <Card title="注册表单">
          <Form layout="horizontal">
            <FormItem label="用户名" {...formItemLayout}>
              {
                getFieldDecorator('userName', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '用户名不能为空'
                    }
                  ]
                })(
                  <Input placeholder="请输入用户名" />
                )
              }
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
              {
                getFieldDecorator('userPwd', {
                  initialValue: ''
                })(
                  <Input type="password" placeholder="请输入密码" />
                )
              }
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
              {
                getFieldDecorator('sex', {
                  initialValue: '1'
                })(
                  <RadioGroup>
                    <Radio value="1">男</Radio>
                    <Radio value="2">女</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  initialValue: 18
                })(
                  <InputNumber />
                )
              }
            </FormItem>
            <FormItem label="当前状态" {...formItemLayout}>
              {
                getFieldDecorator('state', {
                  initialValue: '2'
                })(
                  <Select>
                    <Option value="1">咸鱼一条</Option>
                    <Option value="2">风华浪子</Option>
                    <Option value="3">北大才子一枚</Option>
                    <Option value="4">百度FE</Option>
                    <Option value="5">创业者</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="爱好" {...formItemLayout}>
              {
                getFieldDecorator('interest', {
                  initialValue: ['2', '5']
                })(
                  <Select mode="multiple">
                    <Option value="1">游泳</Option>
                    <Option value="2">打篮球</Option>
                    <Option value="3">踢足球</Option>
                    <Option value="4">跑步</Option>
                    <Option value="5">爬山</Option>
                    <Option value="6">骑行</Option>
                    <Option value="7">桌球</Option>
                    <Option value="8">麦霸</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="是否已婚" {...formItemLayout}>
              {
                getFieldDecorator('isMarried', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Switch />
                )
              }
            </FormItem>
            <FormItem label="生日" {...formItemLayout}>
              {
                getFieldDecorator('birthday', {
                  initialValue: moment('2018-08-08')
                })(
                  <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                  />
                )
              }
            </FormItem>
            <FormItem label="联系地址" {...formItemLayout}>
              {
                getFieldDecorator('address', {
                  initialValue: '北京市海淀区奥林匹克公园'
                })(
                  <TextArea
                    autosize={rowObject}
                  />
                )
              }
            </FormItem>
            <FormItem label="早起时间" {...formItemLayout}>
              {
                getFieldDecorator('time')(
                  <TimePicker />
                )
              }
            </FormItem>
            <FormItem label="头像" {...formItemLayout}>
              {
                getFieldDecorator('userImg')(
                  <Upload
                    listType="picture-card"
                    showUploadList={false}
                    action="//jsonplaceholder.typicode.com/posts/"
                    onChange={this.handleChange}
                  >
                    {this.state.userImg ? <img src={this.state.userImg} /> : <Icon type="plus" />}
                  </Upload>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              {
                getFieldDecorator('userImg')(
                  <Checkbox>我已阅读过<a href="#">慕课协议</a></Checkbox>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              <Button type="primary" onClick={this.handleSubmit}>注册</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(FormRegister);
// import React, { Component } from "react";
// import {
//   Form,
//   Input,
//   Tooltip,
//   Icon,
//   Cascader,
//   Select,
//   Row,
//   Col,
//   Checkbox,
//   Button,
//   AutoComplete
// } from "antd";
// const { Option } = Select;
// const AutoCompleteOption = AutoComplete.Option;

// const residences = [
//   {
//     value: "zhejiang",
//     label: "Zhejiang",
//     children: [
//       {
//         value: "hangzhou",
//         label: "Hangzhou",
//         children: [
//           {
//             value: "xihu",
//             label: "West Lake"
//           }
//         ]
//       }
//     ]
//   },
//   {
//     value: "jiangsu",
//     label: "Jiangsu",
//     children: [
//       {
//         value: "nanjing",
//         label: "Nanjing",
//         children: [
//           {
//             value: "zhonghuamen",
//             label: "Zhong Hua Men"
//           }
//         ]
//       }
//     ]
//   }
// ];

// class Zhuce extends Component {
//   state = {
//     confirmDirty: false,
//     autoCompleteResult: []
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.form.validateFieldsAndScroll((err, values) => {
//       if (!err) {
//         console.log("Received values of form: ", values);
//       }
//     });
//   };

//   handleConfirmBlur = e => {
//     const { value } = e.target;
//     this.setState({ confirmDirty: this.state.confirmDirty || !!value });
//   };

//   compareToFirstPassword = (rule, value, callback) => {
//     const { form } = this.props;
//     if (value && value !== form.getFieldValue("password")) {
//       callback("Two passwords that you enter is inconsistent!");
//     } else {
//       callback();
//     }
//   };

//   validateToNextPassword = (rule, value, callback) => {
//     const { form } = this.props;
//     if (value && this.state.confirmDirty) {
//       form.validateFields(["confirm"], { force: true });
//     }
//     callback();
//   };

//   handleWebsiteChange = value => {
//     let autoCompleteResult;
//     if (!value) {
//       autoCompleteResult = [];
//     } else {
//       autoCompleteResult = [".com", ".org", ".net"].map(
//         domain => `${value}${domain}`
//       );
//     }
//     this.setState({ autoCompleteResult });
//   };

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     const { autoCompleteResult } = this.state;

//     const formItemLayout = {
//       labelCol: {
//         xs: { span: 24 },
//         sm: { span: 8 }
//       },
//       wrapperCol: {
//         xs: { span: 24 },
//         sm: { span: 16 }
//       }
//     };
//     const tailFormItemLayout = {
//       wrapperCol: {
//         xs: {
//           span: 24,
//           offset: 0
//         },
//         sm: {
//           span: 16,
//           offset: 8
//         }
//       }
//     };
//     const prefixSelector = getFieldDecorator("prefix", {
//       initialValue: "86"
//     })(
//       <Select style={{ width: 70 }}>
//         <Option value="86">+86</Option>
//         <Option value="87">+87</Option>
//       </Select>
//     );

//     const websiteOptions = autoCompleteResult.map(website => (
//       <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
//     ));

//     return (
//       <Form {...formItemLayout} onSubmit={this.handleSubmit}>
//         <Form.Item label="E-mail">
//           {getFieldDecorator("email", {
//             rules: [
//               {
//                 type: "email",
//                 message: "The input is not valid E-mail!"
//               },
//               {
//                 required: true,
//                 message: "Please input your E-mail!"
//               }
//             ]
//           })(<Input />)}
//         </Form.Item>
//         <Form.Item label="Password" hasFeedback>
//           {getFieldDecorator("password", {
//             rules: [
//               {
//                 required: true,
//                 message: "Please input your password!"
//               },
//               {
//                 validator: this.validateToNextPassword
//               }
//             ]
//           })(<Input.Password />)}
//         </Form.Item>
//         <Form.Item label="Confirm Password" hasFeedback>
//           {getFieldDecorator("confirm", {
//             rules: [
//               {
//                 required: true,
//                 message: "Please confirm your password!"
//               },
//               {
//                 validator: this.compareToFirstPassword
//               }
//             ]
//           })(<Input.Password onBlur={this.handleConfirmBlur} />)}
//         </Form.Item>
//         <Form.Item
//           label={
//             <span>
//               Nickname&nbsp;
//               <Tooltip title="What do you want others to call you?">
//                 <Icon type="question-circle-o" />
//               </Tooltip>
//             </span>
//           }
//         >
//           {getFieldDecorator("nickname", {
//             rules: [
//               {
//                 required: true,
//                 message: "Please input your nickname!",
//                 whitespace: true
//               }
//             ]
//           })(<Input />)}
//         </Form.Item>
//         <Form.Item label="Habitual Residence">
//           {getFieldDecorator("residence", {
//             initialValue: ["zhejiang", "hangzhou", "xihu"],
//             rules: [
//               {
//                 type: "array",
//                 required: true,
//                 message: "Please select your habitual residence!"
//               }
//             ]
//           })(<Cascader options={residences} />)}
//         </Form.Item>
//         <Form.Item label="Phone Number">
//           {getFieldDecorator("phone", {
//             rules: [
//               { required: true, message: "Please input your phone number!" }
//             ]
//           })(<Input addonBefore={prefixSelector} style={{ width: "100%" }} />)}
//         </Form.Item>
//         <Form.Item label="Website">
//           {getFieldDecorator("website", {
//             rules: [{ required: true, message: "Please input website!" }]
//           })(
//             <AutoComplete
//               dataSource={websiteOptions}
//               onChange={this.handleWebsiteChange}
//               placeholder="website"
//             >
//               <Input />
//             </AutoComplete>
//           )}
//         </Form.Item>
//         <Form.Item
//           label="Captcha"
//           extra="We must make sure that your are a human."
//         >
//           <Row gutter={8}>
//             <Col span={12}>
//               {getFieldDecorator("captcha", {
//                 rules: [
//                   {
//                     required: true,
//                     message: "Please input the captcha you got!"
//                   }
//                 ]
//               })(<Input />)}
//             </Col>
//             <Col span={12}>
//               <Button>Get captcha</Button>
//             </Col>
//           </Row>
//         </Form.Item>
//         <Form.Item {...tailFormItemLayout}>
//           {getFieldDecorator("agreement", {
//             valuePropName: "checked"
//           })(
//             <Checkbox>
//               I have read the <a href="">agreement</a>
//             </Checkbox>
//           )}
//         </Form.Item>
//         <Form.Item {...tailFormItemLayout}>
//           <Button type="primary" htmlType="submit">
//             Register
//           </Button>
//         </Form.Item>
//       </Form>
//     );
//   }
// }
// export default Form.create()(Zhuce);
