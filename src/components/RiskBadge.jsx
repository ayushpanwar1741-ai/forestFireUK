export function RiskBadge({ level, className = '' }) {
  const config = {
    low: {
      cssClass: 'badge-low',
      label: 'Low Risk',
    },
    moderate: {
      cssClass: 'badge-moderate',
      label: 'Moderate Risk',
    },
    high: {
      cssClass: 'badge-high',
      label: 'High Risk',
    },
    severe: {
      cssClass: 'badge-severe',
      label: 'Severe Risk',
    },
  };

  const { cssClass, label } = config[level];

  return (
    <span className={`badge ${cssClass} ${className}`}>
      {label}
    </span>
  );
}
