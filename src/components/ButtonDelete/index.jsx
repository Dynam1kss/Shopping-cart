const ButtonDelete = ({ deleteProduct, id }) => {
  return (
    <button
      type="button"
      onClick={() => {
        deleteProduct(id);
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/img/icons/icon-cross.svg`}
        alt="Delete"
      />
    </button>
  );
};

export default ButtonDelete;
