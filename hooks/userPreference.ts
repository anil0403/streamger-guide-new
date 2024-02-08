import useSWR from "swr";

import useAxiosAuth from "@/lib/hooks/user/useAxiosAuth";

const usePreference = () => {
  const axios = useAxiosAuth();
  // const axiosAuth = useAxiosAuth();
  const { data, error, isLoading, mutate } = useSWR(
    `/preference/`,
    async (url: string) => {
      try {
        const response = await axios.get(url);
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
export default usePreference;
