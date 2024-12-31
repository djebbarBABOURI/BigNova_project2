import React from 'react';
import ConfirmDelete from './ConfirmDelete';

function UserTr({ user, onDelete }) {
    return (
        <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">{user.name}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{user.email}</td>
            {/* <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{user.role}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{user.salaire}</td> */}

            <td className="whitespace-nowrap px-4 py-2 text-center">
                <ConfirmDelete onDelete={() => onDelete(user.id)} />
            </td>
        </tr>
    );
}

export default UserTr;
