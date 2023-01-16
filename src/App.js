import Headers from './Components/Headers';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Container from 'react-bootstrap/Container';


function App() {
  /* LISTADO DE IMAGENES */
  const images = [{ 'title': 'Imagen 1', 'src': '29363-1920x1080.jpg', 'detail': 'Imange 1 - 29363-1920x1080.jpg' },
                  { 'title': 'Imagen 2', 'src': '29364-1920x1080.jpg', 'detail': 'Imange 2 - 29364-1920x1080.jpg' },
                  { 'title': 'Imagen 3', 'src': '29366-1920x1080.jpg', 'detail': 'Imange 3 - 29366-1920x1080.jpg' },
                  { 'title': 'Imagen 4', 'src': '29367-1920x1080.jpg', 'detail': 'Imange 4 - 29367-1920x1080.jpg' },
                  { 'title': 'Imagen 5', 'src': '29375-1920x1080.jpg', 'detail': 'Imange 5 - 29375-1920x1080.jpg' },
                  { 'title': 'Imagen 6', 'src': '29390-1920x1080.jpg', 'detail': 'Imange 6 - 29390-1920x1080.jpg' },
                  { 'title': 'Imagen 7', 'src': '29424-1920x1080.jpg', 'detail': 'Imange 7 - 29424-1920x1080.jpg' }]
  return (
    /*CONTENERDOR EL LA CABECERA, IMAGENES Y PIE DE PAGINA*/ 
    <Container>
      <Headers />
      <Cards images={images} />
      <Footer />
    </Container>
  );
}

export default App;