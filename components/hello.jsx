import React from 'react'
import axios from 'axios'

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


    render() {
        const listData = this.state.listData
        let ele = listData.map(item => {
            return <p key={item.id}>{item.id}:{item.url}</p>
        })
        return (
            <div>{ele}</div>
        )
    }

}

export default HelloComponent