import Header from "@/components/Header";
import { StyleSheet, Text, View } from "react-native";
import Colors from "@/Colors";

export default function ReadIndexPage() {
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    content: {
      position: "relative",
      paddingHorizontal: 32,
      paddingBottom: 32,
      flex: 1,
      flexDirection: "column",
      gap: 32,
      color: Colors.text
    }
  });
  
  return (
    <View style={styles.container}>
      <Header text="Hi." />
      <View style={styles.content}>
      </View>
    </View>
  );
}
