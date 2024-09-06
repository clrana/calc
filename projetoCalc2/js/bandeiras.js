function fetchBandeiras() {
    fetch('http://localhost:8000/bandeiras')
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById('bandeirasList');
            list.innerHTML = '<ul class="list-group border border-danger">';
            data.bandeiras.forEach(bandeira => {
                list.innerHTML += `
                    <li class="list-group-item m-2 p-2 border-bottom">
                        <div class="row d-flex justify-content-between">
                            <div class="col"> <strong>${bandeira.nome}</strong> - R$ ${bandeira.tarifa}</div>
                            <div class="col"> <button class="btn btn-info btn-sm float-end ms-2" onclick="showEditForm(${bandeira.id}, '${bandeira.nome}', ${bandeira.tarifa})">Editar</button></div>
                            <div class="col"> <button class="btn btn-danger btn-sm float-end" onclick="deleteBandeira(${bandeira.id})">Deletar</button></div>
                        </div>
                    </li>`;
            });
            list.innerHTML += '</ul>';
        })
        .catch(error => console.error('Erro ao buscar bandeiras:', error));
}