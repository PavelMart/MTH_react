const Container = (props) => (
    <div className="container">
        {props.children}
    </div>
)

const Logo = () => <img src="./img/logo.svg" />;

const Phone = () => (
    <div className="phone">
        <p className="phone_number">+7 (351) 999 - 1234</p>
        <p className="phone_link">Перезвоните мне</p>
    </div>
)

const Button = ({text}) => <button className="button">{text}</button>;

const HomeHeader = () => (
    <div className="home_header">
        <Logo />
        <Phone />
    </div>
)

const HomeBody = () => (
    <div className="home_body">
        <h1>Консультационные услуги в сфере управления предприятием</h1>
        <p>Построение корпоративной среды управления документами и бизнес-процессами <br/>
            Концепция построения МТН Системы позволит Заказчику правильно <br/> организовать весь процесс управления
        </p>
        <Button text="Подробнее"/>
    </div>
)

const Home = () => (
    <section className="home">
        <Container>
            <HomeHeader/>
            <HomeBody/>
        </Container>
    </section>
)

const AdvantagesItem = ({img, title, description}) => (
    <li className="advantages_item">
        <img src={img} />
        <div className="advantages_item-body">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </li>
)

const AdvantagesList = () => (
    <ul className="advantages_list">
        <AdvantagesItem 
            img="./img/adv1.jpg"
            title="Аудит информационных систем"
            description="Аудит - процедура независимой оценки информационной системы с точки зрения ее архитектуры, эксплуатационных характеристик, а также методов и статистики ее использования."
        />
        <AdvantagesItem 
            img="./img/adv2.jpg"
            title="Консультирование в области делопроизводства"
            description="Услуга предоставляется в форме консультирования менеджеров, отвечающих за организацию процессов делопроизводства со стороны Заказчика"
        />
        <AdvantagesItem 
            img="./img/adv3.jpg"
            title="Техническое консультирование"
            description="Целью оказания услуги является существенное снижение проектных рисков за счет передачи знаний и опыта решений сложных технических задач."
        />
        <AdvantagesItem 
            img="./img/adv4.jpg"
            title="Аудит сред эксплуатации"
            description="Среда эксплуатации информационных систем – это комплекс аппаратных и программных средств, на которых работают  прикладные информационные системы."
        />
    </ul>
)

const Advantages = () => (
    <section className="advantages">
        <Container>
            <h2 className="section_title">Преимущества MTH системы</h2>
            <p className="section_description">Концепция построения МТН-Системы позволит Заказчику правильно организовать  процесс управления, а именно:</p>
            <AdvantagesList />
        </Container>
    </section>
)

const Contact = () => (
    <section className="contact">
        <Container>
            <h2 className="section_title">Остались вопросы?</h2>
            <p className="section_description">Оставьте номер телефона, и мы перезвоним вам</p>
            <form>
                <div className="input-group">
                    <input type="text" placeholder="Ваше имя" />
                    <input type="text" placeholder="Телефон" />
                    <input type="text" placeholder="E-mail" />
                </div>
                <Button text="Позвоните мне"/>
            </form>
            <p className="consent">Я даю своё <b>согласие</b> на обработку моих персональных данных.</p>
        </Container>
    </section>
)

const Footer = () => (
    <footer className="footer">
        <Container>
            <div className="footer_logo">
                <Logo />
                <p>
                © 2020 XXXcompany. <br/>Все права защищены.
                </p>
            </div>
            <div className="footer_author">
                <p>Сделано “ВАШЕ ИМЯ”</p>
            </div>
            <div className="footer_phone">
                <Phone />
            </div>
        </Container>
    </footer>
)

const App = () => (
    <div>
        <Home />
        <Advantages />
        <Contact />
        <Footer />
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))