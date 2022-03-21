export const _getClassNames = ({
  parent,
  scss,
  scale,
  weight,
  disabled,
  className,
  loading,
  _class,
}: {
  parent: string;
  scss: any;
  scale?: string | undefined;
  weight?: string | undefined;
  disabled?: boolean | undefined;
  className?: string | undefined;
  loading?: boolean;
  _class?: string;
}) => {
  let _className = [];
  if (_class) {
    _className.push(_class);
  }

  _className.push(parent);

  switch (scale) {
    case "s":
      _className.push(scss.fontS);
      break;
    case "m":
      _className.push(scss.fontM);
      break;
    case "l":
      _className.push(scss.fontL);
      break;
    case "xl":
      _className.push(scss.fontXL);
      break;
  }

  switch (weight) {
    case "light":
      _className.push(scss.weightLight);
      break;
    case "normal":
      _className.push(scss.weightNormal);
      break;
    case "bold":
      _className.push(scss.weightBold);
      break;
  }

  if (className) _className.push(className);

  if (disabled) _className.push(scss.disabled);

  _className.filter(Boolean);

  return _className;
};
