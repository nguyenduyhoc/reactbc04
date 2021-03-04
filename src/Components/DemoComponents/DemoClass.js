// React Class Component
import React, { Component } from 'react'

export default class DemoClass extends Component {





    // Phương thức render sữ tự kích hoạt khi mình sử dụng thẻ component
    render() {


        return (
            <div>
                <div className="container bg-dark p-5 text-light">
                    <p className="display-4 pt-2">Title</p>
                    <p>Content</p>
                </div>
            </div>
        )
    }
}
