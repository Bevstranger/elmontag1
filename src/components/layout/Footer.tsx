import { Link } from "react-router-dom";
import { BoltIcon, PhoneIcon } from "@heroicons/react/24/outline";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <BoltIcon className="h-8 w-8 text-yellow-400 mr-2" />
              <span className="text-2xl font-bold">ЭлектроСервис</span>
            </div>
            <p className="text-gray-400 text-center">
              Профессиональные электромонтажные работы с 2008 года. Гарантия
              качества и безопасности.
            </p>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <span className="sr-only">VK</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.13C2 20.67 3.33 22 8.93 22h6.13c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm-1.76 15.13c-1.54 0-2.17-.72-3-.99-1.33-.5-1.88-.83-1.88-1.78 0-.68.5-1.33 1.5-1.33.85 0 1.17.28 1.5.95.35.83.58 1.41 1.33 1.41.68 0 1.17-.28 1.17-1.05 0-.55-.08-1.01-.18-1.41-.35-1.33-.85-2.78-2.4-2.78-1.5 0-2.4 1.05-2.4 2.53 0 1.78 1.33 3.08 3.15 3.08.83 0 1.67-.23 2.33-.5v1.15c-.5.18-1.33.5-2.33.5zm5.38-3.08c0 1.78-1.05 2.53-3.15 2.53-1.17 0-2.17-.35-2.78-.85l.58-1.5c.68.5 1.33.83 2.33.83 1.05 0 1.68-.35 1.68-1.18 0-.85-.85-1.17-2.05-1.68-1.5-.58-2.53-1.33-2.53-3.08 0-1.78 1.17-2.53 3-2.53 1.05 0 1.88.23 2.4.5l-.58 1.5c-.5-.23-1.05-.5-1.83-.5-1 0-1.5.35-1.5 1.05 0 .68.68.95 1.83 1.45 1.67.68 2.53 1.33 2.53 3.08z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <span className="sr-only">Telegram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.25 1.58-1.32 5.41-1.87 7.19-.14.45-.41.6-.68.61-.23.01-.58-.11-.86-.21l-2.68-1.02-1.03-.98c-.37-.35-.01-.54.23-.77l4.08-3.92.85-.85c.12-.12.26-.12.38 0 .1.1.09.26.03.39l-1.47 2.6-.45.89 1.23.76 2.75 1.71.49.3c.44.26.75.12.86-.41l1.56-7.33c.12-.52-.19-.75-.68-.61z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Услуги
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Электромонтаж в квартирах
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Электромонтаж в домах
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Промышленный электромонтаж
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Аварийные работы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Проектирование
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Контакты
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center justify-center md:justify-start">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <div>
                  <a
                    href="tel:+7 (916) 987-65-43"
                    className="hover:text-yellow-400"
                  >
                    +7 (916) 987-65-43
                  </a>
                </div>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:iva.iror@ya.ru"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  iva.iror@ya.ru
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  г. Муром, Владимирская обл., улица Ленинградская, д. 26,
                  корп./ст. 1, кв./оф. 64
                </span>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Режим работы
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Пн-Пт: 8:00 - 20:00
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Сб-Вс: 9:00 - 21:00
              </li>
              <li className="mt-4 flex justify-center md:justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors duration-300 font-medium"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Заказать звонок
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>© 2025 ИП "ИВАНОВ ИГОРЬ ЮРЬЕВИЧ". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
