import useSWR from "swr";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
// import { axiosAuth } from "@/lib/axios";

const useContentEach = (id: string, types: string) => {
    const axiosAuth = useAxiosAuth();
    console.log("id = ", id)
    const { data, error, isLoading, mutate } = useSWR(
        `guide_app_content/?pk=${id}`,
        async (url: string) => {
            try {
                const response = await axiosAuth.get(url);
                return response.data.data[0];
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
    );
    return {
        data,
        error,
        isLoading,
        mutate,
    };
};
export default useContentEach;
