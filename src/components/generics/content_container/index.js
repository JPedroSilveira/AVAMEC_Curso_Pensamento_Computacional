import React from 'react'
import GreekBackground from '../../../images/component/greek-background.svg'
import './styles.css'

class ContentContainer extends React.Component {
    render() {
        return (
            <div className="content-container">
                <div className="text-container" style={{ backgroundImage: "url(" + GreekBackground + ")", backgroundRepeat: "repeat", backgroundSize: "150%"}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ContentContainer