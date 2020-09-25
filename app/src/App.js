import React, { useEffect } from 'react';
import './App.css';
import CatFacts from './components/CatFacts'
import {connect} from "react-redux";
import {fetchFacts} from "./store/actions"



function App({fetchFacts, loadingFacts}) {
  useEffect(() => {
    fetchFacts()
  }, [fetchFacts])
  return (
    <div className="App">
     
        {!loadingFacts ? <CatFacts/> : <div>...fetching facts</div>}
      

    </div>
  );
}

function mapStateToProps(state) {
  return {
    loadingFacts: state.loadingFacts
  }
}

export default connect(mapStateToProps ,{fetchFacts})(App)
