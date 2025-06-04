import React, { useState, useEffect } from 'react';
import { FormData, FormErrors, initialFormData } from '../types/formTypes';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import ReviewStep from './steps/ReviewStep';
import ProgressIndicator from './ProgressIndicator';

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const totalSteps = 4;

  const validateStep = (step: number): boolean => {
    let stepErrors: FormErrors = {};
    let isValid = true;

    if (step === 1) {
      if (!formData.firstName) {
        stepErrors.firstName = 'First name is required';
        isValid = false;
      }
      if (!formData.lastName) {
        stepErrors.lastName = 'Last name is required';
        isValid = false;
      }
      if (!formData.email) {
        stepErrors.email = 'Email is required';
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        stepErrors.email = 'Email is invalid';
        isValid = false;
      }
    }

    if (step === 2) {
      if (!formData.address) {
        stepErrors.address = 'Address is required';
        isValid = false;
      }
      if (!formData.city) {
        stepErrors.city = 'City is required';
        isValid = false;
      }
      if (!formData.country) {
        stepErrors.country = 'Country is required';
        isValid = false;
      }
    }

    if (step === 3) {
      if (!formData.preferredContact) {
        stepErrors.preferredContact = 'Please select a preferred contact method';
        isValid = false;
      }
    }

    setErrors(stepErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxChange = (name: string, value: string) => {
    const interests = [...formData.interests];
    
    if (interests.includes(value)) {
      const updatedInterests = interests.filter(interest => interest !== value);
      setFormData({ ...formData, interests: updatedInterests });
    } else {
      setFormData({ ...formData, interests: [...interests, value] });
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real application, you'd send this data to an API
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData(initialFormData);
      setCurrentStep(1);
      setIsSubmitting(false);
      alert('Form submitted successfully!');
    }, 1000);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne 
            formData={formData} 
            handleChange={handleChange} 
            errors={errors} 
          />
        );
      case 2:
        return (
          <StepTwo 
            formData={formData} 
            handleChange={handleChange} 
            errors={errors} 
          />
        );
      case 3:
        return (
          <StepThree 
            formData={formData} 
            handleChange={handleChange} 
            handleCheckboxChange={handleCheckboxChange}
            errors={errors} 
          />
        );
      case 4:
        return (
          <ReviewStep 
            formData={formData} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-black text-white p-4">
          <h2 className="text-xl font-semibold text-center">
            {currentStep === 4 ? 'Review Your Information' : `Step ${currentStep}`}
          </h2>
        </div>
        
        <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />

        <form onSubmit={handleSubmit} className="p-6">
          {renderStep()}

          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition-colors"
              >
                Back
              </button>
            )}
            
            {currentStep < totalSteps && (
              <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors ml-auto"
              >
                Next
              </button>
            )}

            {currentStep === totalSteps && (
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors ml-auto ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;