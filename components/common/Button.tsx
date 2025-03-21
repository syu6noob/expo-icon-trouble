import { Text, Pressable, StyleSheet, GestureResponderEvent } from "react-native";
import Colors from "@/Colors";
import { FontAwesome6 } from '@expo/vector-icons';
import { View } from "react-native";

export default function Button({
  text,
  icon,
  type = 'blank',
  size = 'medium',
  onPress = () => { }
}: {
  text?: string,
  icon?: keyof typeof FontAwesome6.glyphMap,
  type?: 'blank' | 'peach' | 'orange' | 'green',
  size?: 'small' | 'medium' | 'large',
  onPress?: (event: GestureResponderEvent) => void
}) {
  let color = {
    base: Colors.light,
    text: Colors.dark,
    border: Colors.lightgray,
  };
  if (type === 'peach') {
    color = {
      base: Colors.peach_base,
      text: Colors.white,
      border: Colors.peach_heavy,
    };
  } else if (type === 'orange') {
    color = {
      base: Colors.orange_base,
      text: Colors.white,
      border: Colors.dark,
    };
  } else if (type === 'green') {
    color = {
      base: Colors.green_base,
      text: Colors.white,
      border: Colors.dark,
    };
  }

  let measure;
  if (size === 'small') {
    measure = {
      padding: 8,
      borderRadius: 12,
      textSize: 16,
      iconSize: 12,
    };
  } else if (size === 'medium') {
    measure = {
      padding: 12,
      borderRadius: 12,
      textSize: 24,
      iconSize: 18,
    };
  } else {
    measure = {
      padding: 12,
      borderRadius: 12,
      textSize: 32,
      iconSize: 28,
    };
  }

  const styles = StyleSheet.create({
    button: {
      display: "flex",
      flex: 1,
      flexDirection: "row",
      paddingHorizontal: measure.padding,
      paddingVertical: measure.padding,
      backgroundColor: color.base,
      borderColor: color.border,
      borderWidth: 1,
      borderRadius: measure.borderRadius,
      gap: 16
    },
    iconContainer: {
      width: measure.iconSize,
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
    },
    text: {
      color: color.text,
      fontWeight: 500,
      fontSize: measure.textSize,
      textAlign: "center",
    }
  });

  console.log(icon)

  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
    >
      {
        icon
          ? <View style={styles.iconContainer}>
            <FontAwesome6 name={icon} size={measure.iconSize} color="black" />
          </View>
          : <></>
      }
      {
        text ? <Text style={styles.text}>{text}</Text> : <></>
      }
    </Pressable>
  );
}
