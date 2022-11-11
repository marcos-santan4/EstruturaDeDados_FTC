
const dic = new Dictionary();
const val = new valuePair();
const nome = document.querySelector('#name');
const tel = document.querySelector('#tel');
const res = document.querySelector('#res');
const tabela = document.querySelector('#tabela');
const contador = tabela.childElementCount;

function add() {
    if (nome.value=='' || tel.value=='') {
        alert(`Pending data`);
    } else {
        if (dic.hasKey(nome.value)) {
            console.log('Existing Contact');
        } else {
            dic.set(nome.value, tel.value);
            console.log('Saved Contact');
            console.log(dic.get(nome.value))
            info();
        }
    }
}

function hasKey() {
    console.log(dic.hasKey(nome.value));
}

function info () {
        res.style.display = 'none';
        tabela.style.display = 'block';
        let coluna1 = document.createElement('td');
        let coluna2 = document.createElement('td');
        let linha = document.createElement('tr');
        dic.forEach((k,v)=>{
            coluna1.innerHTML = `${k}`;
            coluna2.innerHTML = `${v}`;
        });
    
        linha.appendChild(coluna1);
        linha.appendChild(coluna2);
        tabela.appendChild(linha);
}

function action() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'block';
    let blur = document.querySelector('.blur');
    blur.style.display = 'block';
    if(dic.isEmpty() == true) {
        let tabela = document.querySelector('#tabela');
        tabela.style.display = 'none';
        res.innerHTML = "Empyt List";
        res.style.textAlign = 'center';
        res.style.fontSize = '25px';  
    }
}

function closeWindow() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';
    let blur = document.querySelector('.blur');
    blur.style.display = 'none';
}