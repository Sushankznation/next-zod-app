import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmails";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVrification(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    return { success: true, message: "Email sent successfully" };
    await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['delivered@resend.dev'],
        subject: 'Hello world',
        react: VerificationEmail({ username: 'John',otp: '123' }),
      });
  } catch (error) {
    console.log("Error while sending verification email", error);
    return {
      success: false,
      message: "Error while sending verification email",
    };
  }
}
