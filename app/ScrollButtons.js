"use client";

export default function ScrollButtons() {
  return (
    <div className="scrollButtons">
      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Top
      </button>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })}
      >
        Bottom
      </button>
    </div>
  );
}
