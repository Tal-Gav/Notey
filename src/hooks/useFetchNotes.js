import useAxiosPrivate from "./useAxiosPrivate";
import { setNotes } from "../store/notesSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const useFetchNotes = () => {
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();

  const fetchNotes = async () => {
    try {
      console.log("hiiiii");
      const response = await axiosPrivate.get("/notes");
      console.log(response);
      dispatch(setNotes(response.data.notes));
      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  return fetchNotes;
};

export default useFetchNotes;
