import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import CreateIcon from '@material-ui/icons/Create';
import ViewListIcon from '@material-ui/icons/ViewList';
import Sidebar from './Sidebar';
const AdminSidebar = () => {
    const sidebarItems = [
        {
            label: 'Ordered Products',
            route: '/order',
            Icon: ViewListIcon
        },
        {
            label: 'Add Product',
            route: '/add-product',
            Icon: AddIcon
        },
        {
            label: 'Add Admin',
            route: '/add-admin',
            Icon: PersonAddRoundedIcon
        },
        {
            label: 'Manage Products',
            route: '/manage-products',
            Icon: CreateIcon
        },
    ]
    return (
        <Sidebar sidebarItems={sidebarItems} />
    );
};

export default AdminSidebar;