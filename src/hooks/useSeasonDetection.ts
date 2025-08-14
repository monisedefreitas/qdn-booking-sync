import { useMemo } from 'react';

export interface SeasonInfo {
  season: 'Primavera' | 'Verão' | 'Outono' | 'Inverno';
  activities: string[];
  description: string;
  temperature: {
    avg: string;
    min: number;
    max: number;
  };
  clothing: string[];
  events: string[];
}

const seasonalData: Record<string, SeasonInfo> = {
  'Primavera': {
    season: 'Primavera',
    activities: [
      'Caminhadas no Tejo',
      'Festivais da primavera',
      'Visitas a quintas',
      'Birdwatching',
      'Ciclismo rural'
    ],
    description: 'Temperatura agradável, natureza em flor e festivais locais',
    temperature: {
      avg: '15°C - 25°C',
      min: 8,
      max: 30
    },
    clothing: [
      'Roupa de meia estação',
      'Casaco leve para a noite',
      'Calçado confortável para caminhadas',
      'Chapéu para proteção solar'
    ],
    events: [
      'Festival Nacional de Gastronomia (Maio)',
      'Feira de Maio em Santarém',
      'Romaria de Fátima (Maio)'
    ]
  },
  'Verão': {
    season: 'Verão',
    activities: [
      'Praias (Nazaré, São Martinho)',
      'Festivais de verão',
      'Gastronomia ao ar livre',
      'Desportos aquáticos',
      'Mercados nocturnos'
    ],
    description: 'Proximidade ao litoral, praias e festivais de verão',
    temperature: {
      avg: '20°C - 35°C',
      min: 15,
      max: 42
    },
    clothing: [
      'Roupa leve de algodão',
      'Protetor solar',
      'Chapéu e óculos de sol',
      'Roupa de banho',
      'Chinelos'
    ],
    events: [
      'Festival de Verão de Santarém',
      'Festas Populares',
      'Mercados nocturnos do Ribatejo',
      'Festival da Nazaré'
    ]
  },
  'Outono': {
    season: 'Outono',
    activities: [
      'Vindimas na região',
      'Gastronomia tradicional',
      'Caminhadas e trilhos',
      'Visitas a museus',
      'Mercados tradicionais'
    ],
    description: 'Cores douradas, tradições vinícolas e gastronomia de época',
    temperature: {
      avg: '10°C - 25°C',
      min: 5,
      max: 30
    },
    clothing: [
      'Roupa em camadas',
      'Casaco médio',
      'Sapatos impermeáveis',
      'Cachecol leve'
    ],
    events: [
      'Vindimas no Ribatejo',
      'Festival Nacional de Gastronomia',
      'Feiras tradicionais',
      'São Martinho (11 Novembro)'
    ]
  },
  'Inverno': {
    season: 'Inverno',
    activities: [
      'Museus e património',
      'Gastronomia de inverno',
      'Proximidade a Lisboa',
      'Termas e spa',
      'Festivais culturais'
    ],
    description: 'Aconchego, património histórico e gastronomia reconfortante',
    temperature: {
      avg: '5°C - 15°C',
      min: -2,
      max: 20
    },
    clothing: [
      'Roupa quente',
      'Casaco impermeável',
      'Cachecol e luvas',
      'Botas adequadas',
      'Várias camadas'
    ],
    events: [
      'Mercados de Natal',
      'Festivais de inverno',
      'Concertos de música clássica',
      'Ano Novo português'
    ]
  }
};

export function useSeasonDetection(checkIn: string, checkOut: string) {
  return useMemo(() => {
    if (!checkIn) return null;

    const date = new Date(checkIn);
    const month = date.getMonth() + 1; // 1-12
    const day = date.getDate();

    // Season detection logic
    let season: keyof typeof seasonalData;
    
    if ((month === 3 && day >= 21) || month === 4 || month === 5 || (month === 6 && day < 21)) {
      season = 'Primavera';
    } else if ((month === 6 && day >= 21) || month === 7 || month === 8 || (month === 9 && day < 21)) {
      season = 'Verão';
    } else if ((month === 9 && day >= 21) || month === 10 || month === 11 || (month === 12 && day < 21)) {
      season = 'Outono';
    } else {
      season = 'Inverno';
    }

    return {
      ...seasonalData[season],
      dates: {
        checkIn,
        checkOut
      }
    };
  }, [checkIn, checkOut]);
}