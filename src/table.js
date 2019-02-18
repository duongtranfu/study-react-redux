import React, { Component } from 'react';
import { peopleCtx } from './context';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    return (
        <tbody>
            {props.data.map((v, i) => {
                return (
                    <tr key={'person-' + i}>
                        <td>
                            {v.name}
                        </td>
                        <td>
                            {v.job}
                        </td>
                    </tr>
                );
            }) }
        </tbody>
    );
}

class Table extends Component {

    render() {
        // const { people } = this.props;
        return (
            <peopleCtx.Consumer>
                {value =>
                    <table>
                        <TableHeader />
                        <TableBody data={value} />
                    </table>
                }
            </peopleCtx.Consumer>
        );
    }
}

export default Table;