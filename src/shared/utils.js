const groupCommunicationLanguageToUIText = new Map([
  ["ru", "RU"],
  ["ua", "UA"],
  ["ru_ua", "RU/UA"],
  ["l2_only", "Изучаемый"],
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

const nonTeachingHelpToUIText = new Map([
  ["cv_write_edit", "Помощь с составлением резюме"],
  ["cv_proofread", "Проверка и отзыв о резюме"],
  ["mock_interview", "Проведение пробных интервью"],
  ["job_search", "Помощь с поиском работы"],
  ["career_strategy", "Помощь с составлением плана карьеры"],
  ["linkedin", "Проверка и отзыв по профилю linkedin"],
  ["career_switch", "Помощь со сменой карьеры"],
  ["portfolio", "Помощь с составлением портфолио"],
  ["uni_abroad", "Помощь с поступлением в университет за границей"],
  ["translate_docs", "Помощь с переводом документов"],
]);

const transformTrueFields = ({ data, translationMap }) =>
  Object.keys(data)
    .filter((it) => data[it])
    .map((it) => translationMap.get(it))
    .join("<br>");

module.exports = {
  groupCommunicationLanguageToUIText,
  availabilitySlotsToUIText,
  languageLevelToUIText,
  nonTeachingHelpToUIText,
  transformTrueFields,
};
