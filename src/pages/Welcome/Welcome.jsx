import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MutatingDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import saveNoteIcon from "../../assets/v.svg";
import arrowImg from "../../assets/WelcomePage/arrow.png";
import vortexImg from "../../assets/WelcomePage/vortex.png";
import noteImg from "../../assets/WelcomePage/note.png";
import whiteBackground from "../../assets/white.jpg";
import { clearNoteFields } from "../../store/newNoteSlice";
import NewNote from "../../components/NewNote";
import { addNote } from "../../store/notesSlice";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Welcome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const newNoteTitle = useSelector((state) => state.newNote.title);
  const newNoteContent = useSelector((state) => state.newNote.content);

  const setAccountData = (account) => {
    setId(account._id);
    setEmail(account.email);
    setFirstName(account.firstName);
    setLastName(account.lastName);
  };

  const getAccountData = async () => {
    try {
      const res = await axiosPrivate.get("/accounts/details");
      console.log("is it");
      setAccountData(res.data.account);
    } catch (error) {
    } finally {
    }
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
      <Box pl={4} flexDirection={"row"} display={"flex"}>
        <Box>
          <Box>
            <Typography
              color={"#6F00FF"}
              fontSize={"6em"}
              fontFamily={"Outfit-ExtraBold"}
            >
              Hi {firstName}!
            </Typography>
            <Typography
              color={"#6F00FF"}
              fontSize={"3.4em"}
              fontFamily={"Outfit-Regular"}
              letterSpacing={2}
            >
              Start your first note now
            </Typography>
          </Box>

          <Box display={"flex"} pl={6} pt={2}>
            <NewNote />
            <Box display="flex" alignItems="center" justifyContent="center">
              <IconButton
                form="note"
                type="submit"
                onClick={handleSaveNote}
                style={{
                  height: "50px", // Set a fixed height
                  width: "50px", // Set a fixed width
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
            <Box>
              <img
                src={arrowImg}
                style={{
                  width: "20vh",
                  height: "20vh",
                }}
                alt="Save Note"
              />
            </Box>
          </Box>
        </Box>
        <Box>
          <Box pl={55}>
            <img
              src={vortexImg}
              style={{
                width: "44vh",
                height: "40vh",
                transform: "rotate(-90deg)",
              }}
              alt="Save Note"
            />
          </Box>
          <Box pl={20}>
            <img
              src={noteImg}
              style={{
                width: "52vh",
                height: "48vh",
              }}
              alt="Save Note"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
