import ModalCustomer from "./components/ModalCustomer";

const dataAdmin = [
  {
    name: "วรภัทร บารมี",
    number: "6401023",
  },
];

const payment = [
  {
    name: "การดา สุขสวัสดิ์",
    number: "6401009",
  },
];

const doctor = [
  {
    name: "สมมุติ ทดสอบ",
    role: "ทันตแพทย์",
    service: "รักษารากฟัน",
    tel: "095-646-0428",
    expenses: "0.00",
    time: "18:00-18:30",
  },
  {
    name: "วิทยา ใจดี",
    role: "ทันตแพทย์",
    service: "ทันตกรรมทั่วไป",
    tel: "089-123-4567",
    expenses: "500.00",
    time: "09:00-09:30",
  },
];

const appointment = [
  {
    name: "ภัทราพร ชัยเพชร์",
    treat: "ครอบฟันหรือสะพานฟัน",
    number: 6401002,
    tel: "0924835486",
    time: "11:00-11.30",
    doctor: doctor.find((d) => d.name === "สมมุติ ทดสอบ"),
  },
];

const calculateHeight = (timeRange: string) => {
  const [startTime, endTime] = timeRange.split("-");
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);

  const startInMinutes = startHour * 60 + startMinute;
  const endInMinutes = endHour * 60 + endMinute;
  const durationInMinutes = endInMinutes - startInMinutes;

  return durationInMinutes * 2; // ตัวอย่าง: ใช้ 2px ต่อ 1 นาที
};

const times: string[] = [];
let startTime = 10 * 60; // เริ่มต้นที่ 10:00 AM ในรูปแบบนาที
const endTime = 19 * 60; // สิ้นสุดที่ 19:00 PM ในรูปแบบนาที

// วนลูปเพิ่มเวลา 15 นาทีจนกว่าจะถึง 19:00
while (startTime <= endTime) {
  const hours = Math.floor(startTime / 60);
  const minutes = startTime % 60;
  const timeString = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;
  times.push(timeString);
  startTime += 15; // เพิ่มทีละ 15 นาที
}

export default function Home() {
  return (
    <div className="container mt-3" style={{ display: "flex", gap: "40px" }}>
      <div style={{ width: "50%" }}>
        <div>
          <select className="form-select" aria-label="Default select example">
            {doctor.map((doc, index) => (
              <option key={index} value={doc.name}>
                คุณหมอ{doc.name}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{
            background: "#2f4169",
            height: "60px",
            borderRadius: "4px",
            color: "white",
            padding: "4px",
            marginTop: "8px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h3>ทันตแพทย์</h3>
        </div>
        <div
          style={{
            background: "#9edecd",
            height: "35px",
            borderRadius: "4px",
            color: "white",
            padding: "4px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i className="bi bi-clock"></i>&nbsp;เวลาเข้างาน 09:00 - 19:00 น.
        </div>
        <div>
          {times.map((time, index) => {
            const [, minute] = time.split(":");
            const isBold = minute === "00";
            const backgroundColor = index % 2 !== 0 ? "#f7f7f7" : "#ffffff";
            const isTimeMatched = appointment.some((data) => {
              const [customerStartTime, customerEndTime] = data.time.split("-");
              return time === customerStartTime;
            });

            return (
              <div
                style={{ display: "flex", gap: "12px", position: "relative" }}
                key={index}
              >
                <div
                  className="time"
                  style={{
                    fontWeight: isBold ? "bold" : "normal",
                    background: backgroundColor,
                    height: "40px",
                    width: "15%",
                    padding: "0 10px",
                  }}
                >
                  {time}
                </div>
                <div
                  className="customer"
                  style={{
                    marginLeft: "10px",
                    background: backgroundColor,
                    height: "40px", // ใช้ความสูงตามปกติ
                    width: "100%",
                    position: "relative", // ทำให้สามารถใช้ตำแหน่ง absolute ได้
                    overflow: "visible", // ป้องกันการตัดบล็อก
                  }}
                >
                  {isTimeMatched &&
                    appointment.map((data, i) => (
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          zIndex: 999,
                        }}
                        key={i}
                      >
                        <ModalCustomer
                          name={data.name}
                          treat={data.treat}
                          number={data.number}
                          tel={data.tel}
                          time={data.time}
                        />
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="head2" style={{ width: "50%" }}>
        <div
          style={{
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
        <div
          className="h2-1"
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "8px",
            marginTop: "4px",
          }}
        >
          <div
            className="card text-white  mb-3"
            style={{
              width: "100%",
              backgroundColor: "#d7e8f5",
            }}
          >
            <div
              className="card-header text-center"
              style={{ background: "#1cba9b" }}
            >
              ห้องพิเศษ present (0)
            </div>
            <div className="card-body"></div>
          </div>
          <div
            className="card text-white  mb-3"
            style={{ width: "100%", backgroundColor: "#d7e8f5" }}
          >
            <div
              className="card-header text-center"
              style={{ background: "#1cba9b" }}
            >
              แอดมิน ({dataAdmin.length})
            </div>
            {dataAdmin.map((data, i) => (
              <div key={i} className="card-body">
                <div className="card">
                  <div className="card-body">
                    <p>{i + 1}</p>
                    <p>{data.name ?? ""}</p>
                    <p>{data.number ?? ""}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="card text-white  mb-3"
            style={{
              width: "100%",
              backgroundColor: "#d0f5d4",
            }}
          >
            <div
              className="card-header text-center"
              style={{ background: "#1cba9b" }}
            >
              จุดชำระเงิน ({payment.length})
            </div>

            {payment.map((data, i) => (
              <div key={i} className="card-body">
                <div className="card">
                  <div className="card-body">
                    <p>{i + 1}</p>
                    <p>{data.name ?? ""}</p>
                    <p>{data.number ?? ""}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
