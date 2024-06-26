import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { theme } from './global/theme';
import { Footer } from './components/Footer';
import { Layout } from './components/Layout';
import { ProductsList } from './components/ProductsList';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
        <ProductsList />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}
