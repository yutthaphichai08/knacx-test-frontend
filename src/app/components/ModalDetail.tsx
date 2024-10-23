interface IModalDetail {
  name: string;
  number: string;
  service: string;
  tel: string;
  expenses: string;
  time: string;
}

export default function ModalDetail(props: IModalDetail) {
  const { name, number, service, tel, expenses, time } = props;
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
      <p>
        นัดหมาย <br />
        ทันตแพทย์ คุณหมอ
      </p>
      <p>
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
