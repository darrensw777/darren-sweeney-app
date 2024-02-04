import appConfig from "./appConfig";

interface GreetingCopyProps {
    testTimeInHours?: number | null;
}

export const aboutGreeting = ({ testTimeInHours = null }: GreetingCopyProps) => {
    const d = new Date();
    const timeInHours = testTimeInHours || d.getHours();

    if (timeInHours < 12) {
        return appConfig.about.morningGreeting;
    }
    if (timeInHours > 18) {
        return appConfig.about.eveningGreeting;
    }
    if (timeInHours >= 12) {
        return appConfig.about.afternoonGreeting;
    }
};
