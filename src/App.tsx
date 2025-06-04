import React from 'react';
import MultiStepForm from './components/MultiStepForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-8 text-black">Multi-Step Registration Form</h1>
        <MultiStepForm />
      </div>
    </div>
  );
}

export default App;