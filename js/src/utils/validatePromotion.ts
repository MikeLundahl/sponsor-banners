import app from 'flarum/forum/app';
import checkDateValid from "./checkDate";

export default function validatePromotion(): boolean {
  const startDate: Date = new Date(app.forum.attribute('mbl-sponsor-banners.start-date'))
  const endDate: Date = new Date(app.forum.attribute('mbl-sponsor-banners.end-date'))

  const isDateValid: boolean = checkDateValid(startDate, endDate)

  return isDateValid
}
