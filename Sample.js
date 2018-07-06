/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default class Sample extends Component {
  state = {
    progress: 0
  };
  increase = (key, value) => {
    this.setState({ [key]: this.state[key] + value });
  };
  decrease = (key, value) => {
    this.setState({ [key]: this.state[key] - value });
  };
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.battery1}
        >
          <View style={styles.battery1} />
        </LinearGradient>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.battery2}
        >
          <View>
            <View
              style={{
                borderRadius: 8,
                height:
                  this.state.progress * 2 > 190 ? 190 : this.state.progress * 2,
                backgroundColor:
                  this.state.progress * 2 > 40 && this.state.progress * 2 < 180
                    ? "yellow"
                    : this.state.progress * 2 >= 180 ? "green" : "red"
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
  battery1: {
    height: 20,
    width: 50,
    borderWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 5,
    borderColor: "transparent"
    // backgroundColor: "grey"
  },
  battery2: {
    height: 200,
    width: 100,
    borderWidth: 0,
    justifyContent: "flex-end",
    borderRadius: 10,
    borderColor: "transparent",
    // backgroundColor: "grey",
    marginBottom: 15
  },
  angle: {
    transform: [{ rotate: "-90deg" }]
  }
});
