import useDeleteUserResult from "./useDeleteUserResult";
import useGetUserTestResult from "./useGetUserTestResult";
import useMutateVisibility from "./useMutateVisibility";

const useResultManager = (userId) => {
    const { data, isLoading } = useGetUserTestResult(userId);
    const petchVisibility = useMutateVisibility();
    const deleteResult = useDeleteUserResult();
    
  return {data, isLoading, petchVisibility, deleteResult}
}

export default useResultManager