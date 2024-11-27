import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTestResult } from "../api/testResult";

const useDeleteUserResult = () => {
    const queryClient = useQueryClient();

    const { mutate: deleteResult } = useMutation({
        mutationFn: deleteTestResult,
        onSuccess: () => {
            queryClient.invalidateQueries(["getUserResult"]);
        },
    });

    return deleteResult;
}

export default useDeleteUserResult