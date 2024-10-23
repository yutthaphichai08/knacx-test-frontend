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

const customer = [
  {
    name: "ภัทราพร ชัยเพชร์",
    treat: "ครอบฟันหรือสะพานฟัน",
    number: "6401002",
    tel: "0924835486",
    time: "11:00-11.30",
  },
];

const calculateHeight = (timeRange: any) => {
  const [startTime, endTime] = timeRange.split("-"); // แยกเวลาเริ่มต้นและเวลาสิ้นสุด
  const [startHour, startMinute] = startTime.split(":").map(Number); // แยกชั่วโมงและนาทีเริ่มต้น
  const [endHour, endMinute] = endTime.split(":").map(Number); // แยกชั่วโมงและนาทีสิ้นสุด

  // คำนวณเวลาในนาที
  const startInMinutes = startHour * 60 + startMinute;
  const endInMinutes = endHour * 60 + endMinute;

  // คำนวณระยะเวลา
  const durationInMinutes = endInMinutes - startInMinutes;
  return durationInMinutes * 2; // ตัวอย่าง: ใช้ 2px ต่อ 1 นาที
};

const times: string[] = [];
let startTime = 10 * 60; // เริ่มต้นที่ 10:00 AM ในรูปแบบนาที
const endTime = 19 * 60; // สิ้นสุดที่ 19:00 PM ในรูปแบบนาที

// วนลูปเพิ่มเวลา 15 นาทีจนกว่าจะถึง 19:00
while (startTime <= endTime) {
  const hours = Math.floor(startTime / 60); // หาชั่วโมงจากนาที
  const minutes = startTime % 60; // หานาทีจากการหารเศษของ 60
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
          }}
        >
          2
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
            // แยกเวลาเป็นชั่วโมงและนาที
            const [hour, minute] = time.split(":");

            // ถ้านาทีเป็น 00 ให้แสดงตัวหนา
            const isBold = minute === "00";

            // กำหนดสีพื้นหลังตาม index (คู่หรือคี่)
            const backgroundColor = index % 2 !== 0 ? "#f7f7f7" : "#ffffff";

            return (
              <div style={{ display: "flex", gap: "12px" }} key={index}>
                <div
                  className="time"
                  style={{
                    fontWeight: isBold ? "bold" : "normal",
                    background: backgroundColor,
                    height: "60px",
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
                    height: "60px",
                    width: "100%",
                  }}
                ></div>
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
