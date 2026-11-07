# Аналітика зовнішнього Linktree

Сайт: https://social.links.dragi.app/

GA4: **Dragi Social Linktree**, ресурс `559265832`, вебпотік `16138461842`, Measurement ID `G-QCFG3R6J86`. Часовий пояс — Europe/Vienna, валюта — EUR. Measurement ID є публічним ідентифікатором тега, не секретом.

## Посилання для профілів

Готові адреси для профілів після публікації `/nmt/`.

| Напрям | Профіль | Посилання |
| --- | --- | --- |
| НМТ | Instagram `@dragi_space` | https://social.links.dragi.app/nmt/?utm_source=instagram&utm_medium=social&utm_campaign=nmt_app_download&utm_content=bio |
| НМТ | TikTok `@dragi_space` | https://social.links.dragi.app/nmt/?utm_source=tiktok&utm_medium=social&utm_campaign=nmt_app_download&utm_content=bio |
| НМТ | YouTube `@dragi_space` | https://social.links.dragi.app/nmt/?utm_source=youtube&utm_medium=social&utm_campaign=nmt_app_download&utm_content=channel_profile |
| Мови | Instagram `@dragi_learn` | https://social.links.dragi.app/?utm_source=instagram&utm_medium=social&utm_campaign=languages_app_download&utm_content=bio |
| Мови | TikTok `@dragi_learn` | https://social.links.dragi.app/?utm_source=tiktok&utm_medium=social&utm_campaign=languages_app_download&utm_content=bio |
| Мови | YouTube `@dragi_languages` | https://social.links.dragi.app/?utm_source=youtube&utm_medium=social&utm_campaign=languages_app_download&utm_content=channel_profile |

Для окремого відео або Stories змінюй `utm_content`, наприклад `video_20261107` або `story_20261107`. Усі значення пиши малими літерами. Спільне bio-посилання визначає платформу й місце розміщення. Для атрибуції конкретного відео потрібне посилання з його власним `utm_content`.

Сторінка `/nmt/` завжди українською. До адрес мовних профілів можна додати `&lan=uk`, `&lan=en`, `&lan=de` або `&lan=es`. Перемикання мови зберігає UTM. GA4 фіксує джерело на вході, а посилання магазинів містять лише параметри магазину.

## Події

| Подія | Що рахує |
| --- | --- |
| `page_view` | Перегляд сторінки |
| `app_store_click` | Натискання на кнопку App Store; ключова подія |
| `play_store_click` | Натискання на кнопку Google Play; ключова подія |
| `progress_click` | Перехід до Dragi Progress |
| `social_click` | Натискання на соцмережу; параметр `social_network` |
| `language_change` | Ручне перемикання мови |

Кожна власна подія містить `page_language` (`en`, `uk`, `de`, `es`) і `page_direction` (`nmt` або `languages`). Напрямок визначається за сторінкою, на якій сталася подія. Автоматичну enhanced measurement вимкнено, щоб не дублювати натискання окремою подією `click`.

## Як читати загальний звіт

Збережений звіт: [Dragi — трафік і переходи до магазинів](https://analytics.google.com/analytics/web/#/a353973116p559265832/reports/explorer?r=16138426258). Він також є в **Reports → Library**. Основний розріз — **Session source / medium**: `instagram / social`, `tiktok / social`, `youtube / social`, а також прямі й інші переходи. У ресурсі також налаштовано зведення маркетингового трафіку.

Для порівняння напрямків відкрий **Landing page** і додай **Session source / medium**. Рядок `/nmt/` показує сеанси, що почалися зі сторінки НМТ, а `/` показує сеанси, що почалися з мовної сторінки. **Session campaign** розрізняє розмічені кампанії. Старі посилання з `app_download` і далі ведуть на `/` та відображаються під старою назвою кампанії.

Порівнюй сеанси, ключові події `app_store_click` та `play_store_click` і частку сеансів із натисканням кнопки магазину. **Landing page** відповідає на питання, з якого напрямку почався сеанс. Для розрізу за сторінкою, де натиснули кнопку, у GA4 потрібно зареєструвати подієвий параметр **Page direction** у **Admin → Custom definitions → Create custom dimension**. Вибери область **Event** і параметр `page_direction`. Потім у **Explore** можна зіставити **Page direction**, **Session source / medium** і **Event name** та порахувати **Event count** для двох магазинів.

Натискання на магазин не підтверджує встановлення застосунку. Для встановлень потрібна окрема атрибуція на стороні App Store / Google Play / застосунку.

## Запуск і межі статистики

За прямим рішенням власника від 20.10.2026 банер підтвердження й налаштування аналітики у футері прибрано. Google tag запускається автоматично на робочому домені. Попередній вибір із локального сховища більше не використовується. Рекламні сигнали й персоналізацію вимкнено. Cookies мають строк до 180 днів і обмежені доменом `social.links.dragi.app`, а не всіма піддоменами Dragi.

Статистика охоплює відвідувачів, які не блокують Google Analytics. Минулі відвідування не відновлюються. Для оперативної перевірки є Realtime; звичайні звіти обробляються із затримкою.

На localhost, GitHub preview та інших доменах Google tag не завантажується і події не надсилаються. Це дозволяє перевіряти сайт без забруднення робочої статистики. Обробники натискань не затримують і не перехоплюють навігацію.
