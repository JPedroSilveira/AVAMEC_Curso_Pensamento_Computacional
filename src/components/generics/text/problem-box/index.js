import React from 'react'
import FontLight from '../../font/light'
import FontDark from '../../font/dark'
import FontLarge from '../../font/large'
import FontRegular from '../../font/regular'
import Image from '../../image'
import ProblemImage from '../../../../images/component/problem.svg'
import './styles.css'

class ProblemBox extends React.Component {
    constructor(props) {
        super(props)
        this.style = {
            marginTop: props.marginTop ? props.marginTop : "0",
            marginBottom: props.marginBottom ? props.marginBottom : "0",
        }
    }

    render() {
        return (
            <div className="problem-box-container" style={this.style}>
                <div className="problem-title-container">
                    <div className="image">
                        <Image center={false} width="40px" height="40px" src={ProblemImage} />
                    </div>
                    <div className="title">
                        <FontRegular><FontLarge>
                            {this.props.problemTitle === undefined ?
                                <FontLight>{this.props.title}</FontLight>
                                :
                                <div className="problem-title">
                                    <FontLight>{this.props.title}</FontLight><br />
                                    <FontDark>{this.props.problemTitle}</FontDark>
                                </div>
                            }
                        </FontLarge></FontRegular>
                    </div>
                </div>
                <div className="text-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ProblemBox