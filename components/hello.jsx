import React from 'react'
import axios from 'axios'
import {Button} from "antd";

class HelloComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            listData: []
        }
    }

    async componentDidMount() {
        await axios.get('/list')
            .then(res => {
                const listData = res.data.data.list
                this.setState({
                    listData
                })
            })
    }

    submitForm() {
        axios.get('/user', {
            params: {
                id: document.getElementById('id').value
                // name: document.getElementById('name').value,
            }
        }).then(res => {
                // const userInfo = res.data.data.user
                // this.setState({
                //     userInfo
                // })
            }
        ).catch(err => console.log(err))
    }

    render() {
        const listData = this.state.listData;
        let ele = listData.map(item => {
            return <p key={item.id}>{item.id}:{item.title}</p>
        })

        // let userInfo = this.state.userInfo
        // let user = userInfo.map(item => {
        //     return <p key={item.id}>{item.uid}:{item.mobile}</p>
        // })
        return (
            <div>
                <div>{ele}</div>
                {/*<div>{user}</div>*/}
                <form>
                    <input type="text" name="id" id="id"/>
                    {/*<input type="text" name="name" id="name"/>*/}
                    <Button onClick={this.submitForm}>check</Button>
                </form>
            </div>


        )
    }

}

export default HelloComponent
