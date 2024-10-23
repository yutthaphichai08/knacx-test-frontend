interface IModalStatus {
  index: string;
  name: string;
  number: string;
  day: number;
  numR: string;
}

export default function ModalStatus(props: IModalStatus) {
  const {
    index = 0,
    name = "ชื่อ-สกุล",
    number = 0,
    day = 0,
    numR = 0,
  } = props;
  return (
    <div
      style={{
        width: "auto",
        height: "auto",
        borderRadius: "6px",
        padding: "2px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        backgroundColor: "white",
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "60px",
          }}
        >
          <div style={{ position: "relative", display: "inline-block" }}>
            <div
              style={{
                background: "#13bda3",
                borderRadius: "10% 0% 70% 10%",
                color: "white",
                zIndex: 2,
                position: "relative",
                padding: "0px 20px",
              }}
            >
              <p
                style={{
                  fontFamily: "THSarabunBold",
                  fontSize: "20px",
                }}
              >
                {index}
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1, // ทำให้ไอคอนอยู่ข้างหลัง
              }}
            >
              <i
                className="bi bi-person-circle"
                style={{ fontSize: "50px", color: "#d2e7fa" }}
              ></i>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "160px",
            display: "grid",
            justifyContent: "space-between",
            gap: "6px",
          }}
        >
          <div
            style={{
              fontFamily: "THSarabunBold",
              fontSize: "25px",
              lineHeight: "1",
            }}
          >
            <p style={{ color: "#2f4261", fontFamily: "THSarabunBold" }}>
              {name} <br />
              {number}
            </p>
          </div>
          <div
            className="text-center"
            style={{
              color: "#13bda3",
              fontFamily: "THSarabunBold",
              fontSize: "20px",
            }}
          >
            {day} วัน
          </div>
        </div>
        <div style={{ width: "30px" }}>
          <div
            style={{
              background: "#2f4261",
              color: "white",
              borderRadius: "0 4px 0 0",
            }}
          >
            <p className="text-center">{numR}</p>
          </div>
          <div>
            <i
              className="bi bi-ban"
              style={{
                color: "red",
                fontSize: "16px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
