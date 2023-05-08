const { describe, it, expect } = require("@jest/globals");
const {
  languageLevelToUIText,
  availabilitySlotsToUIText,
  transform,
} = require("../../src/student/all_students");
const mockData = require("../mock_data/all_students_mock.json");

describe("Language/level conversion", () => {
  it("Smoke test", () => {
    const lls = mockData[0].teaching_languages_and_levels;

    const result = languageLevelToUIText(lls);

    expect(result).toEqual("Polish A1<br>Czech C1");
  });
});

describe("Availability slots conversion", () => {
  it("Smoke test", () => {
    const slots = mockData[0].availability_slots;

    const result = availabilitySlotsToUIText(slots);

    expect(result).toEqual(
      [
        "Понедельник 08-11",
        "Вторник 05-08",
        "Вторник 17-21",
        "Среда 14-17",
        "Среда 17-21",
        "Четверг 11-14",
        "Пятница 05-08",
        "Пятница 14-17",
        "Пятница 17-21",
        "Суббота 05-08",
        "Воскресенье 11-14",
      ].join("<br>")
    );
  });
});

describe("Full output conversion", () => {
  it("Smoke test", () => {
    const result = transform(mockData[0]);
    expect(result.status).toEqual("Не посещает уроки");
    expect(result.speaking_club_status).toEqual("Посещает");
    expect(result.communication_language_mode).toEqual("RU/UA");
  });
});
