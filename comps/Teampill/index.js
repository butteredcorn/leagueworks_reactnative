import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";
import MyAvatar from "../Avatar";
import MyTab from "../Tab";
import SearchInput from "../searchinput";

const styles = StyleSheet.create({
  container: {
    width: 325,
    height: 95,
    backgroundColor: "#ECECEC",
    borderRadius: 100,
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)"
  },
  teamcont: {
    width: 325,
    height: 95,
    borderRadius: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 12
  },
  infocont: {
    width: 145,
    height: 50,
    display: "flex",
    alignItems: "left",
    justifyContent: "space-between",
    marginLeft: 12
  },
  circle: {
    width: 75,
    height: 75,
    backgroundColor: "grey",
    borderRadius: 100
  },
  teamtabs: {
    width: 150,
    height: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  standingscont: {
    width: 325,
    height: 270,
    backgroundColor: "#ECECEC",
    borderRadius: 50,
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
    display: "flex",
    alignItems: "center"
  },
  standingsinfo: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    top: 30,
    backgroundColor: "white"
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
    flexDirection: "row"
  },
  statsindiv: {
    display: "flex",
    alignItems: "center"
  },
  rostercont: {
    width: 325,
    height: 270,
    backgroundColor: "#ECECEC",
    borderRadius: 50,
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
    display: "flex",
    alignItems: "center"
  },
  rosterinfo: {
    display: "flex",
    alignItems: "center",
    top: 30,
    height: 90,
    backgroundColor: "white"
  },
  editcont: {
    width: 325,
    height: 270,
    backgroundColor: "#ECECEC",
    borderRadius: 50,
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
    display: "flex",
    alignItems: "center"
  },
  addcont: {
    width: 325,
    height: 360,
    backgroundColor: "#ECECEC",
    borderRadius: 50,
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
    display: "flex",
    alignItems: "center"
  },
  addplayercont: {
    display: "flex",
    flexDirection: "row",
    top: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  searchplayercont: {
    width: 325,
    display: "flex",
    flexDirection: "row",
    top: 30,
    backgroundColor: "green",
    justifyContent: "space-between",
    alignItems: "center"
  },
  backicon: {
    width: 13,
    height: 30
  },
  text: {
    fontWeight: "normal",
    fontSize: 9,
    paddingBottom: 5,
    color: "#111111"
  },
  textselected: {
    fontWeight: "bold",
    fontSize: 9,
    paddingBottom: 5,
    color: "#F35B04"
  },
  none: {
    display: "none"
  },
  show: {
    display: "inline"
  }
});

const MyPill = ({
  text,
  TeamName,
  Awaywins,
  Awaylosses,
  Homewins,
  Homelosses
}) => {
  const [selected, setSelected] = useState(0);

  return (
    <View style={[selected === 1 ? styles.rostercont : styles.no]}>
      <View style={[selected === 2 ? styles.standingscont : styles.no]}>
        <View style={[selected === 3 ? styles.editcont : styles.no]}>
          <View style={[selected === 4 ? styles.addcont : styles.no]}>
            <View style={styles.container}>
              <View style={styles.teamcont}>
                <View style={styles.circle}>
                  <MyAvatar />
                </View>

                <View style={styles.infocont}>
                  <View>
                    <Text>{TeamName}</Text>
                  </View>

                  <View style={styles.teamtabs}>
                    <TouchableHighlight
                      onPress={() => {
                        setSelected(1);
                      }}
                    >
                      <View style={styles.indivcont}>
                        <Text
                          style={[
                            selected === 1 ? styles.textselected : styles.text
                          ]}
                        >
                          Rosters
                        </Text>
                        <View></View>
                      </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                      onPress={() => {
                        setSelected(2);
                      }}
                    >
                      <View style={styles.indivcont}>
                        <Text
                          style={[
                            selected === 2 ? styles.textselected : styles.text
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
                        <Text
                          style={[
                            selected === 3 ? styles.textselected : styles.text
                          ]}
                        >
                          Edit
                        </Text>
                        <View></View>
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </View>
            {/* Roster info start */}
            <View style={[selected === 1 ? styles.rosterinfo : styles.none]}>
              <View>
                <MyTab tab1="Admins" tab2="Coaches" tab3="Players" />
              </View>
            </View>
            {/* Standings card info */}
            <View style={[selected === 2 ? styles.standingsinfo : styles.none]}>
              <View>
                <Text>Standings</Text>
              </View>
              <View
                style={[selected === 2 ? styles.homeawaycont : styles.none]}
              >
                {/* Home container start */}
                <View style={styles.statsindiv}>
                  <Text>Home</Text>
                  <View
                    style={[
                      selected === 2 ? styles.standingstatscont : styles.none
                    ]}
                  >
                    <Text>{Homewins}</Text>
                    <Text>Wins</Text>
                  </View>
                  <View
                    style={[
                      selected === 2 ? styles.standingstatscont : styles.none
                    ]}
                  >
                    <Text>{Homelosses}</Text>
                    <Text>Losses</Text>
                  </View>
                </View>

                {/* away container start */}
                <View style={styles.statsindiv}>
                  <Text>Away</Text>
                  <View
                    style={[
                      selected === 2 ? styles.standingstatscont : styles.none
                    ]}
                  >
                    <Text>{Awaywins}</Text>
                    <Text>Wins</Text>
                  </View>
                  <View
                    style={[
                      selected === 2 ? styles.standingstatscont : styles.none
                    ]}
                  >
                    <Text>{Awaylosses}</Text>
                    <Text>Losses</Text>
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
                style={[selected === 3 ? styles.addplayercont : styles.none]}
              >
                <Image></Image>
                <Text>Add Admin/Coach/Player</Text>
              </View>
            </TouchableHighlight>
            <View
              style={[selected === 4 ? styles.searchplayercont : styles.none]}
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
  Awaylosses: "1"
};

export default MyPill;
