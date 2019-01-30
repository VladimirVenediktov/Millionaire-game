var Questions = new Array(10);

Questions[0] = {
	'q': 'Вопрос 1\nКогда лошадь покупают, какая она бывает? ',
	'q1': '1) мокрая',
	'q2': '2) проданная',
	'q3': '3) новая',
	'q4': '4) довольная',
	'trueAnswer': 1,
	'summa': 100
}

Questions[1] = {
	'q': 'Вопрос 2\nКогда машина едет, какое колесо у нее не крутится? ',
	'q1': '1) переднее левое',
	'q2': '2) заднее правое',
	'q3': '3) рулевое',
	'q4': '4) запасное',
	'trueAnswer': 4,
	'summa': 500
}

Questions[2] = {
	'q': 'Вопрос 3\nЧто стоит между окном и дверью? ',
	'q1': '1) о',
	'q2': '2) стена',
	'q3': '3) и',
	'q4': '4) стол',
	'trueAnswer': 3,
	'summa': 1000
}

Questions[3] = {
	'q': 'Вопрос 4\nСколько горошин может войти в 1 стакан? ',
	'q1': '1) 0',
	'q2': '2) 250',
	'q3': '3) 500',
	'q4': '4) 1000',
	'trueAnswer': 1,
	'summa': 2000
}

Questions[4] = {
	'q': 'Вопрос 5\nИз какой посуды нельзя ничего поесть? ',
	'q1': '1) из грязной',
	'q2': '2) из фарфоровой',
	'q3': '3) из чистой',
	'q4': '4) из пустой',
	'trueAnswer':4,
	'summa': 3000
}

Questions[5] = {
	'q': 'Вопрос 6\nЧто нельзя съесть на завтрак? ',
	'q1': '1) яйцо и сыр',
	'q2': '2) обед и ужин',
	'q3': '3) шашлык и пиво',
	'q4': '4) суп и компот',
	'trueAnswer': 2,
	'summa': 4000
}

Questions[6] = {
	'q': 'Вопрос 7\nКак много кубиков можно Положить в пустую корзину? ',
	'q1': '1) 10',
	'q2': '2) 100',
	'q3': '3) 1',
	'q4': '4) 1000',
	'trueAnswer': 3,
	'summa': 5000
}

Questions[7] = {
	'q': 'Вопрос 8\nПод каким деревом сидит заяц, когда идет дождь? ',
	'q1': '1) под елью',
	'q2': '2) под сосной',
	'q3': '3) под мокрым',
	'q4': '4) под срубленным',
	'trueAnswer': 3,
	'summa': 6000
}

Questions[8] = {
	'q': 'Вопрос 9\nКогда черной кошке легче всего пробраться в дом? ',
	'q1': '1) когда собаки рядом нет',
	'q2': '2) когда открыта дверь',
	'q3': '3) ночью',
	'q4': '4) в високосном году',
	'trueAnswer': 2,
	'summa': 7000
}

Questions[9] = {
	'q': 'Вопрос 10\nЧему равен спин электрона ',
	'q1': '1) ± 1/2',
	'q2': '2) ± 3/2',
	'q3': '3) ± 4/2',
	'q4': '4) спину протона',
	'trueAnswer': 1,
	'summa': 8000
}
var stop = false;//для завершения игры
var helpUsed = false;//флажок использования подсказки
var sumAll = 0;

function check() {//проверка введенного ответа
	if (answer == Questions[i].trueAnswer){//если ответ верный
		sumAll+= Questions[i].summa;
		alert("И это правильный ответ! Поздравляем! Ваш выигрыш на данный момент составляет "+sumAll+" Идем дальше!");
		
		//console.log(Questions[i].arr);
	}
	else if ((answer == 1)||(answer == 2)||(answer == 3)||(answer == 4)) {//выбран неправильный ответ
		alert("Вы ответили неправильно, игра закончена");
		stop = true;
	}
			
	else if (answer == 'HELP') {//воспользоваться подсказками
		if (helpUsed == false) {
			
			if (confirm('Вы хотите воспользоваться подсказкой 50 на 50 ? Компьютер уберет 2 неправильных варианта ответа')) {
				helpUsed = true;
				answerArr = [];
				answerArr.push(Questions[i].q1, Questions[i].q2, Questions[i].q3, Questions[i].q4);
				var randomIndex = Math.trunc(Math.random()*3);
				if (Questions[i].trueAnswer-1 == randomIndex) {//если рандомом выбран индекс правильного ответа
					randomIndex = (answerrArr.length+1) - randomIndex;
				}
				if (Questions[i].trueAnswer-1 <= randomIndex){
					answer = prompt(answerArr[Questions[i].trueAnswer-1]+' '+answerArr[randomIndex]+'\n\nЕсли вы хотите закончить игру и забрать деньги - введите END');
				}
				else {
					answer = prompt(answerArr[randomIndex]+' '+answerArr[Questions[i].trueAnswer-1]+'\n\nПодсказок больше нет.\nЕсли вы хотите закончить игру и забрать деньги - введите END');
				}
				check();
			}
			else {
				answer = prompt(Questions[i].q+'\n'+Questions[i].q1+'  '+Questions[i].q2+'\n'+
				Questions[i].q3+'  '+Questions[i].q4+'\n\nВыберите ответ и введите соответствующую цифру (1, 2, 3 или 4)\nЧтобы воспользоваться подсказками введите HELP\nЕсли вы хотите закончить игру и забрать деньги - введите END');
				check();
			}
		}
		else {//если подсказку уже использовали
			alert("Подсказок больше нет");
			answer = prompt(Questions[i].q+'\n'+Questions[i].q1+'  '+Questions[i].q2+'\n'+
			Questions[i].q3+'  '+Questions[i].q4+'\n\nВыберите ответ и введите соответствующую цифру (1, 2, 3 или 4)\nЧтобы воспользоваться подсказками введите HELP\nЕсли вы хотите закончить игру и забрать деньги - введите END');
			check();
		}
	}
			
	else if ((answer == 'END')||(answer == null)) {//выйти из игры
		alert("Вы решили закончить игру");//сделать через prompt
		stop = true;
	}
			
	else {//введена некорректная команда
		alert("Введена некорректная команда");
		switch(confirm('Вернуться к игре?')) {
		case true:	
			answer = prompt(Questions[i].q+'\n'+Questions[i].q1+'  '+Questions[i].q2+'\n'+
			Questions[i].q3+'  '+Questions[i].q4+'\n\nВыберите ответ и введите соответствующую цифру (1, 2, 3 или 4)\nЧтобы воспользоваться подсказками введите HELP\nЕсли вы хотите закончить игру и забрать деньги - введите END');
			check();
			break;
		default:
			stop = true;
			break;
		}
	}
	return;
}


var name = prompt('Добрый день! Как вас зовут?');

if (confirm(name+", вы хотите начать игру \"Кто хочет стать миллионером\"?")){
	for (var i=0; i<Questions.length; i++){
		alert('Стоимость следующего вопроса '+Questions[i].summa);
		var answer = prompt(Questions[i].q+'\n'+Questions[i].q1+'  '+Questions[i].q2+'\n'+
		Questions[i].q3+'  '+Questions[i].q4+'\n\nВыберите ответ и введите соответствующую цифру (1, 2, 3 или 4)\nЧтобы воспользоваться подсказками введите HELP\nЕсли вы хотите закончить игру и забрать деньги - введите END');

		check();
		if (stop){
			break;
		}
	}
	alert("Ваш выигрыш "+sumAll);
}