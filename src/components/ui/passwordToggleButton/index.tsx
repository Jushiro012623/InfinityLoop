import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import type { PasswordToggleButtonType } from "./types";

const PasswordToggleButton = ({toggleVisibility, isVisible}: PasswordToggleButtonType) => {
    return (
        <button
            aria-label="toggle password visibility"
            className="focus:outline-none absolute right-5 top-1/2 -translate-y-1/2"
            type="button"
            onClick={toggleVisibility}>
                {!isVisible ? (<EyeIcon className="size-5 text-gray-600" />):(<EyeSlashIcon className="size-5 text-gray-600" />)}
        </button>
    )
}

export { PasswordToggleButton }