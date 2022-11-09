const dic = new Dictionary();
const val = new valuePair();
const nome = document.querySelector('#name');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const res = document.querySelector('#res');
const tabela = document.querySelector('#tabela');
const contador = tabela.childElementCount;

function add() {
    if (nome.value=='' || email.value=='' && tel.value=='') {
        alert(`Pending data`);
    } else {
        if (dic.hasKey(nome.value)) {
            console.log('Existing Contact');
        } else {
            dic.set(nome.value, email.value, tel.value);
            console.log('Saved Contact');
            console.log(dic.get(nome.value))
            info();
            
        }
    }
}

function remove() {
    
}

function hasKey() {
    console.log(dic.hasKey(nome.value));
}

function info () {
    if(dic.size() == 0) {
        let info = document.createElement('label');
        info.innerHTML = 'Não há nenhum contato';
    } else {
        let coluna1 = document.createElement('td');
        let coluna2 = document.createElement('td');
        let coluna3 = document.createElement('td');
        let linha = document.createElement('tr');
        dic.forEach((k,v,z)=>{
            coluna1.innerHTML = `${k}`;
            coluna2.innerHTML = `${v}`;
            coluna3.innerHTML = `${z}`;
        });
    
        linha.appendChild(coluna1);
        linha.appendChild(coluna2);
        linha.appendChild(coluna3);
        tabela.appendChild(linha);
    }
}

function action() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'block';
    let blur = document.querySelector('.blur');
    blur.style.display = 'block';
}

function closeWindow() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';
    let blur = document.querySelector('.blur');
    blur.style.display = 'none';
}