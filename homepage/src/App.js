import React , { Component } from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import loop from 'material-ui/svg-icons/av/loop';
import { Follow, Timeline, Tweet, Share } from 'react-twitter-widgets';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';





const twstyle = {
  backgroundColor:"rgb(29, 161, 242)"
}


class App extends Component
{
  render(){
    return(
      <MuiThemeProvider>
      <div className="App">
      <Toolbar style={twstyle}>
        
        <ToolbarGroup />
      <FlatButton label="Home"   />
     
      <FlatButton label="Moments"  />     

      <FlatButton label="Notifications"  />     

      <FlatButton label="Messages"  />   

        <ToolbarGroup>
          <TextField  hintText="Write here" />
<Share 
url="https://twitter.com/tweetsbytanmay" />

           
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Profile" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Help Center" />
            <MenuItem primaryText="Keyboard Shorcuts" />
            <MenuItem primaryText="Logout" />
            
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
          
        <Paper zDepth={3}
			   	  style={{backgroundColor:"rgb(0, 255, 120)",width:"20%",height:"10px",
				  marginLeft:"20px",marginTop:"10px",position:"absolute",zIndex:"95",
				  boxShadow:"2px 2px 30px #100",}}>
        <Card>
    <CardHeader
      title="Tanmay Mohan"
      subtitle="@tanmay_mohan"
      avatar="https://pbs.twimg.com/profile_images/942967280240955392/pn3xOykn_400x400.jpg"
      
    />
    
    <CardActions>
      <FlatButton primary={true} label="Tweets" /><p>300</p><FlatButton primary={true} label="Following" /><p>300</p><FlatButton primary={true} label="Following" /><p>300</p>
    </CardActions>
    <Follow
    username="tweetsbytanmay" />
  </Card>
  </Paper> 
  
  <Paper zDepth={3}
			   	  style={{backgroundColor:"rgb(0, 233, 255)",width:"20%",height:"10px",
				  marginLeft:"20px",marginTop:"400px",position:"absolute",zIndex:"95",
				  boxShadow:"2px 2px 30px #100",}}>
          
          <Card> 
<CardTitle title="Trends to follow" />     

          <List>
      <ListItem primaryText="#ModiinGujarat" />
      <ListItem primaryText="#Aadhar"/>
      <ListItem primaryText="#ThumbsupCharged"/>
      <ListItem primaryText="#Hacktoberfest" />
      <ListItem primaryText="#Hasura" />
    </List>
    </Card>
</Paper>


<Paper zDepth={1}
style={{backgroundColor:"rgb(0, 233, 255)",width:"25%",height:"50px",
marginLeft:"500px",marginRight:"250px",marginTop:"20px",position:"absolute",zIndex:"10",}}>
<Card>
  <CardHeader
      title="Tanmay Mohan"
      subtitle="@tweetsbytanmay"
      avatar="https://pbs.twimg.com/profile_images/1059680469506232320/cmDVuOwb_400x400.jpg"
    />

    <CardMedia>
      <img src="https://pbs.twimg.com/media/DRj3rcPVoAAyGuk.png:large" alt="" />
    </CardMedia>
    <FlatButton label="Comment" />
                <FlatButton label=" RT : 10"/>
                <FlatButton label="Likes : 10 " />
                <FlatButton  />
    />            
    
     </Card>
     <br /> 
<Timeline 
dataSource={{sourceType:"profile", screenName:"HasuraHQ"}} 
options={{username:"HasuraHQ", width:"800" , height:"600"}} />
     </Paper>
     <Paper zDepth={3} 
      style={{
      marginTop:"10px",
      height: '100px',
    width: '500px',  
      float: 'right',
      clear: 'right'}}>
     <TextField align='right' height="5px" hintText="Search here">
          </TextField>
          </Paper>
          <br />  <br />  <br />
     <Paper zDepth={3} 
      style={{
      marginTop:"25px",
      height: '100px',
    width: '500px',  
      float: 'right',
      clear: 'right'}}>
     
      <Card>
        <CardTitle title="Who to Follow"></CardTitle>
        <Follow 
        username="tweetsbytanmay">
        </Follow>
        <Follow 
        username="HasuraHQ">
        </Follow>
        <Follow 
        username="HasuraEd">
        </Follow>
        </Card>
        </Paper>
        <Paper  style={{
      marginTop:"50px",
      height: '100px',
    width: '500px',  
      float: 'right',
      clear: 'right'}}>
          <p>© 2017 Twitter About Help Center Terms Privacy policy <br /> Cookies Ads info Brand Blog Status <br />  Apps Jobs Marketing Businesses Developers</p>
          
          </Paper>
      
     <Paper 
     style={{marginTop:"400px", marginLeft:"500px", float: 'center', clear: 'center', width:"25%" }}>
      <Tweet 
       tweetId="938977275592114177">
       </Tweet>

    </Paper>
    
    
        

    
        </div>
        </MuiThemeProvider>
    );



  
  };
}
export default App;
