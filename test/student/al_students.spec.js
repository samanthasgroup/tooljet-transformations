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

    expect(result).toEqual("Polish A1\nCzech C1");
  });
});

describe("Availability slots conversion", () => {
  it("Smoke test", () => {
    const slots = mockData[0].availability_slots;

    const result = availabilitySlotsToUIText(slots);

    expect(result).toEqual(
      [
        "Понедельник 08:00:00-11:00:00",
        "Вторник 05:00:00-08:00:00",
        "Вторник 17:00:00-21:00:00",
        "Среда 14:00:00-17:00:00",
        "Среда 17:00:00-21:00:00",
        "Четверг 11:00:00-14:00:00",
        "Пятница 05:00:00-08:00:00",
        "Пятница 14:00:00-17:00:00",
        "Пятница 17:00:00-21:00:00",
        "Суббота 05:00:00-08:00:00",
        "Воскресенье 11:00:00-14:00:00",
      ].join("\n")
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
