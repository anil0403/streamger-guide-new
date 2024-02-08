import useSWR from "swr";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import { serviceAuth } from "@/lib/axios";
// import { axiosAuth } from "@/lib/axios";
import { usePaginationStore } from "@/store/usePagination";

const useServices = () => {
    const { data, error, isLoading, mutate } = useSWR(
        `/fill_contents/ott/`,
        async (url: string) => {
            try {
                const response = await serviceAuth.get(url);
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
export default useServices;
