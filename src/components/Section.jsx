// Componente de seção reutilizável com título, link opcional e conteúdo (children)

const Section = ({ title, titleAlign = "left", link, children }) => {
  return ( 
    <section
      // Container principal da seção, largura máxima centralizada
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 16px",
        boxSizing: "border-box"
      }}>
      <div
        // Linha do topo: título e link (quando há)
        style={{
          display: "flex",
          justifyContent: titleAlign === "center" ? "center" : "space-between",
          alignItems: "center",
          textAlign: titleAlign,
          width: "100%",
        }}
      >
        {/* Título da seção, alinhamento e cor customizáveis */}
        <h2
          style={{
            color: "#4A4A4A", 
            fontSize: "24px",
            flex: 1,
            textAlign: titleAlign,
            margin: "0",
          }}
        >
          {title}
        </h2>
        {/* Link opcional (ex: "Ver todos →") */}
        {link && (
          <a
            href={link.href}
            style={{
              color: "#C92071", 
              fontSize: "18px",
              textDecoration: "none",
              marginLeft: "1rem",
              whiteSpace: "nowrap"
            }}
          >
            {link.text}
          </a>
        )}
      </div>
      {/* Conteúdo da seção (ex: lista de produtos, children do componente) */}
      <div style={{ width: "100%" }}>
        {children}
      </div>
    </section>
  );
};
export default Section;