import { ScoreInputsProps } from "../types/scoringTypes";

export function ScoreInputs({ userSum, correctSum, onUserChange, onCorrectChange }: ScoreInputsProps) {
  const handleChange = (setter: (val: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

    if (value === '' || (/^\d*\.?\d*$/.test(value) && Number(value) <= 99)) {
        setter(value);
    }
};

  return (
    <>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
          Digite sua soma:
        </label>
        <input
          type="text"
          value={userSum}
          onChange={handleChange(onUserChange)}
          placeholder="Digite o resultado da sua soma"
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
          Digite a soma do gabarito:
        </label>
        <input
          type="text"
          value={correctSum}
          onChange={handleChange(onCorrectChange)}
          placeholder="Digite o resultado da soma do gabarito"
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />
      </div>
    </>
  );
}