import React from 'react';
//react-router hooks
import { useLocation, useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginRight: 10
  },
}));

const EditPage = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  //read data from route
  const { email, name, avatar } = location.state;

  const handleBack = () => {
    history.goBack();
  }
  

  return (
    <>
      <AppBar position="sticky">
          <Toolbar>
            <IconButton onClick={handleBack} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <ArrowBack />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Edit Page
            </Typography>
          </Toolbar>
      </AppBar>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar 
                className={classes.large}
                alt={name} 
                src={avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                component="h2"
                variant="h6"
                color="textPrimary"
                >
                  {name}
                </Typography>
              } 
              secondary={email}
            />
          </ListItem>
        </CardContent>
        <CardActions>
        <ButtonGroup fullWidth color="primary" aria-label="contained primary button group">
          <Button>Email</Button>
          <Button>Phone</Button>
          <Button>Edit</Button>
        </ButtonGroup>
        </CardActions>
      </Card>
    </>
  );
};

export default EditPage;
