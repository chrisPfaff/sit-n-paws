import React from 'react';
import ListingsContainer from './listingsContainer.js';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import exampleListingData from '../../public/MOCK_DATA.js';
import RaisedButton from 'material-ui/RaisedButton';
import InboxContainer from './inbox.js';
import ProfileUpdate from './profileForm.js';
import ShowProfile from './showProfile.js';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: exampleListingData,
      openDrawer: false,
      renderInbox: false,
      renderProfile: false,
    }

    this.touchTap = () => {
      this.setState({openDrawer: !this.state.openDrawer});
    }

    this.styles = {
    margin: 40,
    }

    this.inboxOnClick = (event) => {
      this.setState({renderInbox: !this.state.renderInbox});
    }

    this.profileOnClick = (event) => {
      this.setState({renderProfile: !this.state.renderProfile});
    }
  }



  render() {
    return (
      <div>
        <AppBar showMenuIconButton={false} iconElementRight={<IconButton><NavigationMenu/></IconButton>} onRightIconButtonTouchTap={this.touchTap} />
        <h1>MAIN COMPONENT</h1>

        <ListingsContainer listings={this.state.listings} />
        <Drawer width={400} openSecondary={true} open={this.state.openDrawer} >
          <AppBar title="Sit-n-Paws Profile" onLeftIconButtonTouchTap={this.touchTap}/>
          <ShowProfile/>
          <RaisedButton onClick={this.profileOnClick} label="Edit Profile" primary={true} style={this.styles} />
          <RaisedButton onClick={this.inboxOnClick} label="Inbox" primary={true} style={this.styles}/>
          {this.state.renderInbox ? <InboxContainer/> : null}
          {this.state.renderProfile ? <ProfileUpdate/> : null}
        </Drawer>
      </div>
    )
  }
}
