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
    const syna = synadEst[juhuslikSyna];
    document.getElementById("random-syna").innerHTML = syna;

    return juhuslikSyna;
}

function kontrollimine() {
    const juhuslikSyna = randomSyna();
    const ansVene = document.getElementById("kontroll").value;
    const synaVene = synadVene[juhuslikSyna];

    if (ansVene === synaVene) {
        document.getElementById("kontrollDiv").innerHTML = "Õige";
    } else {
        document.getElementById("kontrollDiv").innerHTML = "Vale";
    }
}