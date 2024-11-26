import { getTestResults } from "../api/testResult";
import { useQuery } from "@tanstack/react-query";

const useGetTestResults = () => {
    const { data: testResultsData, isPending, isError } = useQuery({
        queryKey: ['getResults'],
        queryFn: () => getTestResults(),
    });
    if (isError) console.error(isError);

    return { testResultsData, isLoading: isPending }
}

export default useGetTestResults;