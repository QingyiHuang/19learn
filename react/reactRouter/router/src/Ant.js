// import React, { component } from 'react'
import React from 'react'

import { Button } from 'antd'
import Icon from 'antd/lib/icon';
import 'antd/dist/antd.css'//导入压缩后的css包

export default class App extends React.Component{
    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Icon type="twitter" />
            </div>
        )
    }
}