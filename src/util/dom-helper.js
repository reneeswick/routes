import { Redirect } from "react-router-dom";

export const renderPopup = (msg, timeout, color, redirect="none") => {
    const container = document.querySelector('.popup-container')
    container.classList.remove('hidden')
    container.innerHTML =`
    <p class="popup-message pu-${color}" >
    ${msg}
    </p>
    `
    setTimeout(() => {
        container.classList.add('hidden')
        if(redirect!=="none") {
            window.location = redirect;
        }
    }, timeout)
}
