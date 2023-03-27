import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
        //this.props.updateStatus(this.state.status)
    }

    render() {
        return (
            <div style={{display: 'grid'}}>
                {this.state.editMode ? (
                    <input
                        onChange={this.onStatusChange}
                        style={{width: '300px'}}
                        type='text'
                        value={this.state.status}
                        onBlur={this.deactivateEditMode}
                        autoFocus={true}
                    />
                ) : (
                    <span
                        style={{cursor: 'pointer'}}
                        onDoubleClick={this.activateEditMode}
                    >
                        {this.props.status || 'add status'}
                    </span>
                )}
            </div>
        )
    }
}
export default ProfileStatus