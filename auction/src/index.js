import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store/store'
import { Provider } from 'react-redux';
import SignupContainer from './containers/signupCon'
import LoginContainer  from './containers/loginCon'
import HomeCon from './components/home'
import AddProductContainer from './containers/addProductCon'
import {
  browserHistory, Router, Route, IndexRoute, IndexRedirect, Link, IndexLink
} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


export class Routing extends React.Component{
render(){
  return(
    <div>
 <MuiThemeProvider>
          <Provider store={store}>
            <Router history={browserHistory}>
<Route path="/" component={SignupContainer}></Route>
              <Route path="/signupCon" component={SignupContainer}></Route>
              <Route path="/loginCon" component={LoginContainer}></Route>


              <Route path="/home" component={HomeCon}>
           <Route path="/addproductCon" component={AddProductContainer}></Route>
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
