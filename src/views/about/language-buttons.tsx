import React from "react";

import classes from "./language-buttons.module.scss";
import Toggle from "../../components/buttons/toggle";

interface LanguageButtonsProps {
  data: { languages: string[] };
  currentLanguage: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

function LanguageButtons({
  data,
  currentLanguage,
  setLanguage,
}: LanguageButtonsProps) {
  return (
    <div className={classes.ButtonContainer}>
      {data.languages.map((lang: string) => (
        <Toggle
          key={lang}
          onPress={() => setLanguage(lang)}
          isSelected={lang === currentLanguage}
        >
          {lang}
        </Toggle>
      ))}
    </div>
  );
}

LanguageButtons.displayName = "LanguageButtons";

export default LanguageButtons;
