const initialState = {
    item: 0,
    menuItems: ['Микрозаймы',
        'Потребительские кредиты',
        'Кредитные карты',
        'Дебетовые карты',
        'Займы под залог',
        'Ипотека',
        'Рефинансирование',
        'Рассчётно-кассовое обслуживание',
    ],
    micro: [
        {
            name: '«ФинМолл»',
            first: {
                srok: 'до 1 года',
                stavka: 'до 0,55%',
                stavkaspan: '',
                summa: '20 000 - 47 000 P'
            },
            second: {
                srok: 'до 1 года',
                stavka: 'до 0,55%',
                stavkaspan: '',
                summa: '20 000 - 100 000 P'
            },
            vozrast: '18 - 70 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МКК «ФИНМОЛЛ», №651403550005541',
            img: 'img/orders/finmoll.jpg',
            href: 'https://gl.guruleads.ru/click/4161/502'

        },
        {
            name: '«Турбозайм»',
            first: {
                srok: '7-30 дней',
                stavka: '0% первые 3 дня,',
                stavkaspan: ' далее до 1%',
                summa: '3 000 - 15 000 P'
            },
            second: {
                srok: '7-168 дней',
                stavka: 'до 1%',
                stavkaspan: '',
                summa: '3 000 - 50 000 P'
            },
            vozrast: '21 - 65 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МФК «Турбозайм», №651303045003951',
            img: 'img/orders/turbo.png',
            href: 'https://gl.guruleads.ru/click/4161/20'

        },
        {
            name: '«One Click Money»',
            first: {
                srok: '6 - 60 дней',
                stavka: '1%',
                stavkaspan: '',
                summa: '500 – 30 000 ₽'
            },
            second: {
                srok: '6 - 60 дней',
                stavka: '1%',
                stavkaspan: '',
                summa: '500 – 30 000 ₽'
            },
            vozrast: '18 - 80 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО «МКК Ван Клик Мани», №001503760007126',
            img: 'img/orders/click.png',
            href: 'https://gl.guruleads.ru/click/4161/17'

        }, {
            name: '«Деньги Сразу»',
            first: {
                srok: '1 - 16 дней',
                stavka: '0%,',
                stavkaspan: ' при выполнении условий погашения',
                summa: '1000 – 30 000 ₽'
            },
            second: {
                srok: '1 - 30 дней',
                stavka: 'до 1%',
                stavkaspan: '',
                summa: '1000 – 30 000 ₽'
            },
            vozrast: '18 - 70 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МКК «Скорость Финанс», №17030200082321',
            img: 'img/orders/srazu.png',
            href: 'https://gl.guruleads.ru/click/4161/227'

        }, {
            name: '«Ракета деньги»',
            first: {
                srok: 'от 5 дней до 18 недель',
                stavka: '0% ,',
                stavkaspan: ' (при условии погашения в течение 15 дней)',
                summa: '1 500 - 15 000 ₽'
            },
            second: {
                srok: 'от 5 дней до 18 недель',
                stavka: 'до 1%',
                stavkaspan: '',
                summa: '1 500 - 80 000 ₽'
            },
            vozrast: '20-70 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МФК «Мани Мен», №2110177000478',
            img: 'img/orders/raketa.png',
            href: 'https://gl.guruleads.ru/click/4161/525'

        }, {
            name: '«VIVA деньги»',
            first: {
                srok: 'от 7 дней до 12 месяцев',
                stavka: '0%',
                stavkaspan: '',
                summa: '1000 – 40 000 ₽'
            },
            second: {
                srok: 'от 7 дней до 12 месяцев',
                stavka: 'до 1%',
                stavkaspan: '',
                summa: '1000 – 80 000 ₽'
            },
            vozrast: '21 - 70 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МФК «ЦФП», №2110177000840',
            img: 'img/orders/viva.png',
            href: 'https://gl.guruleads.ru/click/4161/591'

        }, {
            name: '«Max Credit»',
            first: {
                srok: '5 - 30 дней',
                stavka: 'до 1%',
                stavkaspan: '',
                summa: '3000 – 15 000 ₽'
            },
            second: {
                srok: '5 - 30 дней',
                stavka: 'до 1%',
                stavkaspan: '',
                summa: '3000 – 30 000 ₽'
            },
            vozrast: '18 - 70 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МКК «Макс.Кредит», №651503140006267',
            img: 'img/orders/max.png',
            href: 'https://gl.guruleads.ru/click/4161/216'

        },
        {
            name: '«БыстроДеньги»',
            first: {
                srok: '7-30 дней',
                stavka: '0%',
                stavkaspan: '',
                summa: '1500 – 15 000 ₽'
            },
            second: {
                srok: '5 - 180 дней',
                stavka: 'до 1%',
                stavkaspan: '',
                summa: '1000 – 100 000 ₽'
            },
            vozrast: '18 - 75 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МФК «Быстроденьги», №2110573000002',
            img: 'img/orders/bistro.png',
            href: 'https://gl.guruleads.ru/click/4161/179'

        },
        // {
        //     name: 'Kredito24',
        //     first: {
        //         srok: '16-30 дней',
        //         stavka: 'до 1%',
        //         stavkaspan: '',
        //         summa: '2000 – 10 000 ₽'
        //     },
        //     second: {
        //         srok: '16-30 дней',
        //         stavka: 'до 1%',
        //         stavkaspan: '',
        //         summa: '2000 – 15 000 ₽'
        //     },
        //     vozrast: '22 - 60 лет',
        //     poluchenie: 'Карта или счёт',
        //     text: 'ООО МФК «Быстроденьги», №2110573000002',
        //     img: 'img/orders/bistro.png',
        //     href: 'https://gl.guruleads.ru/click/4161/179'

        // },
        {
            name: '«МигКредит»',
            first: {
                srok: '3 - 30 дней',
                stavka: 'до 1%',
                stavkaspan: '',
                summa: '3000 – 15 000 ₽'
            },
            second: {
                srok: '3 - 30 дней',
                stavka: '0,268 до 1%',
                stavkaspan: '',
                summa: '2000 – 100 000 ₽'
            },
            vozrast: '21 - 65 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МФК «МигКредит», №2110177000037',
            img: 'img/orders/mig.png',
            href: 'https://gl.guruleads.ru/click/4161/27'

        }, {
            name: '«Cash-U»',
            first: {
                srok: '5 - 25 дней',
                stavka: 'до 1%',
                stavkaspan: '',
                summa: '3000 – 15 000 ₽'
            },
            second: {
                srok: '5 - 25 дней',
                stavka: 'до 1%',
                stavkaspan: '',
                summa: '3000 – 30 000 ₽'
            },
            vozrast: '18 - 80 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МКК «Киберлэндинг», №1803392008777',
            img: 'img/orders/cashu.png',
            href: 'https://gl.guruleads.ru/click/4161/130'
        },
        {
            name: '«PROFI CREDIT»',
            first: {
                srok: 'от 6 до 12 месяцев',
                stavka: 'от 0,48% ',
                stavkaspan: '',
                summa: '10 000 – 100 000 ₽'
            },
            second: {
                srok: 'от 6 до 12 месяцев',
                stavka: 'от 0,42%',
                stavkaspan: '',
                summa: '10 000 – 100 000 ₽'
            },
            vozrast: '24 - 70 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МКК «Профиреал», №651303140004444',
            img: 'img/orders/profi.png',
            href: 'https://gl.guruleads.ru/click/4161/225'

        },
        {
            name: '«MoneyMan»',
            first: {
                srok: 'от 5 дней до 18 недель',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: '1500 – 15 000 ₽'
            },
            second: {
                srok: 'от 5 дней до 18 недель',
                stavka: 'до 1%',
                stavkaspan: '',
                summa: '1500 – 80 000 ₽'
            },
            vozrast: '18 - 70 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МФК «Мани Мен», #2110177000478',
            img: 'img/orders/moneyman.png',
            href: 'https://gl.guruleads.ru/click/4161/571'

        },
        {
            name: '«До зарплаты»',
            first: {
                srok: '7 - 30 дней',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: '1 000 – 10 000 ₽'
            },
            second: {
                srok: 'от 7 дней до 12 месяцев',
                stavka: 'от 0,25%',
                stavkaspan: '',
                summa: '2 000 – 100 000 ₽'
            },
            vozrast: '20 - 60 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МФК «Союз 5», №651403140005467',
            img: 'img/orders/dozp.png',
            href: 'https://gl.guruleads.ru/click/4161/79'

        }, {
            name: '«еКапуста»',
            first: {
                srok: '7 - 21 дней',
                stavka: '0%',
                stavkaspan: '',
                summa: '100 – 30 000 ₽'
            },
            second: {
                srok: '7 - 21 дней',
                stavka: 'до 0,99%',
                stavkaspan: '',
                summa: '100 – 30 000 ₽'
            },
            vozrast: '18 - 70 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МКК «Русинтерфинанс», №2120754001243',
            img: 'img/orders/kapusta.png',
            href: 'https://gl.guruleads.ru/click/4161/3'

        },

        {
            name: '«Platiza»',
            first: {
                srok: '5 - 30 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '1000 – 30 000 ₽'
            },
            second: {
                srok: '1 - 30 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '3000 – 30 000 ₽'
            },
            vozrast: '18 - 70 лет',
            poluchenie: 'Карта или счёт',
            text: 'МКК «Платиза.ру», №651203045001237',
            img: 'img/orders/platiza.png',
            href: 'https://gl.guruleads.ru/click/4161/81'

        }, {
            name: '«JoyMoney»',
            first: {
                srok: 'от 5 дней до 18 недель',
                stavka: '0% ',
                stavkaspan: ' (при выполнении условий погашения)',
                summa: '3000 – 6000 ₽'
            },
            second: {
                srok: '1 - 30 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '5000 – 60 000 ₽'
            },
            vozrast: '21 - 65 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МФК «Джой Мани», №651403550005450',
            img: 'img/orders/joy.png',
            href: 'https://gl.guruleads.ru/click/4161/16'

        }, {
            name: '«SlavaZaim»',
            first: {
                srok: '7 - 30 дней',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: '5000 – 30 000 ₽'
            },
            second: {
                srok: 'от 1 дня до 12 месяцев',
                stavka: 'до 1%',
                stavkaspan: '',
                summa: '3000 – 100 000 ₽'
            },
            vozrast: '21 - 65 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МКК «Твои наличные», №2003034009534',
            img: 'img/orders/slava.png',
            href: 'https://gl.guruleads.ru/click/4161/644'

        },
        {
            name: '«Creditter»',
            first: {
                srok: '5 - 30 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '2000 – 14 000 ₽'
            },
            second: {
                srok: '5 - 30 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '2000 – 30 000 ₽'
            },
            vozrast: '20 - 68 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МКК «Смартмани.ру ЛТД», №651503045006429',
            img: 'img/orders/creditter.png',
            href: 'https://gl.guruleads.ru/click/4161/49'

        },
        {
            name: '«Zaymigo»',
            first: {
                srok: '5 - 25 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '3000 – 15 000 ₽'
            },
            second: {
                srok: '5 - 30 дней',
                stavka: '0,49 до 1%',
                stavkaspan: '',
                summa: '3000 – 30 000 ₽'
            },
            vozrast: '18 - 65 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО «Займиго МФК», №651303322004222',
            img: 'img/orders/zaimigo.png',
            href: 'https://gl.guruleads.ru/click/4161/55'

        },
        {
            name: '«MishkaMoney»',
            first: {
                srok: '1-30 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '1000 – 50 000 ₽'
            },
            second: {
                srok: '1-30 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '1000 – 50 000 ₽'
            },
            vozrast: '18 - 70 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МКК «Ценность», №1903045009399',
            img: 'img/orders/mishka.png',
            href: 'https://gl.guruleads.ru/click/4161/474'

        },
        {
            name: '«Деньга»',
            first: {
                srok: '5 - 30 дней',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: '1000 – 15 000 ₽'
            },
            second: {
                srok: 'от 3 дней до 12 месяцев',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '1000 – 100 000 ₽'
            },
            vozrast: '18 - 75 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО «МФК «ЮПИТЕР 6», №2110178000979',
            img: 'img/orders/denga.png',
            href: 'https://gl.guruleads.ru/click/4161/439'

        },
        {
            name: '«eZaem»',
            first: {
                srok: '5 - 35 дней',
                stavka: 'от 0',
                stavkaspan: '',
                summa: '3000 – 15 000 ₽'
            },
            second: {
                srok: '5 - 35 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '3000 – 30 000 ₽'
            },
            vozrast: '18 - 70 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МФК «Езаем», №651303045003161',
            img: 'img/orders/ezaem.png',
            href: 'https://gl.guruleads.ru/click/4161/1'

        },
        {
            name: '«ГлавФинанс»',
            first: {
                srok: '8 - 30 дней',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: 'Сумма 3000 – 30 000 ₽'
            },
            second: {
                srok: 'от 8 дней до 14 недель',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '3000 – 100 000 ₽'
            },
            vozrast: '18 - 60 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МКК «ГФК», №2120323001658 ',
            img: 'img/orders/glavfin.png',
            href: 'https://gl.guruleads.ru/click/4161/293'

        },
        //  {
        //     name: '«Appolon Zaim»',
        //     first: {
        //         srok: '7 дней до 12 месяцев',
        //         stavka: 'от 0% ',
        //         stavkaspan: '',
        //         summa: '2 000 – 100 000 ₽'
        //     },
        //     second: {
        //         srok: '7 дней до 12 месяцев',
        //         stavka: 'до 1% ',
        //         stavkaspan: '',
        //         summa: '2 000 – 100 000 ₽'
        //     },
        //     vozrast: '20 - 60 лет',
        //     poluchenie: 'Карта или счёт',
        //     text: 'ООО МКК «Союз 5», №001503140006946',
        //     img: 'img/orders/appolon.png',
        //     href: 'https://gl.guruleads.ru/click/4161/652'

        // },  
        {
            name: '«CreditPlus»',
            first: {
                srok: '5 - 30 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '1000 – 15 000 ₽'
            },
            second: {
                srok: '5 - 30 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '1000 – 15 000 ₽'
            },
            vozrast: '18 - 75 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МФК «Экофинанс», №651503045006452',
            img: 'img/orders/creditplus.png',
            href: 'https://gl.guruleads.ru/click/4161/21'

        },
        {
            name: '«BelkaCredit»',
            first: {
                srok: '0 - 10 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '1000 – 30 000 ₽'
            },
            second: {
                srok: '5 - 30 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '1000 – 30 000 ₽'
            },
            vozrast: '18 - 75 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МФК «Экофинанс», №651503045006452',
            img: 'img/orders/belka.jpg',
            href: 'https://gl.guruleads.ru/click/4161/269'

        },
        {
            name: '«ТеремЗайм»',
            first: {
                srok: '1 - 30 дней',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: '5000 – 30 000 ₽'
            },
            second: {
                srok: 'до 1 года',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: '5000 – 100 000 ₽'
            },
            vozrast: '18 - 75 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МКК «Будьте Богаты», №202003392009598',
            img: 'img/orders/terem.jpg',
            href: 'https://gl.guruleads.ru/click/4161/441'

        },
        {
            name: '«Комета займ»',
            first: {
                srok: '1 - 30 дней',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: '5000 – 30 000 ₽'
            },
            second: {
                srok: 'до 1 года',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: '5000 – 100 000 ₽'
            },
            vozrast: '18 - 75 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МКК «Будьте Богаты», №202003392009598',
            img: 'img/orders/kometa.jpg',
            href: 'https://gl.guruleads.ru/click/4161/580'

        },


        {
            name: '«Срочно деньги»',
            first: {
                srok: '1 - 30 дней',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: '2000 – 30 000 ₽'
            },
            second: {
                srok: '1 - 180 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '2000 – 100 000 ₽'
            },
            vozrast: '18 - 80 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МКК «Срочноденьги», №0110552000304',
            img: 'img/orders/srochno.png',
            href: 'https://gl.guruleads.ru/click/4161/238'

        },
        {
            name: '«Займер»',
            first: {
                srok: '7 - 30 дней',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: '2000 – 30 000 ₽'
            },
            second: {
                srok: '7 - 30 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '2000 – 30 000 ₽'
            },
            vozrast: '18 - 75 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МФК «Займер», №651303532004088',
            img: 'img/orders/zaimer.png',
            href: 'https://gl.guruleads.ru/click/4161/25'
        },

        {
            name: '«Credit7»',
            first: {
                srok: '7 - 30 дней',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: '1000 – 30 000 ₽'
            },
            second: {
                srok: '7 - 30 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '1000 – 30 000 ₽'
            },
            vozrast: '18 - 80 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МКК «Каппадокия», №1903475009492',
            img: 'img/orders/credit7.png',
            href: 'https://gl.guruleads.ru/click/4161/212'
        },
        // }, {
        //     name: '«Срочно деньги»',
        //     first: {
        //         srok: '1 - 30 дней',
        //         stavka: 'от 0% ',
        //         stavkaspan: '',
        //         summa: '2000 – 30 000 ₽'
        //     },
        //     second: {
        //         srok: '1 - 180 дней',
        //         stavka: 'до 1% ',
        //         stavkaspan: '',
        //         summa: '2000 – 100 000 ₽'
        //     },
        //     vozrast: '18 - 80 лет',
        //     poluchenie: 'Карта или счёт',
        //     text: 'ООО МКК «Срочноденьги», №0110552000304',
        //     img: 'img/orders/srochno.png',
        //     href: ''

        // }, 
        {
            name: '«Green Money»',
            first: {
                srok: '3 - 30 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '3000 – 15 000 ₽'
            },
            second: {
                srok: 'от 3 дней до 6 месяцев',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '3000 – 100 000 ₽'
            },
            vozrast: '18 - 65 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МКК «Стабильные финансы», №1903045009345',
            img: 'img/orders/green.png',
            href: 'https://gl.guruleads.ru/click/4161/69'

        },
        {
            name: '«MigONE»',
            first: {
                srok: '3 - 30 дней',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: '3000 – 15 000 ₽'
            },
            second: {
                srok: '3-30 дней',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: '3000 – 15 000 ₽'
            },
            vozrast: '21 - 75 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МФК «МигКредит», №2110177000037',
            img: 'img/orders/migone.jpg',
            href: 'https://gl.guruleads.ru/click/4161/46'

        },
        {
            name: '«ДоброЗайм»',
            first: {
                srok: 'от 1 дня до 12 месяцев',
                stavka: 'до 1%',
                stavkaspan: '',
                summa: '1000 – 100 000 ₽'
            },
            second: {
                srok: 'от 1 дня до 12 месяцев',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '1000 – 100 000 ₽'
            },
            vozrast: '18 - 90 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МФК «Саммит», №2110177000192',
            img: 'img/orders/dobro.png',
            href: 'https://gl.guruleads.ru/click/4161/39'

        }, {
            name: '«Отличные наличные»',
            first: {
                srok: '5 - 30 дней',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: '1000 – 30 000 ₽'
            },
            second: {
                srok: 'от 1 дня до 6 месяцев',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '1000 – 80 000 ₽'
            },
            vozrast: '18 - 75 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МКК «Финансовый супермаркет», №001503550007231',
            img: 'img/orders/otlich.png',
            href: 'https://gl.guruleads.ru/click/4161/537'

        },
        {
            name: '«Надо денег»',
            first: {
                srok: '7 - 30 дней',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: '1000 – 30 000 ₽'
            },
            second: {
                srok: '7-30 дней',
                stavka: 'от 0%',
                stavkaspan: '',
                summa: '1000 – 30 000 ₽'
            },
            vozrast: '21 - 75 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МКК «Кватро», №191903550009364',
            img: 'img/orders/nado.jpg',
            href: 'https://gl.guruleads.ru/click/4161/546'

        },
        {
            name: '«Pay p.s.»',
            first: {
                srok: '5 - 35 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '4000 – 10 000 ₽'
            },
            second: {
                srok: '1 - 35 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '1000 – 30 000 ₽'
            },
            vozrast: '21 - 63 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МФК «Займ Онлайн», №2120177001838',
            img: 'img/orders/payps.png',
            href: 'https://gl.guruleads.ru/click/4161/7'

        },
        {
            name: '«Moneza»',
            first: {
                srok: '5 - 35 дней',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: '3000 – 15 000 ₽'
            },
            second: {
                srok: '5 - 35 дней',
                stavka: 'до 1%',
                stavkaspan: '',
                summa: '3000 – 30 000 ₽'
            },
            vozrast: '20 - 65 лет',
            poluchenie: 'Карта или счёт',
            text: 'OOO МКК «Макро», №001603045007582',
            img: 'img/orders/moneza.png',
            href: 'https://gl.guruleads.ru/click/4161/2'

        },
        {
            name: '«Webbankir»',
            first: {
                srok: '7 - 31 дней',
                stavka: 'от 0%',
                stavkaspan: '',
                summa: '3000 – 15 000 ₽'
            },
            second: {
                srok: '7 - 31 дней',
                stavka: 'от 1%',
                stavkaspan: '',
                summa: '2000 – 20 000 ₽'
            },
            vozrast: '20 - 100 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МФК «Вэббанкир», №2120177002077',
            img: 'img/orders/webbankir.png',
            href: 'https://gl.guruleads.ru/click/4161/53'

        },
        {
            name: '«Moneyfaktura»',
            first: {
                srok: 'от 10 дней',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: '3000 – 30 000 ₽'
            },
            second: {
                srok: '7 - 31 дней',
                stavka: 'до 1%',
                stavkaspan: '',
                summa: '3000 – 30 000 ₽'
            },
            vozrast: '20 - 65 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МФК «Вэббанкир», №2120177002077',
            img: 'img/orders/faktura.jpg',
            href: 'https://gl.guruleads.ru/click/4161/706'

        },
        {
            name: '«LIME»',
            first: {
                srok: '1 - 30 дней',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: '3000 – 30 000 ₽'
            },
            second: {
                srok: '10 - 168 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '3000 – 70 000 ₽'
            },
            vozrast: '21 - 70 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МФК «Лайм-Займ», №651303045004102',
            img: 'img/orders/lime.png',
            href: 'https://gl.guruleads.ru/click/4161/33'

        }, {
            name: '«Vivus»',
            first: {
                srok: 'от 1 дня до 52 недель',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: '3000 – 30 000 ₽'
            },
            second: {
                srok: 'от 1 дня до 12 месяцев',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '3000 – 100 000 ₽'
            },
            vozrast: '21 - 70 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МФК «4финанс», №3120177002032',
            img: 'img/orders/vivus.png',
            href: 'https://gl.guruleads.ru/click/4161/101'

        }, {
            name: '«FastMoney»',
            first: {
                srok: '7 - 30 дней',
                stavka: 'от 0% ',
                stavkaspan: '',
                summa: '5000 – 30 000 ₽'
            },
            second: {
                srok: '7 - 30 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '5000 – 30 000 ₽'
            },
            vozrast: '20 - 60 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МКК «Фастмани.ру», №1803140008707',
            img: 'img/orders/fastmoney.png',
            href: 'https://gl.guruleads.ru/click/4161/116'

        }, {
            name: '«KONGA»',
            first: {
                srok: '16 - 168 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '2000 – 20 000 ₽'
            },
            second: {
                srok: '16 - 168 дней',
                stavka: 'до 1% ',
                stavkaspan: '',
                summa: '2000 – 70 000 ₽'
            },
            vozrast: '18 - 65 лет',
            poluchenie: 'Карта или счёт',
            text: 'ООО МКК «Фастмани.ру», №1803140008707',
            img: 'img/orders/konga.png',
            href: 'https://gl.guruleads.ru/click/4161/35'

        }


    ],
    credit: [
        {
            name: '«Росгосстрах Банк»',
            srok: 'От 1 до 5 лет',
            stavka: '7,9% - 18,9%',
            summa: '50 000 - 3 000 000 ₽',
            type: 'Аннуитетный',
            how: 'На карту или наличными',
            age: '18 - 70 лет',
            info: '',
            text: 'ПАО «РГС Банк», лицензия ЦБ РФ №3073',
            treb: ['Мобильный телефон', 'Гражданство РФ', 'Постоянная регистрация', 'Постоянный доход', 'Рабочий телефон'],
            img: 'img/orders/rosgos.png',
            href: 'https://gl.guruleads.ru/click/4161/421'


        },
        {
            name: '«СКБ-Банк»',
            srok: 'До 5 лет',
            stavka: 'От 6,1 %',
            summa: '51 000 - 1 500 000 ₽',
            type: 'Аннуитетный',
            how: 'На карту или наличными',
            age: '23 - 69 лет',
            info: '',
            text: 'ПАО «СКБ-банк», лицензия ЦБ РФ №705',
            treb: ['Работа в регионе присутствия банка', 'Гражданство РФ', 'Постоянная регистрация', 'Постоянный доход'],
            href: 'https://gl.guruleads.ru/click/4161/391',
            img: 'img/orders/skb.png'

        },
        {
            name: '«Совкомбанк»',
            srok: 'От 1 до 5 лет',
            stavka: '0,0% - 22,4%',
            summa: '40 000 - 1 000 000 ₽',
            type: 'Аннуитетный',
            how: 'На карту или наличными',
            age: '18 - 85 лет',
            info: '',
            text: 'ПАО «Совкомбанк», лицензия ЦБ РФ №963',
            treb: ['Гражданство РФ', 'Постоянная регистрация', 'Постоянный доход', 'Рабочий телефон'],
            img: 'img/orders/sovkom.png',
            href: 'https://gl.guruleads.ru/click/4161/337'


        },
        // {
        //     name: '«Мосфинанс»',
        //     srok: 'До 30 лет',
        //     stavka: '9 - 24 %',
        //     summa: '100 000 - 100 000 000 ₽',
        //     type: 'Аннуитетный',
        //     how: 'На карту или наличными',
        //     age: '18 - 82 лет',
        //     info: 'Дополнительная информация: компания предоставляет услуги для жителей Москвы и Московской области',
        //     text: 'Не является кредитной организацией',
        //     treb: ['Работа в регионе присутствия банка', 'Гражданство РФ', 'Постоянная регистрация', 'Постоянный доход'],
        //     href:'',
        //     img: 'img/orders/mosfin.png',

        // },
        {
            name: '«Райффайзен Банк»',
            srok: 'До 5 лет',
            stavka: '7,99% - 19,99%',
            summa: '90 000 - 2 000 000 ₽',
            type: 'Аннуитетный',
            how: 'На карту или наличными',
            age: '21 - 65 лет',
            info: '',
            text: 'АО «Райффайзенбанк», лицензия ЦБ РФ №3292',
            treb: ['Мобильный телефон', 'Гражданство РФ', 'Постоянная регистрация', 'Постоянный доход', 'Рабочий телефон'],
            img: 'img/orders/raif.png',
            href: 'https://gl.guruleads.ru/click/4161/446'


        },
        {
            name: '«Газпромбанк»',
            srok: 'От 1 до 5 лет',
            stavka: '5,6% - 16,8%',
            summa: '100 000 - 5 000 000 ₽',
            type: 'Аннуитетный',
            how: 'На карту или наличными',
            age: '20 - 70 лет',
            info: '',
            text: 'АО «Газпромбанк», лицензия ЦБ РФ №354',
            treb: ['Гражданство РФ', 'Постоянная регистрация', 'Постоянный доход', 'Временная регистрация'],
            img: 'img/orders/gzprm.png',
            href: 'https://gl.guruleads.ru/click/4161/283'


        },
        {
            name: '«РНКБ»',
            srok: 'От 3 месяцев до 7 лет',
            stavka: 'От 9,9%',
            summa: '30 000 - 2 000 000 ₽',
            type: 'Аннуитетный',
            how: 'На карту или наличными',
            age: '18 - 65 лет',
            info: '',
            text: 'ПАО «РНКБ Банк», лицензия ЦБ РФ №1354',
            treb: ['Мобильный телефон', 'Гражданство РФ', 'Постоянная регистрация', 'Постоянный доход', 'Рабочий телефон'],
            img: 'img/orders/rnkb.png',
            href: 'https://gl.guruleads.ru/click/4161/594'


        },
        {
            name: '«Газпромбанк»',
            srok: 'От 1 до 7 лет',
            stavka: '5,9% - 16,8%',
            summa: '100 000 - 5 000 000 ₽',
            type: 'Аннуитетный',
            how: 'На карту или наличными',
            age: '20 - 70 лет',
            info: '',
            text: 'АО «Газпромбанк», лицензия ЦБ РФ №354',
            treb: ['Гражданство РФ', 'Постоянная регистрация', 'Постоянный доход', 'Временная регистрация'],
            img: 'img/orders/gzprm.png',
            href: 'https://gl.guruleads.ru/click/4161/283'


        },

        {
            name: '«Восточный Банк»',
            srok: 'От 3 месяцев до 7 лет',
            stavka: '9,0% - 29,9%',
            summa: '25 000 - 1 500 000 ₽',
            type: 'Аннуитетный',
            how: 'На карту или наличными',
            age: '21 - 76 лет',
            info: '',
            text: 'ПАО КБ «Восточный», лицензия ЦБ РФ №1460',
            treb: ['Гражданство РФ', 'Постоянная регистрация', 'Постоянный доход'],
            img: 'img/orders/vost.png',
            href: 'https://gl.guruleads.ru/click/4161/142'


        },
        {
            name: '«Уральский банк»',
            srok: 'От 3 до 7 лет',
            stavka: '5,9% - 19,5%',
            summa: '50 000 - 3 000 000 ₽',
            type: 'Аннуитетный',
            how: 'На карту или наличными',
            age: '19 - 75 лет',
            info: '',
            text: 'ПАО КБ «УБРиР», лицензия ЦБ РФ №429',
            treb: ['Гражданство РФ', 'Постоянная регистрация', 'Постоянный доход'],
            img: 'img/orders/ural.png',
            href: 'https://gl.guruleads.ru/click/4161/287'


        },
        {
            name: '«Уральский банк»',
            srok: 'От 2 до 7 лет',
            stavka: '5,9% - 19,5%',
            summa: '50 000 - 1 500 000 ₽',
            type: 'Аннуитетный',
            how: 'На карту или наличными',
            age: '19 - 75 лет',
            info: '',
            text: 'ПАО КБ «УБРиР», лицензия ЦБ РФ №429',
            treb: ['Гражданство РФ', 'Постоянная регистрация', 'Постоянный доход'],
            img: 'img/orders/ural.png',
            href: 'https://gl.guruleads.ru/click/4161/287'


        },
        {
            name: '«Почта банк»',
            srok: 'От 3 до 5 лет',
            stavka: 'От 5,9%',
            summa: '50 000 - 4 000 000 ₽',
            type: 'Аннуитетный',
            how: 'На карту или наличными',
            age: '18 - 65 лет',
            info: '',
            text: 'АО «Почта Банк», лицензия ЦБ РФ №650',
            treb: ['Мобильный телефон', 'Гражданство РФ', 'Постоянная регистрация', 'Постоянный доход', 'Рабочий телефон'],
            img: 'img/orders/pochta.png',
            href: 'https://gl.guruleads.ru/click/4161/336'


        },




        {
            name: '«Экспобанк»',
            srok: 'От 1 до 5 лет',
            stavka: '8,9% - 16,9%',
            summa: '50 000 - 2 000 000 ₽',
            type: 'Аннуитетный',
            how: 'На карту или наличными',
            age: '18 - 65 лет',
            info: '',
            text: 'ООО «Экспобанк», лицензия ЦБ РФ №2998',
            treb: ['Мобильный телефон', 'Гражданство РФ', 'Постоянная регистрация', 'Постоянный доход', 'Рабочий телефон'],
            img: 'img/orders/expo.png',
            href: 'https://gl.guruleads.ru/click/4161/631'


        },
        {
            name: '«ВТБ»',
            srok: 'От 1 до 7 лет',
            stavka: '6,4% - 19,5%',
            summa: '50 000 - 5 000 000 ₽',
            type: 'Аннуитетный',
            how: 'На карту или наличными',
            age: '21 - 70 лет',
            info: '',
            text: 'ПАО «Банк ВТБ», лицензия ЦБ РФ №1000',
            treb: ['Гражданство РФ', 'Постоянная регистрация', 'Постоянный доход', 'Отсутствие негативной кредитной истории'],
            img: 'img/orders/vtb.png',
            href: 'https://gl.guruleads.ru/click/4161/328'


        },
        {
            name: '«Ренессанс Кредит»',
            srok: 'От 2 до 5 лет',
            stavka: '7,5% - 24,3%',
            summa: '30 000 - 1 000 000 ₽',
            type: 'Аннуитетный',
            how: 'На карту или наличными',
            age: '24 - 70 лет',
            info: '',
            text: 'ООО «Ренессанс Кредит», лицензия ЦБ РФ №3354',
            treb: ['Работа в регионе присутствия банка', 'Гражданство РФ', 'Отсутствие негативной кредитной истории', 'Постоянный доход',],
            img: 'img/orders/renes.jpg',
            href: 'https://gl.guruleads.ru/click/4161/295'


        },
        {
            name: '«Локо-банк»',
            srok: 'От 1 до 7 лет',
            stavka: '7,5% - 22,9%',
            summa: '50 000 - 5 000 000 ₽',
            type: 'Аннуитетный',
            how: 'На карту или наличными',
            age: '21 - 70 лет',
            info: '',
            text: 'КБ «ЛОКО-Банк», лицензия ЦБ РФ №2707',
            treb: ['Гражданство РФ', 'Постоянная регистрация', 'Постоянный доход'],
            img: 'img/orders/loko.png',
            href: 'https://gl.guruleads.ru/click/4161/321'


        },
        {
            name: '«Тинькофф»',
            srok: 'От 1 до 3 лет',
            stavka: '8,9% - 24,9%',
            summa: '50 000 - 2 000 000 ₽',
            type: 'Аннуитетный',
            how: 'На карту или наличными',
            age: '21 - 65 лет',
            info: '',
            text: 'АО «Тинькофф Банк», лицензия ЦБ РФ №2673',
            treb: ['Гражданство РФ', 'Постоянная регистрация', 'Постоянный доход', 'Временная регистрация'],
            img: 'img/orders/tinkof.png',
            href: 'https://gl.guruleads.ru/click/4161/145'


        },
        {
            name: '«МТС банк»',
            srok: 'От 1 до 5 лет',
            stavka: '6,9% - 22,9%',
            summa: '50 000 - 5 000 000 ₽',
            type: 'Аннуитетный',
            how: 'На карту или наличными',
            age: '20 - 70 лет',
            info: '',
            text: 'ПАО «МТС-Банк», лицензия ЦБ РФ №2268',
            treb: ['Гражданство РФ', 'Постоянный доход'],
            img: 'img/orders/mts.png',
            href: 'https://gl.guruleads.ru/click/4161/426'


        },

    ],
    cards: [{
        name: 'ВТБ «Карта возможностей»',
        limit: 'До 1 000 000 ₽',
        period: '110 дней',
        stavka: '14,6% - 28,9%',
        obsluzh: 'От 0  ₽ / год',
        cashback: '1 % - 15 %',
        age: '21 - 70 лет',
        treb: ['Постоянный доход', 'Гражданство РФ', 'Постоянная регистрация'],
        img: 'img/orders/vtbcard.png',
        text: 'ПАО «Банк ВТБ», лицензия ЦБ РФ №1000',
        href: 'https://gl.guruleads.ru/click/4161/499'
    }, {
        name: 'Райффайзен Банк «110 дней»',
        limit: 'До 600 000 ₽',
        period: '110 дней',
        stavka: '26 % - 27, 5%',
        obsluzh: 'От 0  ₽ / год',
        cashback: 'Отсутствует',
        age: '23 - 67 лет',
        treb: ['Постоянный доход', 'Гражданство РФ', 'Постоянная регистрация', 'Мобильный телефон', 'Рабочий телефон'],
        img: 'img/orders/raifcard.png',
        text: 'АО «Райффайзенбанк», лицензия ЦБ РФ №3292',
        href: 'https://gl.guruleads.ru/click/4161/444'
    }, {
        name: 'Банк Открытие «120 дней»',
        limit: 'До 500 000 ₽',
        period: '120 дней',
        stavka: '13,9 % - 29,9 %',
        obsluzh: 'От 0  ₽ / год',
        cashback: 'Отсутствует',
        age: '21 - 75 лет',
        treb: ['Постоянный доход', 'Гражданство РФ', 'Работа в регионе присутствия банка'],
        img: 'img/orders/opencard.png',
        text: 'ПАО Банк «ФК Открытие», лицензия ЦБ РФ №2209',
        href: 'https://gl.guruleads.ru/click/4161/553'
    }, {
        name: 'Банк Открытие «OpenCard»',
        limit: 'До 500 000 ₽',
        period: '55 дней',
        stavka: '13,9 % - 29,9 %',
        obsluzh: 'Бесплатно',
        cashback: '1 % - 11 %',
        age: '21 - 75 лет',
        treb: ['Постоянный доход', 'Гражданство РФ', 'Постоянная регистрация'],
        img: 'img/orders/opencard2.png',
        text: 'ПАО Банк «ФК Открытие», лицензия ЦБ РФ №2209',
        href: 'https://gl.guruleads.ru/click/4161/185'
    },
    {
        name: 'Ренессанс «Разумная»',
        limit: 'До 300 000 ₽',
        period: '145 дней',
        stavka: '23,9 %',
        obsluzh: 'Бесплатно',
        cashback: '0,1 % - 30 %',
        age: '20 - 70 лет',
        treb: ['Постоянный доход', 'Гражданство РФ', 'Постоянная регистрация', 'Мобильный телефон', 'Работа в регионе присутствия банка'],
        img: 'img/orders/razum.jpg',
        text: 'ООО «Ренессанс Кредит», лицензия ЦБ РФ №3354',
        href: 'https://gl.guruleads.ru/click/4161/744'
    }, {
        name: 'Тинькофф «Tinkoff Drive»',
        limit: 'До 700 000 ₽',
        period: '55 дней',
        stavka: '15 % - 29,9 %',
        obsluzh: '990 ₽ / год',
        cashback: '1 % - 30 %',
        age: '18 - 70 лет',
        treb: ['Постоянный доход', 'Гражданство РФ', 'Постоянная регистрация', 'Временная регистрация'],
        img: 'img/orders/tincard.png',
        text: 'АО «Тинькофф Банк», лицензия ЦБ РФ №2673',
        href: 'https://gl.guruleads.ru/click/4161/450'
    }, {
        name: 'Альфа Банк «100 дней без процентов»',
        limit: 'До 500 000 ₽',
        period: '100 дней',
        stavka: '11,99 % - 27,87 %',
        obsluzh: 'От 0 ₽ / год',
        cashback: 'Отсутствует',
        age: '18 - 65 лет',
        treb: ['Постоянный доход', 'Гражданство РФ', 'Постоянная регистрация', 'Мобильный телефон', 'Рабочий телефон'],
        img: 'img/orders/alfacard.png',
        text: 'АО «Альфа-банк», лицензия ЦБ РФ №1326',
        href: 'https://gl.guruleads.ru/click/4161/169'
    }, 
    {
        name: 'Тинькофф «Tinkoff Platinum»',
        limit: 'До 700 000 ₽',
        period: '55 дней',
        stavka: '12 % - 29,9 %',
        obsluzh: '590 ₽ / год',
        cashback: '1 % - 30 %',
        age: '18 - 70 лет',
        treb: ['Постоянный доход', 'Гражданство РФ', 'Постоянная регистрация', 'Временная регистрация', 'Мобильный телефон'],
        img: 'img/orders/tinkofplat.png',
        text: 'АО «Тинькофф Банк», лицензия ЦБ РФ №2673',
        href: 'https://gl.guruleads.ru/click/4161/135'
    }, {
        name: 'Восточный Банк «Кредит 90 дней без %»',
        limit: 'До 500 000 ₽',
        period: '90 дней',
        stavka: '21 % - 28 %',
        obsluzh: 'Бесплатно',
        cashback: '0,1 % - 40%',
        age: '26 - 71 лет',
        treb: ['Постоянный доход', 'Гражданство РФ'],
        img: 'img/orders/vostcard.png',
        text: 'ПАО КБ «Восточный», лицензия ЦБ РФ №1460',
        href: 'https://gl.guruleads.ru/click/4161/141'
    }, 
    {
        name: 'МТС Банк «МТС Cashback»',
        limit: 'До 500 000 ₽',
        period: '111 дней',
        stavka: '11,9 % - 25,9 %',
        obsluzh: 'Бесплатно',
        cashback: '1 % - 25 %',
        age: '20 - 70 лет',
        treb: ['Гражданство РФ', 'Постоянная регистрация'],
        img: 'img/orders/mtscard.png',
        text: 'ПАО «МТС-Банк», лицензия ЦБ РФ №2268',
        href: 'https://gl.guruleads.ru/click/4161/425'
    }, {
        name: 'МТС Банк «МТС Деньги Weekend»',
        limit: 'До 299 999 ₽',
        period: '51 дней',
        stavka: '24,9 % - 27 %',
        obsluzh: '1 200 ₽ / год',
        cashback: '1 % - 9 %',
        age: '20 - 70 лет',
        treb: ['Гражданство РФ', 'Постоянная регистрация'],
        img: 'img/orders/mtscard2.png',
        text: 'ПАО «МТС-Банк», лицензия ЦБ РФ №2268',
        href: 'https://gl.guruleads.ru/click/4161/423'
    }, {
        name: 'Совкомбанк «Халва»',
        limit: 'До 350 000₽',
        period: '1095 дней',
        stavka: '10 %',
        obsluzh: 'Бесплатно',
        cashback: '6 %',
        age: '20 - 75 лет',
        treb: ['Постоянный доход', 'Гражданство РФ', 'Постоянная регистрация', 'Работа в регионе присутствия банка', 'Мобильный телефон'],
        img: 'img/orders/halva.png',
        text: 'ПАО «Совкомбанк», лицензия ЦБ РФ №963',
        href: 'https://gl.guruleads.ru/click/4161/59'
    },
    {
        name: 'Экспобанк «Кредитная карта»',
        limit: 'До 350 000₽',
        period: '56 дней',
        stavka: '23.9% - 27.9%',
        obsluzh: 'Бесплатно',
        cashback: 'отсутствует',
        age: '21-70 лет',
        treb: ['Постоянный доход', 'Гражданство РФ'],
        img: 'img/orders/expo.jpg',
        text: 'Экспобанк - ООО «Экспобанк», лицензия ЦБ РФ №2998',
        href: 'https://gl.guruleads.ru/click/4161/645'
    }],

    dibet: [
    {
        name: 'UniCredit Bank «АвтоКарта»',
        obsluzh: 'От 0 ₽ / год',
        snyatie: '0,5% (не менее чем 300 ₽)',
        limit: ['До 200 000 ₽/ день', 'До 500 000 ₽/ месяц'],
        procent: 'Отсутствует',
        cashback: '1 % - 20 %',
        sms: '60 ₽ / месяц',
        type: ['visa', 'mir', 'master'],
        img: 'img/orders/debetuni.png',
        text: 'АО «ЮниКредит Банк», лицензия №1',
        href: 'https://gl.guruleads.ru/click/4161/408'
    },
    {
        name: 'Росбанк «МОЖНОВСЁ»',
        obsluzh: '599 ₽ / год',
        snyatie: 'Бесплатно',
        limit: ['До 200 000 ₽/ день', 'До 800 000 ₽/ месяц'],
        procent: 'До 6 %',
        cashback: '1 % - 10 %',
        sms: 'от 0 ₽ / месяц',
        type: ['visa'],
        img: 'img/orders/rosdebet.png',
        text: 'ПАО «РОСБАНК», лицензия ЦБ РФ №2272',
        href: 'https://gl.guruleads.ru/click/4161/435'
    },
    {
        name: 'Райффайзен Банк «Кэшбэк»',
        obsluzh: 'Бесплатно',
        snyatie: 'Бесплатно',
        limit: ['До 200 000 ₽/ день', 'До 1 000 000 ₽/ месяц'],
        procent: 'Отсутствует',
        cashback: '0,1 % - 40 %',
        sms: '60 ₽ / месяц',
        type: ['master'],
        img: 'img/orders/raifdebet.png',
        text: 'АО «Райффайзенбанк», лицензия ЦБ РФ №3292',
        href: 'https://gl.guruleads.ru/click/4161/443'
    },
    {
        name: 'Локо Банк «ЛокоЯрко»',
        obsluzh: 'Бесплатно',
        snyatie: 'Бесплатно',
        limit: ['До 300 000 ₽/ месяц', ''],
        procent: '4,5 %',
        cashback: '1,3 % - 25 %',
        sms: 'Бесплатно',
        type: ['visa', 'master'],
        img: 'img/orders/loko.jpg',
        text: 'КБ «ЛОКО-Банк», лицензия ЦБ РФ №2707',
        href: 'https://gl.guruleads.ru/click/4161/509'
    },
    {
        name: 'Уральский Банк «ПОРА»',
        obsluzh: '990 ₽ / год',
        snyatie: 'Бесплатно',
        limit: ['До 100 000 ₽/ день', 'До 1 000 000 ₽/ месяц'],
        procent: 'До 6 %',
        cashback: '1 % - 6 %',
        sms: 'от 0 ₽ / месяц',
        type: ['visa'],
        img: 'img/orders/poradebet.png',
        text: 'ПАО КБ «УБРиР», лицензия ЦБ РФ №429',
        href: 'https://gl.guruleads.ru/click/4161/415'
    },
    {
        name: 'Экспобанк «DIGITAL»',
        obsluzh: 'Бесплатно',
        snyatie: 'Бесплатно',
        limit: ['До 300 000 ₽/ день', 'До 300 000 ₽/ месяц'],
        procent: 'До 5 %',
        cashback: '1 %',
        sms: '50 ₽ / месяц',
        type: ['visa', 'master'],
        img: 'img/orders/digitaldebet.png',
        text: 'ООО «Экспобанк», лицензия ЦБ РФ №2998',
        href: 'https://gl.guruleads.ru/click/4161/567'
    },
    {
        name: 'Газпромбанк «Умная»',
        obsluzh: 'От 0 ₽ / год',
        snyatie: 'Бесплатно',
        limit: ['До 200 000 ₽/ день', 'До 1 500 000 ₽/ месяц'],
        procent: 'До 6 %',
        cashback: '1 % - 10 %',
        sms: '59 ₽ / месяц',
        type: ['visa'],
        img: 'img/orders/umnayadebet.png',
        text: 'АО «Газпромбанк», лицензия ЦБ РФ №354',
        href: 'https://gl.guruleads.ru/click/4161/624'
    },
    {
        name: 'Банк Открытие «Opencard»',
        obsluzh: 'Бесплатно',
        snyatie: 'Бесплатно',
        limit: ['До 200 000 ₽/ день', 'До 1 000 000 ₽/ месяц'],
        procent: 'До 5,8 %',
        cashback: '1 % - 11 %',
        sms: '59 ₽ / месяц',
        type: ['visa'],
        img: 'img/orders/opencarddebet.png',
        text: 'ПАО Банк «ФК Открытие», лицензия ЦБ РФ №2209',
        href: 'https://gl.guruleads.ru/click/4161/181'
    },
    {
        name: 'Банк Открытие «Travel Opencard»',
        obsluzh: 'Бесплатно',
        snyatie: 'Бесплатно',
        limit: ['До 200 000 ₽/ день', 'До 1 000 000 ₽/ месяц'],
        procent: 'До 5,8 %',
        cashback: '1 % - 11 %',
        sms: '59 ₽ / месяц',
        type: ['visa'],
        img: 'img/orders/traveldebet.png',
        text: 'ПАО Банк «ФК Открытие», лицензия ЦБ РФ №2209',
        href: 'https://gl.guruleads.ru/click/4161/603'
    },
    
    {
        name: 'Альфа Банк «AlfaTravel»',
        obsluzh: 'Бесплатно',
        snyatie: 'Бесплатно',
        limit: ['До 500 000 ₽/ день', 'До 1 000 000 ₽/ месяц'],
        procent: 'До 5 %',
        cashback: '1,5 % - 2 %',
        sms: 'От 0 ₽ / месяц',
        type: ['master'],
        img: 'img/orders/alfadebet.png',
        text: 'АО «АЛЬФА-БАНК», лицензия ЦБ РФ №1326',
        href: 'https://gl.guruleads.ru/click/4161/370'
    },
    ],
    zaim: [{
        name: '«CarCapital»',
        srok: 'От 2 до 36 месяцев',
        stavka: 'От 2% в месяц',
        summa: '50 000 - 500 000 ₽',
        predmet: 'ПТС',
        how: 'На карту',
        age: '21 - 65 лет',
        docs: 'Паспорт / ПТС / СТС',
        treb: ['Постоянный доход', 'Гражданство РФ', 'Постоянная регистрация', 'Временная регистрация'],
        text: 'ООО МКК «Франк», №1903045008182',
        img: 'img/orders/car.png',
        href: 'https://gl.guruleads.ru/click/4161/461 '
    }, {
        name: '«БЖФ Банк»',
        srok: 'От 1 до 30 лет',
        stavka: '9,1 %-  16,49 % в год',
        summa: '450 000 - 30 000 000  ₽',
        predmet: 'Недвижимость',
        how: 'На карту / Наличными',
        age: '21 - 65 лет',
        docs: 'Паспорт / СНИЛС / Документы по предоставляемому залогу / Справка 2-НДФЛ / Справка по форме банка',
        treb: ['Постоянный доход', 'Гражданство РФ', 'Постоянная регистрация', 'Временная регистрация', 'Общий стаж от 12 месяцев', 'Стаж на последнем месте от 3 месяцев'],
        text: 'АО «Банк ЖилФинанс», лицензия ЦБ РФ №3138',
        img: 'img/orders/bzhf.png',
        href: 'https://gl.guruleads.ru/click/4161/355  '
    }, 
    {
        name: '«Восточный Банк»',
        srok: 'От 13 до 240 месяцев',
        stavka: 'от 8,9 % в год',
        summa: '300 000 - 30 000 000  ₽',
        predmet: 'Недвижимость',
        how: 'На карту / Наличными',
        age: '21 - 76 лет',
        docs: 'Паспорт / СНИЛС / Документы по предоставляемому залогу / Справка 2-НДФЛ / Справка по форме банка',
        treb: ['Гражданство РФ', 'Постоянная регистрация', 'Общий стаж от 3 месяцев'],
        text: 'ПАО КБ «Восточный», лицензия ЦБ РФ №1460',
        img: 'img/orders/vost.png',
        href: 'https://gl.guruleads.ru/click/4161/268  '
    }, {
        name: '«МигКредит»',
        srok: 'От 5 до 12 месяцев',
        stavka: 'От 0,24 % в месяц',
        summa: '75 000 - 590 000  ₽',
        predmet: 'ПТС',
        how: 'На карту / Наличными',
        age: '24 - 60 лет',
        docs: 'Паспорт / Документы по предоставляемому залогу / Водительское удостоверение',
        treb: ['Гражданство РФ', 'Постоянная регистрация'],
        text: 'ООО МФК «МигКредит», №2110177000037',
        img: 'img/orders/migmoney.png',
        href: 'https://gl.guruleads.ru/click/4161/284'
    }, {
        name: '«Тинькофф»',
        srok: 'От 1 до 15 лет',
        stavka: '6,9% – 30% в год',
        summa: '200 000 - 15 000 000 ₽',
        predmet: 'Недвижимость',
        how: 'На карту',
        age: '18 - 65 лет',
        docs: 'Паспорт / СНИЛС / Документы по предоставляемому залогу',
        treb: ['Постоянный доход', 'Гражданство РФ', 'Постоянная регистрация', 'Временная регистрация'],
        text: 'АО «Тинькофф Банк», лицензия ЦБ РФ №2673',
        img: 'img/orders/tinkredit.png',
        href: 'https://gl.guruleads.ru/click/4161/449'
    },
    {
        name: '«Быстро Деньги»',
        srok: 'От 3 до 36 месяцев',
        stavka: 'от 0,082% в день',
        summa: '50 000 - 1 000 000 ₽',
        predmet: 'ПТС',
        how: 'На карту',
        age: '18 - 70 лет',
        docs: 'Паспорт / СНИЛС / Документы по предоставляемому залогу',
        treb: ['Гражданство РФ', 'Постоянная регистрация', 'Временная регистрация'],
        text: 'ООО МФК «Быстроденьги», №2110573000002',
        img: 'img/orders/bistro.png',
        href: 'https://gl.guruleads.ru/click/4161/449'
    }],
    ipoteka: [{
        name: '«РНКБ»',
        srok: 'От 3 до 25 лет',
        stavka: 'От 5,5 % - 9,5 %',
        summa: '600 000 - 15 000 000 ₽',
        vznos: 'От 15 %',
        type: 'Аннуитетный',
        age: '21 - 70 лет',
        stazh: 'От 12 месяцев',
        laststazh: 'От 6 месяцев',
        docs: 'Паспорт / СНИЛС / Заверенная копия трудовой книжки или трудовой договор',
        treb: ['Постоянный доход', 'Гражданство РФ', 'Постоянная регистрация', 'Временная регистрация'],
        text: 'ПАО «РНКБ Банк», лицензия ЦБ РФ №1354',
        img: 'img/orders/ipoteka1.png',
        href: 'https://gl.guruleads.ru/click/4161/595',
        trebDoc: 'Справка 2-НДФЛ / Справка по форме банка / Справка в свободной форме'
    },
    {
        name: '«Открытие»',
        srok: 'от 3 до 20 лет',
        stavka: 'от 5,99%',
        summa: '500 000 - 6 000 000₽',
        vznos: 'от 20%',
        type: 'Аннуитетный',
        age: '21-35 лет',
        stazh: 'от 12 месяцев',
        laststazh: 'от 6 месяцев',
        docs: 'Паспорт / СНИЛС / Заверенная копия трудовой книжки или трудовой договор',
        treb: ['Постоянный доход', 'Гражданство РФ', 'Постоянная регистрация', 'Временная регистрация'],
        text: 'ПАО Банк «ФК Открытие», лицензия ЦБ РФ №2209',
        img: 'img/orders/opening.png',
        href: 'https://gl.guruleads.ru/click/4161/186',
        trebDoc: 'Справка 2-НДФЛ / Справка по форме банка / Справка в свободной форме',
    },
    {
        name: '«Ак Барс Банк»',
        srok: 'от 1 до 30 лет',
        stavka: 'от 7,75%',
        summa: '650 000 - 20 000 000₽',
        vznos: 'от 10%',
        type: 'Аннуитетный',
        age: '18 - 70 лет',
        stazh: 'от 6 месяцев',
        laststazh: 'от 3 месяцев',
        docs: 'Паспорт / СНИЛС / Заверенная копия трудовой книжки или трудовой договор',
        treb: ['Постоянный доход', 'Гражданство РФ', 'Постоянная регистрация', 'Временная регистрация'],
        text: 'Ак Барс Банк - ПАО «АК БАРС», лицензия ЦБ РФ №25904',
        img: 'img/orders/bars.jpg',
        href: 'https://gl.guruleads.ru/click/4161/682',
        trebDoc: 'Справка 2-НДФЛ / Справка по форме банка / Справка в свободной форме'
    },
    {
        name: '«Райффайзен Банк»',
        srok: 'От 1 до 30 лет',
        stavka: 'От 7,99%',
        summa: '3 000 000 - 26 000 000 ₽',
        vznos: 'От 15 %',
        type: 'Аннуитетный',
        age: '21 - 65 лет',
        stazh: 'От 12 месяцев',
        laststazh: 'От 6 месяцев',
        docs: 'Паспорт / Заверенная копия трудовой книжки или трудовой договор / Свидетельства о браке (разводе, смерти супруга) или брачный контракт / Документы из банка по рефинансируемому кредиту',
        treb: ['Постоянный доход', 'Гражданство РФ', 'Постоянная регистрация', 'Временная регистрация'],
        text: 'АО «Райффайзенбанк», лицензия ЦБ РФ №3292',
        img: 'img/orders/ipoteka2.png',
        href: 'https://gl.guruleads.ru/click/4161/448',
        trebDoc: 'Справка 2-НДФЛ / Справка по форме банка / Портал «Госуслуги»'
    }
    ],
    refinance: [{
        name: '«Райффайзен Банк»',
        srok: 'От 1 до 30 лет',
        stavka: 'От 7,99%',
        summa: '3 000 000 - 26 000 000 ₽',
        vznos: 'От 15 000 ₽/мес',
        type: 'Аннуитетный',
        age: '21 - 65 лет',
        stazh: 'От 12 месяцев',
        laststazh: 'От 6 месяцев',
        docs: 'Паспорт / Заверенная копия трудовой книжки или трудовой договор / Свидетельства о браке (разводе, смерти супруга) или брачный контракт / Документы из банка по рефинансируемому кредиту',
        trebDoc: 'Справка 2-НДФЛ / Справка по форме банка / Портал «Госуслуги»',
        text: 'АО «Райффайзенбанк», лицензия ЦБ РФ №3292',
        img: 'img/orders/ipoteka2.png',
        href: 'https://gl.guruleads.ru/click/4161/445'
    },
    {
        name: '«Росбанк»',
        srok: 'От 13 месяцев до 7 лет',
        stavka: 'От 6,5 % - 12,9 %',
        summa: '50 000 - 3 000 000 ₽',
        vznos: 'От 15 000 ₽/мес',
        type: 'Аннуитетный',
        age: '21 - 65 лет',
        stazh: 'От 12 месяцев',
        laststazh: 'От 6 месяцев',
        docs: 'Паспорт / СНИЛС / Документы из банка по рефинансируемому кредиту',
        trebDoc: 'Справка 2-НДФЛ / Справка по форме банка / Портал «Госуслуги»',
        text: 'ПАО «РОСБАНК», лицензия ЦБ РФ №2272',
        img: 'img/orders/rosbank.png',
        href: 'https://gl.guruleads.ru/click/4161/434'
    },
    {
        name: '«МТС Банк»',
        srok: 'От 1 до 5 лет',
        stavka: 'От 5,9 % - 20,9 %',
        summa: '50 000 - 5 000 000 ₽',
        vznos: 'Постоянный',
        type: 'Аннуитетный',
        age: '20 - 65 лет',
        stazh: 'От 12 месяцев',
        laststazh: 'От 3 месяцев',
        docs: 'Паспорт / СНИЛС / Документы из банка по рефинансируемому кредиту',
        trebDoc: 'Справка 2-НДФЛ / Справка по форме банка',
        text: 'ПАО «МТС-Банк», лицензия ЦБ РФ №2268',
        img: 'img/orders/mts.png',
        href: 'https://gl.guruleads.ru/click/4161/427'
    }
    ],
    kassa: [
        {

            name: '«Совкомбанк»',
            opening: 'Бесплатно',
            obsluzh: 'От 190 ₽/ месяц',
            platezh: 'От 15 ₽',
            snyatie: 'От 1,5 % + 89 ₽',
            vnes: 'От 0 %',
            sms: 'Бесплатно',
            mobBank: 'Включено',
            text: 'ПАО «Совкомбанк», лицензия ЦБ РФ №963',
            img: 'img/orders/sovkom.png',
            href: 'https://gl.guruleads.ru/click/4161/281'
    
        },
        {

            name: '«Тинькофф»',
            opening: 'Бесплатно',
            obsluzh: 'От 0 ₽/ месяц',
            platezh: 'От 19 ₽',
            snyatie: '1,5 % - 15 %',
            vnes: 'От 0 %',
            sms: 'Бесплатно',
            mobBank: 'Включено',
            text: 'АО «Тинькофф Банк», лицензия ЦБ РФ №2673',
            img: 'img/orders/tinkredit.png',
            href: 'https://gl.guruleads.ru/click/4161/551'
    
        },  {

        name: '«Райффайзен Банк»',
        opening: 'Бесплатно',
        obsluzh: 'От 0 ₽/ месяц',
        platezh: 'От 25 ₽',
        snyatie: '1,5 % - 5 %',
        vnes: 'От 0,19 % (минимум 290 ₽)',
        sms: 'От 49 ₽/ месяц',
        mobBank: 'Включено',
        text: 'АО «Райффайзенбанк», лицензия ЦБ РФ №3292',
        img: 'img/orders/raif.png',
        href: 'https://gl.guruleads.ru/click/4161/488'

    },{

        name: '«Банк Открытие»',
        opening: 'Бесплатно',
        obsluzh: 'От 0 ₽/ месяц',
        platezh: 'От 17 ₽',
        snyatie: '0,99 % - 4,99 %',
        vnes: '0,15 %',
        sms: 'От 0 ₽',
        mobBank: 'Включено',
        text: 'ПАО Банк «ФК Открытие», лицензия ЦБ РФ №2209',
        img: 'img/orders/opening.png',
        href: 'https://gl.guruleads.ru/click/4161/731'

    }]
};
const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "TEST": {
            return {
                item: 1,
            }
        }
        default: {
            return state
        }
    }
}
export default reducer;