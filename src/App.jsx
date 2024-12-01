import React from "react";
import Sidebar from "./components/Sidebar";
import ChatFeed from "./components/ChatFeed";
import ActionLauncher from "./components/ActionLauncher";
import CaseFavorites from "./components/CaseFavorites";
import CustomerDetails from "./components/CustomerDetails";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <Header />
        <div className="main-content">
          <CustomerDetails />
          <ChatFeed />
          <div className="right-section">
            <ActionLauncher />
            <CaseFavorites />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
