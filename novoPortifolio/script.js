//relogio

const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minute');

const hours = setInterval (function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;

    hour.textContent = hr;
    minutes.textContent = min;
});


//Calendario
const currentDate = document.querySelector(".current-date");
daysTag = document.querySelector(".days");
prevNextIcon = document.querySelectorAll(".icons span");


let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["Janeiro", "Fevereiro", "Março", "Abril"," Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

const renderCalendar = () => {
    let firstDateOfMonth = new Date(currYear, currMonth, 1).getDay(), //pega o primeiro dia do mes
     lastDateofMonths = new Date(currYear, currMonth + 1, 0).getDate(), 
     lastDayofMonths = new Date(currYear, currMonth, lastDateofMonths).getDay(), //pega o ultimo dia do mes
     lastDateofLastMonths = new Date(currYear, currMonth, 0).getDate();//pega as ultimas datas do mes anterior

    let liTag= "";

for (let i = firstDateOfMonth; i > 0; i--) { //cria tag li "inativa" dos ultimos dias do mes anterior
    liTag += `<li class="inactive">${lastDateofLastMonths - i + 1}</li>`;
    
}

    for (let i = 1; i <= lastDateofMonths; i++) {//cria todas as tags li's dos dias do mes
        let isToday = i === date.getDate()  && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";

        liTag += `<li class ="${isToday}" >${i}</li>`;
        
    }

    for (let i = lastDayofMonths; i < 6 ; i++) {//cria tag li "inativa" dos dias do proximo mes
        liTag += `<li class="inactive">${i - lastDayofMonths + 1}</li>`;
        
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}

renderCalendar();

prevNextIcon.forEach(icon => {//Adiciona o clique aos botões 
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11 ){ //se maioir que 11, próximo mes. Se menos que 0, mes anterior.
            date = new Date(currYear, currMonth);//cria mes e ano
            currYear = date.getFullYear(); //atualiza o ano
            currMonth = date.getMonth();//atualiza o mes
        }else {
            date = new Date();
        }
        renderCalendar();
    })
});





const btnDescricao = document.getElementById("btn-descricao");
const descricao = document.getElementById("descricao");

btnDescricao.addEventListener("click", function() {
  if (descricao.style.display === "none") {
    descricao.style.display = "block";
  } else {
    descricao.style.display = "none";
  }
});


