import useSWR from "swr";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
// import { axiosAuth } from "@/lib/axios";
import { usePaginationStore } from "@/store/usePagination";

const useTopRatedTvs = () => {
    const { topRatedTvs } = usePaginationStore()
    const axiosAuth = useAxiosAuth();
    const { data, error, isLoading, mutate } = useSWR(
        `/guide_app_content/?types=tv-shows&page=${topRatedTvs}&toprated=True`,
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
export default useTopRatedTvs;
