import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Page from './Components/Page';
import Documentation from './Components/Documentation';
import Layout from './Components/Layout';
import Figma from './Components/Figma';
import Purches from './Components/Purches';


function App() {
  return (
    <div>
      
       
      <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Layout/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="page" element={<Page />} />
        <Route path="documentation" element={<Documentation />} />
        <Route path="figma" element={<Figma/>}/>
        <Route path="purches" element={<Purches/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
