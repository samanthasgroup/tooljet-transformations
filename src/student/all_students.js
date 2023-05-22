const {
  availabilitySlotsToUIText,
  groupCommunicationLanguageToUIText,
  languageLevelToUIText,
} = require("../shared/utils");

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

const transformStudent = (data) => ({
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
  transformStudent,
};
