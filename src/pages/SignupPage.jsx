import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import AuthForm from "../components/UserInfoForm";

const SignupPage = () => {
  const navigate = useNavigate()
  const formConfigData = [
    { id: 'id', name: '아이디', inputType: 'text' },
    { id: 'nickName', name: '닉네임', inputType: 'text' },
    { id: 'password', name: '비밀번호', inputType: 'password' }
  ];
  const handleOnSumbit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
      "id": formData.get('id'),
      "password": formData.get('password'),
      "nickname": formData.get('nickName')
    }
    await register(userData);
    navigate('/');
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-4xl font-bold">회원가입</h1>
      <div className="common-border">
        <AuthForm configData={formConfigData} submitBtnName={'회원가입'} onSumbitForm={handleOnSumbit} />
      </div>
    </div>
  );
}

export default SignupPage