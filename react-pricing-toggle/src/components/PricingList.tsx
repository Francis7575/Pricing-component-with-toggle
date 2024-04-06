    import styles from './PricingList.module.css'
    import patternTop from '../assets/pattern-top.png'
    import patternBottom from '../assets/pattern-bottom.png'
    import { useState } from 'react'
    import { PricingProps, dataPlans } from './PricingProps'

    const toggleIconAnnually = (
        <svg width="56" height="32" viewBox="0 0 56 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 7">
                <rect id="Rectangle" width="56" height="32" rx="16" fill="url(#paint0_linear_0_453)" />
                <circle id="Oval" cx="17" cy="16" r="12" fill="white" />
            </g>
            <defs>
                <linearGradient id="paint0_linear_0_453" x1="-28" y1="16" x2="-0.430769" y2="64.2462" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A2A7F0" />
                    <stop offset="1" stopColor="#696EDD" />
                </linearGradient>
            </defs>
        </svg>
    );

    const toggleIcon = (
        <svg width="56" height="32" viewBox="0 0 56 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 7">
                <rect id="Rectangle" width="56" height="32" rx="16" fill="url(#paint0_linear_0_374)" />
                <circle id="Oval" cx="40" cy="16" r="12" fill="white" />
            </g>
            <defs>
                <linearGradient id="paint0_linear_0_374" x1="-28" y1="16" x2="-0.430769" y2="64.2462" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A2A7F0" />
                    <stop offset="1" stopColor="#696EDD" />
                </linearGradient>
            </defs>
        </svg>
    );

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
                            {isAnnually ? toggleIconAnnually : toggleIcon}
                        </button>
                        <span className={styles.dataPeriods}>Monthly</span>
                    </div>
                    <div className={styles.dataWrapper}>
                        {dataPlans.map((data, index) => (
                            <PricingProps key={index} data={data} isAnnually={isAnnually} />
                        ))}
                    </div>
                </section>
            </main>
        )
    }

    export default MainContent