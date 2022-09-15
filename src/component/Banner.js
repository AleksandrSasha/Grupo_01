import React from "react";
class Banner extends React.Component {
    render() {
        return (
            <>
                <main />
                <section class="Peliculas">
                    <h2>{this.props.titulo}</h2>
                    <div class="testimony_review">
                        <p>{this.props.sinopsis}</p>
                    </div>
                    <div>
                        <img src={this.props.img} alt={this.props.titulo} class="testimony_img" />
                    </div>
                </section>
                <main />
            </>


        );
    }
}


export default Banner;