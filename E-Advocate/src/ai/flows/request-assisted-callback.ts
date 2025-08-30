
'use server';

/**
 * @fileOverview Handles the submission of the assisted service callback request form.
 *
 * - requestAssistedCallback - A function that processes the callback request.
 * - AssistedCallbackInput - The input type for the requestAssistedCallback function.
 * - AssistedCallbackOutput - The return type for the requestAssistedCallback function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AssistedCallbackInputSchema = z.object({
  name: z.string().describe('The full name of the user requesting the callback.'),
  phone: z.string().describe('The phone number of the user.'),
  email: z.string().describe('The email address of the user.'),
  plan: z.string().describe('The assisted plan the user is interested in (e.g., Silver, Gold, Platinum).'),
  message: z.string().optional().describe('An optional message from the user.'),
});
export type AssistedCallbackInput = z.infer<typeof AssistedCallbackInputSchema>;

const AssistedCallbackOutputSchema = z.object({
  success: z.boolean().describe('Whether the callback request was successfully processed.'),
  message: z.string().describe('A confirmation message to the user.'),
});
export type AssistedCallbackOutput = z.infer<typeof AssistedCallbackOutputSchema>;

export async function requestAssistedCallback(input: AssistedCallbackInput): Promise<AssistedCallbackOutput> {
  return requestAssistedCallbackFlow(input);
}


const requestAssistedCallbackFlow = ai.defineFlow(
  {
    name: 'requestAssistedCallbackFlow',
    inputSchema: AssistedCallbackInputSchema,
    outputSchema: AssistedCallbackOutputSchema,
  },
  async (input) => {
    // In a real application, you would integrate with a CRM or ticketing system here.
    // For now, we'll just log the request and return a success message.
    console.log('Received assisted service callback request:', input);

    return {
      success: true,
      message: 'Thank you! Our team will contact you within 24 hours to assist you with the subscription.',
    };
  }
);
