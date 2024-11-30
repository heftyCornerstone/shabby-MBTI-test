import { useQuery } from "@tanstack/react-query";
import { signin } from "../api/auth";

const useSignin = (userData) => {
    const { data, isSuccess, isError, refetch } = useQuery({
    queryKey: ["setUserAuth", userData],
    queryFn: ({ queryKey }) => {
      const [, userData] = queryKey;

      return signin(userData)
    },
    enabled: !!userData
  });
  if (isError) console.error(isError);
  
  return { data, isSuccess, refetch }
}

export default useSignin