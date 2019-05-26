import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import './config/Reactotron';

import store from './store';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Routes />
      <ReduxToastr
        timeOut={3000}
        preventDuplicates
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
      <GlobalStyle />
    </Fragment>
  </Provider>
);

export default App;
