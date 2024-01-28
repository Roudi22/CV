import Nav from "./components/Nav";
// Importing the components from index.js in sections folder
import { Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality} from "./sections";
import { useSelector } from 'react-redux';


const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
return (
  <main className={`relative ${darkMode ? 'dark' : ''}`}>
    
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality darkMode={darkMode}/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>

)
}


export default App;