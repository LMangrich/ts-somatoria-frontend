import { NumberGridProps } from "../../types/scoringTypes";
import { NumberItem } from "./NumberItem";

export const NumberGrid: React.FC<NumberGridProps> = ({ numbers, result }) => {
  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "15px" }}>
      {numbers.flat().map(num => (
        <NumberItem
          key={num}
          number={num}
          correctNumbers={result?.correctNumbers || []}
          missedCorrectNumbers={result?.missedCorrectNumbers || []}
          wrongNumbers={result?.wrongNumbers || []}
        />
      ))}
    </div>
  );
};