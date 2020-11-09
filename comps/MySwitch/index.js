import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const MySwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <View style={styles.container}>
      <Switch
        style={styles.switch}
        trackColor={{ false: "#EAEAEA", true: "#FD8700" }}
        thumbColor="#FD8700"
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      ></Switch>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  switch: {
    width: 65,
    height: 37
  }
});

export default MySwitch;
