import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { PageError } from '/src/components/PageError';
import Loading from '/src/components/Loading';
import { ProductItem } from './components/ProductItem';
import { getProducts } from '../../utils/productsRequest';
import { Container } from './style';

const ProductList = () => {
  const navigate = useNavigate();
  const {
    data: products,
    isLoading,
    error,
  } = useQuery('products', getProducts);

  if (isLoading) return <Loading />;
  if (error)
    return <PageError emoji="😭" message={`에러 발생: ${error.message}`} />;

  return (
    <>
      {products.length === 0 ? (
        <PageError emoji="😭" message="등록된 상품이 없어요!" />
      ) : (
        <Container>
          {products.map((item) => (
            <ProductItem
              key={`product_item_${item.product_id}`}
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
