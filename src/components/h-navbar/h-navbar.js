import React from 'react';
import PropTypes from 'prop-types';
import { Divider, List, ListItem, Paper, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Style from './h-navbar.module.css'
//importar iconos
import ReceiptIcon from '@material-ui/icons/Receipt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListIcon from '@material-ui/icons/List';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';

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
        
            <Paper elevation={1} className={Style.navbar}>

                <List aria-label="main mailbox folders" className={[ Style.hlist ,  Style.MuiListPadding ].join(' ')}>

                    <ListItemLink primary="Caja" to="/" icon={<ShoppingCartIcon className={Style['MuiSvgIcon-root']}/>} />
                    <Divider orientation="vertical" flexItem />

                    <ListItemLink to="/ultimasventas" primary="Ultimas Ventas" icon={<ReceiptIcon className={Style['MuiSvgIcon-root']}/>} />
                    <Divider orientation="vertical" flexItem />

                    <ListItemLink to="/articulos" primary="Articulos" icon={<ListIcon className={Style['MuiSvgIcon-root']}/>} />
                    <Divider orientation="vertical" flexItem />

                    <ListItemLink to="/stock" primary="Stock" icon={<FormatListNumberedRtlIcon className={Style['MuiSvgIcon-root']}/>} />
                    <Divider orientation="vertical" flexItem />

                    <ListItemLink to="/balance" primary="Balance" icon={<BarChartIcon className={Style['MuiSvgIcon-root']}/>} />
                    <Divider orientation="vertical" flexItem />
                    <br />

                    <ListItemLink to="/cargas" primary="Tests DB" icon={<StorageRoundedIcon className={Style['MuiSvgIcon-root']}/>} />
                    <Divider orientation="vertical" flexItem />

                </List>
            </Paper>
       
    );
}