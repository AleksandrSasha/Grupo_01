import './App.css';
import Header from './component/Header.js';
import Banner from './component/Banner.js';
import banner from './json/banner.json'
import Row from 'react-bootstrap/Row'

function App() {
  return (
    < >
      <Header/>
      <div class="container-fluid">
      <Row>
          {banner.map(peli =>
            <Banner
              img={peli.img}
              titulo={peli.titulo}
              sinopsis={peli.sinopsis}
            />
          )}
        </Row>
      </div>
    </>    
  );
}

export default App;
