// app/components/Interests.tsx
import { FaLaptopCode, FaBasketballBall, FaDumbbell, FaGithub, FaRobot, FaHiking, FaCamera } from 'react-icons/fa';
import styles from './Interests.module.css';

const Interests = () => {
  const interests = [
    { name: "Desarrollo Web", icon: <FaLaptopCode /> },
    { name: "Gym", icon: <FaDumbbell /> },
    { name: "Tecnología", icon: <FaRobot /> },
    { name: "Baloncesto", icon: <FaBasketballBall /> },
    { name: "Fotografía", icon: <FaCamera /> }
  ];

  return (
    <section className={styles.interests}>
      <h2>Intereses</h2>
      <div className={styles.interestList}>
        {interests.map(interest => (
          <span key={interest.name} className={styles.interestItem}>
            {interest.icon}
            <span className={styles.interestText}>{interest.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Interests;
