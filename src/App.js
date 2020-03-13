import React, { Component } from 'react';
import { Route, Redirect, withRouter} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from '../src/themes/Theme';
import User from './containers/Users/usersContainer';
import Search from "./containers/Search/Search";
import Repos from "./containers/Repos/reposContainer";

class App extends Component {
    constructor(props) {
        super(props);
    }

  render () {
    return (
        <ThemeProvider theme={lightTheme}>
          <div>
            <Route exact path="/userList"  component={Search} />
            <Route exact path="/userInfo" component={User}/>
            <Route exact path="/repoListView" component={Repos} />
            <Redirect exact from="/" to="/userList" />
          </div>
        </ThemeProvider>
    );
  }
}

export default App;
