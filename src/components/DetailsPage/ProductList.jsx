import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductList() {
  const { videoId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://gigihfinalsfrontend.onrender.com/products/${videoId}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("ERROR!!", error);
      });
  }, [videoId]);

  return (
    <Container>
      <h3>Products</h3>
      <ProductContainer>
        {products.map((product) => (
          <ProductCard key={product._id}>
            <ProductImage src={product.productImg} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>${product.price}</ProductPrice>
            <ProductDesc>{product.description}</ProductDesc>
          </ProductCard>
        ))}
      </ProductContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 1vh 5vw;
  color: white;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4vw;
`;

const ProductCard = styled.div``;

const ProductImage = styled.img`
  display: block;
`;

const ProductName = styled.h3``;

const ProductDesc = styled.p``;
const ProductPrice = styled.p``;

function getVideoIdFromUrl(url) {
  const match = url.match(/[?&]v=([^&]+)/);
  return match ? match[1] : null;
}
