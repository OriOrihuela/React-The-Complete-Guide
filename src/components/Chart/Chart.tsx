import { ChartBar } from "./ChartBar";
import "./Chart.scss";

export const Chart = (props: any): JSX.Element => {
  const dataPointValues = props.dataPoints.map(
    (dataPoint: any) => dataPoint.value
  );
  const maxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: any) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};
