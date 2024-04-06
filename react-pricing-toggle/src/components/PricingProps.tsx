import styles from './PricingList.module.css'

type DataOptions = {
    plan: string,
    monthlyPrice: number,
    yearlyPrice: number,
    dollarSign: string,
    gbStorage: string,
    usersAllowed: string,
    dataLimit: string,
    button: string
}

const dataPlans: DataOptions[] = [
    {
        plan: 'Basic',
        dollarSign: '$',
        monthlyPrice: 19.99,
        yearlyPrice: 199.99,
        gbStorage: '500 GB Storage',
        usersAllowed: '2 Users Allowed',
        dataLimit: 'Send up to 3 GB',
        button: 'Learn more'
    },
    {
        plan: 'Professional',
        dollarSign: '$',
        monthlyPrice: 24.99,
        yearlyPrice: 249.99,
        gbStorage: '1 TB Storage',
        usersAllowed: '5 Users Allowed',
        dataLimit: 'Send up to 10 GB',
        button: 'Learn more'
    }, {
        plan: 'Master',
        dollarSign: '$',
        monthlyPrice: 39.99,
        yearlyPrice: 399.99,
        gbStorage: '2 TB Storage',
        usersAllowed: '10 Users Allowed',
        dataLimit: 'Send up to 20 GB',
        button: 'Learn more'
    },
]

const PricingProps: React.FC<{ data: DataOptions; isAnnually: boolean }> = ({ data, isAnnually }) => {
    return (
        <div className={`${styles.container} 
        ${(data.plan === 'Basic' || data.plan === 'Master') ? styles.basicAndMasterContainer :
                (data.plan === 'Professional' ? styles.professionalContainer :
                    (data.plan === 'Basic' ? styles.basicContainer :
                        (data.plan === 'Master' ? styles.masterContainer : '')))}`}>
            <h2 className={`${styles.planName} 
                ${data.plan === 'Professional' ? styles.professionalPlanName : styles.basicAndMasterName}`}>
                {data.plan}
            </h2>

            <div className={styles.priceContainer}>
                <span className={`${styles.planDollarSign} 
                    ${data.plan === 'Professional' ? styles.professionalDollarSign : styles.basicAndMasterDollarSign}`}>
                    {data.dollarSign}
                </span>
                <span className={`${styles.planPrice} 
                    ${data.plan === 'Professional' ? styles.professionalPlanPrice : styles.basicAndMasterPrice}`}>
                    {isAnnually ? data.yearlyPrice : data.monthlyPrice}
                </span>
            </div>

            <ul className={styles.ul}>
                <li className={`${styles.listItem} 
                    ${data.plan === 'Professional' ? styles.professionalListItem : styles.basicAndMasterli}`}>
                    {data.gbStorage}
                </li>
                <li className={`${styles.listItem} 
                    ${data.plan === 'Professional' ? styles.professionalListItem : styles.basicAndMasterli}`}>
                    {data.usersAllowed}
                </li>
                <li className={`${styles.listItem} 
                    ${data.plan === 'Professional' ? styles.professionalListItem : styles.basicAndMasterli}`}>
                    {data.dataLimit}
                </li>
            </ul>
            <button
                className={`${styles.btn}
                ${data.plan === 'Professional' ? styles.professionalBtn : styles.basicAndMasterBtn}`}>
                {data.button}
            </button>
        </div >

    )
}

export { PricingProps, dataPlans }