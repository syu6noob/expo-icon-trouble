import { Stack, Slot } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/Colors";

export default function ReadLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView mode="padding" style={{
        flex: 1,
        backgroundColor: Colors.light,
      }}>
        <Slot />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
