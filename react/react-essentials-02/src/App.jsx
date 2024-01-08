import { Logo as MyLogo } from "../components/Logo";
import { Nav } from "../components/Nav";

import { Page01 } from "../pages/Page01";
import { Page02 } from "../pages/Page02";
import { Page03 } from "../pages/Page03";


export default function MyApp() {

  const currentPath = "/02";




  return (
    <>
      <header>
        <MyLogo />
        <Nav />
      </header>
      <main>
        {currentPath === "/01" && <Page01 />}
        {currentPath === "/02" && <Page02 />}
        {currentPath === "/03" && <Page03 />}
      </main>
      <footer>F</footer>
    </>
  )
}