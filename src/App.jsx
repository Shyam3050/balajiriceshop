import "./App.css";
import unity from "./assets/unity.jpg";
import { Footer, Navbar, ProductContainer, TopNavbar } from "./components";
function App() {
  // const navigate = useNavigate()
  return (
    <div>
      <TopNavbar />
      <Navbar />

      <img src={unity} className="imgg" alt="" srcset="" />
      <ProductContainer />
      <ProductContainer />
      <Footer />
      <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=919668221451"
        className="whatsapp_chat"
      >
        <img
          src="https://www.balajirice.in/assets/images/whatsapp.png"
          alt=""
          srcset=""
        />
      </a>
    </div>
  );
}

export default App;
// {
//   "web": {
//     "client_id": "66624403179-u9t6phvtj260v7vsj8141fabh0jtqeq3.apps.googleusercontent.com",
//     "project_id": "my-project-1566646306379",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_secret": "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"
//   }
// }
