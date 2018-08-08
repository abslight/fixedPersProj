import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import routes from './routes';
import './reset.css'
{/* <head>
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
  <meta name="msapplication-TileColor" content="#da532c" />
  <meta name="theme-color" content="#ffffff" />
</head> */}

class App extends Component {
  render() {
    <div>

      <title>Nike. Just Do It.</title>
    </div>
    document.title = 'Nike. Just Do It.'
    return (
      <div>
        <div className="App">

          <Header />
          {routes}
        </div>
      </div>
    )
  }
}

export default App;
