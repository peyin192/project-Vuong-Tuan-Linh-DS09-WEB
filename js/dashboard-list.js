const users = [
    { code: "TR001", name: "Leanne Graham", email: "Sincere@april.biz", role: "ADMIN", birthday: "31/01/1995", status: "Active" },
    { code: "TR002", name: "Ervin Howell", email: "Shanna@melis.tv", role: "USER", birthday: "25/10/1985", status: "Deactive" },
    { code: "TR003", name: "Clementine Bauch", email: "Julianne@kory.org", role: "USER", birthday: "29/10/1995", status: "Active" },
    { code: "TR004", name: "Patricia Lebsack", email: "Lucio@annie.ca", role: "USER", birthday: "15/07/1995", status: "Deactive" },
    { code: "TR005", name: "Kurtis Weissnat", email: "Telly.Hger@billy.biz", role: "ADMIN", birthday: "14/09/1999", status: "Deactive" },
];

let currentPage = 1;
const itemsPerPage = 3;

function renderTable() {
    const tbody = document.getElementById('userTable');
    tbody.innerHTML = '';

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedUsers = users.slice(start, end);

    paginatedUsers.forEach(user => {
        tbody.innerHTML += `
            <tr>
                <td>${user.code}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td>${user.birthday}</td>
                <td class="${user.status === 'Active' ? 'status-active' : 'status-deactive'}">
                    <i class="fa-solid fa-circle ${user.status === 'Active' ? 'text-green' : 'text-red'}"></i> ${user.status}
                </td>
                <td>
                    <button class="icon-btn"><i class="fa-solid fa-trash"></i></button>
                    <button class="icon-btn"><i class="fa-solid fa-pen"></i></button>
                </td>
            </tr>
        `;
    });
}

function renderPagination() {
    const totalPages = Math.ceil(users.length / itemsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `<button onclick="gotoPage(${i})" class="${i === currentPage ? 'active' : ''}">${i}</button>`;
    }
}

function gotoPage(page) {
    currentPage = page;
    renderTable();
    renderPagination();
}

function searchUser() {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    if (keyword.trim() === "") return renderTable();

    const tbody = document.getElementById('userTable');
    tbody.innerHTML = '';

    const result = users.filter(u => u.name.toLowerCase().includes(keyword));
    result.forEach(user => {
        tbody.innerHTML += `
            <tr>
                <td>${user.code}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td>${user.birthday}</td>
                <td class="${user.status === 'Active' ? 'status-active' : 'status-deactive'}">
                    <i class="fa-solid fa-circle ${user.status === 'Active' ? 'text-green' : 'text-red'}"></i> ${user.status}
                </td>
                <td>
                    <button class="icon-btn"><i class="fa-solid fa-trash"></i></button>
                    <button class="icon-btn"><i class="fa-solid fa-pen"></i></button>
                </td>
            </tr>
        `;
    });
}

renderTable();
renderPagination();
