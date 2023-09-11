import PropTypes from "prop-types";
import questionMark from "../../assets/images/icons/question.svg";

const Questions = ({
  question,
  answer,
  phnMinWidth,
  phnMaxWidth,
  answerPadding,
}) => {
  return (
    <div className="p-5 mt-5 rounded-2xl border-solid border border-[rgba(14,151,73,0.3)]">
      <div className="flex items-center gap-3 md:gap-5 mb-1">
        <span className="bg-[#0e9749] text-white text-xs font-semibold px-5 md:px-4 py-4 md:py-3 rounded-lg">
          <img
            className={`min-w-[${phnMinWidth}] md:min-w-[150%] max-w-[${phnMaxWidth}] md:max-w-[200%] h-auto`}
            src={questionMark}
            alt=""
          />
        </span>
        <h3 className="text-[#1C1C1C] text-base font-bold">{question}</h3>
      </div>
      <p className={`text-base ml-6 ${answerPadding} md:pl-9`}>{answer}</p>
    </div>
  );
};

Questions.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  phnMinWidth: PropTypes.string.isRequired,
  phnMaxWidth: PropTypes.string.isRequired,
  answerPadding: PropTypes.string.isRequired,
};

export default Questions;
