 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showToast } from './src/redux/toastSlice/Slice';
 

export const handleToast = (message, type) => (dispatch) => {
//   dispatch(showToast({ message, type }));

  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    case 'warning':
      toast.warn(message);
      break;
    default:
      toast.info(message);
      break;
  }
};
