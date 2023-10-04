import React from "react";

// Pages used from components
import HomePage from "./Components/Main/Main";
import OverviewPage from "./Components/Overview/Overview";
import TrackingPage from "./Components/Tracking/Tracking";
import GoalsPage from "./Components/Goals/Goals";
import PremiumPage from "./Components/Premium/Premium";
import Header from "./Components/Header/Header";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as Env from "./environments";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from "parse";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          {/* Define routes for pages here: */}
          <Route path='/' element={<HomePage/>} />
          <Route path='/overview' element={<OverviewPage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/premium" element={<PremiumPage />} />
        </Routes>
    </Router>
  );
}

export default App;
