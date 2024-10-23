"use client";

import { SetStateAction, useState } from "react";
import ModalCustomer from "./components/ModalCustomer";
import ModalDetail from "./components/ModalDetail";
import ModalStatus from "./components/ModalStatus";

interface Appointment {
  name: string;
  treat: string;
  number: number;
  tel: string;
  time: string;
  doctor: string;
  // image: string | undefined;
}

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
    number: "6400004",
    role: "ทันตแพทย์",
    service: "รักษารากฟัน",
    tel: "095-646-0428",
    expenses: "0.00",
    time: "18:00 - 18:30",
    image:
      "https://thumbs.dreamstime.com/b/young-smiling-old-man-doctor-medical-specialist-medicine-concept-cute-d-icon-people-character-illustration-cartoon-minimal-young-279139332.jpg",
  },
  {
    name: "วิทยา ใจดี",
    number: "6400004",
    role: "ทันตแพทย์",
    service: "ทันตกรรมทั่วไป",
    tel: "089-123-4567",
    expenses: "500.00",
    time: "12:00 - 12:30",
    image:
      "https://www.publicdomainpictures.net/pictures/450000/nahled/medical-doctor-cartoon-clipart.png",
  },
];

const appointment = [
  {
    name: "ภัทราพร ชัยเพชร์",
    treat: "ครอบฟันหรือสะพานฟัน",
    number: 6401002,
    tel: "0924835486",
    time: "11:00-11.30",
    doctor: "สมมุติ ทดสอบ",
  },
  {
    name: "นันทนา โพธิ์ทอง",
    treat: "ขูดหินปูน",
    number: 6401003,
    tel: "0987654321",
    time: "14:00-14:30",
    doctor: "วิทยา ใจดี",
  },
];

export default function Home() {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [hoveredAppointment, setHoveredAppointment] =
    useState<Appointment | null>(null);

  // Filter appointments based on selected doctor
  const filteredAppointments = appointment.filter(
    (appt) => appt.doctor === selectedDoctor
  );

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

  const handleDoctorSelect = (name: SetStateAction<string>) => {
    setSelectedDoctor(name); // Set selected doctor
  };

  return (
    <div className="container mt-3" style={{ display: "flex", gap: "40px" }}>
      <div style={{ width: "40%" }}>
        <div>
          <select
            className="form-select"
            aria-label="Select a doctor"
            value={selectedDoctor} // Set the value to the selectedDoctor state
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="" disabled>
              กรุณาเลือกทันตแพทย์
            </option>{" "}
            {/* Placeholder option */}
            {doctor.map((doc, index) => (
              <option key={index} value={doc.name}>
                คุณหมอ {doc.name}
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
            justifyContent: "space-between",
          }}
        >
          <h2 style={{ fontFamily: "THSarabunBold" }}>ทันตแพทย์</h2>

          {selectedDoctor && (
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
              {doctor
                .filter((doc) => doc.name === selectedDoctor)
                .map((doc) => (
                  <img key={doc.name} src={doc.image} width={45} height={45} />
                ))}
            </div>
          )}
        </div>

        {/* Clickable Doctor Images Section */}
        <div style={{ marginTop: "20px" }}>
          <div style={{ display: "flex", gap: "20px" }}>
            {doctor.map((doc) => (
              <div
                key={doc.name}
                onClick={() => handleDoctorSelect(doc.name)}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    border:
                      selectedDoctor === doc.name ? "2px solid blue" : "none", // Highlight selected image
                  }}
                />
                <span>{doc.name}</span>
              </div>
            ))}
          </div>
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
            const [minute] = time.split(":");
            const isBold = minute === "00";
            const backgroundColor = index % 2 !== 0 ? "#f7f7f7" : "#ffffff";

            // Check if there's an appointment for the current time slot
            const appointmentForTime = filteredAppointments.find((data) => {
              const [startTime] = data.time.split("-");
              return time === startTime;
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
                    height: "40px",
                    width: "100%",
                    position: "relative",
                    overflow: "visible",
                  }}
                >
                  {appointmentForTime && (
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 99,
                      }}
                      onMouseEnter={() =>
                        setHoveredAppointment(appointmentForTime)
                      }
                      onMouseLeave={() => setHoveredAppointment(null)}
                    >
                      <ModalCustomer
                        name={appointmentForTime.name ?? ""}
                        treat={appointmentForTime.treat ?? ""}
                        number={appointmentForTime.number ?? ""}
                        tel={appointmentForTime.tel ?? ""}
                        time={appointmentForTime.time ?? ""}
                      />
                      {hoveredAppointment && (
                        <ModalDetail
                          name={appointmentForTime.name ?? ""}
                          number={appointmentForTime.number ?? ""}
                          service={
                            doctor.find(
                              (d) => d.name === hoveredAppointment.doctor
                            )?.service ?? ""
                          }
                          tel={
                            doctor.find(
                              (d) => d.name === hoveredAppointment.doctor
                            )?.tel ?? ""
                          }
                          expenses={
                            doctor.find(
                              (d) => d.name === hoveredAppointment.doctor
                            )?.expenses ?? ""
                          }
                          time={hoveredAppointment.time}
                          image={
                            doctor.find(
                              (d) => d.name === hoveredAppointment.doctor
                            )?.image ?? ""
                          }
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="head2"
        style={{
          width: "60%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "THSarabunBold",
                fontSize: "30px",
              }}
            >
              วันที่ 30 ม.ค. 2564
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "#d7e8f5",
                padding: "0 60px",
                borderRadius: "2px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  color: "#cc9870",
                  fontFamily: "THSarabunBold",
                  fontSize: "24px",
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
              minHeight: "600px",
              height: " auto",
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
                <ModalStatus
                  index={"01"}
                  name={data.name}
                  number={data.number}
                  day={9}
                  numR={"05"}
                />
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
                <ModalStatus
                  index={"01"}
                  name={data.name}
                  number={data.number}
                  day={5}
                  numR={"03"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
