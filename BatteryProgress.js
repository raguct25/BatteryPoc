/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default class BatteryProgress extends Component {
  state = {
    progress: 0
  };
  increase = (key, value) => {
    if (this.state[key] < 100) {
      this.setState({ [key]: this.state[key] + value });
    }
  };
  decrease = (key, value) => {
    if (this.state[key] > 0) {
      this.setState({ [key]: this.state[key] - value });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#b0bec5", "#90a4ae", "#546e7a"]}
          style={styles.batteryTop}
        >
          <View style={styles.batteryTop} />
        </LinearGradient>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#b0bec5", "#90a4ae", "#546e7a"]}
          style={styles.batteryBody}
        >
          <View
            style={{
              alignSelf: "center",
              position: "absolute"
            }}
          >
            <Image
              style={{
                marginBottom: 80,
                zIndex: 1,
                width: 50,
                height: 50,
                tintColor: this.state.progress * 2 >= 180 ? "white" : "red"
              }}
              source={
                this.state.progress * 2 >= 180
                  ? require("./assets/batteryHappy.png")
                  : require("./assets/batterySad.png")
              }
            />
          </View>
          <View>
            <View
              style={{
                borderRadius: 8,
                zIndex: 0,
                width: 90,
                alignSelf: "center",
                height:
                  this.state.progress * 2 > 190 ? 190 : this.state.progress * 2,
                backgroundColor:
                  this.state.progress * 2 > 40 && this.state.progress * 2 < 180
                    ? "yellow"
                    : this.state.progress * 2 >= 180
                      ? "green"
                      : "red"
              }}
            />
          </View>
        </LinearGradient>

        <View style={{ marginBottom: 10 }}>
          <Button
            title="Increase 10%"
            onPress={this.increase.bind(this, "progress", 10)}
          />
        </View>

        <Button
          title="Decrease 10%"
          onPress={this.decrease.bind(this, "progress", 10)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  batteryTop: {
    height: 20,
    width: 50,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRadius: 3.75,
    borderColor: "transparent"
  },
  batteryBody: {
    height: 200,
    width: 100,
    borderWidth: 1,
    justifyContent: "flex-end",
    borderRadius: 10,
    borderColor: "transparent",
    marginBottom: 15,
    paddingVertical: 5
  }
});
