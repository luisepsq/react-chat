import {connect } from 'react-redux';
import  SideBarComponent from '../components/sidebar';


export const Sidebar =connect(state=> ({
    users: state.users
}),{})(SideBarComponent)

export default Sidebar;