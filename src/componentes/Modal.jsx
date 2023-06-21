import React, { useState } from "react"
import styles from "../assets/css/Modal.module.css"
import { useAppProvider } from "../context/ContextApp"
const Modal = ({name}) => {
    const {modal} = useAppProvider()
   console.log(name)
}
export default Modal