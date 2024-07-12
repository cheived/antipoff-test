import clsx from "clsx"
import "./Input.scss"
import { FC, InputHTMLAttributes, useState } from "react"

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean,
    cn?: string
}


const Input: FC<IInput> = ({ error, value, placeholder, onChange, onBlur, onFocus, onKeyDown, type = "text", cn }) => {
    const [hide, toggleHide] = useState(type === "password");

    return (
        <>
            <div className={clsx("input", cn)}>
                <div className={clsx("input__wrapper", error && "input_error")}>
                    <input
                        type={hide ? "password" : "text"}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        onKeyDown={onKeyDown}
                        className={clsx("input__field")} />
                    {type === "password" && <button className={clsx("input__hide-button")} onClick={() => toggleHide(state => !state)}><img src="/img/hide.svg" /></button>}
                </div>
                {error && <p className={clsx(
                    "input__text-error",
                    error && "input__text-error_show",)}>Ошибка</p>}

            </div>
        </>
    )
}

export default Input