import React from 'react';
import { FormData } from '../../types/formTypes';

interface ReviewStepProps {
  formData: FormData;
}

const ReviewStep: React.FC<ReviewStepProps> = ({ formData }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-800">Review Your Information</h3>
      
      <div className="bg-gray-50 p-4 rounded-md">
        <h4 className="text-sm font-medium text-black mb-2 border-b border-gray-200 pb-2">Basic Information</h4>
        <div className="grid grid-cols-1 gap-y-2">
          <div>
            <span className="text-xs text-gray-500">First Name</span>
            <p className="text-sm">{formData.firstName}</p>
          </div>
          <div>
            <span className="text-xs text-gray-500">Last Name</span>
            <p className="text-sm">{formData.lastName}</p>
          </div>
          <div>
            <span className="text-xs text-gray-500">Email</span>
            <p className="text-sm">{formData.email}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-md">
        <h4 className="text-sm font-medium text-black mb-2 border-b border-gray-200 pb-2">Address Details</h4>
        <div className="grid grid-cols-1 gap-y-2">
          <div>
            <span className="text-xs text-gray-500">Address</span>
            <p className="text-sm">{formData.address}</p>
          </div>
          <div>
            <span className="text-xs text-gray-500">City</span>
            <p className="text-sm">{formData.city}</p>
          </div>
          <div>
            <span className="text-xs text-gray-500">Country</span>
            <p className="text-sm">{formData.country}</p>
          </div>
          <div>
            <span className="text-xs text-gray-500">Postal Code</span>
            <p className="text-sm">{formData.postalCode || 'Not provided'}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-md">
        <h4 className="text-sm font-medium text-black mb-2 border-b border-gray-200 pb-2">Preferences</h4>
        <div className="grid grid-cols-1 gap-y-2">
          <div>
            <span className="text-xs text-gray-500">Receive Updates</span>
            <p className="text-sm">{formData.receiveUpdates ? 'Yes' : 'No'}</p>
          </div>
          <div>
            <span className="text-xs text-gray-500">Preferred Contact Method</span>
            <p className="text-sm capitalize">{formData.preferredContact}</p>
          </div>
          <div>
            <span className="text-xs text-gray-500">Interests</span>
            {formData.interests.length > 0 ? (
              <p className="text-sm">{formData.interests.join(', ')}</p>
            ) : (
              <p className="text-sm text-gray-500">No interests selected</p>
            )}
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-500 italic">
        Please review the information above before submitting the form.
      </p>
    </div>
  );
};

export default ReviewStep;