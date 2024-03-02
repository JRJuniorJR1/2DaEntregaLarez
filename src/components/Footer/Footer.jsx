import React from 'react';
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
                    <div className="col-md-4 text-center">
                        <h5>Condiciones de compras</h5>
                        <ul className="list-unstyled text-center">
                            <li>Términos y condiciones</li>
                            <li>Política de devolución</li>
                            <li>Política de privacidad</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Redes sociales</h5>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-discord"></i>
                        </a>
                        <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitch"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;