import React, { useContext, useState } from 'react';
import { db } from '../../firebase/config';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import { Button, TextField, Grid, Typography } from '@mui/material';
import '../../Css/Styles.css';

const Checkout = () => {
    const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext);

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');
    const [region, setRegion] = useState('');
    const [calle, setCalle] = useState('');
    const [numero, setNumero] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion || !region || !calle || !numero || !codigoPostal) {
            setError('Completar los campos requeridos');
            return;
        }

        if (email !== emailConfirmacion) {
            setError('Los campos del email no coinciden');
            return;
        }

        const order = {
            items: cart.map((product) => ({
                id: product.producto.id,
                img: product.producto.img,
                nombre: product.producto.nombre,
                cantidad: product.cantidad,
                precio: product.producto.precio,
                totalProducto: product.cantidad * product.producto.precio
            })),
            total: totalCarrito(),
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
            region,
            calle,
            numero,
            departamento,
            codigoPostal
        };

        Promise.all(
            order.items.map(async (productOrder) => {
                const productRef = doc(db, 'item', productOrder.id);
                const productDoc = await getDoc(productRef);
                const currentStock = productDoc.data().stock;

                await updateDoc(productRef, {
                    stock: currentStock - productOrder.cantidad
                });
            })
        )
        .then(() => {
            addDoc(collection(db, 'ordenes'), order)
            .then((docRef) => {
                setError('');
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch((error) => {
                console.log(error);
                setError('Se produjo un error al crear la orden');
            });
        })
        .catch((error) => {
            console.log(error);
            setError('No se puede actualizar el stock');
        });
    };

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
                <Typography variant="h5" align="center" gutterBottom>
                    Ingresa tus datos
                </Typography>
                <form onSubmit={handleFormSubmit}>
                    {cart.map((product) => (
                        <div key={product.producto.id}>
                            <p>
                                Producto: {product.producto.nombre} <br />
                                Cantidad: {product.cantidad} <br />
                                Precio por unidad: ${product.producto.precio}<br />
                                Total: ${product.cantidad * product.producto.precio} <br/>
                                <img src={product.producto.img} alt={product.producto.nombre} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                            </p>
                            <hr />
                        </div>
                    ))}
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Nombre"
                                variant="outlined"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Apellido"
                                variant="outlined"
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Teléfono"
                        variant="outlined"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Email"
                                variant="outlined"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Confirmar Email"
                                variant="outlined"
                                type="email"
                                value={emailConfirmacion}
                                onChange={(e) => setEmailConfirmacion(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Región"
                        variant="outlined"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                    />
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Calle"
                                variant="outlined"
                                value={calle}
                                onChange={(e) => setCalle(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Número de calle"
                                variant="outlined"
                                value={numero}
                                onChange={(e) => setNumero(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Dpto/Casa"
                                variant="outlined"
                                value={departamento}
                                onChange={(e) => setDepartamento(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Código Postal"
                        variant="outlined"
                        value={codigoPostal}
                        onChange={(e) => setCodigoPostal(e.target.value)}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                        Completar compra
                    </Button>
                    {error && <Typography style={{ color: 'red', marginTop: '10px' }}>{error}</Typography>}
                    {ordenId && (
                        <Typography variant="body1" align="center" gutterBottom style={{ marginTop: '20px' }}>
                            ¡Gracias por tu compra! Tu número de orden es: {ordenId}
                        </Typography>
                    )}
                </form>
                
            </Grid>
        </Grid>
    );
};

export default Checkout;
