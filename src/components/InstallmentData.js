import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Close } from '@material-ui/icons';

import { getAllInstallments } from '../store/fetchActions';

const useStyles = makeStyles({});

export default function BasicTable() {
  const classes = useStyles();
  const data = useSelector((state) => state.installments);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllInstallments());
  }, [dispatch]);

  return (
    <TableContainer
      component={Paper}
      variant="outlined"
      style={{ marginBottom: '1rem' }}
    >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Data de vencimento</TableCell>
            <TableCell align="center">Valor</TableCell>
            <TableCell align="center">Pago</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.installments.map((row) => (
            <TableRow key={row.dueDate}>
              <TableCell align="left">{row.dueDate}</TableCell>
              <TableCell align="center">{row.formatedValue}</TableCell>
              <TableCell align="center">
                {row.payd ? 'Sim' : <Close color="secondary" />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
