import clsx from "clsx";
import PropTypes from "prop-types";
import useCountdown from "../../hooks/use-countdown";
import DateTimeDisplay from "./date-time-display"


const CountdownTimer = ({ date, className }) => {
    const [days, hours, minutes, seconds] = useCountdown(date);

    return (
        <div
            className={clsx("timer timer-style", className)}
        >
            <DateTimeDisplay value={days} type="days" />
            <DateTimeDisplay value={hours} type="hours" />
            <DateTimeDisplay value={minutes} type="minutes" />
            <DateTimeDisplay value={seconds} type="secs" />
        </div>
    );
};

CountdownTimer.propTypes = {
    date: PropTypes.string.isRequired,
    className: PropTypes.string,
}


export default CountdownTimer;