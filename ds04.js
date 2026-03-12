/* Bloco para o SegundaLíngua só abrir quando a 5° serie estiver selecionada*/

const selectSerie = document.getElementById('serie');
const blocoLingua = document.getElementById('bloco-segunda-lingua');
const radiosLingua = document.querySelectorAll('input[name="segunda_lingua"]');

selectSerie.addEventListener('change', function(){
    if(this.value ==='5ano'){
        blocoLingua.style.display = 'block';
    }else{
        blocoLingua.style.display = 'none';
        radiosLingua.forEach(r => r.checked = false);
    }
})


const selectTurno = document.getElementsByName('turno');
const blocoTurno = document.getElementById('bloco-telefone-tarde');

selectTurno.forEach(radio => {
    radio.addEventListener('change', function(){
        if(this.value === 'tarde'){
            blocoTurno.style.display = 'block';
        }else{
            blocoTurno.style.display = 'none';
        }
    })
})
