import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
    }),
);

export default function BasicTextFields()  {
  const classes = useStyles();

  const [name, setName] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
      <div className="text-center">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="User Id" variant="outlined" InputLabelProps={{ shrink: true }} onChange={handleChange} />
        </form>
        <Button variant="contained" color="primary" href={"/:"+ name} >
          Show GitHub Data
        </Button>
      </div>
  );
}