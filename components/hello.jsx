import React from 'react';
import axios from 'axios';
import {
    Row,
    Col,
    Table,
    Form,
    Icon,
    Input,
    Button,
    Checkbox,
    message
} from "antd";

class HelloComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: []
        };
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleEnterKey)
    }

    cpmponentWillUnmout() {
        document.removeEventListener('keydown', this.handleEnterKey)

    }

    handleEnterKey = e => e.keyCode === 13 ? this.submitForm() : ''


    //这里  e=>{} 解决this  undefind的问题
    submitForm = e => {
        let _id = document.getElementById('id').value
        if (_id) {
            axios.get('/user', {
                params: {
                    id: _id
                }
            }).then(res => {
                const userInfo = res.data.data.user
                this.setState({
                    userInfo
                })
            }).catch(err => console.log(err));
        } else {
            message.warning('请输入id');
        }

    }

    render() {
        let userInfo = this.state.userInfo

        const columns = [{
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        }, {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }];

        let user = userInfo.map(item => {
            return <li key={item.id}>{item.id}:{item.name}-{item.age}</li>
        })

        return (
            <div>
                <Row>
                    <Form layout="inline" style={{ margin: '20px', float: "right" }}>
                        <Form.Item>
                            <Input type="text" name="id" id="id" />
                        </Form.Item>
                        <Button icon="search" type="primary" onClick={this.submitForm} onKeyDown={this.handleEnterKey} >search</Button>
                    </Form>

                </Row>
                <Table rowKey={(record, index) => `complete${record.id}${index}`}
                    dataSource={userInfo}
                    columns={columns} />

            </div>



        );
    }

}

export default HelloComponent;