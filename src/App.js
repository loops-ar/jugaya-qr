import Button from "./Components/Button/Button";
import ContainerInfo from "./Components/ContainerInfo/ContainerInfo";
import Layout from "./Components/Layout/Layout";
import Logo from "./Components/Logo/Logo";
import Title from "./Components/Title/Title";
import { FaGooglePlay, FaApple } from "react-icons/fa";

function App() {
  return (
    <Layout>
      <ContainerInfo>
        <Logo logo={"/logo.png"}></Logo>
        <Title>JugaYa</Title>
        <Button
          onClick={() => {
            window.location.href = "https://play.google.com/store/apps/details?id=ar.jugaya.twa";
          }}
          icon={FaGooglePlay}
        >
          Google Play
        </Button>
        <Button
          onClick={() => {
            window.location.href = "https://jugaya.ar/";
          }}
          icon={FaApple}
        >
          JugaYa.ar
        </Button>
      </ContainerInfo>
    </Layout>
  );
}

export default App;
