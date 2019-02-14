import React, {Component} from 'react';

export default class TableRow extends Component {
    render () {
        const {list} = this.props;
        return list.map((row, key) => {
            return (
                <tr key={key}>
                    <td>{row.firstName}</td>
                    <td>{row.lastName}</td> 
                    <td>{row.age}</td>
                </tr>
            );
        });
    }
}
