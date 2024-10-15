// noinspection JSAnnotator

import {DateTime} from "luxon";
import common from "@/config/common";

export default function newDate(date = new Date()) {
    return DateTime.fromISO(new Date(date).toISOString(), { zone: "Asia/Calcutta" });
}

export function dateFormat(date = new Date(), df = common.format.supabaseDate) {
    return newDate(date).toFormat(df);
}

export function format(date = newDate(), df = common.format.supabaseDate) {
    return date.toFormat(df);
}

export function parseWhenTime(t, dt = newDate()) {
    const [hour, minute] = t.split(":");
    if (hour && minute) {
        return dt.set({ hour, minute });
    }
    return dt;
}

export function addDays(date = newDate(), days = 1) {
    return date.plus({ days });
}

export function minusDays(date = newDate(), days = 1) {
    return date.minus({ days });
}

export function addHours(date = newDate(), hours = 4) {
    return date.plus({ hours });
}

export function minusHours(date = newDate(), hours = 4) {
    return date.minus({ hours });
}

export function addMinutes(date = newDate(), minutes = 4) {
    return date.plus({ minutes });
}

export function nextWeek(now = newDate()) {
    return addDays(now, 7);
}

export function nextMonth(now = newDate()) {
    return now.plus({ months: 1 });
}

export function lastMonth(now = newDate()) {
    return {
        firstDate: now.plus({ months: -1 }).startOf('month'),
        lastDate: now.plus({ months: -1 }).endOf('month')
    };
}

export function getDateWithOrdinal(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function next2Years(now = newDate()) {
    return now.plus({ years: 2 });
}

export function lastDateOfMonth(now = newDate()) {
    return now.endOf('month');
}

export function firstDateOfMonth(now = newDate()) {
    return now.startOf('month');
}

export function mondayDate(now = newDate()) {
    return now.startOf('week');
}

export function lastMondayDate(now = newDate()) {
    const currentWeekMonday = mondayDate(now);
    return currentWeekMonday.minus({ weeks: 1 });
}

export function sundayDate(now = newDate()) {
    return now.endOf('week');
}

export function lastSundayDate(now = newDate()) {
    const currentWeekSunday = sundayDate(now);
    return currentWeekSunday.minus({ weeks: 1 });
}

export function minutesToHoursAndMinutes(totalMinutes = 60) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}m`;
}

