import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store/store'
import { Provider } from 'react-redux';
import SignupContainer from './containers/signupCon'
import LoginContainer from './containers/loginCon'
import Auctioner from './components/auctioner'
import AddProductContainer from './containers/addProductCon'
import ViewProductContainer from './containers/viewproductCon'
import BitProductContainer from './containers/bitproductCon'
import ViewBidProductContainer from './containers/viewBidProductCon'
import Bider from './components/Bider'
import MainCon from './components/main'
import {
  browserHistory, Router, Route, IndexRoute, IndexRedirect, Link, IndexLink
} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


export class Routing extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Provider store={store}>
            <Router history={browserHistory}>
              <Route path="/" component={SignupContainer}></Route>
              <Route path="/signupCon" component={SignupContainer}></Route>
              <Route path="/loginCon" component={LoginContainer}></Route>

              <Route path="/main" component={MainCon}></Route>
              <Route path="/Bider" component={Bider}>
                <Route path="/bitproductCon" component={BitProductContainer}></Route>
                <Route path="/viewproductCon" component={ViewProductContainer}></Route>
                <Route path="/viewproductCon/:id" component={BitProductContainer}></Route>

              </Route>
              <Route path="/auctioner" component={Auctioner}>
                <Route path="/addproductCon" component={AddProductContainer}></Route>
                 <Route path="/viewBidproductCon" component={ViewBidProductContainer}></Route>
              </Route>

            </Router>
          </Provider>
        </MuiThemeProvider>






      </div>
    )
  }
}




ReactDOM.render(
  <Routing />,
  document.getElementById('root')
);
