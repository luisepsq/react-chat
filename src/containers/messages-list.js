import {connect } from 'react-redux';
import  MessagesListComponent from '../components/messages-list';


export const MessagesList =connect(state=> ({
    messages:state.messages
}),{})(MessagesListComponent)