import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function NotesPage({ params }: Props) {
  const { slug } = await params;
  const initialData = await fetchNotes(1, "", slug[0]);
  return (
    <NotesClient
      initialData={initialData}
      initialPage={1}
      initialQuery=""
      tag={slug[0]}
    />
  );
}
