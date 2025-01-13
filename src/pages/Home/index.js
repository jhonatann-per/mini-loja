import React, { useEffect, useState } from "react";
import { Container, ProdutoCard, ImageProduto, ButtonComprar } from "./styles";

const Home = () => {
  const [produto, setProdutos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://ranekapi.origamid.dev/json/api/produto/"
        );
        const results = await response.json();
        console.log(results);
        setProdutos(results);
        setLoading(false);
      } catch (error) {
        console.error("Erro: Produtos não encontrados!");
      }
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        produto.map((produto) => (
          <ProdutoCard key={produto.id}>
            {produto.fotos.length > 0 && (
              <ImageProduto
                src={produto.fotos[0].src}
                alt={`Foto do Produto ${produto.nome}`}
              />
            )}
            <h2>{produto.nome}</h2>
            <p>{produto.preco}</p>
            <ButtonComprar>Comprar</ButtonComprar>
          </ProdutoCard>
        ))
      )}
    </Container>
  );
};

export default Home;
