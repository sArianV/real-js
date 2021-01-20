import React from 'react';
import PropTypes from 'prop-types';
import { Divider, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'


//importar iconos
import DraftsIcon from '@material-ui/icons/Drafts';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListIcon from '@material-ui/icons/List';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}));


function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <div>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
      <Divider component="li" variant="inset" />
    </div>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default function Navbar() {

  const classes = useStyles();

  return (
    <div>
    <div className={classes.toolbar} />
    <Divider />
        <List aria-label="main mailbox folders">

          <ListItemLink primary="Caja" to="/" icon={<ShoppingCartIcon />} />

          <ListItemLink to="/ultimasventas" primary="Ultimas Ventas" icon={<ReceiptIcon />} />

          <ListItemLink to="/articulos" primary="Articulos" icon={<ListIcon />} />
          
          <ListItemLink to="/stock" primary="Stock" icon={<FormatListNumberedRtlIcon />} />
          
          <ListItemLink to="/balance" primary="Balance" icon={<BarChartIcon />} />
          
          <br/>
          <br/>
          <ListItemLink to="/cargaProducto" primary="Cargar Producto" icon={<DraftsIcon />} />
          
        </List>
        </div>
  );
}
