import { TabsProps } from "../types/scoringTypes";

export function Tabs ({ activeTab, onChange, sequences} : TabsProps){
    return (
    <div style={{ display: 'flex', marginBottom: '20px', borderBottom: '1px solid #ddd' }}>
      {sequences.map((seq, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          style={{
            padding: '10px 15px',
            backgroundColor: activeTab === index ? '#4CAF50' : 'transparent',
            color: activeTab === index ? 'white' : '#333',
            border: 'none',
            borderBottom: activeTab === index ? '2px solid #2E7D32' : 'none',
            cursor: 'pointer',
            fontWeight: activeTab === index ? 'bold' : 'normal',
            borderRadius: '4px 4px 0 0'
          }}
        >
          {seq.name}
        </button>
      ))}
    </div>
  );
}