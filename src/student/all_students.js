const groupCommunicationLanguageToUIText = new Map([
  ["ru", "RU"],
  ["ua", "UA"],
  ["ru_ua", "RU/UA"],
  ["l2_only", "Изучаемый"],
]);

const studentStatusToUIText = new Map([
  ["awaiting_offer", "Ожидает группу"],
  ["group_offered", "Группа предложена"],
  ["awaiting_start", "Ожидает начала занятий"],
  ["study", "Занимается"],
  ["not_attending", "Не посещает уроки"],
  ["needs_transfer", "Требуется перевод в другую группу"],
  ["no_response", "Не отвечает"],
  ["left_prematurely", "Преждевременно покинул проект"],
  ["finished", "Закончил обучение"],
  ["banned", "Выгнан из проекта"],
]);

const dayIndexToUIText = (index) =>
  [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ][index];

const availabilitySlotsToUIText = (slots) =>
  Array.from(slots)
    .map(
      (it) =>
        `${dayIndexToUIText(it.day_of_week_index)} ${it.from_utc_hour}-${
          it.to_utc_hour
        }`
    )
    .join("\n");

const languageLevelToUIText = (lls) =>
  Array.from(lls)
    .map((it) => `${it.language} ${it.level}`)
    .join("\n");

const transform = (data) => ({
  id: data.id,
  name: `${data.first_name} ${data.last_name}`,
  comment: data.comment,
  utc_timedelta: data.utc_timedelta,
  availability_slots: availabilitySlotsToUIText(data.availability_slots),
  communication_language_mode: groupCommunicationLanguageToUIText.get(
    data.communication_language_mode
  ),
  age_range: data.age_range,
  status: studentStatusToUIText.get(data.status),
  speaking_club_status: data.is_member_of_speaking_club
    ? "Посещает"
    : "Не посещает",
  languages_and_levels: languageLevelToUIText(
    data.teaching_languages_and_levels
  ),
});

module.exports = {
  availabilitySlotsToUIText,
  languageLevelToUIText,
  transform,
};
