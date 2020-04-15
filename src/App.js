import React from 'react';
import logo from './logo.svg';
import './App.css';


//import heavy vendor libs
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import _ from 'lodash';
import moment from 'moment';
//end

//data
const tileData = [{
    img: logo,
    title: 'Image',
    author: 'Joseph',
    cols: 2,
  },
  {
    img: logo,
    title: 'Image',
    author: 'Joseph',
    cols: 2,
  },
  {
    img: logo,
    title: 'Image',
    author: 'Joseph',
    cols: 2,
  },
  {
    img: logo,
    title: 'Image',
    author: 'Joseph',
    cols: 2,
  }
];

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
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Photos {moment.locale()}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {_.map(tileData, (tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </>
  );
}

export default App;
