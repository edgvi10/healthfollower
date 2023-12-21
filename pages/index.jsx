import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, } from "chart.js";
import { Bar, Line } from "react-chartjs-2";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    height: 500,
    plugins: {
        legend: {
            position: "bottom",
        },
        title: {
            display: false,
            text: "Chart.js Bar Chart",
        }
    },
};

// const data last 7 days
const labels = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
const bloodpreassure = {
    labels,
    datasets: [
        {
            label: "Sistólica",
            data: [120, 119, 118, 117, 116, 115, 114],
            backgroundColor: "rgb(255, 99, 132)",
        },
        {
            label: "Diastólica",
            data: [80, 79, 78, 77, 76, 75, 74],
            backgroundColor: "rgb(54, 162, 235)",
        },
    ],
};

const glucose_options = { ...options, scales: { y: { beginAtZero: true } }, fill: true };
const glucose = {
    labels,
    datasets: [
        {
            label: "Glicose",
            display: false,
            data: [273, 120, 135, 192, 126, 105, 193],
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgba(255, 99, 132, 0.2)",
            tension: .5,
        },
    ],
};

const cards_list = [];
// cards_list.push({ title: "Pressão", description: "Monitoramento da pressão arterial.", link: "/stats/bloodpreassure", icon: "fas fa-heartbeat", chart: <Bar data={bloodpreassure} options={options} /> });
cards_list.push({ title: "Glicose", description: "Monitoramento da glicose.", link: "/stats/glucose", icon: "fas fa-cubes", chart: <Line data={glucose} options={glucose_options} height={250} className="border bg-light rounded p-3" /> });
cards_list.push({ title: "Peso", description: "Monitoramento do peso.", link: "/stats/weight", icon: "fas fa-weight" });

export default function AppHomePage() {

    return <>
        <header className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid container-lg px-3">
                <a href="/" className="navbar-brand"><i className="bi-activity text-success h1" /></a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"><i className="bi-list" /></button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a href="/stats/bloodpreassure" className="nav-link"><i className="bi-heart-fill" /> Pressão</a></li>
                        <li className="nav-item"><a href="/stats/glucose" className="nav-link"><i className="bi-diagram-3-fill" /> Glicose</a></li>
                        <li className="nav-item"><a href="/stats/weight" className="nav-link"><i className="bi-weight" /> Peso</a></li>
                    </ul>
                </div>
            </div>
        </header>

        <main className="container-fluid container-lg px-3">
            <h1>Health Condition Monitor</h1>
            <p>Este é um projeto de código aberto para monitoramento de condições de saúde.</p>

            <div className="row g-3">
                {cards_list.map((card, index) => {
                    return <div className="col-12 col-md-6 col-lg-4" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"><i className={card.icon} /> {card.title}</h5>
                                <p className="card-text">{card.description}</p>
                                <a href={card.link} className="btn btn-primary">Acessar</a>

                                {card.chart && <div className="mt-3">
                                    {card.chart}
                                </div>}
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </main>
    </>
}