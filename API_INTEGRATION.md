# API Integration Guide for VanSuraksha

This guide explains how to connect the VanSuraksha frontend to a backend machine learning API.

## Table of Contents
1. [Overview](#overview)
2. [API Endpoints](#api-endpoints)
3. [Implementation Steps](#implementation-steps)
4. [Example Backend Structure](#example-backend-structure)
5. [Frontend Integration](#frontend-integration)
6. [Error Handling](#error-handling)
7. [Authentication](#authentication)

## Overview

The VanSuraksha frontend is built to work with a RESTful API backend. Currently, it uses mock data for demonstration. This guide will help you replace the mock data with real API calls to your machine learning backend.

## API Endpoints

### Required Endpoints

#### 1. Predict Fire Risk
```
POST /api/predict
```

**Request Body:**
```json
{
  "temperature": 35,
  "humidity": 30,
  "windSpeed": 15,
  "rainfall": 0,
  "vegetation": 0.65
}
```

**Response:**
```json
{
  "riskLevel": "high",
  "confidence": 0.87,
  "factors": {
    "temperature": 35,
    "humidity": 30,
    "windSpeed": 15,
    "vegetation": 0.65
  },
  "recommendation": "High risk detected. Increase monitoring and prepare firefighting resources."
}
```

#### 2. Get Risk Data for All Regions
```
GET /api/risk-data
```

**Response:**
```json
[
  {
    "id": "1",
    "region": "Western Ghats, Karnataka",
    "latitude": 12.9716,
    "longitude": 77.5946,
    "riskLevel": "high",
    "temperature": 38,
    "humidity": 25,
    "windSpeed": 15,
    "rainfall": 0,
    "predictedDate": "2025-11-16",
    "confidence": 0.87
  }
]
```

#### 3. Get Dashboard Statistics
```
GET /api/dashboard/stats
```

**Response:**
```json
{
  "totalPredictions": 1247,
  "highRiskZones": 23,
  "averageConfidence": 0.82,
  "regionsMonitored": 156
}
```

#### 4. Image-based Prediction (Optional)
```
POST /api/predict/image
Content-Type: multipart/form-data
```

**Request:**
- Form field: `image` (satellite image file)

**Response:**
```json
{
  "riskLevel": "moderate",
  "confidence": 0.78,
  "factors": {
    "temperature": 32,
    "humidity": 45,
    "windSpeed": 8,
    "vegetation": 0.72
  },
  "recommendation": "Moderate risk. Continue regular monitoring."
}
```

## Implementation Steps

### Step 1: Create API Service File

Create `src/services/api.js`:

```javascript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

class ApiService {
  async predict(data) {
    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Prediction failed');
    }
    
    return response.json();
  }

  async predictFromImage(imageFile) {
    const formData = new FormData();
    formData.append('image', imageFile);
    
    const response = await fetch(`${API_BASE_URL}/predict/image`, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error('Image prediction failed');
    }
    
    return response.json();
  }

  async getRiskData() {
    const response = await fetch(`${API_BASE_URL}/risk-data`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch risk data');
    }
    
    return response.json();
  }

  async getDashboardStats() {
    const response = await fetch(`${API_BASE_URL}/dashboard/stats`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch dashboard stats');
    }
    
    return response.json();
  }
}

export const apiService = new ApiService();
```

### Step 2: Create Environment Variables

Create `.env` file in the root:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

For production:
```env
VITE_API_BASE_URL=https://your-production-api.com/api
```

### Step 3: Update Prediction Page

Update `src/pages/PredictionPage.jsx`:

```javascript
import { apiService } from '../services/api';

// In handlePredict function:
const handlePredict = async () => {
  setIsLoading(true);
  
  try {
    let result;
    
    if (activeTab === 'csv') {
      // Send CSV data
      result = await apiService.predict({
        temperature: parseFloat(csvData.temperature),
        humidity: parseFloat(csvData.humidity),
        windSpeed: parseFloat(csvData.windSpeed),
        rainfall: parseFloat(csvData.rainfall),
        vegetation: parseFloat(csvData.vegetation),
      });
    } else {
      // Send image
      result = await apiService.predictFromImage(file);
    }
    
    setPrediction(result);
  } catch (error) {
    console.error('Prediction error:', error);
    alert('Failed to get prediction. Please try again.');
  } finally {
    setIsLoading(false);
  }
};
```

### Step 4: Update Risk Map Page

Update `src/pages/RiskMapPage.jsx`:

```javascript
import { useEffect, useState } from 'react';
import { apiService } from '../services/api';

export function RiskMapPage() {
  const [riskData, setRiskData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRiskData() {
      try {
        const data = await apiService.getRiskData();
        setRiskData(data);
      } catch (error) {
        console.error('Failed to fetch risk data:', error);
        // Fallback to mock data
        setRiskData(mockRiskData);
      } finally {
        setLoading(false);
      }
    }

    fetchRiskData();
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchRiskData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Rest of the component...
}
```

### Step 5: Update Dashboard Page

Update `src/pages/DashboardPage.jsx`:

```javascript
import { useEffect, useState } from 'react';
import { apiService } from '../services/api';

export function DashboardPage() {
  const [stats, setStats] = useState(null);
  const [riskData, setRiskData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [statsData, riskDataResults] = await Promise.all([
          apiService.getDashboardStats(),
          apiService.getRiskData(),
        ]);
        
        setStats(statsData);
        setRiskData(riskDataResults);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
        // Fallback to mock data
        setStats(mockDashboardStats);
        setRiskData(mockRiskData);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Rest of the component...
}
```

## Example Backend Structure

### Flask Backend Example

```python
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)

# Load your trained model
# model = load_model('path/to/model')

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.json
    
    # Extract features
    temperature = data['temperature']
    humidity = data['humidity']
    wind_speed = data['windSpeed']
    rainfall = data['rainfall']
    vegetation = data['vegetation']
    
    # Create feature array
    features = np.array([[temperature, humidity, wind_speed, rainfall, vegetation]])
    
    # Make prediction
    # prediction = model.predict(features)
    # confidence = model.predict_proba(features).max()
    
    # Example response
    risk_level = determine_risk_level(temperature, humidity, wind_speed)
    
    return jsonify({
        'riskLevel': risk_level,
        'confidence': 0.87,
        'factors': {
            'temperature': temperature,
            'humidity': humidity,
            'windSpeed': wind_speed,
            'vegetation': vegetation
        },
        'recommendation': get_recommendation(risk_level)
    })

@app.route('/api/risk-data', methods=['GET'])
def get_risk_data():
    # Fetch from database or generate from model
    risk_data = get_all_regions_risk()
    return jsonify(risk_data)

@app.route('/api/dashboard/stats', methods=['GET'])
def get_dashboard_stats():
    # Calculate statistics from database
    stats = {
        'totalPredictions': get_total_predictions(),
        'highRiskZones': get_high_risk_zones(),
        'averageConfidence': get_average_confidence(),
        'regionsMonitored': get_monitored_regions_count()
    }
    return jsonify(stats)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

### FastAPI Backend Example

```python
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PredictionInput(BaseModel):
    temperature: float
    humidity: float
    windSpeed: float
    rainfall: float
    vegetation: float

@app.post("/api/predict")
async def predict(input_data: PredictionInput):
    # Your ML model prediction logic here
    features = np.array([[
        input_data.temperature,
        input_data.humidity,
        input_data.windSpeed,
        input_data.rainfall,
        input_data.vegetation
    ]])
    
    # prediction = model.predict(features)
    
    return {
        "riskLevel": "high",
        "confidence": 0.87,
        "factors": {
            "temperature": input_data.temperature,
            "humidity": input_data.humidity,
            "windSpeed": input_data.windSpeed,
            "vegetation": input_data.vegetation
        },
        "recommendation": "High risk detected."
    }

@app.post("/api/predict/image")
async def predict_from_image(image: UploadFile = File(...)):
    # Process satellite image
    # prediction = image_model.predict(image)
    
    return {
        "riskLevel": "moderate",
        "confidence": 0.78,
        "factors": {...},
        "recommendation": "Moderate risk."
    }

@app.get("/api/risk-data")
async def get_risk_data():
    # Fetch from database
    return risk_data_list

@app.get("/api/dashboard/stats")
async def get_dashboard_stats():
    return {
        "totalPredictions": 1247,
        "highRiskZones": 23,
        "averageConfidence": 0.82,
        "regionsMonitored": 156
    }
```

## Error Handling

Add error handling to all API calls:

```javascript
// src/services/api.js
async predict(data) {
  try {
    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Prediction failed');
    }
    
    return response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}
```

## Authentication

For secured API:

```javascript
// src/services/api.js
class ApiService {
  constructor() {
    this.token = localStorage.getItem('authToken');
  }

  async predict(data) {
    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
      body: JSON.stringify(data),
    });
    
    // ... rest of the code
  }
}
```

## Testing

Test your API integration:

```javascript
// Quick test script
import { apiService } from './services/api';

async function testApi() {
  try {
    const result = await apiService.predict({
      temperature: 35,
      humidity: 30,
      windSpeed: 15,
      rainfall: 0,
      vegetation: 0.65
    });
    console.log('Prediction:', result);
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testApi();
```

## Next Steps

1. Set up your backend API with the endpoints described above
2. Create the `src/services/api.js` file
3. Add environment variables
4. Update pages to use API service instead of mock data
5. Test thoroughly
6. Deploy both frontend and backend
7. Update environment variables for production

## Support

If you encounter issues during integration, check:
- Network requests in browser DevTools
- Backend server logs
- CORS configuration
- Environment variables
- API endpoint URLs

For additional help, contact the development team.
