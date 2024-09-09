const table = [
    {
        id:1,
        studentname: 'Amal',
        registerno : 'R10226',
        hometown: 'Nugegoda'
    },
    {
        id:2,
        studentname: 'Vishwa',
        registerno : 'R10227',
        hometown: 'Galle'
    },
    {
        id:3,
        studentname: 'Kamal',
        registerno : 'R10228',
        hometown: 'Kandy'
    },
    {
        id:4,
        studentname: 'Naveen',
        registerno : 'R10229',
        hometown: 'Maharagama'
    }
];


const showTable=(dataSet)=>{
    const tableBody = document.querySelector('#studentTable tbody');

    const dataRows = dataSet.map(item=>{
        return `
            <tr>
                <td>${item.id}</td>
                <td>${item.studentname}</td>
                <td>${item.registerno}</td>
                <td>${item.hometown}</td>
            </tr>
        `;
    }).join('');

    console.log(dataRows);
    

    tableBody.innerHTML = dataRows;

}

showTable(table);