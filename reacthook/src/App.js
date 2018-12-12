import React, { Component } from 'react';
import ColoredBanner from './ColoredBanner';
import ColoredBannerCustomHook from './ColoredBannerCustomHook'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColoredBanner/>
        <ColoredBannerCustomHook/>
      </div>
    );
  }
}

export default App;
