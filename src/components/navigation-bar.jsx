/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";

let {
  StatusBarIOS,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} = React;

const NAV_BAR_HEIGHT = 44;
const STATUS_BAR_HEIGHT = 20;
const NAV_HEIGHT = NAV_BAR_HEIGHT + STATUS_BAR_HEIGHT;

const styles = StyleSheet.create({
  navBarContainer: {
    height: NAV_HEIGHT,
    backgroundColor: "white",
    paddingBottom: 5,
    borderBottomColor: "rgba(0, 0, 0, 0.5)",
    borderBottomWidth: 1 / React.PixelRatio.get()
  },
  navBar: {
    height: NAV_HEIGHT,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  customTitle: {
    position: "absolute",
    alignItems: "center",
    bottom: 5,
    left: 0,
    right: 0
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
    flex: 2,
    textAlign: "center"
  },
  navBarTitleText: {
    color: "#373e4d",
    fontWeight: "500",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 15
  },
  navBarLeftButton: {
    paddingLeft: 10,
    marginVertical: 20
  },
  navBarRightButton: {
    marginVertical: 20,
    paddingRight: 10
  },
  navBarButtonText: {
    color: "#5890ff"
  }
});

class NavigationBar extends React.Component {
  prevButtonShouldBeHidden(): Boolean {
    let {
      onPrev,
      hidePrev,
      navigator
    } = this.props;

    const getCurrentRoutes = navigator.getCurrentRoutes;

    return (
      hidePrev ||
      (getCurrentRoutes && getCurrentRoutes().length <= 1 && !onPrev)
    );
  }
  getLeftButtonElement() {
    let {
      onPrev,
      prevTitle,
      navigator,
      route,
      buttonsColor,
      customPrev
    } = this.props;

    if (customPrev) {
      return React.cloneElement(customPrev, { navigator, route });
    }

    if (this.prevButtonShouldBeHidden()) {
      return <View style={styles.navBarLeftButton} />;
    }

    const customStyle = buttonsColor ? { color: buttonsColor } : {};

    let onPress = navigator.pop;

    if (onPrev) {
      onPress = () => onPrev(navigator, route);
    }

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.navBarLeftButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText, customStyle ]}>
            {prevTitle || "Back"}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  getTitleElement() {
    let {
      title,
      titleColor,
      customTitle,
      navigator,
      route
    } = this.props;

    if (customTitle) {
      return (
        <View style={styles.customTitle}>
          {React.cloneElement(customTitle, { navigator, route })}
        </View>
      );
    }

    if (title && !title.length) {
      return true;
    }

    const titleStyle = [
      styles.navBarText,
      styles.navBarTitleText,
      { color: titleColor }
    ];

    return (
      <Text style={titleStyle}>
        {title}
      </Text>
    );
  }
  getRightButtonElement() {
    let {
      onNext,
      nextTitle,
      navigator,
      route,
      buttonsColor,
      customNext
    } = this.props;

    if (customNext) {
      return React.cloneElement(customNext, { navigator, route });
    }

    if (!onNext) {
      return <Text style={styles.navBarRightButton} />;
    }

    const customStyle = buttonsColor ? { color: buttonsColor } : {};

    return (
      <TouchableOpacity onPress={() => onNext(navigator, route)}>
        <View style={styles.navBarRightButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText, customStyle ]}>
            {nextTitle || "Next"}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    if (this.props.statusBar === "lightContent") {
      StatusBarIOS.setStyle("light-content", false);
    } else if (this.props.statusBar === "default") {
      StatusBarIOS.setStyle("default", false);
    }

    let { style, backgroundStyle } = this.props;

    return (
      <View style={[styles.navBarContainer, backgroundStyle ]}>
        <View style={[styles.navBar, style ]}>
          {this.getTitleElement()}
          {this.getLeftButtonElement()}
          {this.getRightButtonElement()}
        </View>
      </View>
    );
  }
}

NavigationBar.propTypes = {
  backgroundStyle: React.PropTypes.object,
  buttonsColor: React.PropTypes.string,
  customNext: React.PropTypes.node,
  customPrev: React.PropTypes.node,
  customTitle: React.PropTypes.node,
  hidePrev: React.PropTypes.bool,
  navigator: React.PropTypes.object,
  nextTitle: React.PropTypes.string,
  onNext: React.PropTypes.func,
  onPrev: React.PropTypes.func,
  prevTitle: React.PropTypes.string,
  route: React.PropTypes.object,
  statusBar: React.PropTypes.string,
  style: React.PropTypes.object,
  title: React.PropTypes.string,
  titleColor: React.PropTypes.string
};

export default NavigationBar;
