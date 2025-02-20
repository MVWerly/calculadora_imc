import styles from './Title.module.css';

const Title = () => {
    return (
        <header>
            <h1 className={styles.title}>O que é o IMC?</h1>
            <p className={styles.description}>
                O Índice de Massa Corporal (IMC) é uma medida simples 
                usada para avaliar se uma pessoa está dentro do peso 
                ideal. Calcula-se dividindo o peso (em quilogramas) 
                pela altura (em metros) ao quadrado: IMC = peso / (altura * altura). 
                Baseado no resultado, uma pessoa pode ser classificada em categorias 
                como abaixo do peso, peso normal, sobrepeso e obesidade.
            </p>
            <p className={styles.description}>
            Apesar de ser útil em práticas de saúde, o IMC não é uma medida 
            perfeita e pode não ser adequado para todos, como atletas com alta massa 
            muscular. Em tais casos, outras avaliações, como a circunferência da 
            cintura e a composição corporal, podem fornecer uma visão mais precisa sobre a saúde.
            </p>
        </header>
    )
}

export default Title