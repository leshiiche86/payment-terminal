## Краткое описание о проекте
За основу разработки тестового приложения (Терминал оплаты услуг сотовой связи) я взял библеотеку React JS. Почкму React JS, компонентно-ориентированный подход,возможность с легкостью изменять имеющиеся компоненты и переиспользовать код превращают React разработку в непрерывный процесс улучшения. Используя передовые возможности, такие как Virtual DOM или изоморфный JavaScript, React разработчики могут с высокой скоростью создавать высокопроизводительные приложения, несмотря на уровень их сложности. Одним словом на сегодняшний день React JS это очень круто. Хотелось бы больше уделять время этой библиотеке и создавать крутые вещи.

### Какие дополнительные зависимости я использовал в проекте
1) [react-currency-input] - (https://github.com/jsillitoe/react-currency-input). Это компонент валюты с маской, который без труда позволяет подключить его в свой код, и настроить его под себя.

2) [react-input-mask] - (https://github.com/sanniassin/react-input-mask). Еще один компонент React для ввода данных с маской.

2) [react-preloader-icon] - (https://github.com/UYEONG/react-preloader-icon). Компонент для отображения прилоудера при отправки данных на сервер. Что бы пользователь мог понимать что идет отправка данных.

Отдельно хочу сказать, хотел так же использовать такие библиотеке как Bootstrap или Material-Ui для постоения графического интерфейса, то же модальное окно для вывода информации, но посчитал не нужным так как проект не большой и не хотел загружать сам проект, а обошелся стандартным alert диалогом. 

Этот проект был собран с помощью утилиты [Create React App](https://github.com/facebookincubator/create-react-app).

После клонирования надо заигсталить все зависимости: 

### `npm install`

После чего перейти в корень проекта и выполнить следующую команду

### `npm start`

# Рефакторинг кода

## код до

```javascript
function func(s, a, b) {

	if (s.match(/^$/)) {
		return -1;
	}
	
	var i = s.length -1;
	var aIndex =     -1;
	var bIndex =     -1;
	
	while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
	    if (s.substring(i, i +1) == a) {
	    	aIndex = i;
    	}
	    if (s.substring(i, i +1) == b) {
	    	bIndex = i;
    	}
	    i = i - 1;
	}
	
	if (aIndex != -1) {
	    if (bIndex == -1) {
	        return aIndex;
	    }
	    else {
	        return Math.max(aIndex, bIndex);
	    }
	}
	
	if (bIndex != -1) {
	    return bIndex;
	}
	else {
	    return -1;
	}
}
```

## код после

Его можно оптимизировать и привести вот к такому ввиду

```javascript
function func(s,a,b){if(s.match(/^$/))return-1;for(var i=s.length-1,aIndex=-1,bIndex=-1;-1==aIndex&&-1==bIndex&&i>0;)s.substring(i,i+1)==&&(aIndex=i),s.substring(i,i+1)==b&&(bIndex=i),i-=1;return-1!=aIndex?-1==bIndex?aIndex:Math.max(aIndex,bIndex):-1!=bIndex?bIndex:-1}
```