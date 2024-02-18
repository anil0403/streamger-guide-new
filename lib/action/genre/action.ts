"use server";
import { contentAuth } from "@/lib/axios";
import { ResourceAuth } from "@/lib/axios";
import { getErrorMessage } from "@/utils/errorMessage";
import { timeOut } from "@/utils/timeout";

export const getGenres = async () => {
  try {
    const response = await ResourceAuth.get("/fill_contents/genre", {
      timeout: timeOut,
    });
    return response.data.data;
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
