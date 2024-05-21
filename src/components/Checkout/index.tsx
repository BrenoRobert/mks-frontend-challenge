import { Layout } from '../Layout';
import { CloseBtn, Container, Footer, Header } from './styles';
import { useEffect, useState } from 'react';

type CheckoutProps = {
  open: boolean;
};

export function Checkout({ open = false }: CheckoutProps) {
  const [isOpen, setIsOpen] = useState<boolean>();
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <Container
      animate={{
        width: isOpen ? '486px' : 0,

        transition: {
          duration: 0.5,
          type: 'spring',
          damping: 10,
        },
      }}
    >
      <Layout>
        <Header>
          <div>
            Carrinho <br /> de Compras
          </div>
          <CloseBtn onClick={toggle} />
        </Header>

        <div></div>

        <Footer>
          <div>
            <div>Total</div>
            <span>R$0</span>
          </div>
          <div>Finalizar Compra</div>
        </Footer>
      </Layout>
    </Container>
  );
}
