import { Container, ShoppingCart } from './styles';

export function Header() {
  return (
    <Container>
      <div>
        <h1>MKS</h1>
        <h2>Sistemas</h2>
      </div>

      <button>
        <ShoppingCart />
        <span>0</span>
      </button>
    </Container>
  );
}
