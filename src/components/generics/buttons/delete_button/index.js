import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import './styles.css'

class DeleteButton extends React.Component {
    render() {
        return (
            <IconButton id={this.props.id}
                onClick={this.props.onClick.bind(this.props.id)}
                aria-label="Delete"
                className="delete-button">
                <DeleteIcon fontSize="large" />
            </IconButton>
        )
    }
}

export default DeleteButton