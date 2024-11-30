import useUserAuthStore from "../../zustand/userAuthStore";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useChangeNickname from "../../hooks/useChangeNickname";

const ProfileForm = () => {
    const [fetchData, setFetchData] = useState(null);
    const { nickname, setNickname } = useUserAuthStore();
    const { data: queryData, isSuccess, refetch } = useChangeNickname(fetchData);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        setFetchData(formData);
        refetch();
    }

    useEffect(() => {
        if (isSuccess) {
            const { nickname: newNickname } = queryData;
            setNickname(newNickname);
            Swal.fire({
                text: "닉네임이 성공적으로 바뀌었습니다",
                icon: "success"
            });
        }
    }, [isSuccess]);

    return (
        <form onSubmit={handleOnSubmit} className="p-10 flex flex-col items-center gap-11">
            <div className="flex flex-col">
                <label
                    htmlFor="nickname"
                    className="text-gray-400 text-sm font-bold"
                >
                    닉네임
                </label>
                <input
                    type="text"
                    name="nickname"
                    id="nickname"
                    defaultValue={nickname}
                    className="p-1.5 text-lg common-border"
                />
            </div>
            <button className="lime-button">
                닉네임 바꾸기
            </button>
        </form>
    )
}

export default ProfileForm;