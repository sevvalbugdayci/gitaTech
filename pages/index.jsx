
import Head from "next/head";
import Home from "./home";
import Header from "./components/layout/Header";


export default function Index() {
  return (
    <div className="font-noto" >
     <Header />
     <Home />
    </div>
  );
}
