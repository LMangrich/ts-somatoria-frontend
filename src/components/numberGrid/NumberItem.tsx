import { NumberItemProps } from "../../types/scoringTypes";

export const NumberItem: React.FC<NumberItemProps> = ({
  number,
  correctNumbers,
  missedCorrectNumbers,
  wrongNumbers
}) => {
  let style: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    margin: "4px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontWeight: "bold"
  };

  if (correctNumbers.includes(number) && !missedCorrectNumbers.includes(number)) {
    style = { ...style, backgroundColor: "#006400", color: "#fff" }; 
  } else if (missedCorrectNumbers.includes(number)) {
    style = { 
      ...style, 
      backgroundColor: "#9fd39fff", 
      border: "2px dotted #32CD32",
      color: "#006400"
    };
  } else if (wrongNumbers.includes(number)) {
    style = { ...style, backgroundColor: "#f72500ff", color: "#fff" }; 
  } else {
    style = { ...style, backgroundColor: "#f0f0f0" }; 
  }

  return <div style={style}>{number}</div>;
};