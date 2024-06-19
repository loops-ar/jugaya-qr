import Buttons from "./Components/Buttons/Buttons";
import ContainerInfo from "./Components/ContainerInfo/ContainerInfo";
import Description from "./Components/Description/Description";
import Layout from "./Components/Layout/Layout";
import Logo from "./Components/Logo/Logo";

function App() {
  return (
    <Layout>
      <ContainerInfo>
        <Logo logo={"/logo.png"}></Logo>
        <Description>Descargá la app y reservá tu cancha</Description>
        <Buttons />
      </ContainerInfo>
    </Layout>
  );
}

export default App;
