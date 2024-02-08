import useSWR from "swr";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
// import { axiosAuth } from "@/lib/axios";
import { usePaginationStore } from "@/store/usePagination";

const useTopRatedMovies = () => {
    const { topRatedMovie } = usePaginationStore()
    const axiosAuth = useAxiosAuth();
    const { data, error, isLoading, mutate } = useSWR(
        `/guide_app_content/?types=movies&page=${topRatedMovie}&toprated=True`,
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
export default useTopRatedMovies;
