import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//css
import './HomePage.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

//import heavy vendor libs
import _ from 'lodash';
import moment from 'moment';

//import utility
import {sum, multiply} from '../../utils';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      '& > a': {
        textDecoration: 'none',
        overflow: 'hidden',
        display: 'block'
      }
    },
    inline: {
      display: 'inline',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      marginRight: 10
    },
}));

const HomePage = () => {
    const classes = useStyles();
    //make an API call
    const API = "https://reqres.in/api/users?per_page=12"; //free rest api
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

        const locale = moment.locale();
        console.log(locale);
        console.log(moment().format('DD MM YYYY'));

        console.log(sum(1,2));
        console.log(multiply(22,3));
    }, []);

    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>
                      Home Page
                  </Typography>
                </Toolbar>
            </AppBar>
                
            {/* list of users */}
            <List className={classes.root}>            
              {!_.isEmpty(users) && _.map(users, (user, index) => {
                return (
                  <>
                  <Link to={{
                    pathname: `/details/${_.get(user, 'id')}`, 
                    state: {
                      email: _.get(user, 'email'), 
                      name: `${_.get(user, 'first_name', '')} ${_.get(user, 'last_name', '')}`,
                      avatar: _.get(user, 'avatar')
                    }
                  }} key={index}>
                    <ListItem alignItems="flex-start" key={_.get(user, 'id')}>
                        <ListItemAvatar>
                          <Avatar 
                            className={classes.large}
                            alt={_.get(user, 'first_name', '')} 
                            src={_.get(user, 'avatar')} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={`${_.get(user, 'first_name', '')} ${_.get(user, 'last_name', '')}`} 
                          secondary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary">
                                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                  Proin ultrices dapibus elementum. Lorem ipsum dolor sit amet, 
                                  consectetur adipiscing elit. Cras aliquet lectus ipsum, vitae 
                                  varius nunc imperdiet eu. Nullam a laoreet arcu.`}
                              </Typography>
                            </React.Fragment>
                          } />
                    </ListItem>
                  </Link>
                  <Divider variant="inset" component="li" />
                  </>
                );
              })}
            </List>
        </>
    );
}

export default HomePage;