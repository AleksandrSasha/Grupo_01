import React from "react";
class Header extends React.Component{
    render(){
        return(
            <header class="hero">
                <nav class="nav container">
                    <div class="nav_logo">
                        <img src="./images/Logo.png" alt="Logo de la pagina" class="Header.img"/>
                        <h2 class="nav_tittle">Peliculas</h2>
                    </div>
        
                    <ul class="nav_link nav_link--menu">
                        <li class="nav_items">
                            <a href="#" class="nav_links">Inicio</a>
                        </li>
                        <li class="nav_items">
                            <a href="#" class="nav_links">Categorias</a>
                        </li>
                        <li class="nav_items">
                            <a href="#" class="nav_links">Estrenos</a>
                        </li>
                        <li class="nav_items">
                            <a href="#" class="nav_links">Acerca de</a>
                        </li>   
        
                        <img src="./images/closeArrow.svg" class="nav_close"/>
        
                    </ul>
        
                    <div class="nav_menu">
                        <img src="./images/menuArrow.svg" alt="menu"/>
                    </div>
        
                </nav>
        
                    <section class="hero_container container">
                        <h1 class="hero_title">Sumergete a vivir grandes aventuras</h1>
                        <p class="hero_paragraph">Puerta hacia lo entretenido</p>
                        <a href="#" class="cta">Comienza</a>
                    </section>
        
            </header>
        );
    }
}

export default Header;