const Alert = ({type, text}) => {
    return (
        <div className='absolute top-[51rem] left-0 right-0 flex justify-center items-center sm:absolute sm:top-[31rem] sm:left-0 sm:right-0 sm:flex sm:justify-center sm:items-center md:top-0 md:relative md:left-0 md:right-0 md:flex md:justify-center md:items-center '>
            <div
                className={`px-7 py-2 ${
                    type === "danger" ? "bg-red-800" : "bg-blue-800"
                } items-center text-indigo-100 leading-none rounded-full sm:rounded-full lg:rounded-full flex lg:inline-flex`}
                role='alert'
            >
                <p
                    className={`flex rounded-full mr-6 ${
                        type === "danger" ? "bg-red-500" : "bg-blue-500"
                    } uppercase px-2 py-1 text-xs font-semibold mr-3`}
                >
                    {type === "danger" ? "Failed" : "Success"}
                </p>
                <p className='mr-2 text-left'>{text}</p>
            </div>
        </div>
    );
};

export default Alert;


