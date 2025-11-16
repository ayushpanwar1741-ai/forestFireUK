import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, MapPin, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { RiskBadge } from '../components/RiskBadge';
import { mockDashboardStats, mockRiskData } from '../data/mockData';

export function DashboardPage() {
  const stats = mockDashboardStats;
  const recentPredictions = mockRiskData.slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-lg text-gray-600">
            Monitor forest fire risk across all regions
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: 'Total Predictions',
              value: stats.totalPredictions.toLocaleString(),
              icon: Activity,
              color: 'text-blue-600',
              bgColor: 'bg-blue-100',
              change: '+12% from last month',
            },
            {
              title: 'High Risk Zones',
              value: stats.highRiskZones,
              icon: AlertTriangle,
              color: 'text-red-600',
              bgColor: 'bg-red-100',
              change: '-5% from last week',
            },
            {
              title: 'Regions Monitored',
              value: stats.regionsMonitored,
              icon: MapPin,
              color: 'text-green-600',
              bgColor: 'bg-green-100',
              change: '+8 new regions',
            },
            {
              title: 'Avg. Confidence',
              value: `${(stats.averageConfidence * 100).toFixed(0)}%`,
              icon: TrendingUp,
              color: 'text-purple-600',
              bgColor: 'bg-purple-100',
              change: '+3% improvement',
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.change}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Predictions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Recent Predictions</CardTitle>
                <CardDescription>Latest risk assessments across monitored regions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPredictions.map((region) => (
                    <div
                      key={region.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{region.region}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>Temp: {region.temperature}°C</span>
                          <span>Humidity: {region.humidity}%</span>
                          <span>Wind: {region.windSpeed} km/h</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <RiskBadge level={region.riskLevel} />
                        <span className="text-xs text-gray-500">
                          {(region.confidence * 100).toFixed(0)}% confidence
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Risk Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Risk Distribution</CardTitle>
                <CardDescription>Current status across all regions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      level: 'severe',
                      count: mockRiskData.filter((r) => r.riskLevel === 'severe').length,
                      percentage: (mockRiskData.filter((r) => r.riskLevel === 'severe').length / mockRiskData.length) * 100,
                    },
                    {
                      level: 'high',
                      count: mockRiskData.filter((r) => r.riskLevel === 'high').length,
                      percentage: (mockRiskData.filter((r) => r.riskLevel === 'high').length / mockRiskData.length) * 100,
                    },
                    {
                      level: 'moderate',
                      count: mockRiskData.filter((r) => r.riskLevel === 'moderate').length,
                      percentage: (mockRiskData.filter((r) => r.riskLevel === 'moderate').length / mockRiskData.length) * 100,
                    },
                    {
                      level: 'low',
                      count: mockRiskData.filter((r) => r.riskLevel === 'low').length,
                      percentage: (mockRiskData.filter((r) => r.riskLevel === 'low').length / mockRiskData.length) * 100,
                    },
                  ].map((item) => (
                    <div key={item.level}>
                      <div className="flex items-center justify-between mb-2">
                        <RiskBadge level={item.level} />
                        <span className="text-sm font-medium">{item.count} regions</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            item.level === 'severe' ? 'bg-risk-severe' :
                            item.level === 'high' ? 'bg-risk-high' :
                            item.level === 'moderate' ? 'bg-risk-moderate' :
                            'bg-risk-low'
                          }`}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="font-semibold text-red-900 mb-1">Alert</p>
                  <p className="text-red-800">
                    {mockRiskData.filter((r) => r.riskLevel === 'severe' || r.riskLevel === 'high').length} regions 
                    require immediate attention
                  </p>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="font-semibold text-blue-900 mb-1">Peak Risk Period</p>
                  <p className="text-blue-800">April - June (Summer months)</p>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="font-semibold text-green-900 mb-1">Model Accuracy</p>
                  <p className="text-green-800">87.3% validated accuracy</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Regional Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Regional Insights</CardTitle>
              <CardDescription>Detailed analysis of environmental conditions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Region</th>
                      <th className="text-left py-3 px-4 font-semibold">Risk Level</th>
                      <th className="text-right py-3 px-4 font-semibold">Temp (°C)</th>
                      <th className="text-right py-3 px-4 font-semibold">Humidity (%)</th>
                      <th className="text-right py-3 px-4 font-semibold">Wind (km/h)</th>
                      <th className="text-right py-3 px-4 font-semibold">Confidence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockRiskData.map((region) => (
                      <tr key={region.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{region.region}</td>
                        <td className="py-3 px-4">
                          <RiskBadge level={region.riskLevel} />
                        </td>
                        <td className="text-right py-3 px-4">{region.temperature}</td>
                        <td className="text-right py-3 px-4">{region.humidity}</td>
                        <td className="text-right py-3 px-4">{region.windSpeed}</td>
                        <td className="text-right py-3 px-4">
                          {(region.confidence * 100).toFixed(0)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
