import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { signin } from "../api/auth";
import AuthForm from "../components/UserInfoForm";
import useUserAuthStore from "../zustand/userAuthStore";

const SigninPage = () => {
  let userData = {};
  const { isSignin, userSignedIn, setToken, setUserId, setNickname } = useUserAuthStore();
  console.log(isSignin);

  const formConfigData = [{ id: 'id', name: '아이디' }, { id: 'password', name: '비밀번호' }];

  const { data, isSuccess, isError, refetch } = useQuery({
    queryKey: ["setUserAuth"],
    queryFn: () => signin(userData),
    enabled: false
  });
  if (isError) console.error(isError);

  const handleOnSumbit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    userData = {
      "id": formData.get('id'),
      "password": formData.get('password')
    }
    refetch();
  }
  //로그인이 되면 홈으로 가면 좋겠는데
  useEffect(() => {
    if (isSuccess) {
      const {accessToken, userId, nickname} = data;
      userSignedIn();
      setToken(accessToken);
      setUserId(userId);
      setNickname(nickname);
    }
  }, [isSuccess]);

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-4xl font-bold">로그인</h1>
      <div className="common-border">
        <AuthForm configData={formConfigData} submitBtnName={'로그인'} onSumbitForm={handleOnSumbit} />
      </div>
    </div>
  );
}

export default SigninPage


// const [userData, setUserData] = useState();
// const { isSignin, userSignedIn, setToken, setNickname, setUserId } = useUserAuthStore();
// console.log(isSignin);

// const formConfigData = [{ id: 'id', name: '아이디' }, { id: 'password', name: '비밀번호' }];

// const { data, isSuccess, isError, refetch } = useQuery({
//   queryKey: ["userAuth"],
//   queryFn: () => signin(userData),
//   enabled: false
// });
// if (isError) console.error(isError);
// if (isSuccess) {
//   const { accessToken, userId, nickname } = data;
//   userSignedIn()
//   setToken(accessToken);
//   setUserId(userId);
//   setNickname(nickname);
// };

// const handleOnSumbit = (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const userData = {
//     "id": formData.get('id'),
//     "password": formData.get('password')
//   }
//   setUserData(userData);
//   refetch();
// }