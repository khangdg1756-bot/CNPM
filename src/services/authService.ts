// API service for authentication endpoints

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

interface ForgotPasswordRequest {
  email: string;
  role: 'candidate' | 'recruiter' | 'admin';
}

interface ForgotPasswordResponse {
  success: boolean;
  message: string;
}

interface ResetPasswordRequest {
  token: string;
  newPassword: string;
}

interface ResetPasswordResponse {
  success: boolean;
  message: string;
}

/**
 * Request password reset for a user
 * @param email - User email
 * @param role - User role
 * @returns Promise with success status and message
 */
export const forgotPassword = async (
  email: string,
  role: 'candidate' | 'recruiter' | 'admin'
): Promise<ForgotPasswordResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        role,
      } as ForgotPasswordRequest),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send reset password email');
    }

    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Network error occurred'
    );
  }
};

/**
 * Reset password with token
 * @param token - Reset token from email
 * @param newPassword - New password
 * @returns Promise with success status and message
 */
export const resetPassword = async (
  token: string,
  newPassword: string
): Promise<ResetPasswordResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
        newPassword,
      } as ResetPasswordRequest),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to reset password');
    }

    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Network error occurred'
    );
  }
};
