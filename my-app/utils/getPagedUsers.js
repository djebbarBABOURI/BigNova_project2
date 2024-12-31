export default function (users, page, limit) {
    // Calcul des indices de début et de fin pour la pagination
    const start = (page - 1) * limit;
    const end = start + parseInt(limit);

    // Récupération des utilisateurs dans la plage définie
    const pagedUsers = users.slice(start, end);
    const totalUsers = users.length;

    // Retourner les informations paginées
    return {
        users: pagedUsers,
        total: totalUsers,
        totalPages: Math.ceil(totalUsers / limit),
        currentPage: page,
    };
}