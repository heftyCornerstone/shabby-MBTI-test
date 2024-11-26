import { useNavigate } from "react-router-dom";
import HomePrologue from "../components/home/HomePrologue";
import useUserAuthStore from "../zustand/userAuthStore";

const Home = () => {
  const {isSignin} = useUserAuthStore();
  const navigate = useNavigate();
  const handleOnStartTestClick = () => {
    if(isSignin) return navigate('/test');
    window.alert('로그인 페이지로 이동합니다');
    navigate('/signin');
  }
  
  return (
    <div className='flex flex-col items-center gap-14'>
      <h1 className="text-4xl font-bold">간이 MBTI 검사</h1>
      <HomePrologue />
      <button
        className='lime-button'
        onClick={handleOnStartTestClick}
      >
        테스트하러 가기
      </button>
    </div>
  );
};

export default Home;
