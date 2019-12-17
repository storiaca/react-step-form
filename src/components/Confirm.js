import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { List, ListItem } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCCESS FORM
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
          </List>
          <List>
            <ListItem primaryText="Last Name" secondaryText={lastName} />
          </List>
          <List>
            <ListItem primaryText="Email" secondaryText={email} />
          </List>
          <List>
            <ListItem primaryText="Occupation" secondaryText={occupation} />
          </List>
          <List>
            <ListItem primaryText="City" secondaryText={city} />
          </List>
          <List>
            <ListItem primaryText="Bio" secondaryText={bio} />
          </List>
          <br />
          <Button
            style={styles.button}
            onClick={this.continue}
            variant="contained"
          >
            Confirm & Continue
          </Button>
          <br />
          <Button style={styles.button} onClick={this.back} variant="contained">
            Back
          </Button>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};
export default Confirm;
