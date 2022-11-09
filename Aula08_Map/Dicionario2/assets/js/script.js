const dic = new Dictionary();
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');

function add() {
    if (name.value!=null && email!=null && tel!=null) {
        dic.set(name.value, email.value, tel.value);
    } else {
        swal({
            title: "Nenhum valor recebido!",
            text: "Adicione um legume ou verdura a lista!",
            icon: "error",
        });
    }
}

function hasKey() {
    console.log(dic.hasKey(name.value));
}
