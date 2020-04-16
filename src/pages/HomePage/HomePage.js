import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

//css
import './HomePage.css';

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
import LazyLoad from 'react-lazyload';
import { FixedSizeList as List } from "react-window";
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
  
  const Row = ({ index, style }) => (
    <div style={style}>Row {index}</div>
  );
   
  const Example = () => (
    <List
      height={150}
      itemCount={1000}
      itemSize={35}
      width={300}
    >
      {Row}
    </List>
  );

const HomePage = () => {
    const classes = useStyles();
    //make an API call
    const API = "https://reqres.in/api/users"; //free rest api
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(API);
                const data = await response.json();
                console.log(data);
                setUsers(_.get(data, 'data', [])); //update the state
            } catch(err) {
                console.log('API Err: ', err);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <AppBar>
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Home Page {moment.locale()}
                </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.container}>
                <Example />
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {_.map(tileData, (tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
                </GridList>
                <LazyLoad height={200}>
                <img src={logo} alt=""/>
                </LazyLoad>
            </div>
                
            {/* list of users */}
            <ul className="users-list">
                {!_.isEmpty(users) && _.map(users, (user, index) => {
                    return (
                        <Link to={{pathname: `/details/${_.get(user, 'id')}`, state: {email: _.get(user, 'email')}}} key={index}>
                            <li className="user-list-row">
                                <img className="user-image" src={_.get(user, 'avatar')} alt={_.get(user, 'first_name', '')}/>
                                <span className="user-name">{_.get(user, 'first_name', '')} {_.get(user, 'last_name', '')}</span>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </>
    );
}

export default HomePage;