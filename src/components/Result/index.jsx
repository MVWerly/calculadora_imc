import styles from './Result.module.css';

const Result = ({ imc }) => {
    const tableData = [
        {
            col1: 'Menor que 18,5',
            col2: 'Magreza',
            col3: 'O',
            ref: 18.5,
        },
        {
            col1: 'Entre 18,5 e 24,9',
            col2: 'Normal',
            col3: 'O',
            ref: 24.9,
        },
        {
            col1: 'Entre 25,0 e 29,9',
            col2: 'Sobrepeso',
            col3: 'I',
            ref: 29.9,
        },
        {
            col1: 'Entre 30,0 e 39,9',
            col2: 'Obesidade',
            col3: 'II',
            ref: 39.9,
        },
        {
            col1: 'Maior que 40,0',
            col2: 'Obesidade grave',
            col3: 'III',
            ref: 40,
        },
    ];

    // const setSpanColor = (imc) => {
    //     if (imc > 0 && imc < 18.5) {
    //         return ;
    //     } else if (imc >= 18.5 && imc < 24.9) {
    //         return styles.resultGreen;
    //     } else if (imc >= 25.0 && imc < 29.9) {
    //         return styles.resultYellow;
    //     } else if (imc >= 30.0 && imc < 39.9) {
    //         return styles.resultOrange;
    //     } else if (imc >= 40) {
    //         return styles.resultRed;
    //     } else {
    //         return '';
    //     }
    // }

    const getRowAndSpanColor = (imc, ref) => {
        if (imc > 0 && imc < 18.5) {
            return ref ? (ref === 18.5 ? styles.rowYellow : '') : styles.resultYellow;
        } else if (imc >= 18.5 && imc < 24.9) {
            return ref ? (ref === 24.9 ? styles.rowGreen : '') : styles.resultGreen;
        } else if (imc >= 25.0 && imc < 29.9) {
            return ref ? (ref === 29.9 ? styles.rowYellow : '') : styles.resultYellow;
        } else if (imc >= 30.0 && imc < 39.9) {
            return ref ? (ref === 39.9 ? styles.rowOrange : '') : styles.resultOrange;
        } else if (imc >= 40) {
            return ref ? (ref === 40 ? styles.rowRed : '') : styles.resultRed;
        } else {
            return '';
        }
    };

    return (
        <section>
            <h3 className={styles.title}>Veja a interpretação do IMC</h3>
            <div className={styles.resultContainer}>
                <div className={styles.titleImc}>
                    {imc && (
                        <h3>
                            Seu IMC é: <span className={getRowAndSpanColor(imc)}>{imc}</span>
                        </h3>
                    )}
                    <img className={styles.imgResult} src="src/assets/img/planilha_img.png" alt="#" />
                </div>
                <table className={styles.tableResult}>
                    <thead>
                        <tr>
                            <th className={styles.tableHead}>IMC</th>
                            <th className={styles.tableHead}>Classificação</th>
                            <th className={styles.tableHead}>Obesidade (Grau)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item, index) => (
                            <tr key={index} className={getRowAndSpanColor(imc, item.ref)}>
                                <td className={styles.tableData}>{item.col1}</td>
                                <td className={styles.tableData}>{item.col2}</td>
                                <td className={styles.tableData}>{item.col3}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Result
