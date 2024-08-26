// src/plugins/sweetalert2.ts
import Swal from 'sweetalert2'
const rootStyles = getComputedStyle(document.documentElement)
const primaryColor = rootStyles.getPropertyValue('--color-primary').trim()
const customSwal = Swal.mixin({
    customClass: {
        popup: 'swal-popup',
        title: 'swal-title',
        confirmButton: 'swal-confirm-button',
        cancelButton: 'swal-cancel-button',
    },
    buttonsStyling: false,
    showConfirmButton: true,
    confirmButtonText: 'OK',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
    allowOutsideClick: false,
})

export default customSwal
