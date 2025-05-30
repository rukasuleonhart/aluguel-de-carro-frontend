import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function _Layout() {
  return(
    <Tabs
        screenOptions={{
            tabBarActiveTintColor:  '#8D73FF',   // Cor do texto ativo
            tabBarInactiveTintColor:'#969799',  // Cor do texto inativo
            tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: 800,
            }
        }}
    >
        <Tabs.Screen 
            name="index"
            options={{
                title: 'Inicio',
                headerShown:false,
                tabBarIcon:({ focused }) => (
                    <Image 
                        source={require("../../assets/icons/inicio.png")}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#8D73FF' : '#969799'
                        }}
                    />
                ),
            }}
        />

        <Tabs.Screen 
            name="favoritos"
            options={{
                title: 'Favoritos',
                headerShown:false,
                tabBarIcon:({ focused }) => (
                    <Image 
                        source={require("../../assets/icons/favoritos.png")}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#8D73FF' : '#969799'
                        }}
                    />
                )
            }}
        />
        <Tabs.Screen 
            name="alugueis"
            options={{
                title:"Alugueis",
                headerShown:false,
                tabBarIcon:({ focused }) => (
                    <Image 
                        source={require("../../assets/icons/aluguel.png")}
                        style={{
                            width: 50,
                            height: 50,
                            tintColor: focused ? '#8D73FF' : '#969799'
                        }}
                    />
                )
            }}
        />
        <Tabs.Screen 
            name="chat"
            options={{
                title:"Chat",
                headerShown:false,
                tabBarIcon:({ focused }) => (
                    <Image 
                        source={require("../../assets/icons/chat.png")}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#8D73FF' : '#969799'
                        }}
                    />
                )
            }}
        />
        <Tabs.Screen 
            name="perfil"
            options={{
                title:"Perfil",
                headerShown:false,
                tabBarIcon:({ focused }) => (
                    <Image 
                        source={require("../../assets/icons/perfil.png")}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#8D73FF' : '#969799'
                        }}
                    />
                )
            }}
        />
    </Tabs>
  )
}