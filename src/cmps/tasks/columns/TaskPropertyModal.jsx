// import { Fade } from '@material-ui/core'

export function TaskPropertyModal({ options, type, handleModalChange, isModalShown }) {
    return (
        // <Fade in={isModalShown}>
            <div className=" task-property-modal ">
                {options.map((option, idx) => {
                    return <div
                        key={idx}
                        className={option}
                        onClick={() => handleModalChange(option, type)}>
                        {option}
                    </div>
                })}
            </div >
        // </Fade>
    )

}
