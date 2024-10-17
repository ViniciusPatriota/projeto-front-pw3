import styles from './Select.module.css';

function Select({ name, text, options, value, onChange }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} value={value} onChange={onChange}>
                <option value="">Selecione um gênero</option>
                {options.map((option) => (
                    <option key={option.cod_genero} value={option.cod_genero}>
                        {option.genero}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
