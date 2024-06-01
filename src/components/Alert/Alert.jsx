import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const showSwal = (alertContent) => {
  withReactContent(Swal).fire({
    title: <i>{alertContent}</i>,
  });
};
