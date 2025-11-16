export const mockRiskData = [
  {
    id: '1',
    region: 'Western Ghats, Karnataka',
    latitude: 12.9716,
    longitude: 77.5946,
    riskLevel: 'high',
    temperature: 38,
    humidity: 25,
    windSpeed: 15,
    rainfall: 0,
    predictedDate: '2025-11-16',
    confidence: 0.87
  },
  {
    id: '2',
    region: 'Aravalli Range, Rajasthan',
    latitude: 26.9124,
    longitude: 75.7873,
    riskLevel: 'severe',
    temperature: 42,
    humidity: 18,
    windSpeed: 22,
    rainfall: 0,
    predictedDate: '2025-11-16',
    confidence: 0.92
  },
  {
    id: '3',
    region: 'Nilgiri Hills, Tamil Nadu',
    latitude: 11.4102,
    longitude: 76.6950,
    riskLevel: 'moderate',
    temperature: 32,
    humidity: 45,
    windSpeed: 8,
    rainfall: 2,
    predictedDate: '2025-11-16',
    confidence: 0.75
  },
  {
    id: '4',
    region: 'Simlipal Forest, Odisha',
    latitude: 21.6281,
    longitude: 86.2529,
    riskLevel: 'low',
    temperature: 28,
    humidity: 65,
    windSpeed: 5,
    rainfall: 15,
    predictedDate: '2025-11-16',
    confidence: 0.68
  },
  {
    id: '5',
    region: 'Jim Corbett National Park, Uttarakhand',
    latitude: 29.5317,
    longitude: 78.7568,
    riskLevel: 'high',
    temperature: 36,
    humidity: 30,
    windSpeed: 18,
    rainfall: 0,
    predictedDate: '2025-11-16',
    confidence: 0.84
  },
  {
    id: '6',
    region: 'Sundarbans, West Bengal',
    latitude: 21.9497,
    longitude: 89.1833,
    riskLevel: 'low',
    temperature: 30,
    humidity: 75,
    windSpeed: 10,
    rainfall: 25,
    predictedDate: '2025-11-16',
    confidence: 0.71
  }
];

export const mockDashboardStats = {
  totalPredictions: 1247,
  highRiskZones: 23,
  averageConfidence: 0.82,
  regionsMonitored: 156
};
