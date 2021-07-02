import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import React, {FC, useState} from 'react';
import { Data } from "./DataDialog";

export interface TableProps {
    tableData: Data[];
}

export const StocksTable: FC<TableProps> = ({tableData}) => {
  
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
                <TableCell align="center"> add the profit loss calc </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }