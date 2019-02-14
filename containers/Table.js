import React, {Component} from 'react';
import TableRow from './TableRow.js'

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: '',
            lastName: '',
            age: '',
            list: []
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    onChangeInput (e) {
        e.preventDefault();
        const {name, value} = e.target;
        if (name && name === "firstName") {
            this.setState({
                firstName: value
            });
        }
        if (name && name === "lastName") {
            this.setState({
                lastName: value
            });
        }
        if (name && name === "age") {
            this.setState({
                age: value
            });
        }
    }

    onSubmit (e) {
        e.preventDefault();
        const {list, firstName, lastName, age } = this.state;
        this.setState({
            list: [{firstName, lastName, age}, ...list],
            firstName: '',
            lastName: '',
            age: ''
        });
    }

    renderRow () {
        const {list} = this.state;
        list.map((row) => {
            return (
                <tr>
                    <td>{row.firstName}</td>
                    <td>{row.lastName}</td> 
                    <td>{row.age}</td>
                </tr>
            );
        });
    }

    render () {
        const {firstName, lastName, age} = this.state;
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th> 
                            <th>Age</th>
                        </tr>
                        <TableRow list={this.state.list}/>
                    </tbody>
                </table>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="First name" name="firstName" onChange={this.onChangeInput} value={firstName} />
                    <input type="text" placeholder="Last name" name="lastName" onChange={this.onChangeInput} value={lastName} />
                    <input type="text" placeholder="Age" name="age" onChange={this.onChangeInput} value={age} />
                    <input type="submit" value="Add"></input>
                </form>
            </div>
        )
    }
}
