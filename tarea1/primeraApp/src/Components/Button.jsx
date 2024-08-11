import PropTypes from "prop-types";

export default function Button({
  text = 'Ver más',
  background = 'bg-blue-500',
  color = 'text-white'
}){
  return(
    <>
      <button
      className={`rounded-[25px] px-2 py-1 text-center ${background} ${color}`}>
        {text}
      </button>
    </>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
};