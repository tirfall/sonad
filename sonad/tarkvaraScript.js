const synadEst =[
    'teostus',
    'algoritm',
    'kavand',
    'kasutajaliides',
    'model',
    'andmebaasi skeem',
    'standart',
    'tsükkel',
    'andmetöötlus',
    'andmestruktuur',
    'arenduskeskkond',
    'projektihaldus töörist',
    'kavandamine',
    'iteratsioon',
    'parandus'
];
const synadVene = [
    'реализация',
    'алгоритм',
    'план',
    'пользовательский интерфейс',
    'модель',
    'схема базы данных',
    'стандарт',
    'цикл',
    'обработка данных',
    'структура данных',
    'среда разработки',
    'инструмент управления проектами',
    'планирование',
    'итерация',
    'исправление'
];
let currentSyna = '';
//random sõna - arv


function randomSyna() {
    const juhuslikSyna = Math.floor(Math.random() * synadEst.length);
    currentSyna = synadEst[juhuslikSyna];
    document.getElementById("random-syna").innerHTML = currentSyna;
}

function kontroll() {
    const inputValue = document.getElementById("kontroll").value;
    const index = synadEst.indexOf(currentSyna);

    if (synadVene[index] === inputValue) {
        document.getElementById("kontrollDiv").innerText = "õigus";
    } else {
        document.getElementById("kontrollDiv").innerText = "vale";
    }
}

function randomSynaVene() {
    const juhuslikSyna = Math.floor(Math.random() * synadVene.length);
    currentSyna = synadVene[juhuslikSyna];
    document.getElementById("random-synaVene").innerHTML = currentSyna;
}

function kontrollVene() {
    const inputValue = document.getElementById("kontrollVene").value;
    const index = synadVene.indexOf(currentSyna);

    if (synadEst[index] === inputValue) {
        document.getElementById("kontrollDivVene").innerText = "õigus";
    } else {
        document.getElementById("kontrollDivVene").innerText = "vale";
    }
}
