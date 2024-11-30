import { useQuery } from "@tanstack/react-query";
import { updateProfile } from "../api/auth";

const useChangeNickname = (fetchData) => {
    const { data, isSuccess, isError, refetch } = useQuery({
        queryKey: ['UpdateUserInfo', fetchData],
        queryFn: ({ queryKey }) => {
            const [, fetchData] = queryKey;
            return updateProfile(fetchData);
        },
        enabled: !!fetchData,
    });
    if (isError) console.error(isError);

    return { data, isSuccess, refetch }
}

export default useChangeNickname