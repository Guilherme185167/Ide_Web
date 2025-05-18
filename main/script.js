function ativarMenu(id) {
    const menuClicado = document.getElementById(id);
    const jaExpandido = menuClicado.classList.contains('grande');

    // Recolhe todos os menus
    document.querySelectorAll('.menu').forEach(menu => {
        menu.classList.remove('grande');
    });

    // Se não estava expandido, expande agora
    if (!jaExpandido) {
        menuClicado.classList.add('grande');
    }
}
document.querySelectorAll('.sub').forEach(sub => {
    sub.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
function escreval(texto) {
  const textarea = document.getElementById('textcanva');
  
  // pega a posição atual do cursor
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  // divide o texto em antes e depois do cursor
  const antes = textarea.value.substring(0, start);
  const depois = textarea.value.substring(end);

  // junta antes + texto novo + depois
  textarea.value = antes + texto + depois;

  // atualiza o cursor pra depois do texto inserido
  const pos = start + texto.length;
  textarea.selectionStart = textarea.selectionEnd = pos;

  // mantém o foco no textarea
  textarea.focus();
}
function leia(texto) {
  escreval(texto);
}
function para(texto) {
  escreval(texto);
}
function enquanto(texto) {
  escreval(texto);
}
function repita(texto) {
  escreval(texto);
}
function se(texto) {
  escreval(texto);
}
function start(texto) {
  escreval(texto);
}
function limparCanvas() {
  const textarea = document.getElementById('textcanva');
  textarea.value = '';
}

const hoverSound = new Audio("sons/145443__soughtaftersounds__menu-click-dry.mp3"); // Caminho do som de hover

document.querySelectorAll('.menu').forEach(menu => {
    menu.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0; // Reinicia o som se for tocado várias vezes seguidas
        hoverSound.play();
    });
});
const clickSound = new Audio("sons/503340__tahutoa__clicky-accept-menu-sound.wav"); // Caminho do som de clique

document.querySelectorAll('.sub').forEach(sub => {
    sub.addEventListener('click', () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});

const somBotaoEspecial = new Audio('sons/toutch.wav');
const botao = document.getElementById('sub24');
const loadingScreen = document.getElementById('loadingScreen');
const progressFill = document.querySelector('.progress-fill');

if(botao) {  // Proteção caso o elemento não exista
    botao.addEventListener('click', () => {
        somBotaoEspecial.currentTime = 0;
        somBotaoEspecial.play();

        // Mostra a splash screen
        loadingScreen.style.display = 'flex';
        progressFill.style.width = '0%';

        // Simula o carregamento progressivo em 6 segundos (você tinha 6000ms, não 14000)
        let duration = 6000;
        let stepTime = 100; // tempo de passo
        let steps = duration / stepTime;
        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            let progress = (currentStep / steps) * 100;
            progressFill.style.width = progress + '%';

            if (currentStep >= steps) {
                clearInterval(interval);
                loadingScreen.style.display = 'none';

                // Ação após o carregamento
                console.log('Ação do botão após o splash');
            }
        }, stepTime);
    });
}