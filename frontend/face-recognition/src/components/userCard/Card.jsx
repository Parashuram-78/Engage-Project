import React from "react";
import styles from "./Card.module.css";
import {Link} from "react-router-dom"
const Card = ({ image, name, rank, presentDays, totalDays, userId }) => {
  const percent = Math.floor(
    (parseInt(presentDays) / parseInt(totalDays)) * 100
  );
  return (
    <Link to={`/userprofile/${userId}`}>
      <div className={styles.cardContainer}>
        <div className={styles.topSection}>
          <div className={styles.imageContainer}>
            <img src={image} alt="userImage" className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.userName}>{name}</h1>
            <p className={styles.rank}>{rank}</p>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <h1 className={styles.heading}>Attendence</h1>
          <div className={styles.bottomInnerSection}>
            <div className={styles.leftSection}>
              <span className={styles.presentDays}>{presentDays}</span>
              <span className={styles.text}>out of</span>
              <span className={styles.totalDays}>{totalDays} days</span>
            </div>
            <div className={styles.rightSection}>
              <div
                className={styles.outerCircle}
                style={{
                  background:
                    "conic-gradient(#44EB29 " +
                    percent +
                    "%,#777778 " +
                    percent +
                    "%)",
                }}
              >
                <div className={styles.innerCircle}>
                  <h1 className={styles.presentPercent}>{percent} %</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
