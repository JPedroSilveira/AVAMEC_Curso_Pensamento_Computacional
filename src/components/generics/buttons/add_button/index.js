import React from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

import './styles.css'

class AddButton extends React.Component {
    render() {
        return (
            <Fab id={this.props.id} size="large" color="primary" aria-label="Add" className="add-button" onClick={this.props.onClick}>
                <AddIcon />
            </Fab>
        )
    }
}

export default AddButton