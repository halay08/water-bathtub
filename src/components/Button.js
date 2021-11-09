const Button = (props) => {
  const { text, ...rest } = props;
  return (
    <button className="button" {...rest}>
      {text}
    </button>
  );
};

export default Button;
