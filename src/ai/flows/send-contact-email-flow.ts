'use server';
/**
 * @fileOverview A flow for sending a contact email.
 *
 * - sendContactEmail - A function that handles sending the contact form data via email.
 * - ContactFormSchema - The Zod schema for the contact form data.
 * - ContactFormData - The type for the contact form data.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import * as nodemailer from 'nodemailer';

export const ContactFormSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Full name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().optional(),
  nationality: z.string().min(2, {
    message: 'Nationality must be at least 2 characters.',
  }),
  major: z.string().min(2, {
    message: 'Major must be at least 2 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

const sendEmailTool = ai.defineTool(
  {
    name: 'sendEmail',
    description: 'Sends an email.',
    inputSchema: z.object({
      to: z.string(),
      subject: z.string(),
      html: z.string(),
      text: z.string(),
    }),
    outputSchema: z.void(),
  },
  async (input) => {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: (process.env.SMTP_SECURE || 'false') === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: input.to,
      subject: input.subject,
      text: input.text,
      html: input.html,
    });
  }
);


const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: ContactFormSchema,
    outputSchema: z.object({
        success: z.boolean(),
        message: z.string(),
    }),
  },
  async (formData) => {
    try {
        const to = "yousifmanhal112233@gmail.com";
        const subject = `New Contact Form Submission from ${formData.fullName}`;
        const text = `
    New Contact Form Submission:
    
    Full Name: ${formData.fullName}
    Email: ${formData.email}
    Phone: ${formData.phone || 'Not provided'}
    Nationality: ${formData.nationality}
    Major/Field of Interest: ${formData.major}
    
    Message:
    ${formData.message}
        `;
        const html = `
    <h3>New Contact Form Submission</h3>
    <p><strong>Full Name:</strong> ${formData.fullName}</p>
    <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
    <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
    <p><strong>Nationality:</strong> ${formData.nationality}</p>
    <p><strong>Major/Field of Interest:</strong> ${formData.major}</p>
    <h4>Message:</h4>
    <p>${formData.message.replace(/\n/g, '<br>')}</p>
        `;

      await sendEmailTool({ to, subject, html, text });

      return { success: true, message: 'Email sent successfully.' };
    } catch (error) {
      console.error('Error sending email:', error);
      return { success: false, message: 'Failed to send email.' };
    }
  }
);

export async function sendContactEmail(
  input: ContactFormData
): Promise<{ success: boolean, message: string }> {
  return await sendContactEmailFlow(input);
}