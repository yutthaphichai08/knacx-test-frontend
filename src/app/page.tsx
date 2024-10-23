export default function Home() {
  return (
    <div className="container mt-3" style={{ display: "flex", gap: "40px" }}>
      <div style={{ width: "50%" }}>
        <select className="form-select" aria-label="Default select example">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3>วันที่ 30 ม.ค. 2564</h3>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              background: "#d7e8f5",
              padding: "0 60px",
              borderRadius: "2px",
              fontWeight: "bold",
            }}
          >
            <p
              style={{
                color: "#cc9870",
              }}
            >
              รายได้ทั้งหมด 0.00 บาท
            </p>
          </div>
          <div style={{ marginLeft: "16px" }}>
            <button className="btn btn-outline-danger">
              <i className="bi bi-arrow-clockwise"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
