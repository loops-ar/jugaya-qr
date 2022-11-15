import "./App.css";
import Button from "./Components/Button/Button";
import ContainerInfo from "./Components/ContainerInfo/ContainerInfo";
import Description from "./Components/Description/Description";
import Layout from "./Components/Layout/Layout";
import Logo from "./Components/Logo/Logo";
import Title from "./Components/Title/Title";
import { FaGooglePlay, FaApple } from "react-icons/fa";

function App() {
  return (
    <Layout>
      <Title>JugaYa</Title>
      <ContainerInfo>
        <Logo logo={"/logo.png"}></Logo>
        <Description>Reserva de canchas</Description>
        <Button icon={FaGooglePlay}>Google Play</Button>
        <Button icon={FaApple}>JugaYa.ar</Button>
      </ContainerInfo>
    </Layout>
  );
}

export default App;
