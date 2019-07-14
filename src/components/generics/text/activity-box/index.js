import React from 'react'
import FontLight from '../../font/light'
import FontDark from '../../font/dark'
import FontLarge from '../../font/large'
import FontRegular from '../../font/regular'
import Image from '../../image'
import ActivityImage from '../../../../images/component/activity.svg'
import './styles.css'

class ActivityBox extends React.Component {
    render() {
        return (
            <div className="activity-box-container">
                <div className="title-container">
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