import styles from './Result.module.css';

const Result = ({ imc }) => {
    const tableData = [
        {
            col1: 'Menor que 18,5',
            col2: 'Magreza',
            col3: 'O',
            id: 1,
        },
        {
            col1: 'Entre 18,5 e 24,9',
            col2: 'Normal',
            col3: 'O',
            id: 2,
        },
        {
            col1: 'Entre 25,0 e 29,9',
            col2: 'Sobrepeso',
            col3: 'I',
            id: 3,
        },
        {
            col1: 'Entre 30,0 e 39,9',
            col2: 'Obesidade',
            col3: 'II',
            id: 4,
        },
        {
            col1: 'Maior que 40,0',
            col2: 'Obesidade grave',
            col3: 'III',
            id: 5,
        },
    ];

    const getRowAndSpanColor = (imc, id) => {
        if (imc > 0 && imc < 18.5) {
            return id ? (id === 1 ? styles.rowYellow : '') : styles.resultYellow;
        } else if (imc >= 18.5 && imc < 24.9) {
            return id ? (id === 2 ? styles.rowGreen : '') : styles.resultGreen;
        } else if (imc >= 25.0 && imc < 29.9) {
            return id ? (id === 3 ? styles.rowYellow : '') : styles.resultYellow;
        } else if (imc >= 30.0 && imc < 39.9) {
            return id ? (id === 4 ? styles.rowOrange : '') : styles.resultOrange;
        } else if (imc >= 40) {
            return id ? (id === 5 ? styles.rowRed : '') : styles.resultRed;
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
                    <img className={styles.imgResult} src="src/assets/img/planilha_img.jpg" alt="#" />
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
                            <tr key={index} className={getRowAndSpanColor(imc, item.id)}>
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
