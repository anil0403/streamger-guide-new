"use server";
import { contentAuth } from "@/lib/axios";
import { getErrorMessage } from "@/utils/errorMessage";
import { timeOut } from "@/utils/timeout";
export const getContents = async () => {
  try {
    const response = await contentAuth.get("/guide_app_content/?page=1", {
      timeout: timeOut,
    });
    return response.data;
  } catch (error: any) {
    console.error("getContents error", error);
    if (error.code === "ECONNABORTED") {
      // Timeout error
      return {
        error: "Request timed out. Please try again.",
      };
    } else {
      // Other errors
      return {
        error: getErrorMessage(error),
      };
    }
  }
};
