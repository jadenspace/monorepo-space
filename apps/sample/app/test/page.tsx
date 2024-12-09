"use client";

import { useState } from "react";

// 일부러 포맷팅을 흐트러뜨린 컴포넌트
export default function TestPage(): React.ReactNode {
  const [count, setState] = useState(0);

  // 테일윈드 클래스 순서가 뒤섞인 요소들
  return (
    <div className="min-h-screen p-8">
      <h1 className="mb-4 text-center text-3xl font-bold">스타일 테스트 페이지</h1>

      {/* 들여쓰기가 잘못된 카드 컴포넌트 */}
      <div className="rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800">
        <h2 className="mb-2 text-xl font-semibold">포맷팅 테스트</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          이 텍스트는 들여쓰기가 잘못되어 있습니다.
        </p>
      </div>

      {/* 테일윈드 클래스 순서가 뒤섞인 버튼 */}
      <button
        onClick={() => setState((prev) => prev + 1)}
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 active:bg-blue-700"
      >
        카운트: {count}
      </button>

      {/* 스타일 테스트를 위한 리드 */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="rounded bg-gray-100 p-4 dark:bg-gray-700">
            아이템 {item}
          </div>
        ))}
      </div>
    </div>
  );
}
