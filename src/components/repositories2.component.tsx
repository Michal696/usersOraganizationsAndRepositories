import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';


import {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {getRepos} from "../github-api";

const Repository = (name: React.ReactNode) => (
    <div >
         {name}
    </div>
);

const getRepositories = (props: any[] | undefined) => {


  // return props.map((name: any) => {
  //   return <Repository name={name}/>
  // });

  // return getRepos("Michal696").then(response => {
  //   // debugger;
  //   return response.map((repository: { name: React.ReactNode; }) => {
  //     return <Repository repository={repository}/>
  //   });


  // }).catch(error => {
  //   console.log(error);
  // });
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
      nested: {
        paddingLeft: theme.spacing(4),
      },
    }),
);


export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [state, setState] = React.useState();

  getRepos("Michal696").then(response => {
    // debugger;
    setState(response.map((repository: { name: React.ReactNode; }) => {
      return repository.name;
      // return <Repository repository={repository}/>
    }));


  }).catch(error => {
    console.log(error);
  });

  const handleClick = () => {
    setOpen(!open);
  };

  return (
      <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Nested List Items
            </ListSubheader>
          }
          className={classes.root}
      >
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Repositories" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/*{(state) ? getRepositories(state): ''}*/}
          </List>
        </Collapse>
      </List>
  );
}