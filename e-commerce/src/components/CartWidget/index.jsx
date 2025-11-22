function CartWidget() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span aria-hidden="true">🛒</span>
      <span>0</span>
    </div>
  );
}
export default CartWidget;
