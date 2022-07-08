import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import ErrorMessage from '/src/components/ErrorMessage';
import Loading from '/src/components/Loading';
import { ProductItem } from './components/productItem';
import { getProducts } from '../../utils/productsRequest';
import { Container } from './style';

const ProductList = () => {
  const navigate = useNavigate();
  const { data: products, isLoading, error } = useQuery('products', getProducts);

  if (isLoading) return <Loading />;
  if (error)
    return <ErrorMessage emoji="😭" message={`에러 발생: ${error.message}`} />;

  return (
    <>
      {products.length === 0 ? (
        <ErrorMessage emoji="😭" message="등록된 상품이 없어요!" />
      ) : (
        <Container>
          {products.map((item) => (
            <ProductItem
              key={item.product_id}
              item={item}
              onClick={() => {
                navigate(`/product/${item.product_id}`);
              }}
            />
          ))}
        </Container>
      )}
    </>
  );
};

export default ProductList;
