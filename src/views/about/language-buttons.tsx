import React from "react";

import classes from "./language-buttons.module.scss";
import Toggle from "../../components/buttons/toggle";
import { useStaggerInitialAnimation } from "../../utils/animation/use-stagger-initial-animation";

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
  const scope = useStaggerInitialAnimation({ targetChild: "div" });

  return (
    <div className={classes.ButtonContainer} ref={scope}>
      {data.languages.map((lang: string) => (
        <div key={lang}>
          <Toggle
            key={lang}
            onPress={() => setLanguage(lang)}
            isSelected={lang === currentLanguage}
          >
            {lang}
          </Toggle>
        </div>
      ))}
    </div>
  );
}

LanguageButtons.displayName = "LanguageButtons";

export default LanguageButtons;
