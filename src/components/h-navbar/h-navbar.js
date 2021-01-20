import React from 'react';
import PropTypes from 'prop-types';
import { Container, Divider, List, ListItem, Paper, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import './h-navbar.css'
//importar iconos
import DraftsIcon from '@material-ui/icons/Drafts';
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
        <div>
            <ListItem button component={renderLink}>
                {icon ? <ListItemIcon >{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
            
            </ListItem>
            
        </div>
        
    );
}

ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default function ListRouter() {

    return (
        <Container >
            <Grid item xs={12} className="navbar">
                <Paper elevation={3} >

                    
                    <List aria-label="main mailbox folders" id="h-list">

                        <ListItemLink primary="Caja" to="/" icon={<ShoppingCartIcon />} />
                        <Divider orientation="vertical" flexItem />

                        <ListItemLink to="/ultimasventas" primary="Ultimas Ventas" icon={<ReceiptIcon />} />
                        <Divider orientation="vertical" flexItem />

                        <ListItemLink to="/articulos" primary="Articulos" icon={<ListIcon />} />
                        <Divider orientation="vertical" flexItem />

                        <ListItemLink to="/stock" primary="Stock" icon={<FormatListNumberedRtlIcon />} />
                        <Divider orientation="vertical" flexItem />

                        <ListItemLink to="/balance" primary="Balance" icon={<BarChartIcon />} />
                        <Divider orientation="vertical" flexItem />

                        <div id="rightItems">
                            <ListItemLink to="/cargaProducto" primary="Cargar Producto" icon={<DraftsIcon />} />
                            <Divider orientation="vertical" flexItem />
                            <ListItemLink to="/cargaProducto" primary="Cargar Producto" icon={<DraftsIcon />} />
                            <Divider orientation="vertical" flexItem />
                        </div>
                    </List>
                </Paper>
            </Grid>
    
        </Container >
    );
}