import React, { Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
class App extends Component
{
    render()
    return(
        <MuiThemeProvider>
        <div>
          <home />
        </div>
      </MuiThemeProvider>
    )
}