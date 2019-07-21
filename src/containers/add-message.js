import {connect } from 'react-redux';
import AddMessageComponent from '../components/add-messages';
import { addMessage } from '../actions'

const mapDispatchToProps = dispatch => ({
    dispatch : (message , author) =>{
        dispatch(addMessage(message,author))
    }
})

export const AddMessage =connect(() =>({}), mapDispatchToProps)(AddMessageComponent);