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

const getHourFromTimestamp = (timestamp) => String(timestamp).split(":")[0];

const availabilitySlotsToUIText = (slots) =>
  Array.from(slots).reduce((output, slot) => {
    const key = slot.day_of_week_index;
    const toFromString = `${getHourFromTimestamp(
      slot.from_utc_hour
    )} - ${getHourFromTimestamp(slot.to_utc_hour)}`;
    /* eslint-disable no-param-reassign */
    if (key in output) {
      output[key] += `<br>${toFromString}`;
    } else {
      output[key] = toFromString;
    }
    /* eslint-enable no-param-reassign */
    return output;
  }, {});

const languageLevelToUIText = (lls) =>
  Array.from(lls)
    .map((it) => `${it.language} ${it.level}`)
    .join("<br>");

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
