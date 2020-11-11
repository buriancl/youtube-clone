import { useState } from "react";
import "./App.css";
import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [vidoesMetaInfo, setVidoesMetaInfo] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <h1>Search Page</h1>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />

              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
