"use client"
import {
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
    Typography
} from "@material-tailwind/react"

const DeliveryAndPaymentContent = () => {
    return (
        <>
            <div className="mb-8">
                <Typography variant="h6" color="blue-gray" className="font-bold mb-3 overflow-hidden">
                    Заказы доставляются БЕСПЛАТНО от 600 рублей (без учёта напитков и списанных баллов) в пределах города!
                </Typography>

                <ul className="mb-3 list-disc">
                    <Typography>
                        <span className="mr-2">•</span>Доставка Казачья — 50 р. (минимальный заказ от 700 руб.)
                    </Typography>

                    <Typography>
                        <span className="mr-2">•</span>Доставка 7 км — 50 р. (минимальный заказ от 700 руб.)
                    </Typography>

                    <Typography>
                        <span className="mr-2">•</span>Доставка Дергачи — 50 р. (минимальный заказ от 700 руб.)
                    </Typography>

                    <Typography>
                        <span className="mr-2">•</span>Доставка Максимова Дача — 50 р. (минимальный заказ от 700 руб.)
                    </Typography>

                    <Typography>
                        <span className="mr-2">•</span>Доставка Жидилова — 70 р. (минимальный заказ от 700 руб.)
                    </Typography>

                    <Typography>
                        <span className="mr-2">•</span>Доставка Сапун-гора — 70р. (минимальный заказ от 700 руб.)
                    </Typography>

                    <Typography>
                        <span className="mr-2">•</span>Доставка Первомайка — 120 р. (минимальный заказ от 1000 руб.)
                    </Typography>

                    <Typography>
                        <span className="mr-2">•</span>Доставка Балаклава — 120 р. (минимальный заказ от 1000 руб.)
                    </Typography>

                    <Typography>
                        <span className="mr-2">•</span>Доставка Фиолент — 120 р. (минимальный заказ от 1000 руб.)
                    </Typography>

                    <Typography>
                        <span className="mr-2">•</span>Доставка Сахарная головка — 150 р. (минимальный заказ от 1000 руб.)
                    </Typography>

                    <Typography>
                        <span className="mr-2">•</span>Доставка Хмельницкое — 150 р. (минимальный заказ от 1000 руб.)
                    </Typography>

                    <Typography>
                        <span className="mr-2">•</span>Доставка Штурмовое — 150 р. (минимальный заказ от 1000 руб.)
                    </Typography>

                    <Typography>
                        <span className="mr-2">•</span>Доставка Инкерман — 150 р. (минимальный заказ от 1500 руб.)
                    </Typography>
                </ul>

                <Typography variant="h6" color="blue-gray" className="cursor-default font-bold mb-3 overflow-hidden">
                    Принимаем предзаказы на удобное для Вас время!
                </Typography>
            </div>

            <div>
                <Typography color="blue-gray" variant="h3" className="mb-3">
                    Способы оплаты
                </Typography>

                <Typography variant="h6" color="blue-gray" className="font-bold mb-3 overflow-hidden">
                    Вы можете выбрать тот способ оплаты, который вам наиболее удобен.
                </Typography>

                <ul className="mb-3 list-disc">
                    <Typography>
                        <span className="mr-2">•</span>Наличный расчет
                    </Typography>

                    <Typography>
                        <span className="mr-2">•</span>Оплата в приложении <span className="font-bold">UDS</span> или на сайте <span className="font-bold">sushi1.uds.app</span>
                    </Typography>

                    <Typography>
                        <span className="mr-2">•</span>Банковский перевод РНКБ
                    </Typography>

                    <Typography>
                        <span className="mr-2">•</span>Оплату курьеру по терминалу. (Visa, MasterCard, МИР)
                    </Typography>

                    <Typography>
                        <span className="mr-2">•</span>Платёжная система Яндекс.Деньги
                    </Typography>

                    <Typography>
                        <span className="mr-2">•</span>Платежная система QIWI (киви) кошелек
                    </Typography>
                </ul>
            </div>
        </>
    )
}

const ContactsContent = () => {
    return (
        <>
            <div className="mb-8">
                <Typography variant="h6" color="blue-gray" className="font-bold mb-3 overflow-hidden">
                    Доставка еды Maneki Neko:
                </Typography>

                <ul className="list-disc">
                    <Typography>
                        г. Севастополь, Ленинский район, ул. Гоголя, 36
                    </Typography>

                    <Typography>
                        г. Севастополь, ПОР, 32-В (2 этаж) <span className="font-bold">(временно не работает)</span>
                    </Typography>
                </ul>
            </div>

            <div>
                <Typography variant="h6" color="blue-gray" className="font-bold mb-3 overflow-hidden">
                    Заказ по телефонам:
                </Typography>

                <ul className="text-red-900">
                    <Typography className="font-bold hover:text-[#7a0505] transition-colors">
                        <a href="tel:+79780519373">+7 (978) 051-93-73</a>
                    </Typography>

                    <Typography className="font-bold hover:text-[#7a0505] transition-colors">
                        <a href="tel:+78692777047">+7 (869) 277-70-47</a>
                    </Typography>

                    <Typography className="font-bold hover:text-[#7a0505] transition-colors">
                        <a href="tel:+78003334374">+7 (800) 333-43-74</a>
                    </Typography>
                </ul>
            </div>
        </>
    )
}

const VacanciesContent = () => {
    return (
        <>
            <div className="mb-8">
                <Typography variant="h6" color="blue-gray" className="font-bold mb-3 overflow-hidden">
                    Команда Maneki Neko всегда рада новым специалистам, готовым расти вместе с нами и становиться ещё лучше!
                </Typography>

                <Typography variant="paragraph">
                    Наша компания работает более 7 лет и мы прочно заняли свою нишу в городе герое Севастополе.
                    Если Вы ищете работу в стабильной и развивающейся компании, если Вы готовы к личностному и профессиональному росту, если Вы хотите построить успешную карьеру в сфере общественного питания, <span className="font-bold">жить на море</span>, то мы Вас ждём!
                </Typography>
            </div>

            <div className="mb-8">
                <Typography variant="h6" color="blue-gray" className="font-bold mb-3 overflow-hidden">
                    На сегодняшний день открыты следующие вакансии:
                </Typography>

                <ul className="mb-3">
                    <li>
                        <Typography>
                            <span className="mr-2">•</span>Помощник руководителя
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <span className="mr-2">•</span>HR — специалист
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <span className="mr-2">•</span>Повар сушист
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <span className="mr-2">•</span>Повар горячего цеха
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <span className="mr-2">•</span>Повар холодного цеха
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <span className="mr-2">•</span>Пиццамейкер
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <span className="mr-2">•</span>Администратор зала
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <span className="mr-2">•</span>Сборщик упаковщик
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <span className="mr-2">•</span>Оператор колл-центра
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <span className="mr-2">•</span>Мото курьеры
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <span className="mr-2">•</span>Курьеры с личным авто
                        </Typography>
                    </li>
                </ul>
            </div>

            <Typography variant="small" className="text-black">
                Более подробную информацию по вакансиям Вы можете получить по телефону:
                <br />
                <a href="tel:+78612458338" className="font-bold cursor-pointer">+7 (861) 245-83-38</a>,
                <br />
                <a href="tel:+78003334374" className="font-bold">+7 (800) 333-43-74</a> доб. 007
                <br />
                Режим работы отдела кадров: понедельник — пятница с 8:00 до 17:00.
            </Typography>
        </>
    )
}

const BonusProgrammContent = () => {
    return (
        <>
            <Typography color="blue-gray" variant="h4" className="mb-10">
                Станьте участником нашей дисконтной программы «Друг Maneki-Neko»
            </Typography>

            <Typography variant="h6" color="blue-gray" className="font-bold mb-3 overflow-hidden">
                Девять причин зарегистрироваться в нашем клубе лояльности UDS:
            </Typography>

            <ul className="mb-10">
                <li>
                    <Typography>
                        1. Получайте продукцию компании со скидкой до <span className="font-bold">100%</span> без скрытых условий и маркетинговых хитростей!
                    </Typography>
                </li>
                <li>
                    <Typography>
                        2. На ваш бонусный счет вернется от <span className="font-bold">5%</span> до <span className="font-bold">20%</span> с ваших покупок
                    </Typography>
                </li>
                <li>
                    <Typography>
                        3. Копите баллы со всех покупок ваших друзей - до <span className="font-bold">8%</span>
                    </Typography>
                </li>
                <li>
                    <Typography>
                        4. Обменивайте баллы на подарки от наших партнеров (предложения от партнеров размещаются в разделе «Акции»)
                    </Typography>
                </li>
                <li>
                    <Typography>
                        5. Участвуйте в ежедневных, еженедельных и ежемесячных розыгрышах от компании
                    </Typography>
                </li>
                <li>
                    <Typography>
                        6. Получайте увеличенные скидки по акциям
                    </Typography>
                </li>
                <li>
                    <Typography>
                        7. Первыми получайте информацию от компании о подарках, акциях и уникальных розыгрышах
                    </Typography>
                </li>
                <li>
                    <Typography>
                        8. Оценивайте работу персонала, влияйте на развитие компании
                    </Typography>
                </li>
                <li>
                    <Typography>
                        9. Пишите лично руководителю компании
                    </Typography>
                </li>
            </ul>

            <Typography variant="h6" color="blue-gray" className="font-bold mb-3 overflow-hidden">
                Регистрация в нашей программе лояльности:
            </Typography>

            <ul className="mb-10">
                <li>
                    <Typography>
                        1. Скачайте приложение UDS.app
                    </Typography>
                </li>
                <li>
                    <Typography>
                        2. Зарегистрируйтесь – отключите Wi-Fi при подтверждении номера телефона
                    </Typography>
                </li>
                <li>
                    <Typography>
                        3. После регистрации введите промокод SKCK5690 <br />
                        или перейдите по ссылке: <span className="font-bold">sushi1.uds.app</span>
                    </Typography>
                </li>
            </ul >

            <Typography variant="h6" color="blue-gray" className="font-bold mb-3 overflow-hidden">
                Как накопить или потратить баллы?
            </Typography>

            <Typography className="mb-10">
                Чтобы получить кэшбэк или оплатить баллами покупку, вам достаточно сделать заказ в приложении UDS или назвать 6-ти значный код скидки оператору
            </Typography>

            <Typography variant="h6" color="blue-gray" className="font-bold mb-3 overflow-hidden">
                Как передать скидку другу и получать бонусы с его покупок:
            </Typography>

            <ul className="mb-3">
                <li>
                    <Typography>
                        <span className="mr-2">•</span>Попросите вашего друга или знакомого установить бесплатное мобильное приложение UDS, если он еще его не использует
                    </Typography>
                </li>
                <li>
                    <Typography>
                        <span className="mr-2">•</span>Откройте нашу компанию у себя в приложении и нажмите кнопку «Рекомендовать», после чего откроется окно с кодом приглашения
                    </Typography>
                </li>
                <li>
                    <Typography>
                        <span className="mr-2">•</span>Попросите друга нажать кнопку «Промокод» и отсканировать ваш QR-код приглашения
                    </Typography>
                </li>
                <li>
                    <Typography>
                        <span className="mr-2">•</span>Вы так же можете отправить ваш код приглашения удобным для вас способом и пригласить вашего друга дистанционно
                    </Typography>
                </li>
            </ul>

            <Typography className="mb-10">
                Теперь вы будете получать бонусы до 8% от покупок вашего друга и покупок его друзей до 3-го уровня, которым он в свою очередь передаст нашу скидку!
            </Typography>

            <Typography variant="h6" color="blue-gray" className="font-bold mb-3 overflow-hidden">
                Как отправить нам сообщение через UDS?
            </Typography>

            <ul className="mb-10">
                <li>
                    <Typography>
                        <span className="mr-2">•</span>Откройте нашу компанию в приложении UDS
                    </Typography>
                </li>
                <li>
                    <Typography>
                        <span className="mr-2">•</span>Нажмите на кнопку «Сообщение» на главной странице нашей компании
                    </Typography>
                </li>
            </ul>

            <Typography variant="h6" color="blue-gray" className="font-bold mb-3 overflow-hidden">
                Наши бонусы:
            </Typography>

            <ul className="mb-3">
                <li>
                    <Typography>
                        <span className="mr-2">•</span>50 рублей вы получите на счет при регистрации в нашей программе лояльности и от 5% до 20% от оплаченной суммы (1 руб. = 1 балл)
                    </Typography>
                </li>
                <li>
                    <Typography>
                        <span className="mr-2">•</span>50 рублей за эффективную рекомендацию
                    </Typography>
                </li>
                <li>
                    <Typography>
                        <span className="mr-2">•</span>100 рублей на день рождения и VIP статус с кэшбеком 20% на 3 дня до и 3 дня после дня рождения!
                    </Typography>
                </li>
            </ul>

            <table className="w-full lg:w-[50%] mb-10">
                <tbody>
                    <tr className="text-center">
                        <td className="w-1/3">&nbsp;</td>
                        <td className="w-1/3">Статусы:</td>
                        <td className="w-1/3">&nbsp;</td>
                    </tr>

                    <tr className="text-center">
                        <td className="w-1/3">от руб.</td>
                        <td className="w-1/3">название статуса</td>
                        <td className="w-1/3">%</td>
                    </tr>

                    <tr className="text-center">
                        <td className="w-1/3">0 ₽</td>
                        <td className="w-1/3">Друг Манеки</td>
                        <td className="w-1/3">5%</td>
                    </tr>

                    <tr className="text-center">
                        <td className="w-1/3">40 000 ₽</td>
                        <td className="w-1/3">Приходи с друзьями</td>
                        <td className="w-1/3">10%</td>
                    </tr>

                    <tr className="text-center">
                        <td className="w-1/3">100 000 ₽</td>
                        <td className="w-1/3">VIP</td>
                        <td className="w-1/3">15%</td>
                    </tr>

                    <tr className="text-center">
                        <td className="w-1/3">200 000 ₽</td>
                        <td className="w-1/3">VIP + (Партнер)</td>
                        <td className="w-1/3">20%</td>
                    </tr>
                </tbody>
            </table>

            <Typography variant="h6" color="blue-gray" className="font-bold mb-3 overflow-hidden">
                Накопленными баллами можно оплатить до 50% заказа
            </Typography>

            <Typography className="mb-10">
                Количество бонусов на счету вы сможете отслеживать в приложении UDS.
                Баллы можно реализовать после оплаты заказа.
                Также у нас действует многоуровневая система рекомендаций
            </Typography>

            <Typography className="mb-10">
                Вы получите: <br />
                5% с покупок ваших друзей <br />
                2% с покупок друзей ваших друзей <br />
                1% с покупок друзей друзей, ваших друзей
            </Typography>

            <Typography color="blue-gray" variant="h4">
                Наша накопительная система бонусов – прекрасный повод ни в чем себе не отказывать!
            </Typography>
        </>
    )
}

export default function InfoPanel() {
    const data = [
        {
            label: "Доставка и оплата",
            value: "delivery&payment",
            content: <DeliveryAndPaymentContent />
        },
        {
            label: "Контакты",
            value: "contacts",
            content: <ContactsContent />
        },
        {
            label: "Наши вакансии",
            value: "vacancies",
            content: <VacanciesContent />
        },
        {
            label: "Бонусная программа",
            value: "bonusprogramm",
            content: <BonusProgrammContent />
        }
    ]

    return (
        <Tabs
            id="custom-animation"
            value={data[0].value}
            className="w-full"
        >
            <TabsHeader className="flex-col md:flex-row">
                {data.map(({ label, value }) => (
                    <Tab
                        key={value}
                        value={value}
                        className="text-sm font-bold uppercase"
                    >
                        {label}
                    </Tab>
                ))}
            </TabsHeader>

            <TabsBody>
                {data.map(({ value, content }) => (
                    <TabPanel
                        key={value}
                        value={value}
                        className="flex flex-col justify-center"
                    >
                        {content}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    )
}