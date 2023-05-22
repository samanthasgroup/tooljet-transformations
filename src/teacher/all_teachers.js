const {
  groupCommunicationLanguageToUIText,
  availabilitySlotsToUIText,
  languageLevelToUIText,
  nonTeachingHelpToUIText,
  transformTrueFields,
} = require("../shared/utils");

const teacherStatusToUIText = new Map([
  ["awaiting_offer", "Ожидает группу"],
  ["group_offered", "Группа предложена"],
  ["awaiting_start", "Ожидает начала занятий"],
  ["teaching_open", "Занимается, готов взять еще группу"],
  ["teaching_full", "Занимается, не принимает больше групп"],
  ["teaching_another_offered", "Занимается, предложена еще одна группа"],
  [
    "teaching_another_awaiting_start",
    "Занимается, ждет начала еще одной группы",
  ],
  ["needs_substitution", "Нужна замена"],
  ["on_leave", "В отпуске"],
  ["no_response", "Не отвечает"],
  ["finished_left", "Закончил учить, покинул проект"],
  ["finished_stays", "Закончил учить, остается в проекте"],
  ["banned", "Выгнан из проекта"],
  ["removed", "Доступ отозван"],
  ["left_prematurely", "Преждевременно покинул проект"],
]);

const teacherPeerSupportToUIText = new Map([
  ["can_check_syllabus", "Проверка учебного плана"],
  ["can_host_mentoring_sessions", "Менторство"],
  ["can_give_feedback", "Фидбэк по качеству уроков"],
  ["can_help_with_childrens_groups", "Помощь с детскими группами"],
  ["can_provide_materials", "Помощь с учебными материалами"],
  ["can_invite_to_class", "Посещение уроков коллег"],
  ["can_work_in_tandem", "Работа в тандеме"],
]);

const transformTeacher = (data) => ({
  id: data.id,
  name: `${data.first_name} ${data.last_name}`,
  status: teacherStatusToUIText.get(data.status),
  communication_language_mode: groupCommunicationLanguageToUIText.get(
    data.communication_language_mode
  ),
  utc_timedelta: data.utc_timedelta,
  availability_slots: availabilitySlotsToUIText(data.availability_slots),
  student_age_ranges: Array.from(data.student_age_ranges).join("<br>"),
  languages_and_levels: languageLevelToUIText(
    data.teaching_languages_and_levels
  ),
  max_simultaneous_groups: data.simultaneous_groups,
  weekly_frequency: data.weekly_frequency_per_group,
  can_host_speaking_club: data.can_host_speaking_club ? "Да" : "Нет",
  non_teaching_help_comment: data.non_teaching_help_provided_comment,
  non_teaching_help: transformTrueFields({
    data: data.non_teaching_help_provided,
    translationMap: nonTeachingHelpToUIText,
  }),
  peer_support: transformTrueFields({
    data: data.peer_support,
    translationMap: teacherPeerSupportToUIText,
  }),
});

module.exports = {
  transformTeacher,
};
