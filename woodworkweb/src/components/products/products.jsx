import styled from "styled-components";
import { slidesData } from "../../utils/images/sliderImages";

export const Products = () => {
  return (
    <Container>
      <h1>products</h1>
      {slidesData.map((product, index) => {
        return (
          <SoloProduct key={index}>
            {product.title}
            {product.url && <ProductImage src={product.url} alt={product.title} />}
          </SoloProduct>
        );
      })}
    </Container>
  );
};

const SoloProduct = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border:1px black solid;

`
const ProductImage = styled.img`
  height: 100px;
  width: 100px;
`;
const Container = styled.div`
  height: 100vh;
  
`;
