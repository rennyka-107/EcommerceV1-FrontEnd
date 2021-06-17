const ButtonPixel = (props) => {
  const { title, ...rest } = props;
  return (
    <>
      <button className="button-pixel" {...rest}>{title}</button>
    </>
  );
};

export default ButtonPixel;
