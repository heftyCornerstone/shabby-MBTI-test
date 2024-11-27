import useUserAuthStore from "../../zustand/userAuthStore";
import { updateProfile } from "../../api/auth";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const ProfileForm = () => {
    let fetchData = {}
    const { nickname, setNickname } = useUserAuthStore();

    const { data: queryData, isSuccess, isError, refetch } = useQuery({
        queryKey: ['UpdateUserInfo'],
        queryFn: () => updateProfile(fetchData),
        enabled: false
    });
    if (isError) console.error(isError);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        fetchData = new FormData(e.target);
        refetch();
    }

    useEffect(() => {
        if (isSuccess) {
            const { nickname: newNickname } = queryData;
            setNickname(newNickname);
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