
import React from 'react';
import {
    IndividualIcon,
    CaseIcon,
    SecurityIcon,
    DocsIcon,
    ResultIcon,
    NewSpainCultureIcon,
    NewSpainStructureIcon,
    NewSpainEducationIcon
} from './components/ui/Icons';
import LuisImage from './luis_new.png';
import RoomImage from './assets/room.png';
import DiningImage from './assets/dining.png';
import PoolImage from './pool.png';
import RelaxZoneImage from './relax-zone.png';

export const LOGO_URL = 'https://static.tildacdn.com/tild3538-3165-4331-a533-326564303862/Frame_44.png';
export const WHATSAPP_LINK = "https://wa.me/34655207354";

export const selectionsData = [
    { date: '18.08.2024 - 25.08.2024', city: 'Валенсия', status: 'confirmed' },
    { date: '01.09.2024', city: 'Мадрид', status: 'confirmed' },
    { date: 'Дата будет скоро', city: 'Барселона', status: 'pending' },
];

export const aboutNumbers = [
    { value: '50', label: 'игроков прошли просмотр' },
    { value: '10', label: 'в топ-академиях' },
    { value: '10', label: 'в региональных клубах' },
    { value: '2024-2025', label: 'Сезон' }
];

export const teamData = [
    {
        name: 'Дмитрий Удод',
        role: 'Генеральный директор · Сооснователь ProStep',
        image: 'https://framerusercontent.com/images/EHt4lKO6yoQWVMML42DmzdSR6QM.jpg?width=4467&height=6701',
        description: 'Отвечает за стратегию агентства, переговоры с клубами и условия контрактов игроков. Курирует путь футболиста от просмотра до профессионального уровня.'
    },
    {
        name: 'Арсений Панферов',
        role: 'Руководитель скаутинга · Сооснователь ProStep',
        image: 'https://framerusercontent.com/images/eGe6nSQiiap65Lpw3ZxFnGzUs.jpg?width=4511&height=6766',
        description: 'Отвечает за отбор игроков, оценку потенциала и работу со скаутами и академиями. Принимает решения, кто и куда может быть продвинут в Испании и Европе.'
    },
    {
        name: 'Luis Luciente',
        role: 'Отдел развития',
        image: 'https://images.unsplash.com/photo-1519085185758-24dd0d735512?q=80&w=1974&auto=format&fit=crop',
        description: 'Бывший директор академий Valencia и Espanyol. Отвечает за футбольный прогресс игроков. Чётко понимает требования топ-клубов Европы.'
    }
];

export const whyUsData = [
    {
        title: 'Подготовка',
        icon: React.createElement(IndividualIcon),
        description: 'Перед просмотрами мы прокачиваем игрока психологически, по языку и по футболу, чтобы он вышел на поле уверенным и готовым показать свой максимум.'
    },
    {
        title: 'Контакты',
        icon: React.createElement(ResultIcon),
        description: 'У нас прямые связи по всему миру, что открывает больше возможностей для наших игроков в профессиональном футболе.'
    },
    {
        title: 'Лицензии',
        icon: React.createElement(DocsIcon),
        description: 'Оформление лицензии — один из самых тяжелых процессов в Европе. Мы берем это на себя, помогая семье получить долгожданное разрешение.'
    },
    {
        title: 'Подбор',
        icon: React.createElement(SecurityIcon),
        description: 'Мы работаем только с клубами и академиями, которые лояльно относятся к нашим игрокам и гарантируют условия.'
    },
    {
        title: 'Сопровождение',
        icon: React.createElement(CaseIcon),
        description: 'От заявки на отбор до трансфера и подписания контракта — вы не одни. Мы сопровождаем игрока на каждом этапе.'
    }
];

export const programFeatures = [
    'Ежедневные тренировки',
    'Официальные матчи',
    'Медицинское страхование',
    'Оформление документов',
    'Обучение (по запросу)',
    'Проживание на базе академии',
    '3-разовое питание',
    'Анализ прогресса каждые 3 месяца',
    'Агентское сопровождение весь сезон'
];

export const expectationsData = [
    {
        id: 1,
        title: 'Контракт',
        type: 'success',
        description: 'Если игрок адаптировался, выучил язык и быстро прогрессирует, академия возьмет его на контракт и закроет все расходы.'
    },
    {
        id: 2,
        title: 'Есть прогресс',
        type: 'develop',
        description: 'Если игроку еще нужно время на адаптацию, но он хорошо себя показывает, академия оставит его в системе и закроет расходы частично.'
    },
    {
        id: 3,
        title: 'Нет предложений',
        type: 'feedback',
        description: 'Мы дадим честную обратную связь и поможем в дальнейшем развитии в других клубах Испании или Европы.'
    }
];

export const playersData = [
    {
        id: 0,
        name: 'Александр, 2009 г.р.',
        position: 'Крайний нападающий',
        image: 'https://lh3.googleusercontent.com/d/1yYGiy01cRg3Z0vuXNidrAxYKuZM0oPrr',
        story: 'Саша — игрок сборной Латвии U17. До ProStep 3 года ездил на просмотры по Европе, но везде слышал одно и то же: «перспективный, но приходи в следующем году». Мы оценили его уровень, подобрали академию и организовали 2-недельный просмотр в Real Murcia. После переговоров Саша был подписан в академию.'
    },
    {
        id: 1,
        name: 'Давид, 2008',
        position: 'Крайний защитник',
        image: 'https://i.ibb.co.com/0k2khfJ/image.jpg',
        story: 'Мы живём в Англии, сами из Молдовы. Наш сын мечтал играть в испанской академии, но мы не понимали, как правильно выстроить этот путь. Через ProStep Давид получил просмотр в Real Murcia. Мы приехали на неделю — агентство сопровождало нас на всех этапах: оформили лицензию, помогли с ВНЖ и провели переговоры с академией. В итоге Давид остался в системе Real Murcia, а ProStep продолжает сопровождать его развитие и цели на сезон.'
    },
    {
        id: 2,
        name: 'Тимур, 2013 г.',
        position: 'Крайний нападающий',
        image: 'https://framerusercontent.com/images/vXOIAYQR4w8Orz5KdLFi0hNY8Oo.jpg?width=4032&height=3024',
        story: 'У Тимура была мечта — играть в Испании. Мы обратились в ProStep и приняли решение переехать. Агентство сработало на 100%: помогли с лицензией, ВНЖ, поиском квартиры и устроили Тимура в клуб Alboraya — филиал Valencia CF. Сейчас ProStep сопровождает его развитие, помогает с дополнительными тренировками и выстраивает путь к следующему уровню — академии.'
    },
    {
        id: 3,
        name: 'Святослав, 2008',
        position: 'Центральный защитник',
        image: 'https://framerusercontent.com/images/v1KgcKRNDwFw63aZ3JpzLQL5tls.jpg?width=4032&height=3024',
        story: 'Жил в Испании 3 года. Мы помогли ему попасть в более сильный клуб Alboraya, где он прогрессирует как профессионал.'
    },
    {
        id: 4,
        name: 'Павел, 2015',
        position: 'Центральный защитник',
        image: 'https://framerusercontent.com/images/uT7EVQllYFLziZXOKAf7oCbZqRM.jpg?width=3905&height=5857',
        story: 'Подобрали клуб San José после переезда семьи в Испанию. Сейчас Павел играет против лучших академий Ла Лиги.'
    }
];

export const partners = [
    { name: 'Real Murcia', city: 'Мурсия', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/9/93/Real_Murcia_CF_logo.svg', x: '66%', y: '73%' },
    { name: 'Hércules CF', city: 'Аликанте', logoUrl: 'https://i.ibb.co.com/20sbrLsJ/image.png', x: '70%', y: '65%' },
    { name: 'Valencia CF', city: 'Валенсия', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Valenciacf.svg', x: '68%', y: '57%' },
    { name: 'Levante UD', city: 'Валенсия', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Levante_Uni%C3%B3n_Deportiva%2C_S.A.D._logo.svg', x: '72%', y: '57%' },
    { name: 'Villarreal CF', city: 'Вильярреаль', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Villarreal_CF_logo-en.svg', x: '72%', y: '48%' },
    { name: 'FC Barcelona', city: 'Барселона', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', x: '78%', y: '45%' },
    { name: 'Atlético Madrid', city: 'Мадрид', logoUrl: 'https://i.ibb.co.com/rGwJV2m8/image.png', x: '48%', y: '44%' },
    { name: 'Real Betis', city: 'Севилья', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/1/13/Real_betis_logo.svg', x: '30%', y: '74%' },
    { name: 'RC Celta', city: 'Виго', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/1/12/RC_Celta_de_Vigo_logo.svg', x: '16%', y: '12%' },
    { name: 'Sevilla FC', city: 'Севилья', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg', x: '32%', y: '72%' }
];

export const faqData = [
    {
        question: 'Когда и для чего ехать в Испанию?',
        answer: 'Сюда нужно ехать чем раньше, тем лучше. Здесь самая сильная система развития. Игрок, прошедший испанскую школу, сможет заиграть в любой стране на профессиональном уровне. Сюда едут за развитием!'
    },
    {
        question: 'Что даёт годовая программа?',
        answer: 'Это постоянная игровая практика, адаптация к требованиям европейских клубов, полное сопровождение и реальные шансы на контракт или частичное покрытие расходов в будущем.'
    },
    {
        question: 'Безопасно ли отправлять ребёнка в Испанию?',
        answer: 'Да. Мы обеспечиваем проживание, контроль, постоянную связь с семьёй и помощь с документами и обучением.'
    },
    {
        question: 'А если ребёнок не знает испанский вообще?',
        answer: 'Это нормально. Язык приходит через тренировки и быт. Мы также можем организовать дополнительные языковые курсы.'
    },
    {
        question: 'Как совмещаются футбол и обучение?',
        answer: 'Мы помогаем выстроить формат обучения по запросу семьи, чтобы спорт не исключал качественное образование.'
    }
];

export const stepsData = [
    { title: 'Заявка и первичная оценка' },
    { title: 'Подбор формата' },
    { title: 'Подготовка и выезд' },
    { title: 'Адаптация и сезон' },
    { title: 'Контракт / следующий шаг' }
];

export const stagesData = [
    {
        step: 'Этап 1',
        title: 'Заявка и анализ',
        description: 'Оценка видео и анкеты игрока нашими скаутами.',
        icon: React.createElement(IndividualIcon)
    },
    {
        step: 'Этап 2',
        title: 'Подбор формата',
        description: 'Выбор оптимального клуба и программы подготовки.',
        icon: React.createElement(ResultIcon)
    },
    {
        step: 'Этап 3',
        title: 'Выезд и адаптация',
        description: 'Оформление документов и начало тренировочного процесса.',
        icon: React.createElement(DocsIcon)
    }
];

export const projectsData = [
    {
        title: 'Годовая программа',
        shortTitle: 'Годовая',
        img: 'https://framerusercontent.com/images/uT7EVQllYFLziZXOKAf7oCbZqRM.jpg?width=1200',
        badge: 'Популярно',
        badgeColor: 'bg-lime-400 text-black',
        features: ['Полный сезон в Испании', 'Официальная лицензия', 'Проживание и питание']
    },
    {
        title: 'VIP сопровождение',
        shortTitle: 'VIP',
        img: 'https://framerusercontent.com/images/4bK46Omvcbuu8IX4Rex4f6zW73I.jpg?width=1200',
        badge: 'Элитный',
        badgeColor: 'bg-amber-400 text-black',
        features: ['Индивидуальный план', 'Личный агент', 'Юридическая поддержка']
    },
    {
        title: 'Просмотры в академиях',
        shortTitle: 'Просмотры',
        img: 'https://framerusercontent.com/images/xJ98euRfIrM3o4r6t7dUM57t3w.jpg?width=1200',
        features: ['Оценка скаутами', 'Топ академии Ла Лиги', 'Отчет о игроке']
    },
    {
        title: 'Летние лагеря',
        shortTitle: 'Лагеря',
        img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200',
        features: ['6-12 лет', 'Интенсивные тренировки', 'Культурная программа']
    }
];

export const whySpainData = [
    {
        title: 'Футбольная культура',
        description: 'Испания живет футболом. Здесь лучшие методики тренировок и высочайшая конкуренция.',
        icon: React.createElement(NewSpainCultureIcon)
    },
    {
        title: 'Инфраструктура',
        description: 'Поля мирового уровня, медицинские центры и современные базы академий.',
        icon: React.createElement(NewSpainStructureIcon)
    },
    {
        title: 'Образование',
        description: 'Возможность совмещать спорт высших достижений с качественным европейским обучением.',
        icon: React.createElement(NewSpainEducationIcon)
    }
];

export const casesData = [
    {
        id: 1,
        name: 'Александр',
        position: 'Крайний нападающий',
        club: 'Реал Мурсия',
        image: 'https://lh3.googleusercontent.com/d/1yYGiy01cRg3Z0vuXNidrAxYKuZM0oPrr',
        story: 'Александр перешел в Реал Мурсия после двухнедельного просмотра, организованного нашей командой.'
    },
    {
        id: 2,
        name: 'Давид',
        position: 'Крайний защитник',
        club: 'Вильярреал',
        image: 'https://framerusercontent.com/images/AUP2rQSnaaNkW6DFMNJhgoJFdE.jpg?width=1200',
        story: 'Давид прошел сложный путь адаптации и теперь является важным игроком молодежного состава.'
    },
    {
        id: 3,
        name: 'Тимур',
        position: 'Крайний нападающий',
        club: 'Alboraya UD',
        image: 'https://framerusercontent.com/images/vXOIAYQR4w8Orz5KdLFi0hNY8Oo.jpg?width=1200',
        story: 'Семья обратилась за помощью в поиске клуба. Сейчас Тимур играет в Alboraya UD.'
    }
];

export const landingPageData: Record<string, any> = {
    astana: {
        city: 'Астана',
        slug: 'astana',
        hero: {
            title: '3-дневный Отбор в Астане',
            subtitle: 'Клуб Real Murcia и агентство ProStep приедут лично.',
            description: 'Покажи себя и попади в академию мечты уже после отбора.',
            date: 'Март месяц',
            age: '2013-2008',
            location: 'AirArena (купол)',
            limit: '100 игроков',
            limitDisclaimer: 'Только 10 лучших поедут в Испанию!',
            button: 'Записаться на отбор',
            subButton: 'места ограничены'
        },
        benefits: {
            title: 'Что вы получите после отбора?',
            items: [
                'Возможность выиграть поездку на просмотр в Испанию',
                'Получите объективную оценку уровня игрока',
                'Рекомендации, что улучшать и куда двигаться дальше.'
            ]
        },
        painPoints: {
            title: 'Почему талантливые игроки из Казахстана не доходят до Европы',
            intro: 'В наших странах много сильных футболистов. Но у большинства нет главного — людей и клуба, которые поведут дальше.',
            problem: 'Игрока хвалят, говорят «перспективный», но:',
            list: [
                'нет доступа к европейским клубам',
                'нет чёткого плана: куда, с кем, в каком возрасте?',
                'нет тех людей, кто возьмёт ответственность за результат'
            ],
            result: 'В итоге годы теряются и талант уходит'
        },
        solution: {
            title: 'РЕШЕНИЕ',
            description: 'Поэтому мы привозим в Астану не просто отбор. Мы привозим клуб и агентство.',
            partners: [
                { name: 'Real Murcia', description: 'академия, которая имеет много иностранных игроков и умеет развивать их.' },
                { name: 'ProStep', description: 'агентство, которое ведёт игрока дальше' }
            ],
            list: [
                'даём честную оценку уровня',
                'показываем реальную перспективу',
                'выстраиваем путь в Испании'
            ],
            footer: 'Даже если игрок не подойдёт этому клубу — мы поможем с развитием и другими академиями в Испании. Отбор — это вход в систему, а не разовая попытка.'
        },
        coldDetails: {
            title: 'ЭТО НЕ ОЧЕРЕДНОЙ ОТБОР!',
            subtitle: 'И вот почему:',
            list: [
                '3 дня оценки, а не 1',
                'будут присутствовать испанские скауты, не только местные тренеры',
                'укажем на сильные и слабые стороны и рекомендации по развитию',
                'Понимание следующего шага после отбора.'
            ]
        },
        scouts: [
            {
                name: 'Секретный скаут',
                role: 'Скаут REAL-MURCI',
                image: '', // Will handle empty image as silhouette in component
                description: '',
                isHidden: true,
                achievements: [
                    'Бывший тренер игрока Real Madrid',
                    'Тренер UEFA',
                    'Нынешний тренер-скаут Real Murcia'
                ]
            },
            {
                name: 'Luis Vicente Mateo',
                role: 'Представитель топ клубов',
                image: LuisImage,
                description: '',
                highlightRole: true,
                achievements: [
                    '6 лет — директор академии Valencia',
                    '2 года — спортивный директор академии Espanyol',
                    'Лицензия UEFA PRO'
                ]
            }
        ],
        agents: [
            {
                name: 'Дмитрий Удод',
                role: 'Сооснователь футбольного агентства ProStep',
                image: 'https://framerusercontent.com/images/EHt4lKO6yoQWVMML42DmzdSR6QM.jpg?width=4467&height=6701',
                description: 'Подписал более 10 игроков в испанские клубы и академии за последний сезон',
                achievements: [
                    'Выпускник ведущих академий: Динамо Киев, Легия Варшава, Patacona',
                    'Более 100 матчей в La Liga U19',
                    'Отвечает за условия контрактов и стратегию развития футболистов.'
                ],
                highlightAchievements: true
            },
            {
                name: 'Арсений Панферов',
                role: 'Арсений, сооснователь агентства ProStep',
                image: 'https://framerusercontent.com/images/eGe6nSQiiap65Lpw3ZxFnGzUs.jpg?width=4511&height=6766',
                description: 'Прошёл школу Levante.',
                achievements: [
                    'Подписал 15 игроков в испанские клубы/ академии за последний сезон',
                    '20 лет опыта работы в системе испанского футбола',
                    'документы, лицензии и расширение контактов по всей Европе.'
                ],
                highlightAchievements: true
            }
        ],
        timer: {
            title: 'До начала отбора'
        },
        journeySteps: {
            title: 'Этапы пути к мечте',
            steps: [
                {
                    number: '1',
                    title: 'Пройти отбор в Астане'
                },
                {
                    number: '2',
                    title: 'Поехать на просмотр в Испанию'
                },
                {
                    number: '3',
                    title: 'Остаться в Испании на сезон'
                }
            ]
        },
        ctaSection: {
            title: 'Стань следующим казахским игроком подписанным в Испании',
            button: 'Хочу участвовать'
        },
        steps: [
            'Пройти отбор в Астане',
            'Поехать на просмотр в Испанию',
            'Остаться в Испании на сезон'
        ],
        winners: {
            title: 'Куда поедут лучшие игроки',
            description: '10 Лучших игроков будут приглашены на просмотр в академию Real Murcia по своему возрасту и уровню подготовки.',
            highlight: 'Самых талантливых агентство возьмет, покрыв все расходы (кроме перелета).'
        },
        players: playersData, // Use the detailed players data
        finalCta: {
            text: 'Хочешь стать следующем казахским футболистом в Испанской академии?',
            button: 'Запишись на отбор'
        },
        pricing: {
            title: 'Стоимость отбора',
            includes: [
                'Шанс поехать на просмотр в Испанию',
                '3 дня тренировок с испанскими специалистами',
                'Рекомендации по дальнейшему развитию',
                'Анализ сильных и слабых сторон по сравнению с игроками академии',
                'Награды за участие',
                'Призы победившим участникам'
            ],
            price: '60 000',
            currency: 'тенге',
            button: 'Записаться без оплаты',
            disclaimer: 'Бесплатная запись до 10 февраля'
        },
        statistics: {
            title: 'Результаты ProStep',
            subtitle: 'Сезон 24-25',
            items: [
                { value: '50', label: 'игроков прошли просмотр' },
                { value: '10', label: 'в топ-академиях' },
                { value: '10', label: 'в региональных клубах' }
            ]
        },
        destination: {
            title: 'Куда поедут лучшие игроки после отбора?',
            text: '10 лучших игроков будут приглашены в академию Реал Мурсию по своему уровню и возрасту.',
            highlight: 'Самых талантливых агентство возьмёт все расходы на себя (кроме перелёта).',
            button: 'Подать заявку'
        },
        media: {
            video: {
                title: 'Один день футболиста',
                youtubeId: 'uQxiRsHB6Sc'
            },
            gallery: {
                title: 'Где будут жить',
                images: [
                    { label: 'Комната', src: RoomImage },
                    { label: 'Столовая', src: DiningImage },
                    { label: 'Бассейн', src: PoolImage },
                    { label: 'Зона отдыха', src: RelaxZoneImage }
                ]
            }
        },
    },
    bishkek: {
        city: 'Бишкек',
        slug: 'bishkek',
        hero: {
            title: '3-дневный Отбор в Бишкеке',
            subtitle: 'Клуб Real Murcia и агентство ProStep приедут лично.',
            description: 'Покажи себя и попади в академию мечты уже после отбора.',
            date: 'Март месяц',
            age: '2013-2008',
            location: 'Спорткомплекс (уточняется)',
            limit: '100 игроков',
            limitDisclaimer: 'Только 10 лучших поедут в Испанию!',
            button: 'Записаться на отбор',
            subButton: 'места ограничены'
        },
        benefits: {
            title: 'Что вы получите после отбора?',
            items: [
                'Возможность выиграть поездку на просмотр в Испанию',
                'Получите объективную оценку уровня игрока',
                'Рекомендации, что улучшать и куда двигаться дальше.'
            ]
        },
        painPoints: {
            title: 'Почему талантливые игроки из Кыргызстана не доходят до Европы',
            intro: 'В наших странах много сильных футболистов. Но у большинства нет главного — людей и клуба, которые поведут дальше.',
            problem: 'Игрока хвалят, говорят «перспективный», но:',
            list: [
                'нет доступа к европейским клубам',
                'нет чёткого плана: куда, с кем, в каком возрасте?',
                'нет тех людей, кто возьмёт ответственность за результат'
            ],
            result: 'В итоге годы теряются и талант уходит'
        },
        solution: {
            title: 'РЕШЕНИЕ',
            description: 'Поэтому мы привозим в Бишкек не просто отбор. Мы привозим клуб и агентство.',
            partners: [
                { name: 'Real Murcia', description: 'академия, которая имеет много иностранных игроков и умеет развивать их.' },
                { name: 'ProStep', description: 'агентство, которое ведёт игрока дальше' }
            ],
            list: [
                'даём честную оценку уровня',
                'показываем реальную перспективу',
                'выстраиваем путь в Испании'
            ],
            footer: 'Даже если игрок не подойдёт этому клубу — мы поможем с развитием и другими академиями в Испании. Отбор — это вход в систему, а не разовая попытка.'
        },
        coldDetails: {
            title: 'ЭТО НЕ ОЧЕРЕДНОЙ ОТБОР!',
            subtitle: 'И вот почему:',
            list: [
                '3 дня оценки, а не 1',
                'будут присутствовать испанские скауты, не только местные тренеры',
                'укажем на сильные и слабые стороны и рекомендации по развитию',
                'Понимание следующего шага после отбора.'
            ]
        },
        scouts: [
            {
                name: 'Секретный скаут',
                role: 'Скаут REAL-MURCI',
                image: '',
                description: '',
                isHidden: true,
                achievements: [
                    'Бывший тренер игрока Real Madrid',
                    'Тренер UEFA',
                    'Нынешний тренер-скаут Real Murcia'
                ]
            },
            {
                name: 'Luis Vicente Mateo',
                role: 'Представитель топ клубов',
                image: LuisImage,
                description: '',
                highlightRole: true,
                achievements: [
                    '6 лет — директор академии Valencia',
                    '2 года — спортивный директор академии Espanyol',
                    'Лицензия UEFA PRO'
                ]
            }
        ],
        agents: [
            {
                name: 'Дмитрий Удод',
                role: 'Сооснователь футбольного агентства ProStep',
                image: 'https://framerusercontent.com/images/EHt4lKO6yoQWVMML42DmzdSR6QM.jpg?width=4467&height=6701',
                description: 'Подписал более 10 игроков в испанские клубы и академии за последний сезон',
                achievements: [
                    'Выпускник ведущих академий: Динамо Киев, Легия Варшава, Patacona.',
                    'Более 100 матчей в La Liga U19.',
                    'Отвечает за условия контрактов и стратегию развития футболистов.'
                ],
                highlightAchievements: true
            },
            {
                name: 'Арсений Панферов',
                role: 'Арсений, сооснователь агентства ProStep',
                image: 'https://framerusercontent.com/images/eGe6nSQiiap65Lpw3ZxFnGzUs.jpg?width=4511&height=6766',
                description: 'Прошёл школу Levante.',
                achievements: [
                    'Подписал 15 игроков в испанские клубы/ академии за последний сезон',
                    '20 лет опыта работы в системе испанского футбола',
                    'документы, лицензии и расширение контактов по всей Европе.'
                ],
                highlightAchievements: true
            }
        ],
        timer: {
            title: 'До начала отбора'
        },
        journeySteps: {
            title: 'Этапы пути к мечте',
            steps: [
                {
                    number: '1',
                    title: 'Пройти отбор в Бишкеке'
                },
                {
                    number: '2',
                    title: 'Поехать на просмотр в Испанию'
                },
                {
                    number: '3',
                    title: 'Остаться в Испании на сезон'
                }
            ]
        },
        ctaSection: {
            title: 'Стань следующим кыргызским игроком подписанным в Испании',
            button: 'Хочу участвовать'
        },
        steps: [
            'Пройти отбор в Бишкеке',
            'Поехать на просмотр в Испанию',
            'Остаться в Испании на сезон'
        ],
        winners: {
            title: 'Куда поедут лучшие игроки',
            description: '10 Лучших игроков будут приглашены на просмотр в академию Real Murcia по своему возрасту и уровню подготовки.',
            highlight: 'Самых талантливых агентство возьмет, покрыв все расходы (кроме перелета).'
        },
        players: playersData,
        finalCta: {
            text: 'Хочешь стать следующем кыргызским футболистом в Испанской академии?',
            button: 'Запишись на отбор'
        },
        pricing: {
            title: 'Стоимость отбора',
            includes: [
                'Шанс поехать на просмотр в Испанию',
                '3 дня тренировок с испанскими специалистами',
                'Рекомендации по дальнейшему развитию',
                'Анализ сильных и слабых сторон по сравнению с игроками академии',
                'Награды за участие',
                'Призы победившим участникам'
            ],
            price: '10300',
            currency: 'сом',
            button: 'Записаться без оплаты',
            disclaimer: 'Бесплатная запись до 10 февраля'
        },
        statistics: {
            title: 'Результаты ProStep',
            subtitle: 'Сезон 24-25',
            items: [
                { value: '50', label: 'игроков прошли просмотр' },
                { value: '10', label: 'в топ-академиях' },
                { value: '10', label: 'в региональных клубах' }
            ]
        },
        destination: {
            title: 'Куда поедут лучшие игроки после отбора?',
            text: '10 лучших игроков будут приглашены в академию Реал Мурсию по своему уровню и возрасту.',
            highlight: 'Самых талантливых агентство возьмёт все расходы на себя (кроме перелёта).',
            button: 'Подать заявку'
        },
        media: {
            video: {
                title: 'Один день футболиста',
                youtubeId: 'uQxiRsHB6Sc'
            },
            gallery: {
                title: 'Где будут жить',
                images: [
                    { label: 'Комната', src: RoomImage },
                    { label: 'Столовая', src: DiningImage },
                    { label: 'Бассейн', src: PoolImage },
                    { label: 'Зона отдыха', src: RelaxZoneImage }
                ]
            }
        }
    }
};
