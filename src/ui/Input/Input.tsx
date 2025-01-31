import clsx from "clsx"
import "./Input.scss"
import { FC, InputHTMLAttributes, MouseEvent, useState } from "react"

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    error?: string,
    cn?: string
}


const Input: FC<IInput> = ({ error, value, placeholder, onChange, onBlur, onFocus, onKeyDown, type = "text", cn }) => {
    const [hide, toggleHide] = useState(type === "password");

    function handleHideButton(event: MouseEvent<HTMLElement>) {
        event.preventDefault()
        toggleHide(state => !state)
    }

    return (
        <>
            <div className={clsx("input", cn)}>
                <div className={clsx("input__wrapper", error && "input__wrapper_error")}>
                    <input
                        type={hide ? "password" : "text"}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        onKeyDown={onKeyDown}
                        className={clsx("input__field")} />
                    {type === "password" && <button className={clsx("input__hide-button")} onClick={(event) => handleHideButton(event)}><img src="/img/ic_hide.svg" /></button>}
                </div>
                {error && <p className={clsx(
                    "input__text-error",)}>{error}</p>}
            </div>
        </>
    )
}

export default Input