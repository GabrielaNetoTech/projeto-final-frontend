const Section = ({ title, titleAlign = "left", link, children }) => {
    return ( 
        <section>
            <div
              style={{
              display: "flex",
              justifyContent: titleAlign === "center" ? "center" : "space-between",
              alignItems: "center",
              textAlign: titleAlign,
              }}
            >
        <h2
          style={{
            color: "#4A4A4A", 
            fontSize: "24px",
            flex: 1,
            textAlign: titleAlign,
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
              
            }}
          >
            {link.text}
          </a>
        )}
      </div>

      <div>
        {children}
      </div>
    </section>
  );
};
 
export default Section;