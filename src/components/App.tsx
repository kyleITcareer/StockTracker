import {AppBar, StylesProvider} from '@material-ui/core';
import React, {useState, VFC} from 'react';
import './App.css';
import {AddData} from './atoms/AddData';
import {DataDialog} from './organisms/DataDialog';

export interface AppProps {
    title: string;
}

export const App: VFC<AppProps> = ({title}) => {
    const [dialog, setDialog] = useState(false);

    return (
        <StylesProvider injectFirst>
            <div className="relative w-full h-full">
                <AppBar className="p-4">
                    My Application
                </AppBar>
                <AddData onTrigger={() => setDialog(true)}/>
            </div>
            <DataDialog onClose={() => setDialog(false)}
                        onSave={data => console.warn('Saved!!!', data)}
                        open={dialog}/>
        </StylesProvider>
    );
};
