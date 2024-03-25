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
