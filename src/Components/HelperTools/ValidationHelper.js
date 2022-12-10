import cogoToast from "cogo-toast";

const EmailRegx = /\S+@\S+\.\S+/;


// class FormHelper {

   export function IsEmpty(value) {
    if(value.length===0 ){
        return true;
    }
       
    }
    export function IsNotEmail(value) {
        return !EmailRegx.test(value);
    }

    export function ErrorToast(msg) {
        cogoToast.error(msg, { position: "bottom-center" });
    }
    export function SuccessToast(msg) {
        cogoToast.success(msg, { position: "bottom-center" });
    }


    export function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }