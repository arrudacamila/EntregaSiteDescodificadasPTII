
// Exibir um alerta de boas-vindas
window.alert('Seja bem-vindo(a) ao nosso site!');

const card = document.getElementById('mentoria');
const cardContent = document.getElementById('mentoria-texto');
const footer = document.querySelector('footer');
// Estilizar o card
card.style.width = '800px';
card.style.height = '500px';
card.style.backgroundColor = 'lightgray';
card.style.borderRadius = '10px';
card.style.margin = '0 auto'; // Centralizar horizontalmente
card.style.marginBottom = '150px'; // Adicionar espaço entre o card e o footer
card.style.position = 'relative';

// Estilizar o conteúdo do card
cardContent.style.margin = '40px';
cardContent.style.display = 'flex';
cardContent.style.justifyContent = 'center';
cardContent.style.alignItems = 'center';

