import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import '../../Css/Styles.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <p>© 2023 THE 5 PHOENIX. Todos Los Derechos Reservados</p>
                        <p>Tienda 100% online</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Condiciones de compras</h5>
                        <ul>
                            <li>
                                <NavLink to="/terminoscondiciones">Términos y condiciones</NavLink>
                            </li>

                            <li>
                                <NavLink to="/politicadevolucion">Política de devolución</NavLink>
                            </li>

                            <li>
                                <NavLink to="/politicaprivacidad">Política de privacidad</NavLink>                                
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Redes sociales</h5>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook ico-footer"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitter ico-footer"></i>
                        </a>
                        <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-discord ico-footer"></i>
                        </a>
                        <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitch ico-footer"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;