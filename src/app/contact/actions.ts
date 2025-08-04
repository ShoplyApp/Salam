
'use server';

import { sendContactEmail, type ContactFormData } from '@/ai/flows/send-contact-email-flow';

export async function handleFormSubmission(
  formData: ContactFormData
): Promise<{ success: boolean; message: string }> {
  return await sendContactEmail(formData);
}
