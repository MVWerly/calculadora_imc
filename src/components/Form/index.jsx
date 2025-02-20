import { useState } from 'react';
import styles from './Form.module.css'

const Formulario = ({setImc}) => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const submitForm = (e) => {
        e.preventDefault()
        calcImc()

        setHeight('');
        setWeight('');
    }

    const calcImc = () => {
        const heightValue = height.includes('.') ? parseFloat(height) : parseFloat(height) / 100;
        const weightValue = parseFloat(weight);

        const imcCalc = weightValue / (heightValue * heightValue);
        const newImc = imcCalc.toFixed(2);
        
        setImc(newImc)
    }

    return (
        <section>
            <h2 className={styles.title}>Vamos calcular o IMC?</h2>
            <form onSubmit={(e) => submitForm(e)} className={styles.form}>
                <div className={styles.inputContainer}>
                    <div>
                        <label className={styles.labelInput} htmlFor='altura'>Altura (ex.: 185cm, 1.85m)</label>
                        <input step="0.01" value={height} required onChange={(({ target }) => setHeight(target.value))} className={styles.input} id='altura' type="number" placeholder='Digite sua altura:' />
                    </div>
                    <div>
                        <label className={styles.labelInput} htmlFor='peso'>Peso (ex.: 86Kg)</label>
                        <input step="0.01" value={weight} required onChange={(({ target }) => setWeight(target.value))} className={styles.input} id='peso' type="number" placeholder='Digite seu peso:' />
                    </div>
                </div>
                <button type='submit' className={styles.buttonCalc}>Calcular</button>
            </form>
        </section>
    )
}

export default Formulario
