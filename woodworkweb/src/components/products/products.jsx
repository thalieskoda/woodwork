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
              {product.title}
              {product.url && (
                <ProductImage src={product.url} alt={product.title} />
              )}
            </SoloProduct>
          );
        })}
      </Container>
    </>
  );
};

const Title = styled.h1`
  margin-top: 100px;
  margin-bottom: 80px;
  text-align: center;
`;
const SoloProduct = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
const ProductImage = styled.img`
  height: 200px;
  width: 200px;
  margin: 20px;
`;
const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  margin: 20px;
  grid-template-columns: auto auto auto;
  background-color: #f7f6f0;

`;
