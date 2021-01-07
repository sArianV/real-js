import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DraftsIcon from '@material-ui/icons/Drafts';

import { Link as RouterLink } from 'react-router-dom';


//importar iconos
import ReceiptIcon from '@material-ui/icons/Receipt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListIcon from '@material-ui/icons/List';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';


function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function ListRouter() {
  const classes = useStyles();

  return (

    <div className={classes.root}>


      <Paper elevation={0}>
        <Divider />
        <List aria-label="main mailbox folders">

          <ListItemLink primary="Caja" to="/caja" icon={<ShoppingCartIcon />} />
          <Divider component="li" variant="inset" />

          <ListItemLink to="/ultimasventas" primary="Ultimas Ventas" icon={<ReceiptIcon />} />
          <Divider component="li" variant="inset" />

          <ListItemLink to="/articulos" primary="Articulos" icon={<ListIcon />} />
          <Divider component="li" variant="inset" />

          <ListItemLink to="/stock" primary="Stock" icon={<FormatListNumberedRtlIcon />} />
          <Divider component="li" variant="inset" />

          <ListItemLink to="/balance" primary="Balance" icon={<BarChartIcon />} />
          <Divider component="li" variant="inset" />

          <ListItemLink to="/drafts" primary="Drafts" icon={<DraftsIcon />} />
          <Divider />

        </List>
      </Paper>
    </div>

  );
}


{/*
//importar iconos
import ReceiptIcon from '@material-ui/icons/Receipt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListIcon from '@material-ui/icons/List';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';

              <ListItemLink primary="Caja" to="/caja" icon={<ShoppingCartIcon/>} />
            <Divider component="li" variant="inset" />
            <ListItemLink to="/ultimas-ventas" primary="Ultimas Ventas" icon={<ReceiptIcon />} />
            <Divider component="li" variant="inset" />
            <ListItemLink to="/articulos" primary="Articulos" icon={<ListIcon />} />
            <Divider component="li" variant="inset" />
            <ListItemLink to="/stock" primary="Stock" icon={<FormatListNumberedRtlIcon />} />
            <Divider component="li" variant="inset" />
            <ListItemLink to="/balance" primary="Balance" icon={<BarChartIcon />} />
            <Divider component="li" variant="inset" />
            <ListItemLink to="/drafts" primary="Drafts" icon={<DraftsIcon />} />
            <Divider />
*/}
