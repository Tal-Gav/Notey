import { Box, IconButton, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import saveNoteIcon from "../../assets/v.svg";
import arrowImg from "../../assets/WelcomePage/arrow.png";
import vortexImg from "../../assets/WelcomePage/vortex.png";
import noteImg from "../../assets/WelcomePage/note.png";
import { clearNoteFields } from "../../store/newNoteSlice";
import NewNote from "../../components/NewNote";
import { addNote } from "../../store/notesSlice";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Welcome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const [firstName, setFirstName] = useState("");
  const newNoteTitle = useSelector((state) => state.newNote.title);
  const newNoteContent = useSelector((state) => state.newNote.content);
  const isLargeScreen = useMediaQuery("(min-width:1440px)");

  const setAccountData = (account) => {
    setFirstName(account.firstName);
  };

  const getAccountData = async () => {
    try {
      const res = await axiosPrivate.get("/accounts/details");
      setAccountData(res.data.account);
    } catch (error) {}
  };

  const handleSaveNote = async () => {
    try {
      const newNote = { title: newNoteTitle, content: newNoteContent };
      const res = await axiosPrivate.post("/notes", newNote);
      const newNoteWithId = { ...newNote, _id: res.data._id };
      dispatch(addNote(newNoteWithId));
      dispatch(clearNoteFields());
      navigate("/notes");

      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getAccountData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90%",
      }}
    >
      <Box pl={4} flexDirection={"row"} display={"flex"} flexWrap="wrap">
        <Box>
          <Box>
            <Typography
              color={"#6F00FF"}
              fontSize={{ xs: "3em", sm: "4em", md: "6em" }}
              fontFamily={"Outfit-ExtraBold"}
            >
              Hi {firstName}!
            </Typography>
            <Typography
              color={"#6F00FF"}
              fontSize={{ xs: "1.8em", sm: "2.4em", md: "3.4em" }}
              fontFamily={"Outfit-Regular"}
              letterSpacing={2}
            >
              Start your first note now
            </Typography>
          </Box>

          <Box display={"flex"} pl={{ xs: 2, sm: 4, md: 6 }} pt={2}>
            <NewNote />
            <Box display="flex" alignItems="center" justifyContent="center">
              <IconButton
                form="note"
                type="submit"
                onClick={handleSaveNote}
                style={{
                  height: "50px",
                  width: "50px",
                }}
              >
                <img
                  src={saveNoteIcon}
                  style={{
                    width: "100%",
                    height: "100%",
                    filter:
                      "invert(10%) sepia(100%) saturate(5422%) hue-rotate(267deg) brightness(108%) contrast(128%)",
                  }}
                  alt="Save Note"
                />
              </IconButton>
            </Box>
            <Box display={{ xs: "none", sm: "none", md: "block" }}>
              <img
                src={arrowImg}
                style={{
                  width: "20vh",
                  height: "20vh",
                }}
                alt="Arrow"
              />
            </Box>
          </Box>
        </Box>
        {isLargeScreen && (
          <Box>
            <Box pl={55}>
              <img
                src={vortexImg}
                style={{
                  width: "44vh",
                  height: "40vh",
                  transform: "rotate(-90deg)",
                }}
                alt="Vortex"
              />
            </Box>
            <Box pl={20}>
              <img
                src={noteImg}
                style={{
                  width: "52vh",
                  height: "48vh",
                }}
                alt="Note"
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Welcome;
