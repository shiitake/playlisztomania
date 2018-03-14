import React, { Component } from 'react';
import { Container } from 'flux/utils';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SampleStore from '../stores/store';
import SongTable from './song_table';

const style = {
    margin: 12,
};

class _TopContainer extends Component {
    static getStores() {
        return [SampleStore];
    }

    static calculateState() {
        return {
            sample: SampleStore.getState()
        };
    }



    componentDidMount() {
    }

    render() {
        return (
            <div>
                <AppBar title="Playlisztomania"/>
                <div>
                    <TextField hintText="Playlist Url" />
                    <RaisedButton label="Generate Playlist" style={style} />
                </div>
                <div>
                    <SongTable />
                </div>
            </div>
        );
    }
}

const TopContainer = Container.create(_TopContainer);
export default TopContainer;
