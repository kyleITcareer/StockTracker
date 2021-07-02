import {AppBar, StylesProvider} from '@material-ui/core';
import React, {useState, VFC} from 'react';
import './App.css';
import {AddData} from './atoms/AddData';
import {Data, DataDialog} from './organisms/DataDialog';
import { StocksTable } from './organisms/stocksTable';

export interface AppProps {
    title: string;
}

export const App: VFC<AppProps> = ({title}) => {
    const [dialog, setDialog] = useState(false);
    const [tableData, setTableData] = useState<Data[]>([]);

    return (
        <StylesProvider injectFirst>
            <div className="relative w-full h-full">
                <AppBar className="text-center p-3 text-2xl">
                    Stock Tracker
                </AppBar>
                <div className='m-12 relative top-12'>
                    <StocksTable tableData={tableData} />
                </div>
                <AddData onTrigger={() => setDialog(true)}/>
            </div>
            <DataDialog onClose={() => setDialog(false)}
                        onSave={data => setTableData([...tableData, data])}
                        open={dialog}/>
        </StylesProvider>
    );
};
