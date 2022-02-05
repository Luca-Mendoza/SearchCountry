import Swal from 'sweetalert2';
import { TYPE_ALERT } from './values.config';

// export const loadData = (title: string, html: string) => {
//   Swal.fire({
//     title,
//     html,
//     onBeforeOpen: () => {
//       Swal.showLoading();
//     },
//   });
// };

export const infoEventAlert = async (
  title: string,
  html: string,
  typeAlert: TYPE_ALERT = TYPE_ALERT.ERROR
) => {
  return await Swal.fire({
    showClass: {
      popup: 'animate__animated  animate__fadeInDown faster',
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp faster',
    },
    title,
    html,
    icon: typeAlert,
    preConfirm: () => {
      return true;
    },
  });
};
