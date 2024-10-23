interface ICustomer {
  name: string;
  treat: string;
  number: number;
  tel: string;
  time: string;
}

export default function ModalCustomer(props: ICustomer) {
  const { name, treat, number, tel, time } = props;

  // Function to calculate the height based on the time difference
  const calculateHeight = (time: string): number => {
    // Split the time into start and end
    const [startTime, endTime] = time.split("-");

    // Validate startTime and endTime
    if (!startTime || !endTime) {
      console.error("Invalid time format");
      return 40; // Default height if time format is invalid
    }

    // Replace '.' with ':' in endTime to form a valid time string
    const formattedEndTime = endTime.replace(".", ":");

    // Create Date objects
    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${formattedEndTime}:00`);

    // Calculate the difference in minutes
    const diffInMinutes = (end.getTime() - start.getTime()) / (1000 * 40);

    // Check if diffInMinutes is a valid number
    if (isNaN(diffInMinutes)) {
      console.error("Time calculation resulted in NaN");
      return 40; // Default height
    }

    // Calculate height: 60px for 30 minutes, so 15px for each 15 minutes
    const height = (diffInMinutes / 15) * 15; // For every 15 minutes, add 15px
    return height + 40; // Add a base height of 40px
  };

  const height = calculateHeight(time);

  return (
    <div
      style={{
        minHeight: "60px",
        height: `${height}px`,
        width: "100%",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "20px",
          height: "auto",
          background: "#f0f4fa",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "4px 0px 0px 4px",
        }}
      ></div>
      <div
        className="detail"
        style={{
          display: "inline-block",
          background: "orange",
          padding: "0 4px",
          borderRadius: "0px 4px 4px 0px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            margin: 0,
            fontFamily: "THSarabun",
          }}
        >
          {name} | {treat} | {number} <br />
          {tel} | {time} น.
        </p>
      </div>
    </div>
  );
}
