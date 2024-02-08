import useSWR from "swr";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
// import { axiosAuth } from "@/lib/axios";
import { usePaginationStore } from "@/store/usePagination";

const useWatchList = () => {
    const { action } = usePaginationStore()
    const axiosAuth = useAxiosAuth();
    const { data, error, isLoading, mutate } = useSWR(
        `/guide_user_interaction/watchlist`,
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
export default useWatchList;
