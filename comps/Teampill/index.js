import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  TouchableOpacity
} from "react-native";
import Avatar from "../Avatar";
import SearchInput from "../searchinput";
import MyCheck from "../Check";
import MyButton from "../button";
import MyTabTwo from "../tabtwo";

const styles = StyleSheet.create({
  container: {
    width: 325,
    height: 95,
    backgroundColor: "#ECECEC",
    borderRadius: 100,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
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
    elevation: 10,
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
    elevation: 10,
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
    elevation: 10,
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
    elevation: 10,
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
    position: "relative",
    left:-40

  },
  indivadmincont: {
    width: 180,
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15
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
    fontSize: 16,
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
    fontFamily:"Ubuntu-Light",
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
    height:60
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
    fontFamily:"Ubuntu-Bold"
  }
});

const MyPill = ({
  teamID,
  email,
  phoneNumber,
  players,
  userTeam,
  onPress,

  text,
  TeamName,
  Awaywins,
  Awaylosses,
  Homewins,
  Homelosses,
  playername,
  membername,
  team_captain,
  player,
  joined,
  thumbnail_link
}) => {
  const [selected, setSelected] = useState(0);

  //example
  if(players) {
    for (let player of players) {
      console.log(`${player.first_name} ${player.last_name}`)
    }
  }

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
                      <Avatar dim={60} thumbnail_link={thumbnail_link}/>
                      {/* Team/League Icon */}
                    </View>

                    <View style={styles.infocont}>
                      <View style={styles.namecont}>
                        <Text style={styles.title}>{TeamName}</Text>

                        {!joined && <TouchableOpacity style={styles.joinbtn} onPress={() => onPress(teamID, players)}>
                          <Text style={styles.joinbtntext}>Join</Text>
                        </TouchableOpacity>}
                      </View>



                      <View style={styles.teamtabs}>
                        <TouchableHighlight
                          onPress={() => {
                            setSelected(1);
                          }}
                        >
                          <View style={styles.indivcont}>
                            {/* ROSTER TEXT STATE START */}
                            <Text
                              style={[
                                selected === 0 ? styles.text : styles.none
                              ]}
                            >
                              Rosters
                            </Text>
                            <Text
                              style={[
                                selected === 1
                                  ? styles.textselected
                                  : styles.none
                              ]}
                            >
                              Rosters
                            </Text>
                            <Text
                              style={[
                                selected === 2 ? styles.text : styles.none
                              ]}
                            >
                              Rosters
                            </Text>
                            <Text
                              style={[
                                selected === 3 ? styles.text : styles.none
                              ]}
                            >
                              Rosters
                            </Text>
                            <Text
                              style={[
                                selected === 4 ? styles.text : styles.none
                              ]}
                            >
                              Rosters
                            </Text>
                            <Text
                              style={[
                                selected === 5
                                  ? styles.textselected
                                  : styles.none
                              ]}
                            >
                              Rosters
                            </Text>
                            <Text
                              style={[
                                selected === 6
                                  ? styles.textselected
                                  : styles.none
                              ]}
                            >
                              Rosters
                            </Text>
                            {/* ROSTER TEXT STATE END */}
                            <View></View>
                          </View>
                        </TouchableHighlight>

                        <TouchableHighlight
                          onPress={() => {
                            setSelected(2);
                          }}
                        >
                          
                          
                          {/* Standings */}
                          
                          
                          <View style={styles.indivcont}>
                            <Text
                              style={[
                                selected === 2
                                  ? styles.textselected
                                  : styles.text
                              ]}
                            >
                              Standings
                            </Text>
                          </View>
                        </TouchableHighlight>

                        <TouchableHighlight
                          onPress={() => {
                            setSelected(3);
                          }}
                        >
                        
                          
                          
                          <View style={styles.indivcont}>
                            {/* EDIT TEXT STATE START */}
                            <Text
                              style={[
                                selected === 3
                                  ? styles.textselected
                                  : styles.none
                              ]}
                            >
                              Edit
                            </Text>
                            <Text
                              style={[
                                selected === 4
                                  ? styles.textselected
                                  : styles.none
                              ]}
                            >
                              Edit
                            </Text>
                            <Text
                              style={[
                                selected === 2 ? styles.text : styles.none
                              ]}
                            >
                              Edit
                            </Text>
                            <Text
                              style={[
                                selected === 1 ? styles.text : styles.none
                              ]}
                            >
                              Edit
                            </Text>
                            <Text
                              style={[
                                selected === 0 ? styles.text : styles.none
                              ]}
                            >
                              Edit
                            </Text>
                            <Text
                              style={[
                                selected === 5 ? styles.text : styles.none
                              ]}
                            >
                              Edit
                            </Text>
                            <Text
                              style={[
                                selected === 6 ? styles.text : styles.none
                              ]}
                            >
                              Edit
                            </Text>
                            {/* EDIT TEXT STATE END */}
                            <View></View>
                          </View>
                        </TouchableHighlight>
                      </View>
                    </View>
                  </View>
                </View>
                {/* Roster info start */}
                <View
                  style={[
                    selected === 0 ||
                    selected === 2 ||
                    selected === 3 ||
                    selected === 4
                      ? styles.none
                      : styles.tabcont
                  ]}
                >
                  <MyTabTwo
                    tab1="Captains"
                    tab2="Players"
                    press1={(tab) => {
                      setSelected(5);
                      //alert(tab);
                    }}
                    press2={(tab) => {
                      setSelected(6);
                      //alert(tab);
                    }}
                  />
                </View>
                <View
                  style={[selected === 1 ? styles.rosterinfo : styles.none]}
                >
                  <View
                    style={[selected === 1 ? styles.roster : styles.no]}
                  ></View>

                   {/* ADMIN CONTAINER START */}
                  <View style={[selected === 1 ? styles.admincont : styles.no]}>
                    <View
                      style={[
                        selected === 1 ? styles.indivadmincont : styles.no
                      ]}
                    >
                      <Avatar dim={50}/>
                      
                    </View>
                    <View
                      style={[
                        selected === 1 ? styles.indivadmincont : styles.no
                      ]}
                    >
                      <Avatar dim={50}/>
                      <Text style={styles.membertext}>{`${players[0].first_name} ${players[0].last_name}`}</Text>
                    </View>
                    <View
                      style={[
                        selected === 1 ? styles.indivadmincont : styles.no
                      ]}
                    >
                      <Avatar dim={50}/>
                    
                    </View>
                  </View>
                </View> 
                {/* COACH CONTAINER START */}
                <View
                  style={[selected === 5 ? styles.rosterinfo : styles.none]}
                >
                  <View
                    style={[selected === 5 ? styles.roster : styles.none]}
                  ></View>

                  {/* COACH CONTAINER START */}
                  <View
                    style={[selected === 5 ? styles.admincont : styles.none]}
                  >
                    <View
                      style={[
                        selected === 5 ? styles.indivadmincont : styles.none
                      ]}
                    >
                      <Avatar dim={50}/>
                      <Text style={styles.membertext}>{`${players[0].first_name} ${players[0].last_name}`}</Text>
                    </View>
                    {/* <View
                      style={[
                        selected === 5 ? styles.indivadmincont : styles.none
                      ]}
                    >
                      <Avatar dim={50}/>
                      <Text style={styles.membertext}>{team_captain}</Text>
                    </View> */}
                    {/* <View
                      style={[
                        selected === 5 ? styles.indivadmincont : styles.none
                      ]}
                    >
                      <Avatar dim={50}/>
                      <Text style={styles.membertext}>{team_captain}</Text>
                    </View> */}
                  </View>
                </View>
                {/* Players CONTAINER START */}
                <View
                  style={[selected === 6 ? styles.rosterinfo : styles.none]}
                >
                  <View
                    style={[selected === 6 ? styles.roster : styles.none]}
                  ></View>
                  {/* Players CONTAINER START */}
                  
                  
                  
                  <View
                    style={[selected === 6 ? styles.admincont : styles.none]}
                  >

                    
                    {Array.isArray(players) && players.map(player => <View
                      style={[
                        selected === 6 ? styles.indivadmincont : styles.none
                      ]}
                    >
                      <Avatar dim={50}/>
                      <Text style={styles.membertext}>{`${player.first_name} ${player.last_name}`}</Text>
                    </View>)}

                   
                  </View>
                </View>

                {/* Standings card info */}
                <View
                  style={[selected === 2 ? styles.standingsinfo : styles.none]}
                >
                  <View>
                    <Text style={styles.title}>Standings</Text>
                  </View>
                  <View
                    style={[selected === 2 ? styles.homeawaycont : styles.none]}
                  >
                    {/* Home container start */}
                    <View style={styles.statsindiv}>
                      <Text style={styles.textbold}>Home</Text>
                      <View
                        style={[
                          selected === 2
                            ? styles.standingstatscont
                            : styles.none
                        ]}
                      >
                        <Text style={styles.winnumber}>{Homewins}</Text>
                        <Text style={styles.textbold}>Wins</Text>
                      </View>
                      <View
                        style={[
                          selected === 2
                            ? styles.standingstatscont
                            : styles.none
                        ]}
                      >
                        <Text style={styles.losenumber}>{Homelosses}</Text>
                        <Text style={styles.text}>Losses</Text>
                      </View>
                    </View>

                    {/* away container start */}
                    <View style={styles.statsindiv}>
                      <Text style={styles.textbold}>Away</Text>
                      <View
                        style={[
                          selected === 2
                            ? styles.standingstatscont
                            : styles.none
                        ]}
                      >
                        <Text style={styles.winnumber}>{Awaywins}</Text>
                        <Text style={styles.textbold}>Wins</Text>
                      </View>
                      <View
                        style={[
                          selected === 2
                            ? styles.standingstatscont
                            : styles.none
                        ]}
                      >
                        <Text style={styles.losenumber}>{Awaylosses}</Text>
                        <Text style={styles.text}>Losses</Text>
                      </View>
                    </View>
                  </View>
                </View>

                {/*edit start*/}
                <TouchableHighlight
                  onPress={() => {
                    setSelected(4);
                  }}
                >
                  <View
                    style={[
                      selected === 3 ? styles.addplayercont : styles.none
                    ]}
                  >
                    <Image
                      style={[selected === 3 ? styles.addicon : styles.none]}
                      source={require("../../public/add.png")}
                    />

                    <Text style={styles.addmembertext}>
                      Add Admin/Team Captain/Player
                    </Text>
                  </View>
                </TouchableHighlight>
                <View
                  style={[selected === 3 ? styles.playercont : styles.none]}
                >
                  {/* INDIVIDUAL MEMBER CONTAINERS  */}
                  <View
                    style={[
                      selected === 3 ? styles.indivplayercont : styles.none
                    ]}
                  >
                    <View style={styles.avatarcont}>
                      <Avatar dim={50}/>
                    </View>
                    <View>
                      <Text style={styles.membertext}>{membername}</Text>
                    </View>
                    <Image
                      style={[selected === 3 ? styles.trashicon : styles.none]}
                      source={require("../../public/trash.png")}
                    />
                  </View>
                  {/* INDIVIDUAL MEMBER CONTAINERS  */}
                  <View
                    style={[
                      selected === 3 ? styles.indivplayercont : styles.none
                    ]}
                  >
                    <View style={styles.avatarcont}>
                      <Avatar dim={50}/>
                    </View>
                    <View>
                      <Text style={styles.membertext}>{membername}</Text>
                    </View>
                    <Image
                      style={[selected === 3 ? styles.trashicon : styles.none]}
                      source={require("../../public/trash.png")}
                    />
                  </View>
                  {/* INDIVIDUAL MEMBER CONTAINERS  */}
                  <View
                    style={[
                      selected === 3 ? styles.indivplayercont : styles.none
                    ]}
                  >
                    <View style={styles.avatarcont}>
                      <Avatar dim={50}/>
                    </View>
                    <View>
                      <Text style={styles.membertext}>{membername}</Text>
                    </View>
                    <Image
                      style={[selected === 3 ? styles.trashicon : styles.none]}
                      source={require("../../public/trash.png")}
                    />
                  </View>
                </View>

                <View
                  style={[
                    selected === 4 ? styles.searchplayercont : styles.none
                  ]}
                >
                  <TouchableHighlight
                    onPress={() => {
                      setSelected(3);
                    }}
                  >
                    <Image
                      style={[selected === 4 ? styles.backicon : styles.none]}
                      source={require("../../public/backarrow.png")}
                    />
                  </TouchableHighlight>
                  <SearchInput />
                </View>
                 <View
                  style={[selected === 4 ? styles.playercontsearch : styles.none]}
                >
                {/* INDIVIDUAL MEMBER CONTAINERS ADD SECTION */}
                <View
                  style={[
                    selected === 4 ? styles.indivplayercont : styles.none
                  ]}
                >
                  <View style={styles.avatarcont}>
                    <Avatar dim={50} />
                  </View>
                  <View>
                    <Text style={styles.membertext}>{membername}</Text>
                  </View>
                  <MyCheck />
                </View>
                {/* INDIVIDUAL MEMBER CONTAINERS ADD SECTION */}
                <View
                  style={[
                    selected === 4 ? styles.indivplayercont : styles.none
                  ]}
                >
                  <View style={styles.avatarcont}>
                    <Avatar dim={50} />
                  </View>
                  <View>
                    <Text style={styles.membertext}>{membername}</Text>
                  </View>
                  <MyCheck />
                </View>
                {/* INDIVIDUAL MEMBER CONTAINERS ADD SECTION */}
                <View
                  style={[
                    selected === 4 ? styles.indivplayercont : styles.none
                  ]}
                >
                  <View style={styles.avatarcont}>
                    <Avatar dim={50} />
                  </View>
                  <View>
                    <Text style={styles.membertext}>{membername}</Text>
                  </View>
                  <MyCheck />
                </View>
                </View>
                <View style={[selected === 4 ? styles.savebtn : styles.none]}>
                  <MyButton text="Save" />
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
  Homewins: "0",
  Homelosses: "0",
  Awaywins: "0",
  Awaylosses: "0",
  playername: "Player Name",
  membername: "Member Name",
  team_captain: "Captain Name",
  player: "Player Name"
};

export default MyPill;
