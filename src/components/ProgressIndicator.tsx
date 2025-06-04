import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="w-full px-6 py-4 bg-gray-50">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div 
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                i + 1 === currentStep 
                  ? 'border-red-600 bg-red-600 text-white' 
                  : i + 1 < currentStep 
                    ? 'border-black bg-black text-white' 
                    : 'border-gray-300 bg-white text-gray-500'
              }`}
            >
              <span className="text-sm font-medium">{i + 1}</span>
            </div>
            {i < totalSteps - 1 && (
              <div className="w-full flex-1 h-1 bg-gray-200 my-2 hidden sm:block">
                <div 
                  className={`h-full ${i + 1 < currentStep ? 'bg-black' : 'bg-gray-200'}`} 
                  style={{ width: i + 1 < currentStep ? '100%' : '0%' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;