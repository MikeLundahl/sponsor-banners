

export default function checkDateValid(startDate: Date, endDate: Date): boolean {
    const currentDate: Date = new Date();
    const isAfterStart: boolean = currentDate.getTime() >= startDate.getTime();
    const isBeforeEnd: boolean = currentDate.getTime() <= endDate.getTime();

    return isAfterStart && isBeforeEnd
}
