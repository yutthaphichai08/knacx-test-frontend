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
    return height + 40; // Add a base height of 60px
  };

  const height = calculateHeight(time);

  return (
    <div
      style={{
        minHeight: "60px",
        height: `${height}px`, // Set the height dynamically
        width: "100%",
        display: "flex",
        borderRadius: "6px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow here
      }}
    >
      <div
        style={{
          width: "20px",
          height: "auto",
          background: "#f0f4fa",
        }}
      ></div>
      <div
        style={{
          width: "auto",
          height: "auto",
          background: "orange",
          padding: "0 4px",
          borderRadius: "0 6px 6px 0",
        }}
      >
        <p style={{ fontSize: "14px", fontWeight: "bold" }}>
          {name} | {treat} | {number} <br />
          {tel} | {time} น.
        </p>
      </div>
    </div>
  );
}
