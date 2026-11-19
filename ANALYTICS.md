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

Сторінка `/nmt/` завжди українською. До адрес мовних профілів можна додати `&lan=uk`, `&lan=en`, `&lan=de` або `&lan=es`. Перемикання мови зберігає UTM. GA4 фіксує джерело на вході. Google Play отримує UTM у параметрі `referrer`, а App Store після налаштування токена отримує `utm_content` у параметрі `ct`.

## TikTok Ads · англійська для українців (D307, T145)

Встав готову адресу в кожне оголошення вручну. Вимкни UTM Auto attach або звір п’ять UTM у прев’ю оголошення. TikTok додає `ttclid` автоматично.

| Група (`utm_term`) | Посилання оголошення (`utm_content`) |
| --- | --- |
| `ag1_situatsiia` | [a1_parmezan_sytuatsiia](https://social.links.dragi.app/?lan=uk&utm_source=tiktok&utm_medium=paid_social&utm_campaign=tt_ua_en_traffic_01&utm_term=ag1_situatsiia&utm_content=a1_parmezan_sytuatsiia) |
| `ag1_situatsiia` | [a2_parmezan_ekran](https://social.links.dragi.app/?lan=uk&utm_source=tiktok&utm_medium=paid_social&utm_campaign=tt_ua_en_traffic_01&utm_term=ag1_situatsiia&utm_content=a2_parmezan_ekran) |
| `ag1_situatsiia` | [a3_dzvinok](https://social.links.dragi.app/?lan=uk&utm_source=tiktok&utm_medium=paid_social&utm_campaign=tt_ua_en_traffic_01&utm_term=ag1_situatsiia&utm_content=a3_dzvinok) |
| `ag2_serial` | [b1_serial_treiler](https://social.links.dragi.app/?lan=uk&utm_source=tiktok&utm_medium=paid_social&utm_campaign=tt_ua_en_traffic_01&utm_term=ag2_serial&utm_content=b1_serial_treiler) |
| `ag2_serial` | [b2_povtory_za_marko](https://social.links.dragi.app/?lan=uk&utm_source=tiktok&utm_medium=paid_social&utm_campaign=tt_ua_en_traffic_01&utm_term=ag2_serial&utm_content=b2_povtory_za_marko) |
| `ag2_serial` | [b3_shcho_vidpovist](https://social.links.dragi.app/?lan=uk&utm_source=tiktok&utm_medium=paid_social&utm_campaign=tt_ua_en_traffic_01&utm_term=ag2_serial&utm_content=b3_shcho_vidpovist) |
| `ag3_bil` | [c1_kontrol_new2](https://social.links.dragi.app/?lan=uk&utm_source=tiktok&utm_medium=paid_social&utm_campaign=tt_ua_en_traffic_01&utm_term=ag3_bil&utm_content=c1_kontrol_new2) |
| `ag3_bil` | [c2_nepravylno_chomu](https://social.links.dragi.app/?lan=uk&utm_source=tiktok&utm_medium=paid_social&utm_campaign=tt_ua_en_traffic_01&utm_term=ag3_bil&utm_content=c2_nepravylno_chomu) |
| `ag3_bil` | [c3_perekladaiu](https://social.links.dragi.app/?lan=uk&utm_source=tiktok&utm_medium=paid_social&utm_campaign=tt_ua_en_traffic_01&utm_term=ag3_bil&utm_content=c3_perekladaiu) |
| `ag4_statyka` | [k1_serial_karusel](https://social.links.dragi.app/?lan=uk&utm_source=tiktok&utm_medium=paid_social&utm_campaign=tt_ua_en_traffic_01&utm_term=ag4_statyka&utm_content=k1_serial_karusel) |
| `ag4_statyka` | [k2_parmezan_karusel](https://social.links.dragi.app/?lan=uk&utm_source=tiktok&utm_medium=paid_social&utm_campaign=tt_ua_en_traffic_01&utm_term=ag4_statyka&utm_content=k2_parmezan_karusel) |
| `ag4_statyka` | [k3_dzvinok_karusel](https://social.links.dragi.app/?lan=uk&utm_source=tiktok&utm_medium=paid_social&utm_campaign=tt_ua_en_traffic_01&utm_term=ag4_statyka&utm_content=k3_dzvinok_karusel) |

### Увімкнення і перевірка

1. Вебпіксель `Dragi landing` налаштовано в [tiktok-pixel.js](./tiktok-pixel.js). Він запускається на робочому домені після того, як відвідувач дозволить маркетингові cookie в налаштуваннях футера. Там само можна змінити свій вибір. [Довідка TikTok](https://ads.tiktok.com/resources/help/article/get-started-pixel)
2. Після публікації відкрий одне з посилань оголошення. У Chrome з **TikTok Pixel Helper** перевір, що після згоди є `PageView`, а обидві кнопки відправляють `Download` з `content_name` `google_play` і `app_store` відповідно. Повтори в **TikTok Events Manager → Test Events**. Перевір також, що після відмови піксель не запускається. [TikTok Pixel Helper](https://ads.tiktok.com/resources/help/article/TikTok-pixel-helper-2.0)
3. Перевір, що посилання Google Play містить усі п’ять значень UTM. У консолі браузера розкодуй вкладений параметр командою `Object.fromEntries(new URLSearchParams(new URL(document.querySelector('#google-play').href).searchParams.get('referrer')))`. Фактичну атрибуцію встановлення та подій у застосунку перевіряють окремим встановленням з магазину. [Google Play Install Referrer](https://developer.android.com/google/play/installreferrer)

За потреби атрибуцію встановлень з App Store можна підключити окремо. Значення `pt` із кампанійного посилання Dragi в **App Store Connect → Analytics → Campaigns** заповнює `APP_STORE_PROVIDER_TOKEN` у [app.js](./app.js). Сайт додає `pt`, `ct` (до 40 символів із `utm_content`) і `mt=8` до посилання на App Store. [Довідка Apple](https://developer.apple.com/help/app-store-connect-analytics/acquisition/campaign-links/)

За D307 тест використовує **Traffic → Website → Landing Page View**. Піксель вимірює переходи в магазини як `Download`. TikTok вказує **Sales** як вебціль, що підтримує оптимізацію за `Download`. [Стандартні події TikTok](https://ads.tiktok.com/resources/help/article/standard-events-parameters)

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

На localhost, GitHub preview та інших доменах Google tag не завантажується і події не надсилаються. Це дозволяє перевіряти сайт без забруднення робочої статистики.
