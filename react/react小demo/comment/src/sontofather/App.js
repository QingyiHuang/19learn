import React from 'react'
import Son from './son.js'

export default class Pro extends React.Component{
    constructor() {
        super()
        this.state = {
            nn: 0
        }
    }
    render() {
        return(
            <div>
                <h1 style = {{ fontWeight: 'bold',color: 'deeppink' }}>
                { this.state.nn }</h1>
                <button onClick = { this.xiugai }>change</button>
                <Son fun={this.ff} nn={this.state.nn}/>
            </div>
        )
    }
    xiugai = () => {
        this.setState({ nn: this.state.nn +1 })
    }
    ff = (data) => {
        this.setState({ nn: data })
    }
}