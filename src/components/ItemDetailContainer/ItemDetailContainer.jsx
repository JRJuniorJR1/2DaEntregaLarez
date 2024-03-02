import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import '../../Css/Styles.css'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const nuevoDoc = doc(db, 'item', id);
                const res = await getDoc(nuevoDoc);
                if (res.exists()) {
                    const data = res.data();
                    const nuevoProducto = { id: res.id, ...data };
                    setProducto(nuevoProducto);
                } else {
                    console.log('No hay datos disponibles para el ID proporcionado');
                }
            } catch (error) {
                console.error('Error al obtener el documento:', error);
            }
        };

        fetchProducto();
    }, [id]);

    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    );
};

export default ItemDetailContainer;
