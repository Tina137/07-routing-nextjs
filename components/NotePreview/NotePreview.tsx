import Modal from "@/components/Modal/Modal";
import { Note } from "@/types/note";

type Props = {
  note: Note;
};

const NotePreview = ({ note }: Props) => {
  return (
    <Modal>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>{note.tag}</p>
      <p>{note.createdAt}</p>
    </Modal>
  );
};

export default NotePreview;
