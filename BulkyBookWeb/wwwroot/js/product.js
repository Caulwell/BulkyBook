var datatable;

$(document).ready(() => {
    loadDataTable();
});

const loadDataTable = () => {
    dataTable = $("#tblData").DataTable({
        "ajax": {
            "url":"/Admin/Product/GetAll"
        },
        "columns": [
            { "data": "title", "width": "15%" },
            { "data": "isbn", "width": "15%" },
            { "data": "price", "width": "15%" },
            { "data": "author", "width": "15%" },
            { "data": "category.name", "width": "15%" },
            {
                "data": "id",
                "render": data => {
                    return `
                        <div class="w-75 btn-group" role="group">
                            <a class="btn btn-primary mx-2" href="/Admin/Product/Upsert?id=${data}"><i class="bi bi-pencil-square"></i>Edit</a>
                            <a class="btn btn-danger mx-2" href="/Admin/Product/Delete?id=${data}"><i class="bi bi-trash-fill"></i>Delete</a>
                        </div>
                    `;
                },
                "width": "15%"
            }


        ]
    });
};