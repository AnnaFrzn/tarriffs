import styles from './App.module.scss';
import Tarif from './components/tarif';

const tariffs = [
  { name: "Безлимитный 300", price: "300", velocity: "10", text: "Объем включенного трафика не ограничен", color: "blue", isSelected: false },
  { name: "Безлимитный 450", price: "450", velocity: "50", text: "Объем включенного трафика не ограничен", color: "green", isSelected: false },
  { name: "Безлимитный 550", price: "550", velocity: "100", text: "Объем включенного трафика не ограничен", color: "red", isSelected: false },
  { name: "Безлимитный 1000", price: "1000", velocity: "200", text: "Объем включенного трафика не ограничен", color: "black", isSelected: false }
];




function App() {
  return (
    <div className="App">
      <div className={styles.container}>
        {tariffs.map((tariff) => <Tarif name={tariff.name}
          price={tariff.price}
          velocity={tariff.velocity}
          text={tariff.text}
          color={tariff.color}
          isSelected={tariff.isSelected} />)}
      </div>
    </div>
  );
}

export default App;
