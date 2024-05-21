import { useState } from 'react';
import { Checkout } from '../Checkout';
import { Container, ShoppingCart } from './styles';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen)

  return (
    <>
      <Container>
        <div>
          <h1>MKS</h1>
          <h2>Sistemas</h2>
        </div>

        <div onClick={() => setIsOpen(true)}>
          <ShoppingCart />
          <span>0</span>
        </div>
      </Container>
      <Checkout open={isOpen} />
    </>
  );
}
