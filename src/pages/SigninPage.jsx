import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { signin } from "../api/auth";
import AuthForm from "../components/UserInfoForm";
import useUserAuthStore from "../zustand/userAuthStore";
import { Link, useNavigate } from "react-router-dom";

const SigninPage = () => {
  const navigate = useNavigate();
  let userData = {};
  const { userSignedIn, setToken, setUserId, setNickname } = useUserAuthStore();

  const formConfigData = [
    { id: 'id', name: '아이디', inputType: 'text' },
    { id: 'password', name: '비밀번호', inputType: 'password' }
  ];

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

  useEffect(() => {
    if (isSuccess) {
      const { accessToken, userId, nickname } = data;
      userSignedIn();
      setToken(accessToken);
      setUserId(userId);
      setNickname(nickname);
      navigate('/');
    }
  }, [isSuccess]);

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-4xl font-bold">로그인</h1>
      <div className="common-border">
        <AuthForm configData={formConfigData} submitBtnName={'로그인'} onSumbitForm={handleOnSumbit} />
      </div>
      <Link to='/signup' className="underline text-sky-600">아직 회원이 아니신가요?</Link>
    </div>
  );
}

export default SigninPage