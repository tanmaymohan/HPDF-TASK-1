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
const aadharstyle={
  backgroundColor:"rgb(255,255,255)"
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
url="https://twitter.com/tanmay_mohan" />

           
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

<AppBar title="#aadhar" />        
        <Paper  zDepth={3}
			   	  style={{backgroundColor:"rgb(0, 255, 120)",width:"10%",height:"5px",
				  marginLeft:"20px",marginTop:"5px",position:"absolute",zIndex:"95",
				  boxShadow:"2px 2px 30px #100",}}>
          <Toolbar style={aadharstyle}>
            <FlatButton label="Top" /> 
            <FlatButton label="Latest" />
            <FlatButton label="People" />
            <FlatButton label="Videos" />
            <FlatButton label="News" />
            </Toolbar>
            <br />
            <br />
          <Card>
            <CardTitle title="Search filters" />
            </Card>
            </Paper>
        <Paper zDepth={3}
			   	  style={{backgroundColor:"rgb(0, 255, 120)",width:"20%",height:"10px",
				  marginLeft:"20px",marginTop:"175px",position:"absolute",zIndex:"95",
				  boxShadow:"2px 2px 30px #100",}}>
        <Card>
    <CardTitle title="Related searches" />
    <p>
pv sindhu <br /> <br />
#soniagandhi <br /> <br />
#rajasthan <br /> <br />
#amarnath <br /> <br />
jbl and sunburn  </p>
  </Card>
  </Paper> 
  
  <Paper zDepth={3}
			   	  style={{backgroundColor:"rgb(0, 233, 255)",width:"20%",height:"10px",
				  marginLeft:"20px",marginTop:"450px",position:"absolute",zIndex:"95",
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
marginLeft:"500px",marginRight:"250px",marginTop:"50px",position:"absolute",zIndex:"10",}}>
<Card>
  <CardTitle title="'I disagree with you ... ': Chidambaram, Narayana Murthy spar over Aadhaar - Times of India" />

    <CardMedia>
      <img src="http://s3.india.com/wp-content/uploads/2017/03/how-to-apply-for-Aadhar.jpg" alt="" />
    </CardMedia>
    <CardText>
The controversy over Aadhaar on Friday triggered a heated spat between P Chidambaram and NR Narayana Murthy, <br /> 
with the lawyer-politician flagging concerns from a libertarian perspective and the Infosys co-founder stressing on the need for Parliament to enact laws to protect privacy.
</CardText>
    <FlatButton label="Comment" />
                <FlatButton label=" RT : 10"/>
                <FlatButton label="Likes : 10 " />
                <FlatButton  />
     </Card>
     <br />
     </Paper>

     <Paper zDepth={1}
style={{backgroundColor:"rgb(0, 233, 255)",width:"25%",height:"50px",
marginLeft:"500px",marginRight:"250px",marginTop:"650px",position:"absolute",zIndex:"10",}}>
       <Card>
         <Tweet 
         tweetId="944418075708755968" />
         </Card>
         </Paper>
         <Paper zDepth={1}
style={{backgroundColor:"rgb(0, 233, 255)",width:"25%",height:"50px",
marginLeft:"1000px",marginRight:"200px",marginTop:"650px",position:"absolute",zIndex:"10",}}>
       <Card>
         <Tweet 
         tweetId="943499921767915520" />
         </Card>
         </Paper>


         <Paper zDepth={3} 
      style={{
      marginTop:"15px",
      height: '100px',
    width: '300px',  
      float: 'right',
      clear: 'right'}}>
      <Card>
        <CardTitle title="Related articles" />
        <CardText>
          <b> Charges for aadhar </b>
        The charges for <strong>Aadhaar</strong> update are max. Rs 30 (Rs 25+GST = Rs 30 approx).
        If the center charges you more, DO NOT pay.
        </CardText>
        </Card>
        </Paper>

     <Paper zDepth={3} 
      style={{
      marginTop:"60px",
      height: '100px',
    width: '500px',  
      float: 'right',
      clear: 'right'}}>
     <TextField align='right' height="5px" hintText="aadhar">
          </TextField>
          </Paper>
          
          <br />  <br />  <br />
     <Paper zDepth={3} 
      style={{
      marginTop:"70px",
      height: '100px',
    width: '500px',  
      float: 'right',
      clear: 'right'}}>
     
      <Card>
        <CardTitle title="Who to Follow"></CardTitle>
        <Follow 
        username="tanmay_mohan">
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
      marginTop:"90px",
      height: '100px',
    width: '500px',  
      float: 'right',
      clear: 'right'}}>
          <p>© 2017 Twitter About Help Center Terms Privacy policy <br /> Cookies Ads info Brand Blog Status <br />  Apps Jobs Marketing Businesses Developers</p>
          </Paper>
      
  
    
    
        

    
        </div>
        </MuiThemeProvider>
    );



  
  };
}
export default App;