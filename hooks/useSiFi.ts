import useSWR from "swr";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import { usePaginationStore } from "@/store/usePagination";

const useSiFi = () => {
    const { sifi } = usePaginationStore()
    const axiosAuth = useAxiosAuth();
    const { data, error, isLoading, mutate } = useSWR(
        `/guide_app_content/?genre=science-fiction&page=${sifi}`,
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
export default useSiFi;
