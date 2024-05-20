import { Container, Content, Description, ShoppingBag } from './styles';

type ProductsProps = {
  name: string;
  description: string;
  price: string;
  photo: string;
};

export function Product({ name, price, photo, description }: ProductsProps) {
  return (
    <Container>
      <img src={photo} alt={name} />
      <Content>
        <div>{name}</div>
        <span>R${price.split('.')[0]}</span>
      </Content>
      <Description>
        {description.length > 100
          ? description.substring(0, 100) + '...'
          : description}
      </Description>
      <button>
        <ShoppingBag />
        <div>COMPRAR</div>
      </button>
    </Container>
  );
}
