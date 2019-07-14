import React from 'react'
import FontLight from '../font/light'
import FontLarge from '../font/large'
import FontRegular from '../font/regular'
import Image from '../image'
import ExampleImage from '../../../images/component/example.svg'
import './styles.css'

class ExampleBox extends React.Component {
    render() {
        return (
            <div className="example-box-container">
                <div className="title-container">
                    <div className="image">
                        <Image center={false} width="40px" height="40px" src={ExampleImage} />
                    </div>
                    <div className="title">
                        <FontRegular><FontLarge><FontLight>{this.props.title}</FontLight></FontLarge></FontRegular>
                    </div>
                </div>
                <div className="text-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ExampleBox