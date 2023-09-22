import app from 'flarum/forum/app';
import checkDateValid from "./checkDate";

export default function validatePromotion(): boolean {
  const isDisplaying: number = parseInt(app.forum.attribute('is-displaying'))
  const startDate: Date = new Date(app.forum.attribute('start-date'))
  const endDate: Date = new Date(app.forum.attribute('end-date'))

  const isDateValid: boolean = checkDateValid(startDate, endDate)

  return isDisplaying > 0 && isDateValid
}
