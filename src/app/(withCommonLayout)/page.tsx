import Banner from "../components/Banner";
import Featured from "../components/Featured/Featured";
import Skills from "../components/Skills";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <Skills />
      <Featured />
    </div>
  );
}
