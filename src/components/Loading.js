import React from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => (
  <div
    style={{
      width: '100%',
      height: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
  >
    <CircularProgress />
    <br />
    <Typography>Carregando dados do empréstimo</Typography>
  </div>
);

export default Loading;
