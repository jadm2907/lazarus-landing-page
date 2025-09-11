import React from 'react';

const BrainBackground = ({ className = '' }) => {
  return (
    <div className="brain-container">
      <svg
        viewBox="0 0 300 250"
        className={`brain-background ${className}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M40 125 C40 70, 70 30, 120 40 C135 20, 150 25, 145 50 C160 60, 155 80, 150 90 C160 105, 150 125, 140 135 C150 150, 135 170, 115 165 C95 180, 65 170, 50 145 C35 135, 40 125, 40 125"
          fill="none"
          stroke="rgba(248, 249, 244, 0.25)"
          strokeWidth="3"
        />
        <path
          d="M260 125 C260 70, 230 30, 180 40 C165 20, 150 25, 155 50 C140 60, 145 80, 150 90 C140 105, 150 125, 160 135 C150 150, 165 170, 185 165 C205 180, 235 170, 250 145 C265 135, 260 125, 260 125"
          fill="none"
          stroke="rgba(248, 249, 244, 0.25)"
          strokeWidth="3"
        />
        <path
          d="M120 40 C130 35, 140 35, 150 40 C155 45, 150 55, 145 50 C140 45, 135 45, 130 50 C125 55, 120 50, 120 40"
          fill="none"
          stroke="rgba(168, 213, 213, 0.2)"
          strokeWidth="2"
        />
        <path
          d="M50 110 C60 105, 70 110, 75 120 C70 130, 60 125, 55 115"
          fill="none"
          stroke="rgba(168, 213, 213, 0.2)"
          strokeWidth="2"
        />
        <path
          d="M250 110 C240 105, 230 110, 225 120 C230 130, 240 125, 245 115"
          fill="none"
          stroke="rgba(168, 213, 213, 0.2)"
          strokeWidth="2"
        />
        <g stroke="rgba(168, 213, 213, 0.15)" strokeWidth="1.5" fill="none">
          <path d="M145 50 Q150 70, 155 50" />
          <path d="M145 90 Q150 110, 155 90" />
          <path d="M140 135 Q150 145, 160 135" />
          <path d="M120 80 Q135 85, 150 80 Q165 85, 180 80" />
          <path d="M110 100 Q125 105, 150 100 Q175 105, 190 100" />
          <path d="M130 120 Q145 125, 150 120 Q155 125, 170 120" />
        </g>
        <g fill="rgba(248, 249, 244, 0.3)">
          <circle cx="145" cy="50" r="2" />
          <circle cx="155" cy="50" r="2" />
          <circle cx="145" cy="90" r="2" />
          <circle cx="155" cy="90" r="2" />
          <circle cx="140" cy="135" r="2" />
          <circle cx="160" cy="135" r="2" />
          <circle cx="120" cy="80" r="1.5" />
          <circle cx="180" cy="80" r="1.5" />
          <circle cx="110" cy="100" r="1.5" />
          <circle cx="190" cy="100" r="1.5" />
          <circle cx="130" cy="120" r="1.5" />
          <circle cx="170" cy="120" r="1.5" />
        </g>
      </svg>
    </div>
  );
};

export default BrainBackground;