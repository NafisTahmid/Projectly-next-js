const InfoBox = ({children, headingText, backgroundColor="bg-gray-100", textColor="text-gray-800", buttonInfo}) => {
    return(
         <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
            <h2 class={`${textColor} text-2xl font-bold`}>{headingText}</h2>
            <p class={`${textColor} mt-2 mb-4`}>
              {children}
            </p>
            <a
              href={buttonInfo.link}
              className={`inline-block ${buttonInfo.backgroundColor} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
            >
              {buttonInfo.text}
            </a>
          </div>
    );
};
export default InfoBox;