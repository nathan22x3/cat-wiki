import Footer from 'containers/Footer';
import HomePage from 'pages/HomePage';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const App = () => {
  return (
    <div css={tw`max-w-[1440px] pt-4 px-24 mx-auto font-montserrat`}>
      <Router>
        <Link to='/'>
          <img
            src={require('assets/images/logo.svg').default}
            alt='Cat Wiki logo'
          />
        </Link>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
