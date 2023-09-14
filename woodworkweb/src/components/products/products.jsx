import styled from "styled-components";
import { allProducts } from "../../utils/images/sliderImages";
import { NavLink } from "react-router-dom";

export const Products = () => {
  return (
    <>
      <Title>products</Title>
      <Container>
        {allProducts.map((product, index) => {
          return (
            <SoloProduct key={index}>
              {product.url && (
                <ProductImage src={product.url} alt={product.title} />
              )}
              <Other>

              <ProductPrice>{`${product.price} $`}</ProductPrice>
              <ProductTitle>{product.title}</ProductTitle>
              </Other>
            </SoloProduct>
          );
        })}
      </Container>
    </>
  );
};
const Other = styled.div`
  background-color:pink;

`

const Title = styled.h1`
  padding-top: 100px;
  padding-bottom: 80px;
  background-color: #f7f6f0;
  text-align: center;
`;
const SoloProduct = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  transition: transform 0.2s;
  margin: 20px;
  background-color:yellow;

  &:hover {
    transform: scale(1.1);
  }
`;
const ProductTitle = styled.div``;
const ProductPrice = styled.div``;
const ProductImage = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 10px;
`;
const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto auto;
  background-color: #f7f6f0;
`;
