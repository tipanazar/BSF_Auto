import hyundaiTucson from "../images/hyundaiTucson.jpg"
import jeepCherokee from "../images/jeepCherokeeLatitude.jpg"
import mazdaCx5 from "../images/mazdaCx5.jpg"
import fiat500x from "../images/fiat500x.jpg"
import audiQ5 from "../images/audiQ5.jpg"
import hyundaiKona from "../images/hyundaiKona.jpg"

export const faqData = [
    {
      title: "У США продається один мотлох, навіщо там купувати машину?",
      description:
        "Ринок США дуже багатий на авто будь-якого класу та стану. Щодня з аукціону продається приблизно 2000 автомобілів різних марок та комплектацій. Там є ті, що не підлягають відновленню, так і ті, що мають незначні пошкодження. \nНаше завдання – знайти для вас найкраще з того, що можна вибрати на страховому аукціоні. Всі варіанти погоджуються з клієнтом.",
    },
    {
      title: "Чи може фактична ціна відрізнятися від розрахункової?",
      description:
        "Різниця кінцевої вартості авто без ремонту не перевищує 100$ від розрахункової.",
    },
    {
      title: "Як довго чекати на авто з США?",
      description:
        "<b>Доставка авто ділиться на кілька етапів:</b><ul><li>Доставка від площадки аукціону на склад в США, в середньому до 7 днів;</li><li>Доставка контейнера в порт 5-14 днів</li><li>Доставка морем, від місяця до 2х;</li><li>Розвантаження та доставка авто з Клайпеди до Львова 7-10 робочих днів;</li><li>Розмитнення авто 1 день.</li></ul>",
    },
    {
      title: "Де робити ремонт машини?",
      description:
        "<b>Ремонт можливий на нашому СТО.</b>\nТакож ми можемо доставити авто клієнту без ремонту на будь яке СТО для самостійного ремонту.",
    },
    {
      title: "Чому з Америки машини дешевші?",
      description:
        "У США дуже розвинена страхова система і дорогий ринок праці. Легка несправність або ДТП автомобіля може коштувати більше вартості цілого аналога, тому в США страховій компанії легше виставити автомобіль на аукціон, ніж ремонтувати його.",
    },
    {
      title: "Які гарантії?",
      description:
        "Можливе підписання із замовником договору про надання послуг. Всі платежі за авто та транспортування ви робите безпосередньо на аукціон або на компанію перевізника.",
    },
    {
      title: "Чи можу я відстежувати весь процес пересування авто?",
      description: "Так, ми надаємо всю інформацію для цього.",
    },
    {
      title:
        "Я не хочу биту машину, краще переплатити, але взяти цілу в Польші чи Україні.",
      description:
        "Більшість авто які продаються в Україні на ринку – це колишні биті авто з США. Залишається питання – наскільки добре відремонтоване авто? Часто продавці економлять на деталях та ремонту. Якщо ви купуєте авто із США то економите до 40% від його вартості і можете особисто займатися процесом ремонту - зробити собі надійно і високоякісно.\nНа ринку Польші ситуація трохи інша. Авто із США тільки починають з’являтися на дорогах країни. Вигода від ринку Польші така сама як і в Україні - до 40%, але крім фінвнсової вигоди ви отримаєте: чесний пробіг, історія авто, якісний ремонт.",
    },
  ];
  
export const carMakes = [
    "Acura",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Bugatti",
    "Buick",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Daewoo",
    "Dodge",
    "Ferrari",
    "Fiat",
    "Fisker",
    "Ford",
    "Genesis",
    "Geo",
    "GMC",
    "Honda",
    "Hummer",
    "Hyundai",
    "Infititi",
    "Isuzu",
    "Jaguar",
    "Jeep",
    "Kia",
    "Lamborghini",
    "Land Rover",
    "Lexus",
    "Lincoln",
    "Lotus",
    "Lucid",
    "Maserati",
    "Maybach",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "Mercury",
    "MINI",
    "Mitsubishi",
    "Nissan",
    "Oldsmobile",
    "Plymouth",
    "Polestar",
    "Pontiac",
    "Porsche",
    "Ram",
    "Rivian",
    "Rolls-Royce",
    "Saab",
    "Saturn",
    "Scion",
    "Smart",
    "Spyker",
    "Subaru",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
  ];

export const carsExamplesData = [
    {
      img: hyundaiTucson,
      carName: "Hyundai Tucson Sel",
      parameters: {
        fuelType: "Бензин",
        year: "2018",
        drive: "Передній",
        mileage: "40034mi",
        gearbox: "Автомат",
        engineDisplacement: "2.0L",
      },
      price: {
        finalBid: "$6900",
        inUkraine: "$18130",
        inPoland: "$16500",
      },
    },
    {
      img: jeepCherokee,
      carName: "Jeep Cherokee Latitude",
      parameters: {
        fuelType: "Бензин",
        year: "2019",
        drive: "Передній",
        mileage: "21940mi (Actual)",
        gearbox: "Автомат",
        engineDisplacement: "2.4L",
      },
      price: {
        finalBid: "$5300",
        inUkraine: "$16500",
        inPoland: "$15000",
      },
    },
    {
      img: mazdaCx5,
      carName: "Mazda Cx-5 Select",
      parameters: {
        fuelType: "Бензин",
        year: "2022",
        drive: "Передній",
        mileage: "5493mi",
        gearbox: "Автомат",
        engineDisplacement: "2.5L",
      },
      price: {
        finalBid: "$7800",
        inUkraine: "$21500",
        inPoland: "$20300",
      },
    },
    {
      img: fiat500x,
      carName: "Fiat 500X Trekking",
      parameters: {
        fuelType: "Бензин",
        year: "2018",
        drive: "Передній",
        mileage: "55640mi",
        gearbox: "Автомат",
        engineDisplacement: "2.4L",
      },
      price: {
        finalBid: "$2700",
        inUkraine: "$12650",
        inPoland: "$11000",
      },
    },
    {
      img: audiQ5,
      carName: "Audi Q5 Premium",
      parameters: {
        fuelType: "Бензин",
        year: "2021",
        drive: "Повний",
        mileage: "11119mi",
        gearbox: "Автомат",
        engineDisplacement: "2.0L",
      },
      price: {
        finalBid: "$15475",
        inUkraine: "$33500",
        inPoland: "$31100",
      },
    },
    {
      img: hyundaiKona,
      carName: "Hyundai Kona Limited",
      parameters: {
        fuelType: "Бензин",
        year: "2020",
        drive: "Повний",
        mileage: "39457mi",
        gearbox: "Автомат",
        engineDisplacement: "1.6L",
      },
      price: {
        finalBid: "$2800",
        inUkraine: "$13500",
        inPoland: "$12800",
      },
    },
  ];