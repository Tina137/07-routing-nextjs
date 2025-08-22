"use client";
import css from "./NotePreview.module.css";

import { useRouter } from "next/navigation";

import type { ModalProps } from "@/types/note";

const NotePreview = ({ children }: ModalProps) => {
  const router = useRouter();

  const close = () => router.back();

  return (
    <div className={css.container}>
      <div className={css.item}>
        {children}
        <button className={css.backBtn} onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
};

export default NotePreview;
