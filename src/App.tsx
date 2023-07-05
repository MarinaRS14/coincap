import Main from './pages/Main';
import Header from './components/Header';
import { GlobalStyles } from './styles/globalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoinPage from './pages/CoinPage';
import { AppContainer } from './styles/appStyle';

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/coinpage" element={<CoinPage />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
