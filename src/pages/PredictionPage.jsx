import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, TrendingUp, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { RiskBadge } from '../components/RiskBadge';

export function PredictionPage() {
  const [file, setFile] = useState(null);
  const [csvData, setCsvData] = useState({
    temperature: '',
    humidity: '',
    windSpeed: '',
    rainfall: '',
    vegetation: '',
  });
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('csv');

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleCsvInputChange = (field, value) => {
    setCsvData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePredict = async () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock prediction result
      const temp = parseFloat(csvData.temperature) || 35;
      const humidity = parseFloat(csvData.humidity) || 30;
      const wind = parseFloat(csvData.windSpeed) || 15;
      
      let riskLevel = 'low';
      let confidence = 0.7;
      let recommendation = '';
      
      if (temp > 40 && humidity < 20) {
        riskLevel = 'severe';
        confidence = 0.92;
        recommendation = 'Immediate action required. Deploy fire prevention teams and issue public warnings.';
      } else if (temp > 35 && humidity < 30) {
        riskLevel = 'high';
        confidence = 0.85;
        recommendation = 'High risk detected. Increase monitoring and prepare firefighting resources.';
      } else if (temp > 30 && humidity < 40) {
        riskLevel = 'moderate';
        confidence = 0.78;
        recommendation = 'Moderate risk. Continue regular monitoring and maintain alert status.';
      } else {
        riskLevel = 'low';
        confidence = 0.71;
        recommendation = 'Low risk. Continue standard forest management practices.';
      }

      setPrediction({
        riskLevel,
        confidence,
        factors: {
          temperature: temp,
          humidity,
          windSpeed: wind,
          vegetation: parseFloat(csvData.vegetation) || 0.65,
        },
        recommendation,
      });
      setIsLoading(false);
    }, 2000);
  };

  const isFormValid = () => {
    if (activeTab === 'csv') {
      return Object.values(csvData).every((value) => value !== '');
    }
    return file !== null;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fire Risk Prediction
          </h1>
          <p className="text-xl text-gray-600">
            Upload data to predict forest fire risk
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Input Data</CardTitle>
                <CardDescription>
                  Choose your input method and provide the necessary data
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Tab Selector */}
                <div className="flex gap-2 mb-6">
                  <Button
                    variant={activeTab === 'csv' ? 'default' : 'outline'}
                    onClick={() => setActiveTab('csv')}
                    className="flex-1"
                  >
                    CSV Features
                  </Button>
                  <Button
                    variant={activeTab === 'image' ? 'default' : 'outline'}
                    onClick={() => setActiveTab('image')}
                    className="flex-1"
                  >
                    Satellite Image
                  </Button>
                </div>

                {activeTab === 'csv' ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Temperature (°C)
                      </label>
                      <Input
                        type="number"
                        placeholder="e.g., 35"
                        value={csvData.temperature}
                        onChange={(e) => handleCsvInputChange('temperature', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Humidity (%)
                      </label>
                      <Input
                        type="number"
                        placeholder="e.g., 30"
                        value={csvData.humidity}
                        onChange={(e) => handleCsvInputChange('humidity', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Wind Speed (km/h)
                      </label>
                      <Input
                        type="number"
                        placeholder="e.g., 15"
                        value={csvData.windSpeed}
                        onChange={(e) => handleCsvInputChange('windSpeed', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Rainfall (mm)
                      </label>
                      <Input
                        type="number"
                        placeholder="e.g., 0"
                        value={csvData.rainfall}
                        onChange={(e) => handleCsvInputChange('rainfall', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Vegetation Index (NDVI)
                      </label>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="e.g., 0.65"
                        value={csvData.vegetation}
                        onChange={(e) => handleCsvInputChange('vegetation', e.target.value)}
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Upload Satellite Image
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-forest-500 transition-colors">
                      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <p className="text-sm text-gray-600 mb-4">
                        {file ? file.name : 'Click to upload or drag and drop'}
                      </p>
                      <Input
                        type="file"
                        accept="image/*,.tif,.tiff"
                        onChange={handleFileChange}
                        className="max-w-xs mx-auto"
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        Supports: JPEG, PNG, TIFF (Satellite imagery)
                      </p>
                    </div>
                  </div>
                )}

                <Button
                  onClick={handlePredict}
                  disabled={!isFormValid() || isLoading}
                  className="w-full mt-6"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Predicting...
                    </>
                  ) : (
                    <>
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Predict Fire Risk
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 space-y-2">
                <p>
                  Our machine learning model analyzes multiple environmental factors to
                  predict forest fire risk levels.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Temperature and humidity affect fire ignition probability</li>
                  <li>Wind speed influences fire spread rate</li>
                  <li>Rainfall indicates fuel moisture content</li>
                  <li>Vegetation index shows biomass density</li>
                </ul>
                <p className="mt-3">
                  The model provides a risk level (Low, Moderate, High, Severe) along with
                  confidence scores and actionable recommendations.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {prediction ? (
              <div className="space-y-6">
                <Card className="border-2 border-forest-500">
                  <CardHeader>
                    <CardTitle className="text-2xl">Prediction Result</CardTitle>
                    <CardDescription>
                      Based on provided environmental parameters
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center py-6 bg-gray-50 rounded-lg">
                      <RiskBadge level={prediction.riskLevel} className="text-lg px-6 py-2" />
                      <p className="text-sm text-gray-600 mt-4">
                        Confidence: {(prediction.confidence * 100).toFixed(1)}%
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Risk Factors</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Temperature</span>
                            <span className="font-medium">{prediction.factors.temperature}°C</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-orange-500 h-2 rounded-full"
                              style={{ width: `${(prediction.factors.temperature / 50) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Humidity</span>
                            <span className="font-medium">{prediction.factors.humidity}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: `${prediction.factors.humidity}%` }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Wind Speed</span>
                            <span className="font-medium">{prediction.factors.windSpeed} km/h</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-cyan-500 h-2 rounded-full"
                              style={{ width: `${(prediction.factors.windSpeed / 40) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Vegetation Density</span>
                            <span className="font-medium">
                              {(prediction.factors.vegetation * 100).toFixed(0)}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${prediction.factors.vegetation * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Recommendation</h4>
                      <p className="text-sm text-blue-800">{prediction.recommendation}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Next Steps</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold min-w-[20px]">1.</span>
                      <span>Review the risk level and confidence score</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold min-w-[20px]">2.</span>
                      <span>Share results with forest management team</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold min-w-[20px]">3.</span>
                      <span>Implement recommended prevention measures</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold min-w-[20px]">4.</span>
                      <span>Monitor the area continuously for changes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold min-w-[20px]">5.</span>
                      <span>Update prediction with new data regularly</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="h-full flex items-center justify-center">
                <CardContent className="text-center py-12">
                  <TrendingUp className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    No Prediction Yet
                  </h3>
                  <p className="text-sm text-gray-500">
                    Enter the required data and click "Predict Fire Risk" to see results
                  </p>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
