import React, { useState} from "react";

const App = () => { 
  const [produto, setProduto] = useState(null); 
  const [loading, setLoading] = useState(false);

  const handleClickAlter = async (id) => { 
    setLoading(true);
    try {
      const resposta = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`); 
      const dados = await resposta.json();
      setProduto(dados);
      console.log(dados);
    } catch (error) {
      console.error("Erro: dados não encontrado!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={() => handleClickAlter('notebook-3')}>botão</button>
      <button onClick={() => handleClickAlter('smartphone-2')}>botão</button>
      <button onClick={() => handleClickAlter('camera')}>botão</button> 
      {loading && <p>Carregando...</p>} 
      {produto && ( 
        <div key={produto.id}> 
          <p>{produto.nome}</p> 
          <p>{produto.preco}</p> 
          {produto.fotos.map((foto, index) => ( 
            <img key={index} src={foto.src} alt={produto.nome} /> 
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
