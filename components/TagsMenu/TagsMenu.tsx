"use client";
import css from "./TagsMenu.module.css";
import { useState } from "react";

import { tagsArr } from "@/types/note";

const TagsMenu = () => {
  const [def, setDef] = useState(false);
  function toggle() {
    setDef(!def);
  }

  return (
    <div className={css.menuContainer}>
      <button onClick={toggle} className={css.menuButton}>
        Notes ▾
      </button>
      {def && (
        <ul className={css.menuList}>
          {tagsArr.map((tag) => {
            return (
              <li key={tag} className={css.menuItem}>
                <a href={`/notes/filter/${tag}`} className={css.menuLink}>
                  {tag}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TagsMenu;
