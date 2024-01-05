import { Logo } from "./components/Logo";
import { Nav } from "./components/Nav";
import { Page01 } from "./pages/Page01";
import { Page02 } from "./pages/Page02";
import { Page03 } from "./pages/Page03";
import { Fragment } from "react";


export default function App() {

  return (
    <Fragment>
      <header>
        <Logo />
        <Nav />
      </header>
      <main>
     
        <Page03/>
        {/* <Page02/>
        <Page01 /> */}
       


      </main>
      <footer>
        <p> Her hakkı saklıdır </p>
      </footer>
    </Fragment>
  );


}




