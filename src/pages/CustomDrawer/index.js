import React from 'react';
import {
    makeStyles,
    Toolbar,
    Drawer,
    Button,
    List,
    Typography,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Box,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';


import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';

import AddCircle from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none',
    },
    menuIcon: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6),
    },
    icons: {
        paddingRight: theme.spacing(5),
    },
    listItemText: {
        fontSize: 14,
    },
    listItem: {
        paddingTop: 4,
        paddingBottom: 4,
    },
    subheader: {
        textTransform: 'uppercase',
    },
}));

export default function CustomDrawer() {

    const classes = useStyles();
    return (

        <Drawer
            className={classes.drawer}
            variant='permanent'
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List>
                    <ListItem button classes={{ root: classes.listItem }}>
                        <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText,
                            }}
                            primary={'Início'}
                        />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                        <ListItemIcon>{<Whatshot />}</ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText,
                            }}
                            primary={'Em alta'}
                        />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                        <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText,
                            }}
                            primary={'Inscrições'}
                        />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button classes={{ root: classes.listItem }}>
                        <ListItemIcon>
                            <VideoLibrary />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText,
                            }}
                            primary={'Biblioteca'}
                        />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                        <ListItemIcon>
                            <History />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText,
                            }}
                            primary={'Histórico'}
                        />
                    </ListItem>
                </List>
                <Divider />
                <Box p={7}>
                    <Typography variant='body2'>
                        Faça login para curtur vídeos, comentar e se inscrever.
</Typography>
                    <Box mt={2}>
                        <Button
                            variant='outlined'
                            color='secondary'
                            startIcon={<AccountCircle />}
                        >
                            Fazer login
  </Button>
                    </Box>
                </Box>
                <Divider />
                <List
                    component='nav'
                    aria-labelledby='nested-list-subheader'
                    subheader={
                        <ListSubheader
                            component='div'
                            id='nested-list-subheader'
                            className={classes.subheader}
                        >
                            O Melhor do youtube
  </ListSubheader>
                    }
                >
                    <ListItem button classes={{ root: classes.listItem }}>
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText,
                            }}
                            primary={'Música'}
                        />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText,
                            }}
                            primary={'Esportes'}
                        />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText,
                            }}
                            primary={'Jogos'}
                        />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText,
                            }}
                            primary={'Filmes'}
                        />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText,
                            }}
                            primary={'Notícias'}
                        />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText,
                            }}
                            primary={'Ao vivo'}
                        />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText,
                            }}
                            primary={'Destaques'}
                        />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText,
                            }}
                            primary={'Videos 360'}
                        />
                    </ListItem>
                </List>
                <Divider />
                <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                        <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                        classes={{
                            primary: classes.listItemText,
                        }}
                        primary={'Procurar mais'}
                    />
                </ListItem>
                <Divider />
            </div>
        </Drawer>
    );
}