import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
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
    }

    render() {
        return (
            <div style={{display: 'grid'}}>
                {this.state.editMode ? (
                    <input
                        style={{width: '300px'}}
                        type='text'
                        value={this.props.status}
                        onBlur={this.deactivateEditMode}
                        autoFocus={true}
                    />
                ) : (
                    <span
                        style={{cursor: 'pointer'}}
                        onDoubleClick={this.activateEditMode}
                    >{this.props.status}</span>
                )}
            </div>
        )
    }


}
export default ProfileStatus