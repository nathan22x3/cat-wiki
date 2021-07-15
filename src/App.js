import Footer from 'containers/Footer';
import BreedDetailsPage from 'pages/BreedDetailsPage';
import HomePage from 'pages/HomePage';
import TopBreedsPage from 'pages/TopBreedsPage';
import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const App = () => {
  return (
    <div css={tw`max-w-[1440px] pt-4 px-4 mx-auto font-montserrat lg:px-24`}>
      <Router>
        <Link to='/'>
          <img
            src={require('assets/images/logo.svg').default}
            alt='Cat Wiki logo'
          />
        </Link>
        <Switch>
          <Redirect exact path='/breed' to='/' />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/breed/:name' component={BreedDetailsPage} />
          <Route exact path='/top-breeds' component={TopBreedsPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
