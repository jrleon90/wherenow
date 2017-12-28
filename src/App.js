import React, { Component } from 'react';

import './App.css';
import Footer from './components/footer';
import SearchBar from './components/search-bar';
import Header from './components/header';
import Banner from './components/banner';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vehicles: ['car','bike','plane']
        };


    }

    render() {
        return (
            <div className="mainApp">
                <div className="header">
                    <Header />
                </div>
                <div>
                    <Banner />
                </div>
                <div className="search">
                    <SearchBar />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        );
  }
}

export default App;
