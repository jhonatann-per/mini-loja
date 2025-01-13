import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

export const ProdutoCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    width: 190px;
    height: 300px;
    h2 {
        font-size: 16px;
    }
`;

export const ImageProduto = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    display:block;
    margin: 0 auto 10px auto;
`;

export const ButtonComprar = styled.button`
    padding: 10px;
    margin-top: auto;
    background-color: #4caf50;
    color: white;
    border-radius: 3px;
    cursor: pointer;
    border: 1px; 
    

`;

export const mensagemLoading = styled.p`
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
`;