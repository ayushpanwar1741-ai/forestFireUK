import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Target, Lightbulb, Users, TrendingUp, Code, Globe, Cpu, BarChart } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About VanSuraksha
          </h1>
          <p className="text-xl text-gray-600">
            Forest Fire Risk Prediction System
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Introduction</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <p>
                VanSuraksha is an advanced forest fire risk prediction system that leverages
                cutting-edge machine learning algorithms to predict and prevent forest fires.
                The system analyzes multiple environmental parameters including temperature,
                humidity, wind speed, rainfall, and vegetation indices to provide accurate
                risk assessments.
              </p>
              <p>
                In an era where climate change is increasing the frequency and severity of
                forest fires worldwide, VanSuraksha provides a critical early warning system
                that can save lives, protect biodiversity, and preserve our natural heritage.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Background of the Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Users className="h-6 w-6 text-forest-600" />
                Background of the Project
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <p>
                Forest fires pose one of the most significant threats to ecosystems, wildlife,
                and human settlements globally. India alone witnesses thousands of forest fire
                incidents annually, particularly during the dry summer months. Traditional
                methods of fire detection are often reactive, leading to delayed responses
                and extensive damage.
              </p>
              <p>
                This project was conceived to address the urgent need for a proactive,
                data-driven approach to forest fire management. By combining satellite imagery,
                meteorological data, and advanced machine learning techniques, VanSuraksha
                represents a paradigm shift from reactive fire-fighting to predictive prevention.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Problem Domain */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Problem Domain</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <p className="font-semibold">Key Challenges:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Late Detection:</strong> Traditional methods often detect fires only
                  after significant damage has occurred.
                </li>
                <li>
                  <strong>Complex Risk Factors:</strong> Forest fire risk depends on multiple
                  interrelated environmental variables that are difficult to analyze manually.
                </li>
                <li>
                  <strong>Resource Constraints:</strong> Limited manpower and resources for
                  continuous forest monitoring across vast areas.
                </li>
                <li>
                  <strong>Climate Variability:</strong> Changing weather patterns make
                  prediction increasingly challenging without sophisticated analytical tools.
                </li>
                <li>
                  <strong>Data Integration:</strong> Difficulty in integrating data from
                  multiple sources (satellite, weather stations, ground sensors) for
                  comprehensive analysis.
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Motivation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-yellow-600" />
                Motivation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <p>
                The motivation behind VanSuraksha stems from several critical factors:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Environmental Conservation:</strong> Protecting biodiversity and
                  preventing irreversible damage to forest ecosystems.
                </li>
                <li>
                  <strong>Human Safety:</strong> Safeguarding communities living in and around
                  forest areas from fire hazards.
                </li>
                <li>
                  <strong>Economic Impact:</strong> Reducing economic losses from forest fires,
                  which affect timber resources, tourism, and local economies.
                </li>
                <li>
                  <strong>Climate Action:</strong> Contributing to climate change mitigation by
                  preserving carbon sinks and preventing massive CO2 emissions from fires.
                </li>
                <li>
                  <strong>Technological Innovation:</strong> Demonstrating how AI and ML can
                  be applied to environmental challenges for social good.
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-600" />
                Objectives
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Develop a Predictive Model:</strong> Create an accurate machine
                  learning model that predicts forest fire risk levels based on environmental
                  parameters.
                </li>
                <li>
                  <strong>Real-time Monitoring:</strong> Implement a system for continuous
                  monitoring of forest areas with real-time risk assessment.
                </li>
                <li>
                  <strong>Interactive Visualization:</strong> Design intuitive dashboards and
                  maps for easy interpretation of risk data by forest officials and
                  stakeholders.
                </li>
                <li>
                  <strong>Early Warning System:</strong> Establish an alert mechanism that
                  notifies authorities when risk levels exceed safe thresholds.
                </li>
                <li>
                  <strong>Data Integration:</strong> Integrate multiple data sources including
                  satellite imagery, weather data, and ground sensors.
                </li>
                <li>
                  <strong>Scalability:</strong> Ensure the system can be scaled to cover
                  larger geographical areas and diverse forest types.
                </li>
                <li>
                  <strong>User-Friendly Interface:</strong> Create accessible interfaces for
                  both technical and non-technical users.
                </li>
              </ol>
            </CardContent>
          </Card>
        </motion.div>

        {/* Significance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-600" />
                Significance
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <p>
                VanSuraksha represents a significant advancement in forest fire management:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Proactive Prevention:</strong> Shifts focus from reactive firefighting
                  to preventive measures, potentially reducing fire incidents by 40-60%.
                </li>
                <li>
                  <strong>Cost Efficiency:</strong> Reduces firefighting costs and damage
                  expenses through early intervention.
                </li>
                <li>
                  <strong>Environmental Protection:</strong> Preserves critical habitats,
                  protects endangered species, and maintains ecosystem services.
                </li>
                <li>
                  <strong>Policy Support:</strong> Provides data-driven insights for forest
                  management policies and resource allocation.
                </li>
                <li>
                  <strong>Community Resilience:</strong> Enhances community preparedness and
                  reduces risks to life and property.
                </li>
                <li>
                  <strong>Research Contribution:</strong> Advances the field of environmental
                  informatics and disaster management through innovative AI applications.
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Background Study */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Background Study</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <p>
                Extensive research was conducted to understand existing approaches and identify
                gaps in current forest fire prediction systems:
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">Literature Review:</h4>
                  <p>
                    Analysis of research papers on forest fire prediction models revealed that
                    machine learning algorithms like Random Forests, Support Vector Machines,
                    and Neural Networks show promising results with accuracy rates of 75-90%.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Existing Systems:</h4>
                  <p>
                    Study of systems like FIRMS (Fire Information for Resource Management System),
                    Canadian Forest Fire Weather Index, and various regional prediction models
                    helped identify best practices and limitations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Data Sources:</h4>
                  <p>
                    Evaluation of satellite data (MODIS, Landsat), meteorological datasets,
                    and historical fire records to determine optimal data integration strategies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Proposed Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Cpu className="h-6 w-6 text-purple-600" />
                Proposed Methodology
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Data Collection:</strong> Gather historical fire data, satellite
                  imagery, weather parameters, and vegetation indices from multiple sources.
                </li>
                <li>
                  <strong>Data Preprocessing:</strong> Clean, normalize, and transform raw data
                  into features suitable for machine learning models.
                </li>
                <li>
                  <strong>Feature Engineering:</strong> Extract relevant features like NDVI
                  (Normalized Difference Vegetation Index), temperature anomalies, humidity
                  levels, wind patterns, and seasonal factors.
                </li>
                <li>
                  <strong>Model Selection:</strong> Implement and compare multiple ML algorithms
                  including:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Random Forest Classifier</li>
                    <li>Gradient Boosting Models (XGBoost, LightGBM)</li>
                    <li>Neural Networks (Deep Learning)</li>
                    <li>Support Vector Machines</li>
                  </ul>
                </li>
                <li>
                  <strong>Model Training:</strong> Train models using historical data with
                  cross-validation to ensure robustness.
                </li>
                <li>
                  <strong>Model Evaluation:</strong> Assess performance using metrics like
                  accuracy, precision, recall, F1-score, and ROC-AUC.
                </li>
                <li>
                  <strong>Deployment:</strong> Deploy the best-performing model through a
                  web-based interface with RESTful APIs.
                </li>
                <li>
                  <strong>Continuous Monitoring:</strong> Implement feedback loops for model
                  retraining with new data.
                </li>
              </ol>
            </CardContent>
          </Card>
        </motion.div>

        {/* Expected Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <BarChart className="h-6 w-6 text-orange-600" />
                Expected Outcomes
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>High Prediction Accuracy:</strong> Achieve 85%+ accuracy in predicting
                  forest fire risk levels.
                </li>
                <li>
                  <strong>Early Detection:</strong> Identify high-risk conditions 3-7 days in
                  advance, allowing time for preventive measures.
                </li>
                <li>
                  <strong>Comprehensive Coverage:</strong> Monitor multiple forest regions
                  simultaneously with minimal human intervention.
                </li>
                <li>
                  <strong>Actionable Insights:</strong> Provide specific recommendations for
                  risk mitigation based on predicted conditions.
                </li>
                <li>
                  <strong>Reduced Response Time:</strong> Enable faster deployment of
                  firefighting resources to high-risk areas.
                </li>
                <li>
                  <strong>Decision Support:</strong> Assist forest management authorities in
                  resource planning and policy formulation.
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tools and Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Code className="h-6 w-6 text-red-600" />
                Tools and Technologies
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Machine Learning & Data Science:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Python (NumPy, Pandas, Scikit-learn)</li>
                    <li>TensorFlow / PyTorch</li>
                    <li>XGBoost, LightGBM</li>
                    <li>Jupyter Notebooks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Frontend Development:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>React + TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Framer Motion</li>
                    <li>Leaflet / Mapbox GL JS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Backend Development:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Flask / FastAPI</li>
                    <li>RESTful APIs</li>
                    <li>PostgreSQL / MongoDB</li>
                    <li>Redis (Caching)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Data Sources & Tools:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>NASA MODIS Satellite Data</li>
                    <li>OpenWeather API</li>
                    <li>Google Earth Engine</li>
                    <li>GDAL / Rasterio</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Deployment & DevOps:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Docker</li>
                    <li>AWS / Azure / GCP</li>
                    <li>CI/CD Pipelines</li>
                    <li>Nginx</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Version Control & Collaboration:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Git & GitHub</li>
                    <li>Agile Methodology</li>
                    <li>Documentation Tools</li>
                    <li>Testing Frameworks</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Applications & Future Scope */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Globe className="h-6 w-6 text-teal-600" />
                Applications & Future Scope
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <div>
                <h4 className="font-semibold mb-3">Current Applications:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Forest department operations and resource planning</li>
                  <li>Wildlife sanctuary and national park management</li>
                  <li>Community awareness and evacuation planning</li>
                  <li>Insurance risk assessment for forest areas</li>
                  <li>Research and environmental studies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Future Enhancements:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>IoT Integration:</strong> Incorporate ground sensors and drones for
                    real-time data collection.
                  </li>
                  <li>
                    <strong>Mobile Application:</strong> Develop mobile apps for field workers
                    and forest rangers.
                  </li>
                  <li>
                    <strong>AI-Powered Recommendations:</strong> Provide specific fire prevention
                    strategies based on local conditions.
                  </li>
                  <li>
                    <strong>Climate Change Modeling:</strong> Integrate long-term climate
                    projections for future risk assessment.
                  </li>
                  <li>
                    <strong>Multi-hazard System:</strong> Extend to predict other natural
                    disasters like floods and landslides.
                  </li>
                  <li>
                    <strong>International Collaboration:</strong> Adapt the system for use in
                    different countries and ecosystems.
                  </li>
                  <li>
                    <strong>Automated Response:</strong> Integration with automated firefighting
                    systems and resource dispatch.
                  </li>
                  <li>
                    <strong>Blockchain Integration:</strong> For transparent incident reporting
                    and accountability.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
