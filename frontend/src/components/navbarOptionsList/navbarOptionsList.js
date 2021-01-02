import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

//importar iconos
import ReceiptIcon from '@material-ui/icons/Receipt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListIcon from '@material-ui/icons/List';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.transparent,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <List component="nav" aria-label="main mailbox folders">
            <Divider />

                <ListItem button>
                    <ListItemIcon>
                        <ShoppingCartIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Caja" />
                </ListItem>

                <Divider component="li" variant="inset" />
                <ListItem button>
                    <ListItemIcon>
                        <ReceiptIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ultimas ventas" />
                </ListItem>

                <Divider component="li" variant="inset" />
                <ListItem button>
                    <ListItemIcon>
                        <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Articulos" />
                </ListItem>
                
                <Divider component="li" variant="inset" />
                <ListItem button>
                    <ListItemIcon>
                        <FormatListNumberedRtlIcon />
                    </ListItemIcon>
                    <ListItemText primary="Stock" />
                </ListItem>
                
                
                <Divider component="li" variant="inset" />
                <ListItem button>
                    <ListItemIcon>
                        <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Balance" />
                </ListItem>
                <Divider />
           
            </List>
            
            
        </div>
    );
}

/*class ArticlesMenuOptions extends Component {
    render() {
        return(
            <ul>
                <li>
                    Listar Articulos 
                </li>
                <li>
                    Buscar Articulo 
                </li>
                <li>
                    Borrar Articulo 
                </li>
            </ul>
        )
    }
}
export default ArticlesMenuOptions;*/