import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


import PropTypes from 'prop-types';

const songData = [
    {
        title: 'Your Kiss',
        album: 'Hall & Oates Greatest Hits',
        artist: 'Hall & Oates'
    },
    {
        title: 'Lisztomania',
        album: 'Wolfgang Amadeus Phoenix',
        artist: 'Phoenix'
    },
    {
        title: 'We\'re Not Gonna Take It',
        album: 'Stay Hungry',
        artist: 'Twisted Sister',
    }
];

class SongTable extends Component {
    state = {
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: false,
        showRowHover: false,
        selectable: true,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: true,
        showCheckboxes: false,
        height: '300px',
    };

    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        return (
            <div>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                >
                    <TableHeader
                        displaySelectAll={this.state.enableSelectAll}
                    >
                        <TableRow>
                            <TableHeaderColumn>Song</TableHeaderColumn>
                            <TableHeaderColumn>Artist</TableHeaderColumn>
                            <TableHeaderColumn>Album</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                    >
                        {songData.map((row, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{row.title}</TableRowColumn>
                                <TableRowColumn>{row.artist}</TableRowColumn>
                                <TableRowColumn>{row.album}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default SongTable;