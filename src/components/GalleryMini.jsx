

const GalleryMini = ({ thumbs, onSelect}) => {
    return ( 
        <section className="mini">
            {thumbs.map((src, index) => (
                <img 
                    key={index}
                    src={src}
                    alt={`Miniatura ${index + 1}`}
                    onClick={() => onSelect(index)}
                    style={{cursor: "pointer"}}
                />
            ))}
        </section>
     );
}
 
export default GalleryMini;

