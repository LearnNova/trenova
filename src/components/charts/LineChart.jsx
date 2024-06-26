import Chart from "react-apexcharts";

const LineChart = (props) => {
  const { series, options } = props;

  // Update the color of the line to gold
  const updatedSeries = series.map((item) => ({
    ...item,
    stroke: {
      color: "#FFD700", // Gold color
      width: 2, // Adjust line width as needed
    },
  }));

  return (
    <Chart
      options={options}
      type="line"
      width="100%"
      height="100%"
      series={updatedSeries}
    />
  );
};

export default LineChart;
