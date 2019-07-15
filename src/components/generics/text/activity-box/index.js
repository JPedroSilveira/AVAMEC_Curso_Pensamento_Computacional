import React from 'react'
import FontLight from '../../font/light'
import FontDark from '../../font/dark'
import FontLarge from '../../font/large'
import FontRegular from '../../font/regular'
import Image from '../../image'
import ActivityImage from '../../../../images/component/activity.svg'
import './styles.css'

class ActivityBox extends React.Component {
    constructor(props){
        super(props)

        this.style = {
            marginTop: props.marginTop !== undefined ? props.marginTop : "0"
        }
    }
    render() {
        return (
            <div className="activity-box-container" style={this.style}>
                <div className="activity-title-container">
                    <div className="image">
                        <Image center={false} width="40px" height="40px" src={ActivityImage} />
                    </div>
                    <div className="title">
                        <FontRegular><FontLarge>
                            <FontLight>{this.props.title}</FontLight><br/>
                            <FontDark>{this.props.activityTitle}</FontDark>
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

export default ActivityBox