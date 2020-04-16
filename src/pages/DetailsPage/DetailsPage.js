import React, { useState, useCallback } from 'react';
//react-router hooks
import { useLocation, useParams, useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

//custom comp
import Picker from '../../components/Picker';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: 56
  },
  gridList: {
    width: '100%',
    //height: 450,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: 56
  },
}));

const DetailsPage = () => {
  const [showPicker, setShowPicker] = useState(false);

  const classes = useStyles();
  const location = useLocation();
  const params = useParams();
  const history = useHistory();

  console.log(location, params);

  //read data from route
  const { email } = location.state;
  const { id } = params; //read data from URL segments eg. /details/:id

  const handleClick = () => {
    console.log('Navigate to Edit page');
    history.push({
      pathname: `/edit/${id}`,
      state: { someData: 'hello' }
    });
  };

  const handlePicker = useCallback(() => {
    setShowPicker(true);
  }, [showPicker]);

  return (
    <div>
      <AppBar>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Details Page
            </Typography>
          </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <p>User Id: {id}</p>
        <p>Email: {email}</p>
        <button onClick={handleClick}>Edit</button>

        <button onClick={handlePicker}>Show Picker</button>
        {showPicker && (
          <Picker />
        )}
        <Slider />
        <Range />
      </div>
    </div>
  );
};

export default DetailsPage;
