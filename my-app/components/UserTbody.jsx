"use client";

import React, { useState, useEffect } from 'react';
import UserTr from './UserTr';
import getPagedUsers from '@/utils/getPagedUsers';
import { useSelector } from 'react-redux';

function UserTbody({ data, onDelete }) {
    const [usersPG, setUsersPG] = useState([]);
    const st = useSelector((state) => state.paginate);

    useEffect(() => {
        const { currentPage } = getPagedUsers(data, st.page, st.limit);
        const { users } = getPagedUsers(data, currentPage, st.limit);
        setUsersPG(users);
    }, [data, st.page, st.limit]);

    return (
        <tbody className="divide-y divide-gray-200">
            {usersPG?.map((user, index) => (
                <UserTr user={user} key={index} onDelete={onDelete} />
            ))}
        </tbody>
    );
}

export default UserTbody;
