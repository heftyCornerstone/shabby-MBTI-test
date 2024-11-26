import { Link } from "react-router-dom"

const SignedNavContents = () => {
  return (
    <div className="flex items-center justify-end w-11/12 gap-x-10">
      <Link to='/' className="nav-link">홈</Link>
      <Link to='/profile' className="nav-link">프로필</Link>
      <Link to='results' className="nav-link">테스트 결과</Link>
    </div>
  )
}

const NotSignedNavContents = () => {
  return (
    <div className="flex items-center justify-end w-11/12 gap-x-10">
      <Link to='/' className="nav-link">홈</Link>
      <Link to='signin' className="nav-link">로그인</Link>
    </div>
  )
}

const Navbar = () => {
  const isSignin = true;
  return (
    <nav className="flex items-center bg-slate-300 h-14">
      {
        (isSignin) ? (
          <SignedNavContents />
        ) : (
          <NotSignedNavContents />
        )
      }
    </nav>
  )
}

export default Navbar