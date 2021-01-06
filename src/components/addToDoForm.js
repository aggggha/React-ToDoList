import React from 'react';

class AddToDo extends React.Component {
    constructor(props) {
        super(props);
        // this.lastId = this.props.lastId
        this.state = {
            'id': '',
            'title': '',
            'status': 'Pending',
        };
    }

    handleTitleChange(event) {
        this.setState({
            title: event.target.value
        });
    }

    handleStatusChange(event) {
        const isDone = event.target.checked ? 'Done' : 'Pending';
        this.setState({
            status: isDone
        });
    }

    handleSaveToDo(event) {
        event.preventDefault();
        this.props.onAdd({
            id: this.props.lastId + 1,
            title: this.state.title,
            status: this.state.status
        });
        this.setState({
            'id': this.props.lastId + 1,
            'title': '',
            'status': 'Pending',
        });
    }

    render() {
        return (
            <div>
                <h3>Add to List</h3>
                <form onSubmit={(event) => {this.handleSaveToDo(event)}}>
                    <input type="hidden" value={this.props.lastId + 1} />
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" onChange={(event) => {this.handleTitleChange(event)}} value={this.state.title} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="isDone" value={this.state.status} onChange={(event) => {this.handleStatusChange(event)}} />
                        <label className="form-check-label" htmlFor="isDone">Already done?</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default AddToDo;