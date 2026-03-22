"use server";

import { prisma } from "@/lib/prisma";

export async function joinWaitlist(formData: { name: string; email: string; city: string }) {
  try {
    const entry = await prisma.waitlist.create({
      data: {
        name: formData.name,
        email: formData.email,
        city: formData.city,
      },
    });
    return { success: true, data: entry };
  } catch (error: any) {
    if (error.code === 'P2002') {
      return { success: false, error: "This email is already on the waitlist!" };
    }
    console.error("Waitlist error:", error);
    return { success: false, error: "Something went wrong. Please try again later." };
  }
}
