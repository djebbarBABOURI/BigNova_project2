"use client";

import { useState } from "react";

const ConfirmDelete = ({ onDelete }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleDelete = async () => {
        await onDelete();
        closeModal();
    };

    return (
        <>
            <a
                onClick={openModal}
                href="#"
                className="inline-block rounded bg-red-500 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
            >
                Delete
            </a>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="rounded-lg shadow-lg max-w-sm w-full p-6 bg-white">
                        <h2 className="text-lg font-bold text-center">Confirmer la suppression</h2>
                        <p className="mt-2 text-sm text-gray-500 text-center p-2">
                            Êtes-vous sûr de vouloir supprimer cet élément ?<br /> Cette action est irréversible.
                        </p>
                        <div className="mt-6 flex justify-end space-x-2">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                            >
                                Annuler
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                            >
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ConfirmDelete;
