import { getSingleNote } from "@/lib/api";
import NotePreview from "@/components/NotePreview/NotePreview";

type Props = {
  params: Promise<{ id: string }>;
};

const ModalPreview = async ({ params }: Props) => {
  const { id } = await params;
  const note = await getSingleNote(id);

  return (
    <NotePreview>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </NotePreview>
  );
};

export default ModalPreview;
