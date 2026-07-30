import CartICon from '/images/icon-add-to-cart.svg';

const AddtocartButton = ({ onClick, children, buttonClass, ...otherProps }) => {
    return (
        <button
            className={
                " flex items-center justify-center bg-white text-sm font-semibold rounded-4xl cursor-pointer addtocart" +
                ` ${buttonClass !== undefined ? buttonClass : ""}`
            }
            style={{
                width: "160px",
                height: "44px",
                color: "#260F08",
            }}
            onClick={onClick}
            {...otherProps}
        >
            <img src={CartICon} alt="" />  &nbsp;<span>{children}</span>
        </button>
    )
};
export default AddtocartButton;
