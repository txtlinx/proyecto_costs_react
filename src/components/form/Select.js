import styles from './Select.module.css'
export function Select({ text, name,options,  handleOnChange, value}){
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option> Seleccione el tipo de sexo que quieres</option>
                {options.map((option)=>(
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select