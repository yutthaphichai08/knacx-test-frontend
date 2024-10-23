interface IModalDetail {
  name: string;
  number: string;
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
        padding: "4px",
        border: "1px solid #bbbdbf ",
        width: "400px",
        height: "auto",
        borderRadius: "4px",
        backgroundColor: "white",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ fontWeight: "bold", color: "#1cba95" }}>
          นัดหมาย <br />
          ทันตแพทย์ คุณหมอ
        </p>
        <div style={{ display: "flex", gap: "4px" }}>
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
          <div>icon</div>
        </div>
      </div>
      <p style={{ marginBottom: "0px" }}>
        {name} <br />
        {number} <br />
        {service}
        <br />
        {tel}
        <br />
        {expenses}
        <br />
        {time}
        <br />
      </p>
    </div>
  );
}
