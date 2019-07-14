import React, { Fragment } from 'react'
import Strong from '../font/strong'
import FontHuge from '../font/huge'
import './styles.css'

class UnitTitle extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="unit-title-container">
                    <div className="unit-title-center-container">
                        <div className="unit-title-sub-container-column">
                            <div className="unit-title-sub-container-row-white"></div>
                            <div className="unit-title-sub-container-row-gray"></div>
                            <div className="unit-title-sub-container-row-white"></div>
                        </div>
                        <div className="unit-title-sub-container-column-white">
                            <FontHuge><Strong>{this.props.children}</Strong></FontHuge>
                        </div>
                        <div className="unit-title-sub-container-column">
                            <div className="unit-title-sub-container-row-white"></div>
                            <div className="unit-title-sub-container-row-gray"></div>
                            <div className="unit-title-sub-container-row-white"></div>
                        </div>
                    </div>
                </div>
                <div className="unit-title-inf">
                    <div className="unit-title-inf-sub"></div>
                </div>
            </Fragment>
        )
    }
}

export default UnitTitle