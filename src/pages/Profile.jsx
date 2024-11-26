import ProfileForm from "../components/profile/ProfileForm";

const Profile = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-4xl font-bold">프로필</h1>
      <div className="common-border">
        <ProfileForm />
      </div>
    </div>
  );
};

export default Profile;
