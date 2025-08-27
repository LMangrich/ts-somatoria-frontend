import { useState } from 'react';
import { calculateScore } from '../services/scoringService';
import { Tabs } from './Tabs';
import { NumberGrid } from './numberGrid/NumberGrid';
import { ScoreInputs } from './ScoreInputs';
import { ScoreResult } from './ScoreResult';
import { ScoringInput, ScoringResult } from '../types/scoringTypes';

const numberSequences = [
  { name: "Sequência 1", numbers: [[1, 2, 4, 8, 16, 32, 64]] }, // 7
  { name: "Sequência 2", numbers: [[1, 2, 4, 8, 16, 32]] },      // 6
  { name: "Sequência 3", numbers: [[1, 2, 4, 8, 16]] }           // 5
];

export function SomatoriaForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [userSum, setUserSum] = useState('');
  const [correctSum, setCorrectSum] = useState('');
  const [result, setResult] = useState<ScoringResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const activeNumbers = numberSequences[activeTab]!.numbers;

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const input: ScoringInput = {
        userTotalSum: parseFloat(userSum) || 0,
        correctTotalSum: parseFloat(correctSum) || 0,
        totalQuestionItems: activeNumbers.flat().length
      };
      const score = await calculateScore(input);
      setResult(score);
    } catch (err) {
      console.error(err);
      alert('Erro ao calcular a pontuação.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setUserSum('');
    setCorrectSum('');
    setResult(null);
  };

  return (
    <div style={{
      maxWidth: '700px',
      margin: '20px auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Calculadora de Somatórias</h2>

      <Tabs activeTab={activeTab} onChange={setActiveTab} sequences={numberSequences} />

      <NumberGrid numbers={activeNumbers} result={result} />

      <div style={{
        backgroundColor: '#fff',
        padding: '15px',
        borderRadius: '4px',
        marginBottom: '15px',
        border: '1px solid #ddd'
      }}>
        <ScoreInputs
          userSum={userSum}
          correctSum={correctSum}
          onUserChange={setUserSum}
          onCorrectChange={setCorrectSum}
        />

        {result && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <span style={{ fontWeight: 'bold' }}>Desempenho:</span>
            <span style={{
              fontWeight: 'bold',
              color: result.points >= 0.7 ? '#4CAF50' : '#F44336'
            }}>
              {result.points.toFixed(2)}
            </span>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={resetForm}
          style={{
            padding: '8px 16px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Reiniciar
        </button>

        <button
          onClick={handleSubmit}
          disabled={isLoading || !userSum || !correctSum}
          style={{
            padding: '8px 16px',
            backgroundColor: (isLoading || !userSum || !correctSum) ? '#ccc' : '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: (isLoading || !userSum || !correctSum) ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? 'Calculando...' : 'Enviar'}
        </button>
      </div>

      {result && <ScoreResult result={result} />}
    </div>
  );
}
