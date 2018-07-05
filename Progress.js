/* @flow */

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  Image
} from "react-native";
import ProgressBarAnimated from "react-native-progress-bar-animated";

export default class Progress extends Component {
  state = {
    progress: 95,
    progressWithOnComplete: 0,
    progressCustomized: 0
  };
  increase = (key, value) => {
    this.setState({ [key]: this.state[key] + value });
  };
  decrease = (key, value) => {
    this.setState({ [key]: this.state[key] - value });
  };
  render() {
    console.log("Progrss bar");
    const barWidth = Dimensions.get("screen").width - 30;
    const batteryWidth = Dimensions.get("screen").width;
    const progressCustomStyles = {
      backgroundColor: "red",
      borderRadius: 0,
      borderColor: "orange"
    };
    return (
      <View style={styles.container}>
        <View style={styles.angle}>
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.progress}
            height={150}
            borderRadius={0}
            style={{ zIndex: 0 }}
            backgroundColor={
              this.state.progress > 20 && this.state.progress < 90
                ? "yellow"
                : this.state.progress >= 90
                  ? "green"
                  : "red"
            }
          />
          <Image
            style={{
              width: batteryWidth,
              height: 150,
              position: "absolute",
              zIndex: 1
            }}
            source={require("./assets/battery.png")}
          />
          {/* <Button
            title="Increase 10%"
            onPress={this.increase.bind(this, "progress", 10)}
          /> */}
        </View>
        {/* <Button
          title="Decrease 10%"
          onPress={this.decrease.bind(this, "progress", 10)}
        /> */}
        {/* <Text>{this.state.progress}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF"
  },
  angle: {
    transform: [{ rotate: "-90deg" }]
  }
});
