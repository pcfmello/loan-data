import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Loading from './Loading';

import InstalmentData from './InstallmentData';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '0.7rem',
  },
  data: {
    fontSize: '0.9rem',
  },
}));

export default function SimpleCard() {
  const classes = useStyles();
  const data = useSelector((state) => state.installments);
  const showLoading = useSelector((state) => state.layout.showLoading);

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          {showLoading && <Loading />}
          {!showLoading && (
            <Grid container spacing={2}>
              <Grid item xs={6} sm={8}>
                <Typography className={classes.title} color="textSecondary">
                  Nome
                </Typography>
                <Typography className={classes.data}>
                  Ricardo de Jesus
                </Typography>
              </Grid>

              <Grid item xs={6} sm={4}>
                <Typography className={classes.title} color="textSecondary">
                  CPF/CNPJ
                </Typography>
                <Typography className={classes.data}>045.585.017-93</Typography>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Typography className={classes.title} color="textSecondary">
                  Valor
                </Typography>
                <Typography className={classes.data}>
                  R$ {data.amountTaken},00
                </Typography>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Typography className={classes.title} color="textSecondary">
                  Juros mensais
                </Typography>
                <Typography className={classes.data}>
                  {data.monthlyInterest}%
                </Typography>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Typography className={classes.title} color="textSecondary">
                  Total de juros
                </Typography>
                <Typography className={classes.data}>
                  R$ {data.totalAmountInTaxes},00
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography className={classes.title} color="textSecondary">
                  Total pago
                </Typography>
                <Typography className={classes.data}>
                  R$ {data.amountPayd},00
                </Typography>
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>
      <InstalmentData />
    </>
  );
}
