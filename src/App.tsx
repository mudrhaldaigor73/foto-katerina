import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

// Pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Newborn from './pages/Newborn';
import Maternity from './pages/Maternity';
import Wedding from './pages/Wedding';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

const TemporaryComponent = ({ title }: { title: string }) => (
  <div className="animate-fade-in"><section className="section"><div className="container" style={{ textAlign: 'center', paddingTop: '100px' }}><h1>{title}</h1><p>Stránka se připravuje</p></div></section></div>
);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/o-mne" element={<About />} />

          <Route path="/novorozenci" element={<Newborn />} />
          <Route path="/tehotenstvi" element={<Maternity />} />

          <Route path="/svatby" element={<Wedding />} />
          <Route path="/portrety" element={<TemporaryComponent title="Portréty a rodina" />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/rezervace" element={<Booking />} />
          <Route path="/cenik" element={<Pricing />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
