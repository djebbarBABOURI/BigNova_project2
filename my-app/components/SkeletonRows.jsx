import React from 'react';

const SkeletonRows = () => {
    return (
        <tbody className="divide-y divide-gray-200">
            <tr>
                <td className="whitespace-nowrap px-8 py-6 bg-gray-200 animate-pulse"></td>
                <td className="whitespace-nowrap px-8 py-6 bg-gray-200 animate-pulse"></td>
                <td className="whitespace-nowrap px-8 py-6 bg-gray-200 animate-pulse"></td>
                <td className="whitespace-nowrap px-8 py-6 bg-gray-200 animate-pulse"></td>
                <td className="whitespace-nowrap px-8 py-6 bg-gray-200 animate-pulse"></td>
                <td className="whitespace-nowrap px-8 py-6 bg-gray-200 animate-pulse"></td>
            </tr>
        </tbody>
    );
};

export default SkeletonRows;
