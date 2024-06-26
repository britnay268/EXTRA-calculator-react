import Calculator from '../components/Calculator';
import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH

function Home() {
  const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.displayName}! </h1>
      <Calculator />
    </div>
  );
}

export default Home;
