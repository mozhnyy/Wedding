$(function () {
	function send(event, php) {
		event.preventDefault(); // Сброс отправки данных
		const XHR = new XMLHttpRequest(); // Создаем новый запрос

		XHR.open("POST", php, false); // Метод, Путь к файлу, тип запроса

		XHR.onload = function () {
			if (XHR.status >= 200 && XHR.status < 400) {
				// Проверяем статус ответа сервера
				const json = JSON.parse(this.response); // Для IE11
				// Если сообщение успешно отправлено
				if (json.result == "success") {
					alert("Сообщение отправлено");
					$(".form").trigger("reset");
				} else {
					alert("Ошибка. Сообщение не отправлено");
					console.log(json);
				}
				// Если не удалось связаться с php файлом
			} else {
				alert("Ошибка сервера. Номер: " + XHR.status);
			}
		};

		// Если не удалось отправить запрос
		XHR.onerror = function () {
			alert("Ошибка отправки запроса");
		};
		// Отправляем наш запрос
		XHR.send(new FormData($(".form")));
	}

	// Событие отправки данных формы
	$(".form").on("submit", function () {
		send(event, "/send.php");
	});
});
