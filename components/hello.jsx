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

    submitForm() {
        axios.post('/form', {
            id: document.getElementById('id').value,
            // name: document.getElementById('name').value,
        }).then(res => console.log(res.data.msg)
        ).catch(err => console.log(err))
    }


    render() {
        const listData = this.state.listData
        let ele = listData.map(item => {
            return <p key={item.id}>{item.id}:{item.title}</p>
        })
        return (
            <div>
                <div>{ele}</div>
                <form>
                    <input type="text" name="id" id="id"/>
                    {/*<input type="text" name="name" id="name"/>*/}
                    <input type="button" value="check" onClick={this.submitForm}/>
                </form>
            </div>


        )
    }

}

export default HelloComponent