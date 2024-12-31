"use client";

import React, { useState, useEffect, Suspense } from 'react';
import UserTbody from './UserTbody';
import SkeletonRows from './SkeletonRows';
import Pagination from './Pagination';

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache',
    });
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
}

function Table() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const refreshUsers = async () => {
        try {
            setLoading(true);
            const users = await fetchUsers();
            setData(users);
        } catch (error) {
            console.error('Erreur lors du rafraîchissement des utilisateurs:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        refreshUsers();
    }, []);

    const handleDeleteUser = async (userId) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${userId}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Échec de la suppression');
            console.log('Utilisateur supprimé avec succès', userId);
            setData((prev) => prev.filter((user) => user.id !== userId));

        } catch (error) {
            console.error('Erreur lors de la suppression de l\'utilisateur:', error);
        }
    };


    return (
        <div className="rounded-lg border border-gray-200">
            <div className="overflow-auto rounded-t-lg h-[400px]">
                <table className="relative min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
                    <thead>
                        <tr className='bg-slate-200'>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nom</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Actions</th>
                        </tr>
                    </thead>

                    <Suspense fallback={<SkeletonRows />}>
                        <UserTbody data={data} onDelete={handleDeleteUser} />
                    </Suspense>
                </table>
            </div>
            <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
                <Pagination data={data} />
            </div>
        </div>
    );
}

export default Table;
