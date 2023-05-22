const { groupCommunicationLanguageToUIText } = require("../shared/utils");

const groupStatusToUIText = new Map([
  ["pending", "Идет набор"],
  ["awaiting_start", "Собрана, ожидает начала занятий"],
  ["working", "Занимается"],
  ["attention", "Требуется внимание"],
  ["aborted", "Занятия преждевременно закончены"],
  ["finished", "Завершила курс"],
]);

const transformGroup = (data) => ({
  id: data.id,
  communication_language_mode: groupCommunicationLanguageToUIText.get(
    data.communication_language_mode
  ),
  monday: data.monday,
  tuesday: data.tuesday,
  wednesday: data.wednesday,
  thursday: data.thursday,
  friday: data.friday,
  saturday: data.saturday,
  sunday: data.sunday,
  language_and_level: `${data.language_and_level.language} ${data.language_and_level.level}`,
  lesson_duration_mins: data.lesson_duration_in_minutes,
  status: groupStatusToUIText.get(data.status),
  telegram_chat_url: data.telegram_chat_url,
  coordinators: Array.from(data.coordinators)
    .map((it) => it.full_name)
    .join("<br>"),
  teachers: Array.from(data.teachers)
    .map((it) => it.full_name)
    .join("<br>"),
  student_count: data.students_count,
  is_staff_only: data.is_for_staff_only ? "Да" : "Нет",
});

module.exports = {
  transformGroup,
};
