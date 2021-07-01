import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from '@material-ui/core';
import React, {FC, useState} from 'react';

export interface Data {
    purchase: number;

    quantity: number;

    sell: number;

    ticker: string;
}

export interface DataDialogProps {
    onClose: () => void;

    onSave: (data: Data) => void;

    open: boolean;
}

export const DataDialog: FC<DataDialogProps> = ({open, onClose, onSave}) => {
    const [data, setData] = useState<Data>({ticker: '', purchase: 0, sell: 10, quantity: 1});

    function calculateProfitLoss() {
        let profitLossActual: number = 0;
        if((data.purchase * data.quantity) > (data.sell * data.quantity)) {
            profitLossActual =  (data.purchase * data.quantity) - (data.sell * data.quantity);
            return (
                <div className='text-green-600'>
                    Actual Profit/Loss: ${profitLossActual.toFixed(2)}
                </div>
            )
        } if ((data.purchase * data.quantity) == (data.sell * data.quantity)) {
            return (
                <div>Actual Profit/Loss: -${profitLossActual.toFixed(2)}</div>
            )
        }else {
            profitLossActual = -((data.sell * data.quantity) - (data.purchase * data.quantity));
            return (
                <div className='text-red-600'>
                    Actual Profit/Loss: -${profitLossActual.toFixed(2)}
                </div>
            )
        }
    }
    

    return <Dialog open={open} onClose={onClose} className='overflow-hidden'>
        <form className="flex flex-col" noValidate autoComplete="off"
              onSubmit={(e) => {
                  e.preventDefault();
                  onSave(data);
                  onClose();
              }
              }>
            <DialogTitle>Add Some Data</DialogTitle>
            <DialogContent >
                <TextField className="mb-4 space-x-1"
                           label="Ticker"
                           variant="outlined"
                           size="small"
                           value={data.ticker}
                           onChange={e => setData({...data, ticker: e.target.value})}
                />
                <TextField className="mb-4 space-x-1"
                           label="Purchase Price"
                           type="number"
                           variant="outlined"
                           size="small"
                           value={data.purchase.toString()}
                           onChange={e => setData({...data, purchase: parseFloat(e.target.value)})}
                />
                <TextField className="mb-4 space-x-1"
                           label="Sell Price"
                           type="number"
                           variant="outlined"
                           size="small"
                           value={data.sell.toString()}
                           onChange={e => setData({...data, sell: parseFloat(e.target.value)})}
                />
                <TextField className="mb-4 space-x-1"
                           label="Quantity"
                           type="number"
                           variant="outlined"
                           size="small"
                           value={data.quantity.toString()}
                           onChange={e => setData({...data, quantity: parseFloat(e.target.value)})}
                />
            </DialogContent>
            <DialogActions>
                <div className='absolute left-2 items-start'>
                   {calculateProfitLoss()}
                </div>
                <Button color="primary"
                        type="submit">
                    Save
                </Button>
                <Button autoFocus>
                    Cancel
                </Button>
            </DialogActions>
        </form>
    </Dialog>;
};
