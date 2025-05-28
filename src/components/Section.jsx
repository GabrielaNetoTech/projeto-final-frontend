const Section = ({ title, titleAlign = "left", link, children }) => {
  return ( 
    <section style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 16px", boxSizing: "border-box" }}>
      <div
        style={{
          display: "flex",
          justifyContent: titleAlign === "center" ? "center" : "space-between",
          alignItems: "center",
          textAlign: titleAlign,
          width: "100%",
        }}
      >
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
      <div style={{ width: "100%" }}>
        {children}
      </div>
    </section>
  );
};
export default Section;