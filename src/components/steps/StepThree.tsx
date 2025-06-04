import React from 'react';
import { FormData, FormErrors } from '../../types/formTypes';

interface StepThreeProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (name: string, value: string) => void;
  errors: FormErrors;
}

const StepThree: React.FC<StepThreeProps> = ({ 
  formData, 
  handleChange, 
  handleCheckboxChange,
  errors 
}) => {
  const interestOptions = [
    'Technology',
    'Sports',
    'Music',
    'Art',
    'Travel',
    'Food',
    'Fashion',
    'Science'
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-800">Preferences</h3>
      
      <div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="receiveUpdates"
            name="receiveUpdates"
            checked={formData.receiveUpdates}
            onChange={handleChange}
            className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
          />
          <label htmlFor="receiveUpdates" className="ml-2 block text-sm text-gray-700">
            Receive updates about our products and services
          </label>
        </div>
      </div>

      <div>
        <span className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Contact Method
        </span>
        
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="contactEmail"
              name="preferredContact"
              value="email"
              checked={formData.preferredContact === 'email'}
              onChange={handleChange}
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
            />
            <label htmlFor="contactEmail" className="ml-2 block text-sm text-gray-700">
              Email
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="radio"
              id="contactPhone"
              name="preferredContact"
              value="phone"
              checked={formData.preferredContact === 'phone'}
              onChange={handleChange}
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
            />
            <label htmlFor="contactPhone" className="ml-2 block text-sm text-gray-700">
              Phone
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="radio"
              id="contactMail"
              name="preferredContact"
              value="mail"
              checked={formData.preferredContact === 'mail'}
              onChange={handleChange}
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
            />
            <label htmlFor="contactMail" className="ml-2 block text-sm text-gray-700">
              Mail
            </label>
          </div>
        </div>
        
        {errors.preferredContact && (
          <p className="mt-1 text-sm text-red-600">{errors.preferredContact}</p>
        )}
      </div>

      <div>
        <span className="block text-sm font-medium text-gray-700 mb-2">
          Interests (Select all that apply)
        </span>
        
        <div className="grid grid-cols-2 gap-2">
          {interestOptions.map((interest) => (
            <div key={interest} className="flex items-center">
              <input
                type="checkbox"
                id={`interest_${interest}`}
                checked={formData.interests.includes(interest)}
                onChange={() => handleCheckboxChange('interests', interest)}
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
              <label htmlFor={`interest_${interest}`} className="ml-2 block text-sm text-gray-700">
                {interest}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepThree;