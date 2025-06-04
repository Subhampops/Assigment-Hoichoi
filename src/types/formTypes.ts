export interface FormData {
  // Step 1: Basic Information
  firstName: string;
  lastName: string;
  email: string;
  
  // Step 2: Address Details
  address: string;
  city: string;
  country: string;
  postalCode: string;
  
  // Step 3: Preferences
  receiveUpdates: boolean;
  preferredContact: 'email' | 'phone' | 'mail';
  interests: string[];
}

export type FormErrors = {
  [K in keyof FormData]?: string;
};

export const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  country: '',
  postalCode: '',
  receiveUpdates: false,
  preferredContact: 'email',
  interests: []
};