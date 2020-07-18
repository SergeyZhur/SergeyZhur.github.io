new Timer()
.setTIme() - сюда можно объектом передать стартовое время ({ days: 01, hours: 20, minutes: 15, seconds: 25 })
.setClassNames() - сюда кидать классы, в которых должно быть время ({ days: '.days', hours: '.hours', minutes: '.minutes', seconds: '.seconds' })
.setOptions() - сюда можно прокинуть 2 опции, это добавлять ноль к числу, или нет (по умолчанию добавлять)
и шаг таймера (по умолчанию секунда)
({ withZeros: true, timerStep: 1000 })
.init() - запустить