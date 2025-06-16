// Componente que exibe uma barra de imagens miniaturas (thumbnails)
// Permite selecionar uma miniatura para trocar a imagem principal da galeria

const GalleryMini = ({ thumbs, onSelect }) => {
    return ( 
        <section className="mini">
            {thumbs.map((src, index) => (
                // Renderiza cada miniatura como uma imagem clicável
                <img 
                    key={index} // Chave única para o React
                    src={src} // Caminho da imagem miniatura
                    alt={`Miniatura ${index + 1}`} // Texto alternativo para acessibilidade
                    onClick={() => onSelect(index)} // Ao clicar, define a imagem principal da galeria pelo índice
                    style={{cursor: "pointer"}} // Mostra o cursor de clique
                />
            ))}
        </section>
     );
}
 
export default GalleryMini;