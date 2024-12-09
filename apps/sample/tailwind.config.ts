const sharedConfig = require("@jaden/tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // 기본 설정 확장
  ...sharedConfig,
  // 필요한 경우 프로젝트별 설정 추가
  content: [
    ...sharedConfig.content,
    // 추가 경로
  ],
  theme: {
    extend: {
      ...sharedConfig.theme.extend,
      // 추가 테마
    },
  },
};
