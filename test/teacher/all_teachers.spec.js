const { describe, it, expect } = require("@jest/globals");
const { transformTeacher } = require("../../src/teacher/all_teachers");
const mockData = require("../mock_data/all_teachers_mock.json");

describe("Full output conversion", () => {
  it("Smoke test", () => {
    const result = transformTeacher(mockData[0]);
    expect(result).toEqual({
      availability_slots: {
        0: "05 - 08",
        1: "11 - 14<br>17 - 21",
        2: "11 - 14<br>14 - 17",
        3: "08 - 11<br>17 - 21",
        4: "05 - 08<br>08 - 11",
        5: "05 - 08<br>08 - 11<br>11 - 14<br>17 - 21",
        6: "11 - 14",
      },
      can_host_speaking_club: "Нет",
      communication_language_mode: "UA",
      id: 41,
      languages_and_levels:
        "English B1<br>French A1<br>French A2<br>German A0<br>German A2<br>Spanish A0<br>Spanish A1<br>Italian A0<br>Italian A2<br>Polish A0<br>Polish A1<br>Polish A2<br>Czech A0<br>Czech A1<br>Czech A2<br>Swedish A2",
      max_simultaneous_groups: 3231,
      name: "Адам Єременко",
      non_teaching_help:
        "Помощь с поиском работы<br>Помощь с переводом документов",
      non_teaching_help_comment: "",
      peer_support: "Посещение уроков коллег<br>Работа в тандеме",
      status: "Ожидает группу",
      student_age_ranges: "13-17",
      utc_timedelta: "UTC+08:00",
      weekly_frequency: 428,
    });
  });
});
