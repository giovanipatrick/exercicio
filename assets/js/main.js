document.addEventListener("DOMContentLoaded", () => {

 /* const h1 = document.querySelector(".container h1");
  const data = new Date();

  function getDiaSemanaTexto(diaSemana) {
    const diasSemana = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ];
    return diasSemana[diaSemana];
  }

  function getNomeMes(numeroMes) {
    const meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    return meses[numeroMes];
  }

  function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
  }

  function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
      `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
      ` de ${data.getFullYear()} ` +
      `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
  }

  h1.innerHTML = criaData(data); */

  /** 
   * Não é necessário estar dentro de uma função 
   * A função eu utilizo pra atualizar o tempo de 10 em 10 ms na tela 
   * O que importa é usar a Intl pra formatar a data.
   * A documentação da INTL é https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
   * o document.addEventListener("DOMContentLoaded") é utilizado para esperar o carregamento completo da página e só depois disso o JS é chamado.
   */
  const atualiza_tempo = function(){
    const h1 = document.querySelector(".container h1");
    const data = new Date();
    let full_time = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'medium', timeZone: 'America/Sao_paulo' }).format(data);
    h1.innerHTML = full_time;
  }

  setInterval(()=>{

    atualiza_tempo();

  },20);


});