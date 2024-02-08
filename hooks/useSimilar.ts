import useSWR from "swr";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
// import { axiosAuth } from "@/lib/axios";

const useSimilar = (genre: string) => {
    const axiosAuth = useAxiosAuth();
    const { data, error, isLoading, mutate } = useSWR(
        `guide_app_content/?genre=${genre}`,
        async (url: string) => {
            try {
                const response = await axiosAuth.get(url);
                return response.data.data;
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
export default useSimilar;
