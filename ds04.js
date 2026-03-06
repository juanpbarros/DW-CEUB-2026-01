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
