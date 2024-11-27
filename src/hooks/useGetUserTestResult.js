import { useQuery } from "@tanstack/react-query";
import { getUserTestResult } from "../api/testResult";

const useGetUserTestResult = (userId) => {
    const { data, isPending: isLoading, isError: isError } = useQuery({
        queryKey: ["getUserResult"],
        queryFn: () => getUserTestResult(userId),
    });
    if (isError) console.error(isError);

    return {data, isLoading}
}

export default useGetUserTestResult