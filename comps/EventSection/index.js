import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
const EventSection = ({ eventName, eventTime, eventEnd, eventDesc, eventLocation, redirect, editable, redirect2, match_id}) => {
  return (
    <View style={styles.container}>
      <View style={styles.bigBox}>
        <View style={styles.eventCont}>

          <View style={styles.headerFlex}>
            <View style={styles.eventName}>
              <Text style={{fontFamily:"Ubuntu-Bold"}}>{eventName}</Text>
            </View>

            {editable && <TouchableOpacity onPress={() => redirect2()}>
                <Image  source={require("../../public/edit.png")} style={styles.editIcon}/>
            </TouchableOpacity>} 
          </View>

          <View style={styles.timeCont}>
            <Image
              style={styles.timeIcon}
              source={require('../../public/time.png')}
            ></Image>
            <View>
              <Text style={{fontFamily:"Ubuntu-Light"}}>{eventTime}</Text>
              <Text style={{fontFamily:"Ubuntu-Light"}}>{eventEnd}</Text>
            </View>
          </View>

          <View style={styles.locationCont}>
            <Image
              style={styles.locationIcon}
              source={require('../../public/location.png')}
            ></Image>
            <View style={{width:170}}><TouchableOpacity onPress={() => redirect(eventLocation)}><Text style={{fontFamily:"Ubuntu-Light"}}>{eventLocation}</Text></TouchableOpacity></View>
          </View>

          {/* <View style={styles.descriptionCont}>
            <Image
              style={styles.locationIcon}
              source={require('../../public/description.png')}
            ></Image>
            <View><Text>{eventDesc}</Text></View>
          </View> */}
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
  },
  bigBox: {

    width: 320,
    height: 150,


    backgroundColor: "#ECECEC",
    borderRadius: 12,
    margin:15
  },
  eventCont: {
    marginLeft: 30,
    flex: 1,
    flexDirection: "column"
  },
  timeCont: {
    flex: 1,
    flexDirection: "row",
    fontSize: 14,
    fontFamily:"Ubuntu-Light"
  },
  eventName: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 18,
    fontFamily:"Ubuntu-Light",
    fontWeight:"900",
    
  },
  timeIcon: {
    width: 17.14,
    height: 17.14,
    marginRight: 5
  },
  locationCont: {
    flex: 1,
    flexDirection: "row",
    fontSize: 14
  },
  locationIcon: {
    width: 18,
    height: 18,
    marginRight: 5
  },
  descriptionCont: {
    flex: 1,
    flexDirection: "row",
    fontSize: 14,
    fontFamily:"Ubuntu-Light"
  },
  eventheader:{
    fontFamily:"Ubuntu-Bold"
  },
  headerFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

// const styles = StyleSheet.create({})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   bigBox: {
//     width: 322,
//     height: 155,
//     backgroundColor: "#ECECEC",
//     borderRadius: 12
//   },
//   eventCont: {
//     marginLeft: 30,
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "space-between"
//   },
//   timeCont: {
//     flex: 1,
//     flexDirection: "row",
//     fontSize: 14
//   },
//   eventName: {
//     marginTop: 10,
//     marginBottom: 10,
//     fontSize: 18,
//     fontWeight:"900"
//   },
//   timeIcon: {
//     width: 17.14,
//     height: 17.14,
//     marginRight: 10
//   },
//   locationCont: {
//     flex: 1,
//     flexDirection: "row",
//     fontSize: 14
//   },
//   locationIcon: {
//     width: 18.86,
//     height: 18.86,
//     marginRight: 10
//   },
//   descriptionCont: {
//     flex: 1,
//     flexDirection: "row",
//     fontSize: 14
//   },
//   eventheader:{
//     fontWeight:"bold"
//   }
// });


EventSection.defaultProps = {
  eventName: "Add an Event",
  eventTime: "",
  eventEnd:"",
  eventLocation: "",
  eventDesc: ""
};

export default EventSection;
