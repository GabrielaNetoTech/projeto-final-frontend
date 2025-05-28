import InfoSection from "../components/InfoSection"
import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: #1F1F1F;
    color: #FFFFFF;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;

    .infos-container{
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr auto auto 1fr;
        column-gap: 2rem;
        padding: 1rem 4rem;
    }

    @media (max-width: 900px) {
        .infos-container {
            grid-template-columns: 1fr;
            row-gap: 2rem;
            padding: 1.5rem 1rem;
        }
        .contatos, .digitalcollege {
            margin-left: 0;
            text-align: center;
        }
        .rodape {
            padding: 10px 0;
        }
    }

    .digitalcollege{
        padding: 1rem;
    }

    .redes-sociais{
       display: flex;
       gap: 20px;
       margin-top: 30px;
       justify-content: center;
    }

    .informacoes, .categoria {
        & ul {
            margin: 0;
            padding: 0;
            & li {
                list-style: none;
                line-height: 2em;
            }
        }
    }

    .contatos{
        margin-left: 50px;
    }

    .rodape{
       text-align: center;
       padding: 2px;
        & hr {
            width: 80%;
            border: none;
            border-top: 1px solid #fff;
        }
    }
`;

const Footer = () => { 
    const Informacoes = [
        { 
            text: "Sobre Drip Store",
            link: "/"
        },
         { 
            text: "Segurança",
            link: "/seguranca"
        },
         { 
            text: "Wishlist",
            link: "/wishlist"
        },
         { 
            text: "Blog",
            link: "/blog"
        },
         { 
            text: "Trabalhe conosco",
            link: "/trabalheconosco"
        },
         { 
            text: "Meus Pedidos",
            link: "/meuspedidos"
        },

    ];

    const Categorias = [
        { 
            text: "Camisetas",
            link: "/camisetas"
        },
         { 
            text: "Calças",
            link: "/calcas"
        },
         { 
            text: "Bonés",
            link: "/bones"
        },
         { 
            text: "Headphones",
            link: "/headphones"
        },
         { 
            text: "Tênis",
            link: "/produtos"
        },
    ]

    return ( 
    <FooterContainer>
        <section className="footer">
            <div className="infos-container">
                <div className="digitalcollege">
                   <img src="src/assets/logo-footer.svg" alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur <br/> adipisicing elit, sed do eiusmod tempor <br/> incidiunt ut labore et dolore.</p>
                    <div className="redes-sociais">
                        <a href="https://www.facebook.com/digitalcollegebr/?locale=pt_BR" target="blank"><img src="./src/assets/facebook.svg" alt="logo facebook" /></a>
                        <a href="https://www.instagram.com/digitalcollegebr/" target="blank"><img src="./src/assets/instagram.svg" alt="logo instagram"/></a> 
                        <a href="https://x.com/eaicollegers" target="blank"><svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.028 2.18075C21.3126 2.48789 20.5608 2.70229 19.791 2.81875C20.152 2.75775 20.68 2.10675 20.891 1.84375C21.2223 1.44366 21.4745 0.984144 21.634 0.48975C21.653 0.45075 21.667 0.402749 21.628 0.372749C21.609 0.364531 21.5883 0.361143 21.5677 0.362888C21.5471 0.364633 21.5273 0.37146 21.51 0.382751C20.6717 0.830061 19.7808 1.17103 18.858 1.39775C18.826 1.40776 18.7918 1.40847 18.7594 1.39979C18.727 1.39112 18.6977 1.37342 18.675 1.34875C18.6037 1.26407 18.5261 1.18484 18.443 1.11175C18.0594 0.782276 17.6252 0.516863 17.157 0.325748C16.5329 0.0720166 15.8593 -0.0367126 15.187 0.00775117C14.5338 0.0517256 13.897 0.231201 13.317 0.534752C12.7359 0.838851 12.2229 1.25802 11.809 1.76675C11.3809 2.29368 11.0737 2.90813 10.909 3.56675C10.7699 4.191 10.7539 4.83639 10.862 5.46675C10.876 5.57375 10.868 5.58775 10.77 5.57375C7.2605 5.21589 4.01085 3.56129 1.65699 0.93375C1.54999 0.81275 1.49299 0.81275 1.40599 0.94375C0.932561 1.8177 0.753536 2.82101 0.895488 3.80477C1.03744 4.78852 1.49281 5.70029 2.194 6.40475C2.372 6.57375 2.55599 6.74275 2.75299 6.89675C2.14051 6.85081 1.54327 6.68357 0.995998 6.40475C0.888998 6.33675 0.834992 6.37575 0.826991 6.49675C0.819368 6.67125 0.828746 6.84607 0.854991 7.01875C0.960811 7.84114 1.2835 8.62058 1.78996 9.27711C2.29641 9.93364 2.96841 10.4436 3.737 10.7548C3.92414 10.8367 4.1201 10.8967 4.32099 10.9338C3.75329 11.0473 3.17061 11.0652 2.597 10.9867C2.471 10.9627 2.422 11.0257 2.471 11.1467C2.7659 11.9194 3.25351 12.6037 3.88746 13.1347C4.52142 13.6658 5.28065 14.0259 6.093 14.1807C6.257 14.2098 6.41999 14.2098 6.58499 14.2488C6.57499 14.2628 6.566 14.2627 6.556 14.2778C5.85245 14.9126 5.0024 15.3631 4.082 15.5888C2.87837 16.0184 1.59602 16.1825 0.322994 16.0697C0.122994 16.0408 0.0789983 16.0417 0.0229983 16.0697C-0.0330018 16.0977 0.0159969 16.1528 0.0809969 16.2048C0.337997 16.3738 0.597995 16.5238 0.862995 16.6698C1.66199 17.0946 2.50454 17.4319 3.376 17.6758C5.61798 18.35 7.99765 18.4242 10.2773 17.891C12.5569 17.3577 14.6568 16.2356 16.367 14.6368C19.03 11.9918 19.967 8.34375 19.967 4.69175C19.967 4.54875 20.136 4.46975 20.237 4.39175C20.912 3.86759 21.5072 3.24812 22.004 2.55275C22.0822 2.45225 22.1238 2.32809 22.122 2.20075V2.18075C22.119 2.12475 22.118 2.14275 22.028 2.18075Z" fill="white"/>
                    </svg></a> 
                    </div>
                </div>

                <InfoSection title= "Informacoes" informations={Informacoes} />
                <InfoSection title="Categorias" informations={Categorias} />

                <div className="contatos">
                    <h4>Contato</h4>
                    <p>Av. Santos Dumont, 1510 - 1 <br /> andar - Aldeota, Fortaleza - <br /> CE, 60150-161</p>
                    <p>(85) 3051-3411</p>
                </div>
            </div>
            <div className="rodape">
                <hr/>
                <p>© 2025 Digital Store</p>
            </div>
        </section>
    </FooterContainer> 
    );
}
 
export default Footer;