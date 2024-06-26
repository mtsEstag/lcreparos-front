import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';

const Clientes = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:8080/cliente/clienteAll');
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <ul>
                {data.map(item => (
                    <li key={item.idCliente}>{item.nome}</li>
                ))}
            </ul>
        </div>
    )
}

export default Clientes