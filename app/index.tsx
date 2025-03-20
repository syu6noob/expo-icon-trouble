import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import Button from "@/components/common/Button";
import Colors from "@/Colors";

export default function Index() {
  const styles = StyleSheet.create({
    container: {
      position: "relative",
      padding: 32,
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 32,
      color: Colors.text
    },
    buttons: {
      gap: 16
    }
  });

  const router = useRouter();
  const handlePress = () => router.push('/read');

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button text="Second page" type="peach" onPress={handlePress} />
      </View>
    </View>
  );
}
