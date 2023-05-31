import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Home"
            options={{
            href: 'index',
            }}
      />
         <Tabs.Screen
        name="Tela A"
            options={{
            href: 'telaA',
            }}
      />
    </Tabs>
  );
}