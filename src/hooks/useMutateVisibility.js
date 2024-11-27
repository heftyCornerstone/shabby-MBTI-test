import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTestResultVisibility } from '../api/testResult';

const useMutateVisibility = () => {
    const queryClient = useQueryClient();

    const { mutate: petchVisibility } = useMutation({
        mutationFn: updateTestResultVisibility,
        onSuccess: () => {
            queryClient.invalidateQueries(["getUserResult"]);
        },
    });

    return petchVisibility;
}

export default useMutateVisibility