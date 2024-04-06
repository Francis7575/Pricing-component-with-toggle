import styles from './PricingList.module.css'
import toggleIcon from '../assets/icon-toggle.svg'
import toggleIconAnnually from '../assets/icon-toggle-annually.svg'
import patternTop from '../assets/pattern-top.png'
import patternBottom from '../assets/pattern-bottom.png'
import { useState } from 'react'
import { PricingProps, dataPlans } from './PricingProps'

const MainContent = () => {
    const [isAnnually, setIsAnnually] = useState<boolean>(false);

    const handleToggle = () => {
        setIsAnnually(!isAnnually);
    };

    return (
        <main>
            <section className={styles.section}>
                <div>
                    <img className={styles.patternTop} src={patternTop} alt="" />
                    <img className={styles.patternBottom} src={patternBottom} alt="" />
                </div>
                <h1 className={styles.h1}>Our Pricing</h1>
                <div className={styles.buttonContainer}>
                    <span className={styles.dataPeriods}>Annually</span>
                    <button
                        className={styles.toggleBtn}
                        onClick={handleToggle}
                    >
                        {isAnnually ? (
                            <img src={toggleIconAnnually} alt="Toggle icon"
                            />
                        ) : (
                            <img src={toggleIcon} alt="Toggle icon"
                            />
                        )}
                    </button>
                    <span className={styles.dataPeriods}>Monthly</span>
                </div>
                <div className={styles.dataWrapper}>
                    {dataPlans.map((data, index) => (
                        <PricingProps key={index} data={data} isAnnually={isAnnually}/>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default MainContent