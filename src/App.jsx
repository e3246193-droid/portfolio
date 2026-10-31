import React, { useState, useEffect } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Переключение темы и применение стилей
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty('--bg', '#16171d');
      document.documentElement.style.setProperty('--text', '#9ca3af');
      document.documentElement.style.setProperty('--text-h', '#f3f4f6');
      document.documentElement.style.setProperty('--code-bg', '#1f2028');
      document.documentElement.style.setProperty('--border', '#2e303a');
      document.documentElement.style.setProperty('--accent', '#ffffff');
      document.documentElement.style.setProperty('--accent-bg', 'rgba(255, 255, 255, 0.1)');
      document.documentElement.style.setProperty('--accent-border', 'rgba(255, 255, 255, 0.3)');
      document.documentElement.style.setProperty('--shadow', '0 10px 15px -3px rgba(0, 0, 0, 0.4)');
    } else {
      document.documentElement.style.setProperty('--bg', '#ffffff');
      document.documentElement.style.setProperty('--text', '#6b6375');
      document.documentElement.style.setProperty('--text-h', '#08060d');
      document.documentElement.style.setProperty('--code-bg', '#f4f3ec');
      document.documentElement.style.setProperty('--border', '#e5e4e7');
      document.documentElement.style.setProperty('--accent', '#000000');
      document.documentElement.style.setProperty('--accent-bg', 'rgba(0, 0, 0, 0.05)');
      document.documentElement.style.setProperty('--accent-border', 'rgba(0, 0, 0, 0.2)');
      document.documentElement.style.setProperty('--shadow', '0 10px 15px -3px rgba(0, 0, 0, 0.1)');
    }
  }, [isDarkMode]);

  return (
    <div style={{ padding: "40px 16px", minHeight: "100svh", display: "flex", flexDirection: "column", alignItems: "center", background: "var(--bg)", color: "var(--text)", transition: "all 0.3s ease" }}>
      
      {/* Кнопка переключения темы */}
      <div style={{ width: "100%", maxWidth: "950px", display: "flex", justifyContent: "flex-end", marginBottom: "16px" }}>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{
            padding: "8px 16px",
            borderRadius: "10px",
            background: "var(--code-bg)",
            color: "var(--text-h)",
            border: "1px solid var(--border)",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            transition: "all 0.2s ease"
          }}
        >
          {isDarkMode ? "☀️ Светлая тема" : "🌙 Тёмная тема"}
        </button>
      </div>

      <div style={{ width: "100%", maxWidth: "950px" }}>
        
        {/* Шапка профиля */}
        <header style={{
          background: "var(--code-bg)",
          border: "1px solid var(--border)",
          borderRadius: "20px",
          padding: "36px",
          boxShadow: "var(--shadow)",
          marginBottom: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          textAlign: "center"
        }}>
          <div style={{
            width: "110px",
            height: "110px",
            borderRadius: "20px",
            background: "var(--accent-bg)",
            border: "1px solid var(--accent-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
            fontWeight: "900",
            color: "var(--text-h)"
          }}>
            ЭЛ
          </div>
          
          <div>
            <span style={{
              display: "inline-block",
              padding: "6px 14px",
              borderRadius: "20px",
              background: "var(--accent-bg)",
              color: "var(--text-h)",
              fontSize: "13px",
              fontWeight: "600",
              marginBottom: "12px",
              border: "1px solid var(--accent-border)"
            }}>
              ⚡ Frontend Developer & 9th Grade Student
            </span>
            <h1 style={{ fontSize: "40px", margin: "0 0 10px 0", color: "var(--text-h)" }}>Эрлан Жабайкулов</h1>
            <p style={{ maxWidth: "600px", margin: "0 auto", fontSize: "16px", lineHeight: "150%" }}>
              Увлекаюсь фронтенд-разработкой, создаю интерактивные веб-приложения на React и Firebase, пишу чистый код, занимаюсь спортом и развиваю IT-проекты.
            </p>
          </div>
        </header>

        {/* Навигация по вкладкам */}
        <nav style={{
          display: "flex",
          gap: "8px",
          marginBottom: "28px",
          background: "var(--code-bg)",
          padding: "6px",
          borderRadius: "14px",
          border: "1px solid var(--border)",
          flexWrap: "wrap"
        }}>
          {[
            { id: "about", label: "👤 Обо мне" },
            { id: "skills", label: "🛠️ Навыки" },
            { id: "projects", label: "🚀 Проекты" },
            { id: "experience", label: "💼 Практика" },
            { id: "contacts", label: "📬 Контакты" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                minWidth: "130px",
                padding: "12px 16px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontWeight: activeTab === tab.id ? "600" : "500",
                fontSize: "14px",
                background: activeTab === tab.id ? "var(--text-h)" : "transparent",
                color: activeTab === tab.id ? "var(--bg)" : "var(--text)",
                transition: "all 0.2s ease"
              }}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Контент вкладок */}
        <main style={{ display: "flex", flexDirection: "column", gap: "20px", textAlign: "left" }}>
          
          {/* Вкладка: Обо мне */}
          {activeTab === "about" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "var(--code-bg)", border: "1px solid var(--border)", borderRadius: "18px", padding: "28px", boxShadow: "var(--shadow)" }}>
                <h2 style={{ fontSize: "20px", marginBottom: "16px", color: "var(--text-h)" }}>🎓 Образование и Статус</h2>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px", fontSize: "15px" }}>
                  <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: "10px" }}>
                    <span style={{ color: "var(--text)" }}>Локация:</span>
                    <strong style={{ color: "var(--text-h)" }}>Кербен, Аксы, Кыргызстан</strong>
                  </li>
                  <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: "10px" }}>
                    <span style={{ color: "var(--text)" }}>Мектеп:</span>
                    <strong style={{ color: "var(--text-h)" }}>№35 им. Темиркула Умоталиева</strong>
                  </li>
                  <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: "10px" }}>
                    <span style={{ color: "var(--text)" }}>Учеба:</span>
                    <strong style={{ color: "var(--text-h)" }}>9-й класс</strong>
                  </li>
                  <li style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--text)" }}>Фокус:</span>
                    <strong style={{ color: "var(--text-h)" }}>Frontend (React & Firebase)</strong>
                  </li>
                </ul>
              </div>

              <div style={{ background: "var(--code-bg)", border: "1px solid var(--border)", borderRadius: "18px", padding: "28px", boxShadow: "var(--shadow)" }}>
                <h2 style={{ fontSize: "20px", marginBottom: "16px", color: "var(--text-h)" }}>🎮 Игры и Хобби</h2>
                <p style={{ marginBottom: "18px", fontSize: "15px", lineHeight: "150%" }}>
                  Интересуюсь веб-разработкой, мобильным геймингом, созданием контента и активным отдыхом.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["⚽ Футбол", "Roblox", "Minecraft", "Free Fire", "Brawl Stars", "Black Russia", "YouTube Shorts"].map((hobby, i) => (
                    <span key={i} style={{ padding: "6px 12px", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "20px", fontSize: "13px", color: "var(--text-h)", fontWeight: "500" }}>
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Вкладка: Навыки */}
          {activeTab === "skills" && (
            <div style={{ background: "var(--code-bg)", border: "1px solid var(--border)", borderRadius: "18px", padding: "28px", boxShadow: "var(--shadow)" }}>
              <h2 style={{ fontSize: "22px", marginBottom: "20px", color: "var(--text-h)" }}>🛠️ Технологический стек и инструменты</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
                {[
                  { title: "Frontend Core", items: "HTML5, CSS3, JavaScript (ES6+), React.js, Vite" },
                  { title: "Стилизация и дизайн", items: "Tailwind CSS, Bootstrap, Figma, Canva" },
                  { title: "Базы данных и бэкенд", items: "Firebase (Firestore, Auth), REST API, CRUD" },
                  { title: "Инструменты и деплой", items: "Git, GitHub, VS Code, CapCut, OBS Studio" }
                ].map((cat, idx) => (
                  <div key={idx} style={{ background: "var(--bg)", padding: "20px", borderRadius: "14px", border: "1px solid var(--border)" }}>
                    <h3 style={{ color: "var(--text-h)", fontSize: "17px", marginBottom: "8px", fontWeight: "600" }}>{cat.title}</h3>
                    <p style={{ fontSize: "14px", color: "var(--text)", lineHeight: "140%" }}>{cat.items}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Вкладка: Проекты */}
          {activeTab === "projects" && (
            <div style={{ display: "grid", gap: "20px" }}>
              <div style={{ background: "var(--code-bg)", border: "1px solid var(--border)", borderRadius: "18px", padding: "28px", boxShadow: "var(--shadow)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "10px" }}>
                  <h2 style={{ color: "var(--text-h)", fontSize: "20px", margin: 0, fontWeight: "600" }}>🛍️ Eno Mono Store</h2>
                  <span style={{ padding: "4px 12px", borderRadius: "12px", background: "var(--accent-bg)", color: "var(--text-h)", fontSize: "12px", border: "1px solid var(--accent-border)", fontWeight: "600" }}>Главный проект</span>
                </div>
                <p style={{ fontSize: "15px", marginBottom: "16px", color: "var(--text)", lineHeight: "150%" }}>
                  Полноценное веб-приложение интернет-магазина на React и Firebase. Включает в себя каталог товаров, модальные окна авторизации, Firestore и интеграцию с Telegram-ботом (`t.me/enomono_bot`) для уведомлений о заказах.
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {["React", "Firebase Firestore", "Telegram API", "Tailwind CSS", "GitHub"].map((tech, i) => (
                    <span key={i} style={{ background: "var(--bg)", padding: "4px 10px", borderRadius: "6px", fontSize: "13px", border: "1px solid var(--border)", color: "var(--text-h)" }}>{tech}</span>
                  ))}
                </div>
              </div>

              <div style={{ background: "var(--code-bg)", border: "1px solid var(--border)", borderRadius: "18px", padding: "28px", boxShadow: "var(--shadow)" }}>
                <h2 style={{ color: "var(--text-h)", fontSize: "20px", marginBottom: "12px", fontWeight: "600" }}>🌐 Персональное портфолио</h2>
                <p style={{ fontSize: "15px", marginBottom: "16px", color: "var(--text)", lineHeight: "150%" }}>
                  Адаптивный сайт-портфолио с поддержкой светлой и тёмной тем, развёрнутый на GitHub Pages.
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {["HTML5", "CSS3", "JavaScript", "Git & GitHub", "Vite"].map((tech, i) => (
                    <span key={i} style={{ background: "var(--bg)", padding: "4px 10px", borderRadius: "6px", fontSize: "13px", border: "1px solid var(--border)", color: "var(--text-h)" }}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Вкладка: Практика */}
          {activeTab === "experience" && (
            <div style={{ background: "var(--code-bg)", border: "1px solid var(--border)", borderRadius: "18px", padding: "28px", boxShadow: "var(--shadow)" }}>
              <h2 style={{ fontSize: "22px", marginBottom: "20px", color: "var(--text-h)" }}>💼 Практический опыт и обучение</h2>
              <div style={{ borderLeft: "3px solid var(--text-h)", paddingLeft: "18px" }}>
                <span style={{ fontSize: "13px", color: "var(--text-h)", fontWeight: "600" }}>2026 — Настоящее время</span>
                <h3 style={{ color: "var(--text-h)", fontSize: "17px", margin: "6px 0", fontWeight: "600" }}>Frontend Developer & Student</h3>
                <p style={{ fontSize: "15px", margin: 0, color: "var(--text)", lineHeight: "150%" }}>
                  Обучение в Okurmen IT Academy, разработка клиентских веб-приложений на React.js, работа с системой контроля версий Git и интеграция баз данных.
                </p>
              </div>
            </div>
          )}

          {/* Вкладка: Контакты и скачивание PDF */}
          {activeTab === "contacts" && (
            <div style={{ background: "var(--code-bg)", border: "1px solid var(--border)", borderRadius: "18px", padding: "28px", boxShadow: "var(--shadow)", textAlign: "center" }}>
              <h2 style={{ fontSize: "24px", marginBottom: "16px", color: "var(--text-h)" }}>📬 Связаться со мной</h2>
              <p style={{ fontSize: "16px", marginBottom: "24px", color: "var(--text)", maxWidth: "500px", margin: "0 auto 24px auto" }}>
                Открыт для интересных предложений и совместных IT-проектов! Вы также можете скачать моё резюме в формате PDF.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", marginBottom: "24px" }}>
                <a href="https://github.com/e3246193-droid" target="_blank" rel="noreferrer" style={{ padding: "12px 24px", background: "var(--text-h)", color: "var(--bg)", borderRadius: "12px", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
                  GitHub (@e3246193-droid)
                </a>
                <a href="https://t.me/Erlanchik0131" target="_blank" rel="noreferrer" style={{ padding: "12px 24px", background: "var(--bg)", color: "var(--text-h)", border: "1px solid var(--border)", borderRadius: "12px", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
                  Telegram (@Erlanchik0131)
                </a>
              </div>

              {/* Кнопка скачивания PDF резюме */}
              <div>
                <a 
                  href="/Erlan_Jabaykulov_Resume.pdf" 
                  download 
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    background: "var(--accent-bg)",
                    color: "var(--text-h)",
                    border: "1px solid var(--accent-border)",
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "15px"
                  }}
                >
                  📄 Скачать резюме (PDF)
                </a>
              </div>
            </div>
          )}

        </main>

        <footer style={{ marginTop: "40px", fontSize: "14px", color: "var(--text)", textAlign: "center" }}>
          © 2026 Эрлан Жабайкулов • Портфолио
        </footer>

      </div>
    </div>
  );
}