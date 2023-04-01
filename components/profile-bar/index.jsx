"use client";
import {useSelector} from 'react-redux';
import {selectUser} from "@/stores/userStore";
const ProfileBar = () => {
    const user = useSelector(selectUser)
    return (
        <div>
            Active user: <b>{user.name}</b>
        </div>
    );
};

export default ProfileBar;
