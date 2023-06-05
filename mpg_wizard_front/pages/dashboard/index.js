export default function Dashboard() {

    function determineGreeting() {
        let time = new Date();
        let timeOfDay = time.toLocaleTimeString().split(" ")[1];

        if (timeOfDay === "AM") {
            return "Good morning";
        } else {
            return "Good evening";
        }
    }

    return (
        <>
            <h1>Hello!</h1>
            <p>
                {determineGreeting()}
            </p>
        </>
    )
}