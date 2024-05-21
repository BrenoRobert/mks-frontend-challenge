import { GetProducts } from '../../services/requests/getProducts';
import { Product } from '../Product';
import { Container, ProductsListWrapper } from './styles';

export function ProductsList() {
  const { data, isFetching: loading } = GetProducts();

  return (
    <Container>
      <ProductsListWrapper>
        {data && (
            data.products.map((product) => {
              return (
                <Product
                  key={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  photo={product.photo}
                />
              ) 
            })
        )}

        {loading && <div>Carregando...</div>}
      </ProductsListWrapper>
    </Container>
  );
}
