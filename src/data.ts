import { IProduct } from "./interfaces"

export const products: IProduct[] = [
    {
        title: 'Жареный ролл «Ояма» в темпуре',
        img: 'https://maneki-sev.ru/wp-content/uploads/2020/04/Oyama.jpg',
        category: { value: 'rolls', label: 'Роллы' },
        weight: 350,
        price: 430,
        description: 'Сыр буко, лосось, авокадо, угорь, темпура, соус унаги, белый кунжут.'
    },
    {
        title: 'Жареный ролл «Панко-неки» с угрём',
        img: 'https://maneki-sev.ru/wp-content/uploads/2019/02/panko-ugor.jpg',
        category: { value: 'rolls', label: 'Роллы' },
        weight: 250,
        price: 420,
        description: 'Рис, нори, сыр чеддер, сыр маасдам, огурец, угорь, сухари панко.'
    },
    {
        title: 'Жареный ролл «Тортилья» с беконом',
        img: 'https://maneki-sev.ru/wp-content/uploads/2017/11/Tortilya-s-bekonom.jpg',
        category: { value: 'rolls', label: 'Роллы' },
        weight: 240,
        price: 275,
        description: 'Тортилья, бекон, лук зеленый , сыр.'
    },
    {
        title: 'Жареный ролл «Цезарь» в темпуре',
        img: 'https://maneki-sev.ru/wp-content/uploads/2020/04/5DX942Zi0UI.jpg',
        category: { value: 'rolls', label: 'Роллы' },
        weight: 350,
        price: 310,
        description: 'Рис, нори, курочка жареная, помидора, айсберг, соус Цезарь, пармезан, темпура.'
    },
    {
        title: 'Ролл «Асахи»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2020/03/YIoK98qSjNI.jpg',
        category: { value: 'rolls', label: 'Роллы' },
        weight: 220,
        price: 220,
        description: 'Рис, нори, лист салата, томат, перец болгарский, авокадо, японский постный майонез.'
    },
    {
        title: 'Ролл «Бонито»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2023/01/Roll-22Bonito22-scaled.jpeg',
        category: { value: 'rolls', label: 'Роллы' },
        weight: 230,
        price: 300,
        description: 'Рис, нори, сыр, огурец, тунец, стружка тунца.'
    },
    {
        title: 'Ролл «Гавайи в темпуре»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2022/08/Gavai-i-v-tempure.jpeg',
        category: { value: 'rolls', label: 'Роллы' },
        weight: 260,
        price: 280,
        description: 'Рис, нори, сыр буко, курица хк, ананас, спайси соус, темпура.'
    },
    {
        title: 'Ролл «Гинза»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2020/09/H74FHIm2IX4.jpg',
        category: { value: 'rolls', label: 'Роллы' },
        weight: 300,
        price: 565,
        description: 'Рис, нори, сыр буко, креветка, огурец, тамаго, лосось, авокадо, спайс, икра масаго, кунжут.'
    },
    {
        title: 'Ролл «Запеченный с мидиями и чесночным соусом»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2023/01/Roll-22Zapechennyi-s-midiyami-i-chesnochnym-sousom22-scaled.jpeg',
        category: { value: 'rolls', label: 'Роллы' },
        weight: 270,
        price: 320,
        description: 'Рис, нори, сыр, мидии, икра масаго, соус чесночный.'
    },
    {
        title: 'Ролл «Изуми»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2019/02/Izumi.jpg',
        category: { value: 'rolls', label: 'Роллы' },
        weight: 220,
        price: 275,
        description: 'Сыр Виола, бекон, грудка копченая, лук зелёный, кунжут белый.'
    },
    {
        title: 'Ролл «Камакура»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2020/04/kamakura.jpg',
        category: { value: 'rolls', label: 'Роллы' },
        weight: 250,
        price: 480,
        description: 'Сыр буко, лосось, икра масаго, ореховый соус, чука, кунжут черный.'
    },
    {
        title: 'Ролл «Лайт-маслянная»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2022/08/Roll-22Lai-t-maslyannaya22.jpeg',
        category: { value: 'rolls', label: 'Роллы' },
        weight: 170,
        price: 580,
        description: 'Нори, сыр буко, масляная, огурец, лук зеленый.'
    },

    {
        title: 'Пицца «4 столицы»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2020/02/4_stolicy.jpg',
        category: { value: 'pizza', label: 'Пицца' },
        price: 480,
        description: 'Тесто, моцарелла, фета, лук ялтинский, салями, помидор, ветчина, маслины, соус сливочный, шампиньоны, пицца соус.'
    },
    {
        title: 'Пицца «Болоньезе»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2020/02/Boloneze.jpg',
        category: { value: 'pizza', label: 'Пицца' },
        price: 520,
        description: 'Пицца соус, сыр моцарелла, болгарский перец, говяжий фарш, лук ялтинский, перепелиные яйца, пармезан, соeс BBQ, зелень.'
    },
    {
        title: 'Пицца «Вегетарианская»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2020/03/dFZHKvIT7EU.jpg',
        category: { value: 'pizza', label: 'Пицца' },
        price: 410,
        description: 'Пицца соус, шампиньоны, перец болгарский, лук ялтинский, кабачки, маслины, сыр тофу, соус песто.'
    },
    {
        title: 'Пицца «Верона» 33 см.',
        img: 'https://maneki-sev.ru/wp-content/uploads/2022/08/1651820325772.jpeg',
        category: { value: 'pizza', label: 'Пицца' },
        price: 515,
        description: 'Пицца соус, сыр моцарелла, салями, ветчина, соус "Ранч" (на основе сметаны и сливок с чесноком).'
    },
    {
        title: 'Пицца «Грибная»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2018/09/gribnaya.jpg',
        category: { value: 'pizza', label: 'Пицца' },
        price: 480,
        description: 'Сыр моцарелла, белый соус, куриное филе, грибы шампиньоны, грибы опята маринованные, лук репчатый, зелень.'
    },
    {
        title: 'Пицца «Деревенская»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2018/09/derevenskaya.jpg',
        category: { value: 'pizza', label: 'Пицца' },
        price: 540,
        description: 'Пицца соус, куриная грудка копченная, охотничьи колбаски, огурец маринованный, лук ялтинский, маслины, сыр моцарелла.'
    },
    {
        title: 'Пицца «Детская»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2021/09/detskaya.jpeg',
        category: { value: 'pizza', label: 'Пицца' },
        price: 570,
        description: 'Куриное филе, помидор, соус Ранч, зелень, сыр моцарелло.'
    },
    {
        title: 'Пицца «Диабло»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2020/04/pitstsa-diablo.jpg',
        category: { value: 'pizza', label: 'Пицца' },
        price: 530,
        description: 'Пицца соус острый, сыр моцарелла, шампиньоны, бекон, свинина, лук ялтинский, перец болгарский, перец халапеньо, острый соус шрирача.'
    },
    {
        title: 'Пицца «Калипсо»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2018/05/Kalipso.jpg',
        category: { value: 'pizza', label: 'Пицца' },
        price: 580,
        description: 'Белый соус, мидии, снежный краб, кальмар, икра масаго, сыр моцарелла.'
    },
    {
        title: 'Пицца «Карбонара»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2018/10/Karbonara-picca.jpg',
        category: { value: 'pizza', label: 'Пицца' },
        price: 480,
        description: 'Тесто, сливочный соус, моцарелла, бекон, перепелиные яйца, лук ялтинский, шампиньоны, пармезан, травы.'
    },
    {
        title: 'Пицца «Охотничья»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2020/01/EC00974F-48AE-4FFC-A625-77F86513C330.jpeg',
        category: { value: 'pizza', label: 'Пицца' },
        price: 470,
        description: 'Тесто, пицца соус, сыр моцарелла, шампиньоны, охотничьи колбаски, огурец солёный, лук порей.'
    },
    {
        title: 'Пицца «Сицилийская»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2018/05/Sitsilijskaya.jpg',
        category: { value: 'pizza', label: 'Пицца' },
        price: 490,
        description: 'Пицца соус, баварские колбаски, салями, охотничьи колбаски, перец сладкий, сыр моцарелла, фирменный остро-сладкий соус.'
    },

    {
        title: 'Бургер «Дабл Бургер»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2020/01/4ZhjGTpO48.jpg',
        category: { value: 'burgers', label: 'Бургеры' },
        weight: 460,
        price: 480,
        description: 'Булка, котлета, маздам, чеддер, огурец бочковой, луковые кольца, томат.'
    },
    {
        title: 'Бургер «Мясной» MIX',
        img: 'https://maneki-sev.ru/wp-content/uploads/2020/01/d2J_kKnQgd0.jpg',
        category: { value: 'burgers', label: 'Бургеры' },
        weight: 500,
        price: 610,
        description: 'Булка, говяжья котлета, ветчина, шпинат, "Чеддер", "Голландский" сыр, перец халапеньо, соус "Ранч".'
    },
    {
        title: 'Бургер «С клюквой»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2020/01/YQTrPzs6Zfs.jpg',
        category: { value: 'burgers', label: 'Бургеры' },
        weight: 400,
        price: 460,
        description: 'Булка, говяжья котлета, лук "Ялтинский"(карамелизированный), лист салата томат, бекон, "Мааздам", "Чеддер" + соус "Клюквенный".'
    },
    {
        title: 'Бургер «Цезарь»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2020/01/1M5q9MIMFqg.jpg',
        category: { value: 'burgers', label: 'Бургеры' },
        weight: 400,
        price: 400,
        description: 'Булка, котлета куриная, чеддер,сыр голландский, томат, яйцо, лист салата, пармезан, соус "Цезарь".'
    },
    {
        title: 'Сэндвич с копченой курицей',
        img: 'https://maneki-sev.ru/wp-content/uploads/2020/04/sendvich-s-kopchenoj-kuritsej.jpg',
        category: { value: 'burgers', label: 'Бургеры' },
        weight: 250,
        price: 280,
        description: 'Сэндвичный хлеб, лист салата, помидоры, корнишоны, лук ялтинский, грудка куриная копченая, сыр чеддер, соус ранч. 250г.'
    },
    {
        title: 'Манекибургер «С котлетой из говядины»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2017/05/govyazhij.jpg',
        category: { value: 'burgers', label: 'Бургеры' },
        weight: 270,
        price: 390,
        description: 'Булочка, котлета, салат айсберг, помидор, сыр чеддер, лук ялтинский, огурец маринованный, соус на выбор.'
    },
    {
        title: 'Манекибургер «С куриной котлетой»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2017/05/kurinyj.jpg',
        category: { value: 'burgers', label: 'Бургеры' },
        weight: 250,
        price: 330,
        description: 'Булочка, котлета, салат айсберг, помидор, сыр чеддер, лук ялтинский, огурец маринованный, соус на выбор'
    },

    {
        title: 'Паста «Болоньезе»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2018/05/Pasta-Boloneze-.jpg',
        category: { value: 'paste', label: 'Паста' },
        weight: 330,
        price: 385,
        description: 'Лапша пшеничная, говядина в томатном соусе, лук репчатый, морковь, сыр пармезан.'
    },
    {
        title: 'Паста «Карбонара»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2018/05/Pasta-Karbonara-.jpg',
        category: { value: 'paste', label: 'Паста' },
        weight: 330,
        price: 385,
        description: 'Паста феттуччине,  бекон, сливочном соус, лук репчатый, сыр пармезан, яйцо.'
    },
    {
        title: 'Паста «Поло»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2018/05/Pasta-Polo-.jpg',
        category: { value: 'paste', label: 'Паста' },
        weight: 330,
        price: 385,
        description: 'Паста феттуччине, куриное филе, грибы шампиньоны, лук репчатый, сыр пармезан, яйцо.'
    },
    {
        title: 'Паста с морепродуктами',
        img: 'https://maneki-sev.ru/wp-content/uploads/2018/08/Pasta-s-moreproduktami.jpg',
        category: { value: 'paste', label: 'Паста' },
        weight: 330,
        price: 545,
        description: 'Паста феттуччине, мидии, кальмар, креветка, сыр пармезан, яичный желток, помидор черри, сливочный соус.'
    },

    {
        title: 'WOK «Говядина в сладко-остром соусе»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2018/05/Govyadina-v-sladko-ostrom-souse.jpg',
        category: { value: 'wok', label: 'WOK' },
        weight: 320,
        price: 325,
        description: 'Баклажан, кабачок, лук репчатый, морковь, перец болгарский, помидор черри, лук зелёный, говядина.'
    },
    {
        title: 'WOK «Курица в соусе террияки»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2018/05/Kuritsa-v-souse-terriyaki.jpg',
        category: { value: 'wok', label: 'WOK' },
        weight: 320,
        price: 305,
        description: 'Баклажан, кабачок, лук репчатый, морковь, перец болгарский, помидор черри, лук зелёный, филе куриное.'
    },
    {
        title: 'WOK «Морской коктейль в устрично-сливочном соусе»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2018/05/Morskoj-koktejl-v-ustrichno-slivochnom-souse.jpg',
        category: { value: 'wok', label: 'WOK' },
        weight: 320,
        price: 420,
        description: 'Баклажан, кабачок, лук репчатый, морковь, перец болгарский, помидор черри, лук зелёный, мидии, креветка тигровая, кальмар.'
    },
    {
        title: 'WOK «Овощной в соусе тонкацу»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2018/05/Ovoshhnoj-v-souse-tonkatsu.jpg',
        category: { value: 'wok', label: 'WOK' },
        weight: 320,
        price: 280,
        description: 'Баклажан, кабачок, лук репчатый, морковь, перец болгарский, грибы шампиньоны, помидор черри, лук зелёный.'
    },
    {
        title: 'WOK «Свинина в кисло-сладком соусе»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2018/05/Svinina-v-kislo-sladkom-souse.jpg',
        category: { value: 'wok', label: 'WOK' },
        weight: 320,
        price: 350,
        description: 'Баклажан, кабачок, лук репчатый, морковь, перец болгарский, помидор черри, лук зелёный, свинина.'
    },

    {
        title: 'Набор роллов «Hot»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2017/05/Hot.jpg',
        category: { value: 'popular', label: 'Популярные товары' },
        weight: 1500,
        price: 2230,
        description: 'Запеченные мидии острые, Запеченный с креветкой, Запеченный с угрем, Запеченный с лососем, Игай, Запеченные гунканы с креветкой, с угрем, с лососем, с мидиями.'
    },
    {
        title: 'Набор роллов «Манеки-Неко»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2017/05/Maneki-Neko.jpg',
        category: { value: 'popular', label: 'Популярные товары' },
        weight: 1300,
        price: 1900,
        description: 'Иттеки, Торри, Черный принц, Йоши, Ика.'
    },
    {
        title: 'Набор роллов «Колизей»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2017/05/Kolizej.jpg',
        category: { value: 'popular', label: 'Популярные товары' },
        weight: 1200,
        price: 1855,
        description: 'Георгиевский, Инь-Янь, Хаки, Красный дракон, Аляска лосось.'
    },
    {
        title: 'Набор роллов «Дракон»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2017/05/Drakon.jpg',
        category: { value: 'popular', label: 'Популярные товары' },
        weight: 1300,
        price: 2355,
        description: 'Белый дракон, Кучерявый дракон, Зеленый дракон, Черный дракон, Красный дракон.'
    },
    {
        title: 'Салат «Греческий»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2018/07/WGiou1Ync4E.jpg',
        category: { value: 'popular', label: 'Популярные товары' },
        weight: 260,
        price: 310,
        description: 'Помидор, огурец, перец сладкий, лук ялтинский, сыр "Фетта", маслины, лист салата.'
    },
    {
        title: 'Жареный ролл «Темпура» с угрём',
        img: 'https://maneki-sev.ru/wp-content/uploads/2017/05/Tempura-s-ugryom.jpg',
        category: { value: 'popular', label: 'Популярные товары' },
        weight: 300,
        price: 395,
        description: 'Рис, нори, сыр буко, огурец, темпура, икра масаго, угорь.'
    },
    {
        title: 'Салат «Цезарь»',
        img: 'https://maneki-sev.ru/wp-content/uploads/2018/07/jpqMfSMZcTc.jpg',
        category: { value: 'popular', label: 'Популярные товары' },
        weight: 300,
        price: 325,
        description: 'Лист салата, помидоры черри, цыпленок, сыр " Пармезан", перепелиное яйцо, сухарики, соус цезарь.'
    }
]