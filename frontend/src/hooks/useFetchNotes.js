import useAxiosPrivate from "./useAxiosPrivate";
import { setNotes } from "../store/notesSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const useFetchNotes = () => {
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();

  const fetchNotes = async () => {
    try {
      const response = await axiosPrivate.get("/notes");
      dispatch(setNotes(response.data.notes));
      toast.success("Notes loaded");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return fetchNotes;
};

export default useFetchNotes;
