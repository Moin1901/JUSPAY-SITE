import LogoutButton from "../auth/Logout";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const companies = [
    {
      name: "Juspay",
      description:
        "All interview rounds, coding questions, and preparation guidelines.",
      link: "/juspay",
    },
    // {
    //   name: "Accenture",
    //   description:
    //     "Coding, communication, and interview preparation resources.",
    //   link: "/accenture",
    // },
    // {
    //   name: "TCS",
    //   description: "TCS NQT and Digital exam solutions with HR guidelines.",
    //   link: "/tcs",
    // },
    // {
    //   name: "Infosys",
    //   description:
    //     "Aptitude, coding, and interview solutions with preparation tips.",
    //   link: "/infosys",
    // },
  ];

  return (
    <div className="container">
      <header>
        <h1>Interview Solutions & Guidelines</h1>
        <p>
          Select a company below to explore detailed solutions and preparation
          guides.
        </p>
      </header>

      <div className="company-list">
        {companies.map((company, index) => (
          <div
            key={index}
            className="company-item"
            onClick={() => navigate(company.link)}
          >
            <span className="company-number">{index + 1}.</span>
            <div className="company-content">
              <h2>{company.name}</h2>
              <p>{company.description}</p>
            </div>
          </div>
        ))}
        <LogoutButton />
      </div>
    </div>
  );
};

export default Home;
