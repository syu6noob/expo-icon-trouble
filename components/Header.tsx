import { Text, StyleSheet, View } from "react-native";
import Colors from "@/Colors";
import Button from "./common/Button";
import { useRouter } from "expo-router";

export default function Header({
  text
}: {
  text: string
}) {
  const styles = StyleSheet.create({
    headerContainer: {
      position: "relative",
      width: "100%",
      paddingHorizontal: 32,
      paddingTop: 32,
      paddingBottom: 16,
      gap: 16
    },
    header: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: Colors.light,
    },
    icon: {
      height: "auto",
      aspectRatio: 1 / 1
    },
    title: {
      position: "absolute",
      top: "50%",
      left: "50%",
      color: Colors.text,
      fontWeight: 500,
      fontSize: 20,
      transform: "translate(-50%, -50%)"
    }
  });

  const router = useRouter();
  const handleBackButtonPressed = () => router.push("/");

  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Button text="Hi." type="blank" icon="chevron-left" size="medium" onPress={handleBackButtonPressed} />
        {/* <Text style={styles.title}>{text}</Text> */}
      </View>
    </View>
  );
}
