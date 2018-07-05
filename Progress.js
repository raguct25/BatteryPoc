/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import ProgressBarAnimated from "react-native-progress-bar-animated";

export default class Progress extends Component {
  state = {
    progress: 100,
    progressWithOnComplete: 0,
    progressCustomized: 0
  };
  increase = (key, value) => {
    this.setState({ [key]: this.state[key] + value });
  };
  render() {
    console.log("Progrss bar check");
    const barWidth = Dimensions.get("screen").width - 30;
    const progressCustomStyles = {
      backgroundColor: "red",
      borderRadius: 10,
      borderColor: "orange"
    };
    return (
      <View style={styles.container}>
        <View style={styles.angle}>
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.progress}
            height={150}
            backgroundColorOnComplete="green"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  angle: {
    transform: [{ rotate: "-90deg" }]
  }
});
