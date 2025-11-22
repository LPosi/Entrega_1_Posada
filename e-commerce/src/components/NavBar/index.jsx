import CartWidget from "../CartWidget";

function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        background: "#222",
        color: "#fff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img src="/src/assets/logo.png" alt="Logo" style={{ height: 36 }} />
        <strong>MiTienda</strong>
      </div>

      <ul style={{ display: "flex", gap: 16, listStyle: "none", margin: 0 }}>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>

      <CartWidget />
    </nav>
  );
}
export default NavBar;
