
// eslint-disable-next-line react/prop-types
const Button = ({title}) => {   
    return (
        <button className="bg-Gray w-[90%] mx-auto py-2.5 text-White duration-300 ease-in-out
        rounded-lg font-semibold hover:text-offBlack hover:bg-Green sm:w-[77%]">
            {title}
        </button>
    )
}

export default Button