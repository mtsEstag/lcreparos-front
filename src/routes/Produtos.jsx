import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';

const Produtos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:8080/produto/produtoAll');
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <ul>
                {data.map(item => (
                    <li key={item.idProduto}>{item.idProduto} - {item.nome} - {item.qtdeEstoque}</li>
                ))}
            </ul>
        </div>
    )
}

export default Produtos