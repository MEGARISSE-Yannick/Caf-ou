const display = document.getElementById('display');

const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const edit = document.getElementById('edit');
const reset = document.getElementById('reset');
const comecar = document.getElementById('comecar');

var cronometroSeg;

var horaAtual = 0;
var minutoAtual = 0;
var segundoAtual = 0;

var interval;

var i;

for(i = 0; i <= 99; i++){
    horas.innerHTML+='<option value="'+i+'">'+i+'</option>';
}
for(i = 0; i <= 60; i++){
    minutos.innerHTML+='<option value="'+i+'">'+i+'</option>';
}
for(i = 0; i <= 60; i++){
    segundos.innerHTML+='<option value="'+i+'">'+i+'</option>';
}

comecar.addEventListener('click',function(){
    horaAtual = horas.value;
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML = horaAtual + ":"+ minutoAtual + ":"+segundoAtual;

    interval = setInterval(function(){
        segundoAtual--;
        if(segundoAtual < 0){
            minutoAtual--;
            segundoAtual = 59;
            if(minutoAtual == 0){
                horaAtual--;
                minutoAtual = 0;
                if(horaAtual == 0){
                    minutoAtual = 59;
                    if(horaAtual && minutoAtual && segundoAtual){
                        clearInterval(interval);
                        alert("Finish");
                        document.getElementById("som").play();
                    }       
                }
            }
        }

        display.childNodes[1].innerHTML = horaAtual + ":"+ minutoAtual + ":"+segundoAtual;
    },1000);

})

reset.addEventListener('click',function(){
    location.reload();
})
function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
    modal.addEventListener('click', function(e){
        if(e.target.id == modalID || e.target.className == 'close-pop'){
            modal.classList.remove('mostrar');
        }
    });
}
edit.addEventListener('click', () => iniciaModal('modal-config'));
