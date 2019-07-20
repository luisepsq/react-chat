import React from "react";
import "./App.css";
import { Sidebar } from './containers/sidebar';
import { MessagesList } from '.containers/messages-list';
import { AddMessage } from '.containers/add-messages';

 const App =()=>{
    return (
    <div id="container">
    <Sidebar/>
    <section id="main">
    <MessagesList/>
    <AddMessage/>
    </section>
    </div>
  );
}

export default App;
