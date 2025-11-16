import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { Menu } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { RiskBadge } from '../components/RiskBadge';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { mockRiskData } from '../data/mockData';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const getRiskColor = (level) => {
  const colors = {
    low: '#22c55e',
    moderate: '#eab308',
    high: '#f97316',
    severe: '#ef4444',
  };
  return colors[level];
};

const getRiskRadius = (level) => {
  const radius = {
    low: 15000,
    moderate: 20000,
    high: 25000,
    severe: 30000,
  };
  return radius[level];
};

export function RiskMapPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState<RiskData | null>(null);

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      {/* Map Container */}
      <div className="flex-1 relative">
        <MapContainer
          center={[20.5937, 78.9629]}
          zoom={5}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {mockRiskData.map((region) => (
            <div key={region.id}>
              <Circle
                center={[region.latitude, region.longitude]}
                radius={getRiskRadius(region.riskLevel)}
                pathOptions={{
                  color: getRiskColor(region.riskLevel),
                  fillColor: getRiskColor(region.riskLevel),
                  fillOpacity: 0.2,
                }}
              />
              <Marker
                position={[region.latitude, region.longitude]}
                eventHandlers={{
                  click: () => setSelectedRegion(region),
                }}
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-semibold mb-2">{region.region}</h3>
                    <RiskBadge level={region.riskLevel} className="mb-2" />
                    <div className="text-sm space-y-1">
                      <p>Temperature: {region.temperature}°C</p>
                      <p>Humidity: {region.humidity}%</p>
                      <p>Wind Speed: {region.windSpeed} km/h</p>
                      <p>Confidence: {(region.confidence * 100).toFixed(0)}%</p>
                    </div>
                  </div>
                </Popup>
              </Marker>
            </div>
          ))}
        </MapContainer>

        {/* Mobile Sidebar Toggle */}
        <Button
          className="absolute top-4 right-4 z-[1000] md:hidden"
          variant="secondary"
          size="icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        title="Risk Levels"
      >
        <div className="space-y-4">
          {/* Legend */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Risk Legend</CardTitle>
              <CardDescription>Color coding for fire risk levels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <RiskBadge level="low" />
                <span className="text-sm text-gray-600">0-25%</span>
              </div>
              <div className="flex items-center justify-between">
                <RiskBadge level="moderate" />
                <span className="text-sm text-gray-600">26-50%</span>
              </div>
              <div className="flex items-center justify-between">
                <RiskBadge level="high" />
                <span className="text-sm text-gray-600">51-75%</span>
              </div>
              <div className="flex items-center justify-between">
                <RiskBadge level="severe" />
                <span className="text-sm text-gray-600">76-100%</span>
              </div>
            </CardContent>
          </Card>

          {/* Selected Region Details */}
          {selectedRegion && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Region Details</CardTitle>
                <CardDescription>{selectedRegion.region}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Risk Level:</span>
                  <RiskBadge level={selectedRegion.riskLevel} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Confidence:</span>
                  <span className="text-sm">
                    {(selectedRegion.confidence * 100).toFixed(0)}%
                  </span>
                </div>
                <hr />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Temperature:</span>
                    <span className="text-sm font-medium">{selectedRegion.temperature}°C</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Humidity:</span>
                    <span className="text-sm font-medium">{selectedRegion.humidity}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Wind Speed:</span>
                    <span className="text-sm font-medium">{selectedRegion.windSpeed} km/h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Rainfall:</span>
                    <span className="text-sm font-medium">{selectedRegion.rainfall} mm</span>
                  </div>
                </div>
                <hr />
                <div className="text-xs text-gray-500">
                  Last updated: {selectedRegion.predictedDate}
                </div>
              </CardContent>
            </Card>
          )}

          {/* All Regions List */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">All Regions</CardTitle>
              <CardDescription>Click on a region to view on map</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {mockRiskData.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region)}
                  className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{region.region}</span>
                    <RiskBadge level={region.riskLevel} />
                  </div>
                  <div className="text-xs text-gray-500">
                    Confidence: {(region.confidence * 100).toFixed(0)}%
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>
        </div>
      </Sidebar>
    </div>
  );
}
