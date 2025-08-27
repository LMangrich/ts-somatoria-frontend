import { ScoringResult } from "../types/scoringTypes";

export function ScoreResult({ result }: { result: ScoringResult }) {
  return (
    <div style={{
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#e8f5e9',
      borderRadius: '4px',
      border: '1px solid #c8e6c9'
    }}>
      <h3 style={{ marginTop: 0, color: '#2e7d32' }}>Detalhes da Pontuação:</h3>
      <p><strong>Pontuação:</strong> {result.points.toFixed(2)}</p>
      <p><strong>Número(s) do usuário:</strong> {result.userNumbers.join(', ') || 'Nenhum'}</p>
      <p><strong>Número(s) do gabarito:</strong> {result.correctNumbers.join(', ') || 'Nenhum'}</p>
      <p><strong>Número(s) escolhido(s) incorretamente:</strong> {result.wrongNumbers.join(', ') || 'Nenhum'}</p>
      <p><strong>Número(s) do gabarito não escolhido(s):</strong> {result.missedCorrectNumbers.join(', ') || 'Nenhum'}</p>
    </div>
  );
}