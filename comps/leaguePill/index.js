import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  TouchableOpacity
} from "react-native";
import Text from '../Text';
import Avatar from "../Avatar";
import MyTab from "../Tab";
import SearchInput from "../searchinput";
import MyCheck from "../Check";
import MyButton from "../button";

const styles = StyleSheet.create({
  container: {
    width: 325,
    height: 95,
    backgroundColor: "#ECECEC",
    borderRadius: 100,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 10
  },
  teamcont: {
    width: 325,
    height: 95,
    borderRadius: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },
  infocont: {
    width: 145,
    height: 50,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginLeft: 12
  },
  teamtabs: {
    width: 150,
    height: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
   tabcont: {
    position: "relative",
    top:25
  },
  standingscont: {
    width: 325,
    height: 270,
    backgroundColor: "#ECECEC",
    borderRadius: 50,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    display: "flex",
    alignItems: "center"
  },
  standingsinfo: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    top: 30
  },
  homeawaycont: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 200,
    marginTop: 10,
    justifyContent: "space-between"
  },
  standingstatscont: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  statsindiv: {
    display: "flex",
    alignItems: "center"
  },
  rostercont: {
    width: 325,
    height: 400,
    backgroundColor: "#ECECEC",
    borderRadius: 50,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    display: "flex",
    alignItems: "center"
  },
  rosterinfo: {
    display: "flex",
    alignItems: "center",
    top: 30,
    height: 90,

  },
  editcont: {
    width: 325,
    height: 400,
    backgroundColor: "#ECECEC",
    borderRadius: 50,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    display: "flex",
    alignItems: "center"
  },
  addcont: {
    width: 325,
    height: 440,
    backgroundColor: "#ECECEC",
    borderRadius: 50,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    display: "flex",
    alignItems: "center",
  },
  addplayercont: {

    display: "flex",
    flexDirection: "row",
    top: 30,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  playercont: {
    display: "flex",
    top: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  playercontsearch: {
    display: "flex",
    top: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  
  indivplayercont: {
    width: 225,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:15
  },
  searchplayercont: {
    width: 325,
    display: "flex",
    flexDirection: "row",
    top: 10,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    
  },
  admincont: {
    width: 230,
    display: "flex",
    alignItems: "center",

  },
  indivadmincont: {
    width: 180,
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10
  },
  savebtn: {
    display: "flex",
    alignItems: "center",
    marginTop: 20
  },
  backicon: {
    width: 13,
    height: 30
  },
  addicon: {
    width: 30,
    height: 30
  },
  trashicon: {
    width: 14,
    height: 18
  },
  title: {
    fontFamily:"Ubuntu-Bold",
    fontSize: 16
  },
  text: {
    fontFamily:"Ubuntu-Light",
    fontSize: 9,
    paddingBottom: 5,
    color: "#111111"
  },
  textbold: {
    fontFamily:"Ubuntu-Bold",
    fontSize: 9,
    paddingBottom: 5,
    color: "#111111"
  },
  winnumber: {
    fontFamily:"Ubuntu-Bold",
    fontSize: 36,
    paddingBottom: 5,
    color: "#111111"
  },
  losenumber: {
    fontFamily:"Ubuntu-Bold",
    fontSize: 16,
    paddingBottom: 5,
    color: "#111111"
  },
  textselected: {
    fontFamily:"Ubuntu-Bold",
    fontSize: 9,
    paddingBottom: 5,
    color: "#F35B04"
  },
  addmembertext: {
    fontFamily:"Ubuntu-Bold",
    fontSize: 12,
    color: "#111111",
    paddingLeft:10
  },
  membertext: {
    fontFamily:"Ubuntu-Bold",
    fontSize: 18,
    color: "#111111"
  },
  avatarcont: {
    height:50
  },
  none: {
    display: "none"
  },
  show: {
    display:"flex"
  },

  namecont: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },

  joinbtn: {
    width: 60,
    height: 20,
    backgroundColor: "#F35B04",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50

  },
  joinbtntext: {
    color: "#F8F9FA",
    fontSize: 12,
    fontFamily:"Ubuntu-Bold",
  }
});

const MyPill = ({
    leagueName,
    sportType,
    email,
    phoneNumber,
    leagueID,
    headline,
    joined,
    onPress,
    redirect,
    league,
    thumbnail_link
}) => {
  const [selected, setSelected] = useState(0);

  return (
    <View style={[selected === 1 ? styles.rostercont : styles.no]}>
      <View style={[selected === 2 ? styles.standingscont : styles.no]}>
        <View style={[selected === 3 ? styles.editcont : styles.no]}>
          <View style={[selected === 4 ? styles.addcont : styles.no]}>
            <View style={[selected === 5 ? styles.rostercont : styles.no]}>
              <View style={[selected === 6 ? styles.rostercont : styles.no]}>
                <View style={styles.container}>
                  <View style={styles.teamcont}>
                    <View style={styles.avatarcont}>
                      <Avatar dim={50} thumbnail_link={thumbnail_link} />
                    </View>

                    <View style={styles.infocont}>
                      <View style={styles.namecont}>
                        <Text style={styles.title}>{leagueName}</Text>

                      {/* join function */}
                      {!joined && <TouchableOpacity style={styles.joinbtn} onPress={() => onPress(leagueID)}>
                          <Text style={styles.joinbtntext}>Join</Text>
                        </TouchableOpacity>}

                      {/* edit season function */}
                        {joined && <TouchableOpacity style={styles.joinbtn} onPress={() => redirect(league)}>
                          <Text style={styles.joinbtntext}>Schedule</Text>
                        </TouchableOpacity>}
                      </View>

                      <View style={styles.teamtabs}>
                        <TouchableHighlight
                          
                        >
                          <View style={styles.indivcont}>
                            {/* Sport Type TEXT STATE START */}
                            <Text
                              style={[
                                selected === 0 ? styles.text : styles.none
                              ]}
                            >
                              {sportType}
                            </Text>
                            {/* sport type TEXT STATE END */}
                            <View></View>
                          </View>
                        </TouchableHighlight>

                        <TouchableHighlight
                          
                        >
                          <View style={styles.indivcont}>
                            {/* Slogan */}
                            <Text
                              style={[
                                selected === 0 ? styles.text : styles.none
                              ]}
                            >
                              {headline}
                            </Text>
                            {/* Slogan */}
                            <View></View>
                          </View>
                        </TouchableHighlight>

                        
                      </View>
                    </View>
                  </View>
                </View>
                
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

MyPill.defaultProps = {
  TeamName: "Team",
  Homewins: "1",
  Homelosses: "1",
  Awaywins: "1",
  Awaylosses: "1",
  admin: " Admin Name",
  playername: "Player Name",
  membername: "Member Name",
  coach: "Coach Name",
  player: "Player Name"
};

export default MyPill;
