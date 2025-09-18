const adviceNumber = document.querySelector('.numero-conselho');
const adviceText = document.querySelector('.conselho-1');
const generateButton = document.querySelector('.btn');

async function getAdvice() {
    try {
        adviceNumber.innerText = "Carregando...";
        adviceText.innerText = "Aguarde um momento";
        
        const response = await fetch('https://api.adviceslip.com/advice');
        
        if (!response.ok) {
            throw new Error('Não foi possível obter o conselho');
        }
        
        const data = await response.json();
        
        adviceNumber.innerText = `Conselho #${data.slip.id}`;
        adviceText.innerText = `"${data.slip.advice}"`;
        
    } catch (error) {
        console.error('Erro ao buscar conselho:', error);
        adviceNumber.innerText = "Erro";
        adviceText.innerText = "Não foi possível carregar o conselho. Tente novamente mais tarde.";
    }
}

generateButton.addEventListener('click', getAdvice);

document.addEventListener('DOMContentLoaded', getAdvice);