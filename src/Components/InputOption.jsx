import "./InputOption.css"

const InputOption = ({ Icon, colour, title }) => {
  return (
    <div className='inputOption'>
      {<Icon style={{ color: colour }} />}
      <p>{title}</p>
    </div>
  );
}

export default InputOption 