// Type definitions for VanSuraksha application
// These are kept as JSDoc comments for documentation purposes

/**
 * @typedef {Object} RiskData
 * @property {string} id
 * @property {string} region
 * @property {number} latitude
 * @property {number} longitude
 * @property {'low'|'moderate'|'high'|'severe'} riskLevel
 * @property {number} temperature
 * @property {number} humidity
 * @property {number} windSpeed
 * @property {number} rainfall
 * @property {string} predictedDate
 * @property {number} confidence
 */

/**
 * @typedef {Object} PredictionResult
 * @property {'low'|'moderate'|'high'|'severe'} riskLevel
 * @property {number} confidence
 * @property {Object} factors
 * @property {number} factors.temperature
 * @property {number} factors.humidity
 * @property {number} factors.windSpeed
 * @property {number} factors.vegetation
 * @property {string} recommendation
 */

/**
 * @typedef {Object} DashboardStats
 * @property {number} totalPredictions
 * @property {number} highRiskZones
 * @property {number} averageConfidence
 * @property {number} regionsMonitored
 */

export {};
