interface IModalDetail {
  name: string;
  number: number;
  service: string;
  tel: string;
  expenses: string;
  time: string;
  image: string | undefined;
}

export default function ModalDetail(props: IModalDetail) {
  const { name, number, service, tel, expenses, time, image } = props;
  return (
    <div
      style={{
        border: "1px solid #bbbdbf ",
        width: "400px",
        height: "auto",
        borderRadius: "4px",
        backgroundColor: "white",
        position: "absolute",
        margin: "-20px 0 0 200px  ",
        fontFamily: "THSarabun",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "25px",
          lineHeight: "1",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            color: "#1cba95",
            padding: "4px",
          }}
        >
          นัดหมาย <br />
          ทันตแพทย์ คุณหมอ{name}
        </p>
        <div style={{ display: "flex", gap: "4px", padding: "0px 4px" }}>
          <div
            style={{
              objectFit: "cover",
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              overflow: "hidden",
              marginRight: "4px",
            }}
          >
            <img src={image} width={45} height={45} />
          </div>
          <div>
            <i
              className="bi bi-x"
              style={{ fontSize: "2rem", color: "#bbbdbf" }}
            ></i>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          fontSize: "22px",
          lineHeight: "1",
          fontWeight: "bold",
        }}
      >
        <div style={{ width: "70%", display: "flex", gap: "8px" }}>
          <div
            style={{
              width: "20px",
              background: "#bbbdbf",
            }}
          ></div>
          <p style={{ marginBottom: "0px" }}>
            <i className="bi bi-person-fill" style={{ color: "#bbbdbf" }}></i>
            &nbsp;
            {number} | {name} <br />
            <img
              src={"/image/tooth.png"}
              alt="tooth"
              width={24}
              height={24}
              style={{ color: "#bbbdbf" }}
            />
            บริการ&nbsp;{service}
            <br />
            <i
              className="bi bi-telephone-fill"
              style={{ color: "#bbbdbf" }}
            ></i>
            &nbsp;
            {tel}
            <br />
            ประเมินค่าใช้จ่าย&nbsp;{expenses}
            <br />
            <i className="bi bi-clock-fill" style={{ color: "#bbbdbf" }}></i>
            &nbsp;
            {time}
            <br />
          </p>
        </div>
        <div
          style={{
            width: "30%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "self-end",
            padding: "6px",
            fontSize: "2rem",
            color: "#bbbdbf",
          }}
        >
          <i className="bi bi-file-earmark-text"></i>
          <i className="bi bi-pencil-fill"></i>
        </div>
      </div>
    </div>
  );
}
