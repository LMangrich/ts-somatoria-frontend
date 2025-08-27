import { ScoringInput, ScoringResult } from "../types/scoringTypes";

export async function calculateScore(input: ScoringInput): Promise<ScoringResult> {
    const response = await fetch('https://ts-somatoria-backend.onrender.com/score', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(input)
    });

  if (!response.ok) {
    throw new Error('Erro ao calcular a pontuação');
  }

  return response.json(); 
}