import {
  pegarParametrosUrl,
  pegarHabilidades,
  gerarCardsVagas,
} from './utils.js';

const parameterId = pegarParametrosUrl('id');

const habilidades = pegarHabilidades({ id: parameterId });

const ondeSeEspecializar = JSON.parse(localStorage.getItem('Links')).filter(
  (obj) => habilidades.links_id.includes(obj.id),
);

for (let item of ondeSeEspecializar) {
  $('#where-to-specialize').append(
    `<a class="col-sm-6 text-decoration-none text-warning" href="https://${item.link}">${item.link}</a>`,
  );
}

console.log(ondeSeEspecializar);
//document.querySelector('').innerHTML = habilidades.nome;
document.querySelector('#skill').innerHTML = habilidades.nome;
document.querySelector('#skill-descript').innerHTML = habilidades.descricao;

const vagasEssenciais = JSON.parse(localStorage.getItem('Vagas')).filter(
  (Object) => Object.hab_essencial_id.includes(habilidades.id),
);

document.querySelector('#essential-last-30-days').innerHTML = gerarCardsVagas(
  vagasEssenciais,
  2,
);

const vagasDiferenciais = JSON.parse(localStorage.getItem('Vagas')).filter(
  (Object) => Object.hab_dif_id.includes(habilidades.id),
);

document.querySelector('#diferencial-last-30-days').innerHTML = gerarCardsVagas(
  vagasDiferenciais,
  2,
);
