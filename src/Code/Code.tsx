import React, { useState, useRef, useEffect } from "react";
import { CodeProps } from "./Code.types";
import scss from "./Code.module.scss";
import { Button, Icon } from "..";
import ContentEditable from "react-contenteditable";

export const Code = ({ children, editable, ...props }: CodeProps) => {
  const [value, setValue] = useState<string>(children);
  const codeRef = useRef<any>();

  useEffect(() => {
    setValue(children);
  }, [children]);

  const copyToClipboard = (e: any) => {
    if (!navigator.clipboard) {
      codeRef.current.select();
      document.execCommand("copy");
    } else {
      // replace </div> with \n
      let regex = /<[/]div\s*[\/]?>/gi;
      let newValue = value.replace(regex, "\n");

      // remove html tags
      regex = /(<([^>]+)>)/gi;
      newValue = newValue.replace(regex, "");

      // replace html ascii
      newValue = newValue.replaceAll("&lt;", "<");
      newValue = newValue.replaceAll("&gt;", ">");

      navigator.clipboard.writeText(newValue);
    }

    e.target.focus();
  };

  return (
    <div className={scss.code}>
      <ContentEditable
        className={scss.content}
        disabled={!editable}
        innerRef={codeRef}
        defaultValue={value}
        html={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div className={scss.buttonWrapper}>
        <Button onClick={copyToClipboard}>
          <Icon icon="copy" />
        </Button>
        {editable && (
          <Button
            onClick={() => {
              codeRef.current!.focus();
            }}
          >
            <Icon icon="edit" />
          </Button>
        )}
      </div>
    </div>
  );
};
