import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl font-bold text-purple-700">Inicio</Text>
      <Text className="text-5xl font-bold text-light-200">Claro</Text>
      <Text className="text-5xl font-bold text-dark-100">Escuro</Text>
    </View>
  );
}