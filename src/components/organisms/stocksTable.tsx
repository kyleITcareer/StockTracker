import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import React, {FC, useState} from 'react';
import { Data } from "./DataDialog";

export interface TableProps {
    tableData: Data[];
}

export const StocksTable: FC<TableProps> = ({tableData}) => {

    function calculateProfitLoss(data: Data) {
        let profitLossActual: number = 0;
        profitLossActual = 0;
        if((data.purchase * data.quantity) < (data.sell * data.quantity)) {
            profitLossActual = ((data.sell * data.quantity) - (data.purchase * data.quantity));
            console.log(profitLossActual);
            return (
                <div className='text-green-600'>
                    +${profitLossActual.toFixed(2)}
                </div>
            )
        } if ((data.purchase * data.quantity) == (data.sell * data.quantity)) {
            return (
                <div>${profitLossActual.toFixed(2)}</div>
            )
        } else {
            profitLossActual = ((data.purchase * data.quantity) - (data.sell * data.quantity));
            console.log(profitLossActual);
            return (
                <div className='text-red-600'>
                     -${profitLossActual.toFixed(2)}
                </div>
            )
        }
    }
  
    return (
      <TableContainer component={Paper}>
        <Table className='m-5 w-98' size="medium">
          <TableHead>
            <TableRow>
              <TableCell align="center">Ticker</TableCell>
              <TableCell align="center">Purchase Price&nbsp;($)</TableCell>
              <TableCell align="center">Quantity&nbsp;($)</TableCell>
              <TableCell align="center">Sell Price&nbsp;($)</TableCell>
              <TableCell align="center">Profit/Loss&nbsp;($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((dataItem: Data) => (
              <TableRow key={dataItem.ticker}>
                <TableCell align="center">{dataItem.ticker}</TableCell>
                <TableCell align="center">{dataItem.purchase}</TableCell>
                <TableCell align="center">{dataItem.quantity}</TableCell>
                <TableCell align="center">{dataItem.sell}</TableCell>
                <TableCell align="center"> {calculateProfitLoss(dataItem)} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }