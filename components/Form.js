import { useState, useContext } from "react";
import { darkModeContext } from "./Layout";

export default function Form({ text, setText }) {
  const darkMode = useContext(darkModeContext);
  const [smallText, setSmallText] = useState(false);

  return (
    <div className="w-full p-3">
      <div>
        <h2
          className={
            "mb-1 md:text-lg " + (darkMode ? "text-white " : "text-grey-300")
          }
        >
          記事タイトル
        </h2>
        <input
          type="text"
          placeholder="文字数カウントのストレスから解放されよう！"
          className={
            "w-full p-2 mb-3 outline-none " +
            (darkMode ? "bg-gray-700 text-blue-400 " : "bg-white")
          }
        />
      </div>
      <h2
        className={"mb-1 md:text-lg " + (darkMode ? "text-white " : "text-grey-300")}
      >
        記事入力欄
      </h2>
      <button
        className={
          "text-sm mt-3 mr-3 px-3 py-2 text-white rounded-md " +
          (darkMode ? "bg-blue-900" : "bg-blue-500")
        }
        onClick={() => setSmallText(true)}
      >
        文字サイズ小
      </button>
      <button
        className={
          "text-sm mt-3 px-3 py-2 text-white rounded-md " +
          (darkMode ? "bg-blue-900" : "bg-blue-500")
        }
        onClick={() => setSmallText(false)}
      >
        文字サイズ大
      </button>
      <textarea
        id="countForm"
        className={
          "mt-3 text-sm  w-full h-4/6 p-3 outline-none " +
          (darkMode ? "bg-gray-700 text-blue-400 " : "bg-white ") +
          " " +
          (smallText ? "text-sm" : "text-base")
        }
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="## Zuboraとは&#13;&#10;Zuboraとは、**マークダウン形式**で書かれた文章に特化した文字数カウントサービスです。普段から文字のカウントを行うwebライター様に最適です。"
      />
      <button
        onClick={() => setText("")}
        disabled={text === ""}
        className={
          "text-sm md:text-base mt-3 px-3 py-2 text-white rounded-md " +
          (darkMode ? "bg-blue-900" : "bg-blue-500")
        }
      >
        リセット
      </button>
    </div>
  );
}
