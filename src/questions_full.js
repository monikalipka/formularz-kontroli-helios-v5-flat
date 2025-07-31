const questions = [
  {
    "numer": "1",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Czystość monitorów lcd nad barem.",
    "odpowiedzi": [
      "Monitory są czyste zarówno patrząc od frontu jak i z tyłu",
      "Monitory są brudne",
      "Nie dotyczy"
    ],
    "opis": "Jeżeli stwierdzi się: brak kurzu na ekranach, brak kurzu na mocowaniach, brak zacieków i śladów palców na ekranach należy wybrać TAK. Bary kinowe są miejscem przygotowywania i wydawania produktów spożywczych. W związku z powyższym miejsca te powinny charakteryzować się odpowiednim stanem higienicznym. Poza tym stałe utrzymywanie maszyn i urządzeń w czystości wydłuża okres ich bezawaryjnej pracy."
  },
  {
    "numer": "2",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Ekspozycja plików na monitorach LCD",
    "odpowiedzi": [
      "Pliki poprawnie wyeksponowane",
      "Podłączono na monitorach inny plik lub brakuje pliku",
      "Nie dotyczy"
    ],
    "opis": "Pliki z ofertą barową są podzielone na trzy grupy: Grupa 1. Zestawy główne Grupa 2. Zestaw filmowy lub dziecięcy, Nachos serowe i/lub popcorn serowy, Kawy, Okresowe akcje promo (Zestawy Maratończyka, Puszka Schweppes gratis, Zestaw piłkarski, Zestaw Minecraft Doritos, itp.) Grupa 3. Lody impulsowe, Orzechy, Słodycze Mars. Ekspozycja poprawnych plików na monitorach menu, jest jednym z najważniejszych czynników wpływających na sprzedaż. Kontrolasprawności monitorów i dbałość o poprawną ekspozycję plików to jeden z najważniejszych elementów pracy kadry zarządzającej kinem."
  },
  {
    "numer": "3",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Sprawność oświetlenia frontowej lady baru od strony klienta.",
    "odpowiedzi": [
      "Sprawne",
      "Niesprawne",
      "Nie dotyczy"
    ],
    "opis": "Wszystkie źródła światła działają (żarówki, świetlówki, paski LED). Oświetlenie na całej długości frontowej lady od strony klienta ma identyczną barwę światła."
  },
  {
    "numer": "4",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Gondola mobilna - ekspozycja produktów, czystość i stan techniczny.",
    "odpowiedzi": [
      "Ekspozycja jest prawidłowa oraz brak uwag do jej czystości i stanu technicznego.",
      "Ekspozycja nie jest prawidłowa lub są uwagi do jej stanu technicznego lub czystości.",
      "Nie dotyczy"
    ],
    "opis": "Słodycze i napoje powinny być eksponowane zgodnie z ustalonym standardem. Nie powinno być pustych miejsc na półkach i wieszakach.\nW górnej witrynie powinny być eksponowane pluszaki i zestawy promocyjne lub dziecięce. Oświetlenie w gondoli powinno być sprawne."
  },
  {
    "numer": "5",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Czystość ekspozytora, łopatek, szzczypiec, pojemników słodyczy Pick&Mix",
    "odpowiedzi": [
      "Wszystkie pojemniki są czyste i nieuszkodzone, ekspozytor jest czysty",
      "Co najmniej jeden pojemnik jest brudny, uszkodzony lub ekspozytor jest brudny",
      "Nie dotyczy"
    ],
    "opis": "Dotyczy wszystkich rodzajów ekspozytorów (duże zabudowy oraz nablatowe). Brak kurzu wewnątrz zabudowy, brak odcisków palców\noraz okruchów. Pojemniki na słodycze powinny być pozbawione odcisków palców, okruchów, na i wewnątrz pojemników. Pojemniki wolne\nod kurzu. Bary kinowe są miejscem przygotowywania i wydawania produktów spożywczych. W związku z powyższym miejsca te powinny\ncharakteryzować się odpowiednim stanem higienicznym. Poza tym stałe utrzymywanie maszyn i urządzeń w czystości wydłuża okres ich\nbezawaryjnej pracy."
  },
  {
    "numer": "6",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Obecność ostrzeżeń związanych ze sprzedażą alkoholu a także sprzedaży napojów energetycznych.",
    "odpowiedzi": [
      "Ostrzeżenia są widoczne.",
      "Brak ostrzeżeń.",
      "Nie dotyczy"
    ],
    "opis": "W widocznych dla klienta miejscach powinny znajdować się dwie informacje: \"Alkohol szkodzi zdrowiu\" oraz \"Osobom niepełnoletnim\nalkoholu nie sprzedajemy\""
  },
  {
    "numer": "7",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Ekspozycja zestawu promocyjnego lub gadżetów do zestawu dziecięcego",
    "odpowiedzi": [
      "Ekspozycja jest prawidłowa",
      "Ekspozycja nie jest prawidłowa",
      "Nie dotyczy"
    ],
    "opis": "W czasie trwania promocji zestawy promo powinny być wystawione w miejscach widocznych dla klientów, a w kinach posiadających\ngondole lub witryny również w nich. Poza promocją, należy eksponować gadżety do zestawu dziecięcego. Prawidłowa ekspozycja zestawów promocyjnych lub gadżetów wpływa znacząco na wzrost ich sprzedaży."
  },
  {
    "numer": "8",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Dostępność cennika dla wszystkich produktów",
    "odpowiedzi": [
      "Cennik A4 jest dostępny w widocznym dla klienta miejscu",
      "Cennik A4 nie jest dostępny w widocznym dla klienta miejscu",
      "Nie dotyczy"
    ],
    "opis": "Cennik A4 wszystkich produktów powinien być dostępny dla klientów. Cennik należy wydrukować lokalnie wg standardu wyznaczonego\nprzez centralę firmy - CMS. Wg obowiązującego w Polsce prawa każdy sprzedawany produkt powinien posiadać informację o cenie za jaką jest sprzedawany, pojemności i gramaturze. W związku z tym że nie wszystkie informacje zamieszczone są przy produktach, należy uzupełnić te informacje zbiorczym cennikiem w widocznym dla klienta miejscu."
  },
  {
    "numer": "9",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Czystość stojaków z cennikiem lub innymi informacjami.",
    "odpowiedzi": [
      "Wszystkie stojaki są czyste, nieuszkodzone",
      "Przynajmniej jeden stojak nosi ślady brudu lub jest uszkodzony",
      "Nie dotyczy"
    ],
    "opis": "Stojaki z pleksi powinny być czyste, bez kurzu, nieobklejone syropem itp. Bary kinowe są miejscem przygotowywania i wydawania produktów spożywczych. W związku z powyższym miejsca te powinny\ncharakteryzować się odpowiednim stanem higienicznym. Poza tym stałe utrzymywanie maszyn i urządzeń w czystości wydłuża okres ich bezawaryjnej pracy."
  },
  {
    "numer": "10",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Ekspozycja nachos",
    "odpowiedzi": [
      "Na wszystkich półkach znajdują się szalki z nachos",
      "Przynajmniej na jednej półce nie znajdują się szalki z nachos",
      "Nie dotyczy"
    ],
    "opis": "Podgrzewacz nachos powinien być wypełniony tackami z nachos we wszystkich trzech rozmiarach w ilości odpowiedniej do frekwencji. Co\nnajmniej pierwsze rzędy na każdej półce powinny być zawsze zapełnione tackami. Niedopuszczalne jest przechowywanie\nprzygotowanych porcji w szafkach."
  },
  {
    "numer": "11",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Prawidłowe ustawienie pojemnika ze słomkami do napojów",
    "odpowiedzi": [
      "Słomki są prawidłowo ustawione",
      "Pojemnik ze słomkami nie jest ustawiony prawidłowo",
      "Nie dotyczy"
    ],
    "opis": "Pojemniki ze słomkami do napojów powinny być ustawione poza zasięgiem klientów, czyli np. na tylnym blacie lub w ladzie frontowej.\nSłomka powinna być wydana każdorazowo przy sprzedaży napoju z nalewaka. Ustawienie słomek poza zasięgiem klientów zmniejsza ich niekontrolowany rozchód."
  },
  {
    "numer": "12",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Drzwi na zaplecze baru w przestrzeni sprzedaży.",
    "odpowiedzi": [
      "Drzwi są zamknięte.",
      "Drzwi są otwarte.",
      "Nie dotyczy"
    ],
    "opis": "Drzwi prowadzące na zaplecze baru powinny być zamknięte i otwierane tylko w momencie wejścia/wyjścia do/z baru."
  },
  {
    "numer": "13",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Czystość POSów, kas fiskalnych, terminali kart płatniczych.",
    "odpowiedzi": [
      "Sprzęt jest czysty.",
      "Co najmniej jedno urządzenie jest brudne.",
      "Nie dotyczy"
    ],
    "opis": "Na ww. urządzeniach nie powinno być kurzu, zacieków z syropu oraz \"obcych\" naklejek. Bary kinowe są miejscem przygotowywania i wydawania produktów spożywczych. W związku z powyższym miejsca te powinny\ncharakteryzować się odpowiednim stanem higienicznym. Poza tym stałe utrzymywanie maszyn i urządzeń w czystości wydłuża okres ich bezawaryjnej pracy."
  },
  {
    "numer": "14",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Sprawność stanowisk sprzedaży POS",
    "odpowiedzi": [
      "Wszystkie stanowiska są sprawne wraz z całym osprzętem",
      "Przynajmniej jedno stanowisko jest niesprawne",
      "Nie dotyczy"
    ],
    "opis": "Stanowisko sprawne oznacza że na wszystkich stanowiskach można prowadzić sprzedaż, jeżeli nieczynne stanowisko jest uszkodzone,\nnależy zaznaczyć odpowiedź \"NIE\". Poprzez uszkodzone stanowisko rozumie się również uszkodzenie drukarki fiskalnej lub terminala lub\nich brak. Jeżeli stanowisko jest niesprawne a usterka została zgłoszona do działu IT również należy wpisać \"NIE\""
  },
  {
    "numer": "15",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Miejsce na komentarz:",
    "odpowiedzi": [
      "nan",
      "nan",
      "nan"
    ],
    "opis": "nan"
  },
  {
    "numer": "16",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Obecność kluczyków do otwierania szuflad kasjerskich lub uchylona szuflada",
    "odpowiedzi": [
      "W żadnej z szuflad nie stwierdzono obecności kluczyka, Wszystkie szuflady są domykane pomiędzy transakcjami.",
      "Przynajmniej w jednej szufladzie znajduje się kluczyk, szuflada jest otwarta.",
      "Nie dotyczy"
    ],
    "opis": "W czasie pracy barmana na stanowisku szuflada powinna być zamknięta i otwierana wyłącznie po zakończeniu transakcji przez\nwciśnięcie przycisku SUMA. Bez użycia kluczyka. Jeżeli podczas wizyty odnotowano przypadek, że w kinie którakolwiek z szuflad była\nuchylona pomiędzy transakcjami należy wybrać NIE. Wszystkie stanowiska sprzedażowe (POS), drukarki fiskalne, terminale, szuflady na gotówkę powinny być sprawne i zawsze gotowe do użycia."
  },
  {
    "numer": "17",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Rzeczy osobiste pracowników",
    "odpowiedzi": [
      "Nie stwierdzono rzeczy osobistych pracowników",
      "Stwierdzono rzeczy osobiste pracowników",
      "Nie dotyczy"
    ],
    "opis": "Na stanowiskach pracy, jak i na zapleczu nie powinny być przechowywane torebki, portfele, odzież, telefony komórkowe, książki,\nczasopisma, ani żadne inne prywatne rzeczy. Na stanowiskach pracy, jak i na zapleczu powinny być przechowywanie wyłącznie przedmioty związane z przygotowaniem i sprzedażą produktów."
  },
  {
    "numer": "18",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Czystość wież Pepsi",
    "odpowiedzi": [
      "Wszystkie wieże są czyste.",
      "Co najmniej jedna wieża jest brudna.",
      "Nie dotyczy"
    ],
    "opis": "Na wieżach dystrybucyjnych powinno stwierdzić się brak kurzu, brak zaschniętego syropu w szczególności od spodu, brak naklejek. Końcówki powinny lekko się odkręcać. Bary kinowe są miejscem przygotowywania i wydawania produktów spożywczych. W związku z powyższym miejsca te powinny charakteryzować się odpowiednim stanem higienicznym. Poza tym stałe utrzymywanie maszyn i urządzeń w czystości wydłuża okres ich bezawaryjnej pracy."
  },
  {
    "numer": "19",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Dostępność lodu w pojemniku na lód w barze",
    "odpowiedzi": [
      "Kostki lodu są dostępne",
      "W pojemniku brak jest kostek lodu",
      "Nie dotyczy"
    ],
    "opis": "Należy sprawdzić, czy pojemniki na lód znajdujące się w przedniej zabudowie baru wypełnione są kostkami/łuskami lodu. Kostki lodu dodane do napoju wydłużają jego schłodzenie przez co wpływają na jakość serwowanego klientowi produktu."
  },
  {
    "numer": "20",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Czystość pojemników i dyspenserów.",
    "odpowiedzi": [
      "Wszystkie pojemniki i dyspensery są czyste",
      "Co najmniej jeden pojemnik lub dyspenser jest brudny",
      "Nie dotyczy"
    ],
    "opis": "Pojemniki powinny być czyste, przetarte, bez smug, bez śladów syropu. Należy w szczególności sprawdzić czy w okolicach dyspenserów i\nzakamarkach klapki nie zalega stary syrop. Wnętrze dyspenserów oraz na ich krawędzie nie powinny nosić śladów syropu oraz kurzu.\nPoprzez wnętrze rozumie się plastikowy tłoczek widoczny z góry. Bary kinowe są miejscem przygotowywania i wydawania produktów spożywczych. W związku z powyższym miejsca te powinny\ncharakteryzować się odpowiednim stanem higienicznym. Poza tym stałe utrzymywanie maszyn i urządzeń w czystości wydłuża okres ich bezawaryjnej pracy."
  },
  {
    "numer": "21",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Sprawność wyciągów nad maszynami do wyprażania popcornu",
    "odpowiedzi": [
      "Sprawne",
      "Niesprawne",
      "Nie dotyczy"
    ],
    "opis": "Wszystkie wyciągi znajdujące się nad maszynami do popcornu powinny działać."
  },
  {
    "numer": "22",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Czystość okapów wyciągowych.",
    "odpowiedzi": [
      "Wszystkie okapy są czyste.",
      "Co najmniej jeden okap jest brudny.",
      "Nie dotyczy"
    ],
    "opis": "Wszystkie okapy powinny być pozbawione kurzu, tłuszczu i odcisków palców. Pochłaniacze tłuszczu lub filtry powinny być niezakurzone i\nniezatłuszczone. Bary kinowe są miejscem przygotowywania i wydawania produktów spożywczych. W związku z powyższym miejsca te powinny\ncharakteryzować się odpowiednim stanem higienicznym. Poza tym stałe utrzymywanie maszyn i urządzeń w czystości wydłuża okres ich bezawaryjnej pracy."
  },
  {
    "numer": "23",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Czystość maszyn do popcornu: garów, drzwiczek, szyb bocznych i tylnej, przestrzeni wokół pojemnika na olej i pod dnem komory przechowywania, gniazd żarówek, filtrów oraz panelu sterowania/wyświetlacza.",
    "odpowiedzi": [
      "Wszystkie elementy maszyn są czyste",
      "Przynajmniej jeden element maszyny jest zanieczyszczony",
      "Nie dotyczy"
    ],
    "opis": "Gary powinny być pozbawione nawarstwionego przypalonego tłuszczu, resztek karmelu oraz czarnego nalotu. Gary powinny być czyste\nzarówno w środku jak i na zewnątrz. Wszystkie elementy popcornicy powinny by wolne od zacieków, odcisków, złogów tłuszczu. Wszelkie maszyny i urządzenia do produkcji i przechowywania popcornu, nachos, napojów powinny być regularnie czyszczone. Dotyczy to w szczególności garów do popcornu, sprężarek PEPSI, wież w tym końcówek nalewaków, pomp do tłuszczu oraz lodówek."
  },
  {
    "numer": "24",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Dostępność i prawidłowe oznaczenie miarki do cukru karmelowego",
    "odpowiedzi": [
      "Miarka jest dostępna i prawidłowo oznaczona",
      "Miarka nie jest dostępna lub jest nieprawidłowo oznaczona",
      "Nie dotyczy"
    ],
    "opis": "Miarka powinna zawierać informację (trwałe oznaczenie) o wielkości porcji cukru stosowanej przy prażeniu popcornu karmelowego. Ilość\ncukru na jeden kilogram ziarna powinna mieścić się w granicach 0,43-0,45 kg. Dozowanie nieprawidłowej ilości cukru może spowodować powstanie różnic inwentaryzacyjnych."
  },
  {
    "numer": "25",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Czystość pojemnika do przesypywania popcornu, miarki do karmelu, łopatek",
    "odpowiedzi": [
      "Wszystkie pojemniki i narzędzia są czyste",
      "Co najmniej jeden pojemnik lub narzędzie jest brudne",
      "Nie dotyczy"
    ],
    "opis": "Czysty pojemnik, to pojemnik bez odcisków palców i nadmiernej ilości śladów soli i miału. Miarka do karmelu powinna być pozbawiona\nzłogów cukru i starej taśmy klejącej."
  },
  {
    "numer": "26",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Poprawność dozowania oleju w maszynach do popcornu",
    "odpowiedzi": [
      "Porcja oleju we wszystkich maszynach jest prawidłowa",
      "Porcja oleju nie jest prawidłowa w co najmniej jednej maszynie",
      "Nie dotyczy"
    ],
    "opis": "Próbę należy pobrać na rozgrzanym oleju, oddzielnie dla popcornu solonego i karmelowego. Wg ustalonych receptur na każdy 1 kg ziarna porcja tłuszczu powinna wynosić nie mniej niż 0,29 kg i nie więcej niż 0,33 kg. Dozowanie\noleju w ilościach spoza tego przedziału może powodować różnice inwentaryzacyjne."
  },
  {
    "numer": "27",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Dostępność wszystkich produktów, które powinny być w sprzedaży ze względu na wiążące umowy BAR.",
    "odpowiedzi": [
      "Wszystkie produkty są dostępne",
      "Występuje brak przynajmniej jednego produktu",
      "Nie dotyczy"
    ],
    "opis": "W ciągłej ofercie baru muszą znajdować się produkty z grup: napoje Frito, słodycze, orzechy, Red Bull, chipsy Lays i Cheetos oraz lody\nimpulsowe i piwo. Szczegółowa lista asortymentowa znajduje się w podręczniku. Ze względu na wiążące umowy z agencją reklamową oraz dostawcami należy dopilnować aby w ciągłem sprzedaży były dostępne produkty z listy przekazanej przez dział gastronomii spółki Helios."
  },
  {
    "numer": "28",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Ekspozycja napojów PET",
    "odpowiedzi": [
      "Lodówka jest wypełniona w 100%, zgodnie z planogramem.",
      "W którejkolwiek z lodówek są puste miejsca lub butelki stoją niezgodnie z planogramem.",
      "Nie dotyczy"
    ],
    "opis": "We wszystkich lodówkach z napojami nie powinno być pustych miejsc na półkach. Dotyczy to również butelek stojących w dalszych\nrzędach. Produkty powinny być rozmieszczone zgodnie z planogramem Pepsi dostępnym w podręczniku."
  },
  {
    "numer": "29",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Ułożenie towaru zgodnie z zasadą FEFO - przestrzeń sprzedaży, szafki, gondole",
    "odpowiedzi": [
      "Towary przechowywane są poprawnie",
      "Towary ułożone sa niepoprawnie",
      "Nie dotyczy"
    ],
    "opis": "Towar w magazynie i przestrzeni sprzedaży powinien być poukładany w taki sposób, aby produkty z krótszym terminem przydatności do\nspożycia dostępne były w pierwszej kolejności. Produkty powinny być przechowywane zgodnie z zasadą FEFO (First Expire First Out). W praktyce oznacza to że produkty z dłuższym terminem ważności układane są pod lub z tyłu produktów przeznaczonych do sprzedaży. Zasada ma na celu uniknięcie sprzedaży nieświeżych produktów i ich przeterminowywaniu się."
  },
  {
    "numer": "30",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Kompletne i sprawne (działające) maszyny i urządzenia w przestrzeni sprzedaży: podgrzewacze do popcornu i nachos,\ndyspenser do sosu serowego, granitor slushy z czystym filtrem.",
    "odpowiedzi": [
      "Wszystkie maszyny i urządzenia są sprawne.",
      "Nie wszystkie maszyny i urządzenia są sprawne.",
      "Nie dotyczy"
    ],
    "opis": "Te co mają grzać, powinny grzać. Te co mają chłodzić, powinny chłodzić. Sprawne oświetlenie. Całe/niepopękane szyby, obudowy,\nelementy stałe i ruchome. Jeśli wybrano odpowiedź \"NIE\" należy w komentarzu wskazać rodzaj urządzenia oraz uszkodzenia. Wszystkie lampy, żarówki, świetlówki przestrzeni barów, kawiarni i magazynów powinny być zawsze sprawne."
  },
  {
    "numer": "31",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Kompletne i sprawne (działające) lodówki (wysokie Pepsi, podblatowe, z piwem oraz Red Bull), schładzalniki Pepsi oraz\nzamrażarka na lody impulsowe.",
    "odpowiedzi": [
      "Wszystkie maszyny i urządzenia są sprawne.",
      "Nie wszystkie maszyny i urządzenia są sprawne.",
      "Nie dotyczy"
    ],
    "opis": "Te co mają grzać, powinny grzać. Te co mają chłodzić, powinny chłodzić. Sprawne oświetlenie. Całe/niepopękane szyby, obudowy,\nelementy stałe i ruchome. Jeśli wybrano odpowiedź \"NIE\" należy w komentarzu wskazać rodzaj urządzenia oraz uszkodzenia. Wszystkie lampy, żarówki, świetlówki przestrzeni barów, kawiarni i magazynów powinny być zawsze sprawne."
  },
  {
    "numer": "32",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Czystość URZĄDZEŃ - podgrzewaczy, lodówek, dyspenserów do sera, pojemnika na salsę, granitora, ekspresu, zamrażarki do lodów impulsowych.",
    "odpowiedzi": [
      "Wszystkie urządzenia są czyste",
      "Co najmniej jedno urządzenie jest brudne",
      "Nie dotyczy"
    ],
    "opis": "Wszystkie urządzenia powinny być czyste, bez zacieków, okruchów, śladów tłuszczu, resztek produktu, osadów, itp. Bary kinowe są miejscem przygotowywania i wydawania produktów spożywczych. W związku z powyższym miejsca te powinny\ncharakteryzować się odpowiednim stanem higienicznym. Poza tym stałe utrzymywanie maszyn i urządzeń w czystości wydłuża okres ich bezawaryjnej pracy."
  },
  {
    "numer": "33",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Kompletne i sprawne oświetlenie sufitowe przestrzeni sprzedaży, magazynów oraz strefy siedzisk.",
    "odpowiedzi": [
      "Wszystkie lampy są sprawne.",
      "Przynajmniej jedna lampa jest niesprawna.",
      "Nie dotyczy"
    ],
    "opis": "Wszystkie źródła światła w przestrzeni sprzedaży, magazynów i siedzisk są sprawne. Dotyczy również neonów, napisów itp. Wszystkie lampy, żarówki, świetlówki przestrzeni barów, kawiarni i magazynów powinny być zawsze sprawne."
  },
  {
    "numer": "34",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Czystość podłogi w przestrzeni sprzedaży.",
    "odpowiedzi": [
      "Podłoga jest czysta",
      "Podłoga jest brudna",
      "Nie dotyczy"
    ],
    "opis": "Podłoga pozbawiona jest brudu, a w szczególności tłuszczu, ziaren, wyprażonego popcornu i kurzu, zaschniętego syropu. Należy\nsprawdzić podłogę pod maszynami do popcornu, regałami, w okolicach palet. Bary kinowe są miejscem przygotowywania i wydawania produktów spożywczych. W związku z powyższym miejsca te powinny\ncharakteryzować się odpowiednim stanem higienicznym. Poza tym stałe utrzymywanie maszyn i urządzeń w czystości wydłuża okres ich bezawaryjnej pracy."
  },
  {
    "numer": "35",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Czystość ścian w przestrzeni sprzedaży.",
    "odpowiedzi": [
      "Ściany są czyste.",
      "Na ścianach widoczne są zabrudzenia.",
      "Nie dotyczy"
    ],
    "opis": "Brak kurzu, brak śladów tłuszczu, zacieków smug, szczególnie na bokach lady barowej oraz za ekspresami, maszynami. Bary kinowe są miejscem przygotowywania i wydawania produktów spożywczych. W związku z powyższym miejsca te powinny charakteryzować się odpowiednim stanem higienicznym. Poza tym stałe utrzymywanie maszyn i urządzeń w czystości wydłuża okres ich bezawaryjnej pracy."
  },
  {
    "numer": "36",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Czystość szafek i półek w ladach tylnej i frontowej oraz blatów",
    "odpowiedzi": [
      "Wszystkie półki, szafki oraz blaty są czyste",
      "Co najmniej jedna półka lub szafka lub blat są brudne",
      "Nie dotyczy"
    ],
    "opis": "Półki, szafki i blaty powinny być czyste, pozbawione kurzu, plam, zacieków i resztek produktów. Blaty pod lodówkami, ekspresem do\nkawy, granitorem, podgrzewaczami, stojakami na słodycze oraz w okolicach posów powinny być pozbawione kurzu i brudu. Bary i kawiarnie kinowe są miejscem przygotowywania i wydawania produktów spożywczych. W związku z powyższym miejsca te powinny charakteryzować się odpowiednim stanem higienicznym. Poza tym stałe utrzymywanie maszyn i urządzeń w czystości wydłuża okres ich bezawaryjnej pracy."
  },
  {
    "numer": "37",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Czystość zlewów w przestrzeni sprzedaży, koszy na śmieci i kratek wentylacyjnych",
    "odpowiedzi": [
      "Zlewy, kosze i kratki są czyste",
      "Co najmniej jeden element jest brudny",
      "Nie dotyczy"
    ],
    "opis": "Wszystkie zlewy i umywalki nie powinny nosić białych śladów i zacieków. Armatura powinna być pozbawiona kamienia."
  },
  {
    "numer": "38",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Sprawność umywalek i zlewów.",
    "odpowiedzi": [
      "Sprawne",
      "Niesprawne",
      "Nie dotyczy"
    ],
    "opis": "Umywalki i zlewy działają - po odkręceniu baterii leci woda ciepła oraz zimna. W umywalkach jest drożny odpływ. Baterie są stabilnie\nprzytwierdzone do zlewu/blatu. Dotyczy przestrzeni baru lub kawiarni, w tym tylnej zabudowy, zaplecza, zmywalni i pomieszczenia\ncoolerów."
  },
  {
    "numer": "39",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Dostępność informacji o poprawnej wadze porcji nachos i sosu na barze przy sosach.",
    "odpowiedzi": [
      "Informacja jest umieszczona",
      "Informacja nie została umieszczona",
      "Nie dotyczy"
    ],
    "opis": "Należy sprawdzić czy informacja o poprawnej wadze każdej z porcji nachos znajduje się na zapleczu baru w miejscu ważenia nachos oraz\nna tylnej ladzie barowej w miejscu dozowania sosów. Należy zwrócić uwagę czy podano zarówno wagę sosu jak i nachosów. Jeżeli brakuje\ninformacji o którejkolwiek z wag należy wybrać NIE. Wszelkie informacje dotyczące gramatur sosów i nachos powinny być umieszczane w miejscach przygotowania nachosów lub/i miejscach dozowania sosu."
  },
  {
    "numer": "40",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Dostępność sosów do nachos",
    "odpowiedzi": [
      "Sosy są dostępne",
      "Co najmniej jeden rodzaj sosu jest niedostępny",
      "Nie dotyczy"
    ],
    "opis": "Powinny być dostępne dwa rodzaje sosów do nachos: salsa na zimno oraz serowy na ciepło."
  },
  {
    "numer": "41",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Waga przygotowanych do sprzedaży nachos w podgrzewaczach",
    "odpowiedzi": [
      "Waga porcji zgadza się z dokładnością +/- 2g",
      "Przynajmniej jedna porcja różni się od porządanej wagi o więcej niż 2g",
      "Nie dotyczy"
    ],
    "opis": "Należy sprawdzić czy nakładane porcje nachos są poprawne, poprzez sprawdzenie wagi netto poszczególnych porcji w podgrzewaczu\n(przynajmniej 3 szt.). Porcja mała 65 g, porcja duża 115 g, porcja mega 180 g. Sprzedaż produktów \"na wagę\" powinna być okresowo kontrolowana. Pracownicy powinni mieć świadomość że zbyt mała lub zbyt duża ilość nakładanego produktu powoduje różnice w stanach remanentowych."
  },
  {
    "numer": "42",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Waga do ważenia żelków i orzechów PCO lub Doti",
    "odpowiedzi": [
      "Ustawiona w miejscu widocznym dla klienta, z aktualną legalizacją.",
      "Ustawiona poza zasięgiem wzroku klienta, bez aktualnej legalizacji.",
      "Nie dotyczy"
    ],
    "opis": "Waga powinna być ustawiona w takim miejscu aby klient widział jak pracownik waży produkt i jaką wagę ma porcja produktu. Waga\npowinna posiadać aktualną legalizację."
  },
  {
    "numer": "43",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Dostępność informacji o składzie produktów niepakowanych.",
    "odpowiedzi": [
      "Informacja jest dostępna.",
      "Informacja nie jest dostępna.",
      "Nie dotyczy"
    ],
    "opis": "Informacje o składzie produktów niepakowanych powinna być dostępna u barmana na żądanie klienta. Aktualna lista składników\nproduktów znajduje się w podręczniku."
  },
  {
    "numer": "44",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Zeszyt strat",
    "odpowiedzi": [
      "Zeszyt prowadzony prawidłowo",
      "Zeszyt nie uzupełniany prawidłowo",
      "Nie dotyczy"
    ],
    "opis": "Zeszyt strat powinien być prowadzony na bieżąco, wpisy powinny być weryfikowane przez kierownika i potwierdzone podpisem. Za stratę\nuznaje się towar zniszczony, rozlany, przeterminowany lub nieodebrany/zwrócony przez klienta oraz okruchy i resztki. Za stratę można\nuznać towar wydany podczas kontroli baru w celu weryfikacji jakości produktów lub przeprowadzenia procesu kontroli. Opakowania\nuszkodzone z winy dostawcy należy przygotować do zwrotu. Straty marketingowe to poczęstunek gości oraz kontrahentów. Wpisy\npowinny być potwierdzone podpisem kierownika. Wszelkie dokumenty magazynowe powinny być wypełnione w sposób czytelny i kompletny. Dane powinny być wpisywane systematycznie. W dokumentach nie może brakować żadnego wpisu w żadnej z kolumn. Szczególną uwagę należy zwrócić na czytelność podpisu oraz podsumowania."
  },
  {
    "numer": "45",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Uzupełnianie danych do formatki magazynu podręcznego opakowań POPCORN/PEPSI/NACHOS",
    "odpowiedzi": [
      "Wszystkie dane zostały uzupełnione wg instrukcji",
      "Nie wszystkie dane są uzupełnione wg instrukcji",
      "Nie dotyczy"
    ],
    "opis": "Codziennie powinny być wypełniane kolumny \"Stan rano\" oraz \"Stan wieczorem\", powinny być wpisywane wszystkie przeniesienia z\nmagazynu głównego, a sprzedaż systemowa uzupełniona przynajmniej do 3 dni wstecz, podpisy osób wypełniających powinny być\nczytelne. Jeżeli którakolwiek z kolumn nie została wypełniona przynajmniej jeden raz należy wpisać \"NIE\" Różnica między rozchodami a\nsprzedażą systemową powinna być wyliczana na bieżąco. Wszelkie dokumenty magazynowe powinny być wypełnione w sposób czytelny i kompletny. Dane powinny być wpisywane systematycznie. W dokumentach nie może brakować żadnego wpisu w żadnej z kolumn. Szczególną uwagę należy zwrócić na czytelność podpisu oraz podsumowania."
  },
  {
    "numer": "46",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Kontrola temperatury w zamrażarce z lodami impulsowymi Algida",
    "odpowiedzi": [
      "Kontrola jest prowadzona systematycznie",
      "Kontrola nie jest prowadzona systematycznie",
      "Nie dotyczy"
    ],
    "opis": "Temperatura w zamrażarce do lodów Algida powinna być kontrolowana dwa razy dziennie, rano przy otwarciu baru, a wieczorem przy\nzamknięciu baru, a wyniki tej kontroli powinny być wpisywane do arkusza kontroli."
  },
  {
    "numer": "47",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Produkty spożywcze oraz przedmioty niezwiązane bezpośrednio z procesem sprzedaży",
    "odpowiedzi": [
      "Nie stwierdzono w obrębie baru w/w przedmiotów.",
      "Stwierdzono w obrębie baru przedmioty niezwiązane z pracą baru.",
      "Nie dotyczy"
    ],
    "opis": "Na stanowiskach pracy, jak i na zapleczu nie powinny być przechowywane przedmioty niezwiązane z pracą baru/kasobaru np. dmuchawy do balonów, kosmetyki, kubki, talerze, widelce, szklanki, kuwety po lodach itp.  Na stanowiskach pracy, jak i na zapleczu powinny być przechowywanie wyłącznie przedmioty związane z przygotowaniem i sprzedażą produktów."
  },
  {
    "numer": "48",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Do maszyn są dostępne instrukcje BHP",
    "odpowiedzi": [
      "dostępne",
      "niedostępne",
      "nie dotyczy"
    ],
    "opis": "nan"
  },
  {
    "numer": "49",
    "sekcja": "Obszar sprzedaży",
    "tresc": "Pytanie dodatkowe - czy coś zwróciło Twoją szczególną uwagę?",
    "odpowiedzi": [
      "Ocena pozytywna",
      "Ocena negatywna",
      "Nie dotyczy"
    ],
    "opis": "To jest miejsce do skomentowania/oceny dowolnej sytuacji/zdarzenia, która miała miejsce podczas wizyty, a której nie sposób opisać\npoprzez pytania dostępne w arkuszu. Jeśli ocena jest pozytywna zaznacz TAK, jeśli negatywna zaznacz NIE. W komentarzu wpisz czego\ndotyczy ocena."
  },
  {
    "numer": "50",
    "sekcja": "Coolerownia",
    "tresc": "Czystość podłogi w pomieszczeniu coolerów",
    "odpowiedzi": [
      "Podłoga jest czysta",
      "Podłoga jest brudna",
      "Nie dotyczy"
    ],
    "opis": "Podłoga pozbawiona jest brudu, a w szczególności tłuszczu, ziaren, wyprażonego popcornu i kurzu, zaschniętego syropu. Należy sprawdzić podłogę pod regałami, w okolicach palet."
  },
  {
    "numer": "51",
    "sekcja": "Coolerownia",
    "tresc": "Czystość przewodów i końcówek BIB-cooler",
    "odpowiedzi": [
      "Wszystkie końcówki i przewody są czyste.",
      "Stwierdzono ślady zaschniętego syropu.",
      "Nie dotyczy"
    ],
    "opis": "Przewody nie kleją się, brak śladów zaschniętego syropu. Bary kinowe są miejscem przygotowywania i wydawania produktów spożywczych. W związku z powyższym miejsca te powinny charakteryzować się odpowiednim stanem higienicznym. Poza tym stałe utrzymywanie maszyn i urządzeń w czystości wydłuża okres ich bezawaryjnej pracy."
  },
  {
    "numer": "52",
    "sekcja": "Coolerownia",
    "tresc": "Czystość ścian w pomieszczeniu coolerów.",
    "odpowiedzi": [
      "Ściany są czyste.",
      "Na ścianach widoczne są zabrudzenia.",
      "Nie dotyczy"
    ],
    "opis": "Brak kurzu, brak śladów tłuszczu, zacieków smug, szczególnie na bokach lady barowej oraz za ekspresami, maszynami."
  },
  {
    "numer": "53",
    "sekcja": "Coolerownia",
    "tresc": "Sprawność klimatyzacji w pomieszczeniu coolerni ( pomieszczenie z instalacją Pepsi ).",
    "odpowiedzi": [
      "Klimatyzacja jest sprawna",
      "Klimatyzator nie działa",
      "Nie dotyczy"
    ],
    "opis": "Klimatyzacja w coolerni powinna działać."
  },
  {
    "numer": "54",
    "sekcja": "Coolerownia",
    "tresc": "Sprawność umywalek i zlewów",
    "odpowiedzi": [
      "Sprawne",
      "Niesprawne",
      "Nie dotyczy"
    ],
    "opis": "Umywalki i zlewy działają - po odkręceniu baterii leci woda ciepła oraz zimna. W umywalkach jest drożny odpływ. Baterie są stabilnie\nprzytwierdzone do zlewu/blatu. Dotyczy przestrzeni baru lub kawiarni, w tym tylnej zabudowy, zaplecza, zmywalni i pomieszczenia\ncoolerów."
  },
  {
    "numer": "55",
    "sekcja": "Coolerownia",
    "tresc": "Kompletne i sprawne (działające) maszyny i urządzenia w pomieszczeniu coolerów: kostkarka",
    "odpowiedzi": [
      "Wszystkie maszyny i urządzenia są sprawne.",
      "Nie wszystkie maszyny i urządzenia są sprawne.",
      "Nie dotyczy"
    ],
    "opis": "Te co mają grzać, powinny grzać. Te co mają chłodzić, powinny chłodzić. Sprawne oświetlenie. Całe/niepopękane szyby, obudowy,\nelementy stałe i ruchome. Jeśli wybrano odpowiedź \"NIE\" należy w komentarzu wskazać rodzaj urządzenia oraz uszkodzenia. Wszystkie lampy, żarówki, świetlówki przestrzeni barów, kawiarni i magazynów powinny być zawsze sprawne."
  },
  {
    "numer": "56",
    "sekcja": "Coolerownia",
    "tresc": "Czystość URZĄDZEŃ - kostkarki.",
    "odpowiedzi": [
      "Wszystkie urządzenia są czyste",
      "Co najmniej jedno urządzenie jest brudne",
      "Nie dotyczy"
    ],
    "opis": "Wszystkie urządzenia powinny być czyste, bez zacieków, okruchów, śladów tłuszczu, resztek produktu, osadów, itp. Bary kinowe są miejscem przygotowywania i wydawania produktów spożywczych. W związku z powyższym miejsca te powinny\ncharakteryzować się odpowiednim stanem higienicznym. Poza tym stałe utrzymywanie maszyn i urządzeń w czystości wydłuża okres ich\nbezawaryjnej pracy."
  },
  {
    "numer": "57",
    "sekcja": "Coolerownia",
    "tresc": "Ułożenie towaru zgodnie z zasadą FEFO - coolerownia",
    "odpowiedzi": [
      "Towary przechowywane są poprawnie",
      "Towary ułożone sa niepoprawnie",
      "Nie dotyczy"
    ],
    "opis": "Towar w magazynie i przestrzeni sprzedaży powinien być poukładany w taki sposób, aby produkty z krótszym terminem przydatności do\nspożycia dostępne były w pierwszej kolejności. Produkty powinny być przechowywane zgodnie z zasadą FEFO (First Expire First Out). W praktyce oznacza to że produkty z dłuższym terminem ważności układane są pod lub z tyłu produktów przeznaczonych do sprzedaży. Zasada ma na celu uniknięcie sprzedaży nieświeżych produktów i ich przeterminowywaniu się."
  },
  {
    "numer": "58",
    "sekcja": "Coolerownia",
    "tresc": "Odpowiednie przechowywanie butli z gazem CO2",
    "odpowiedzi": [
      "Butle są ustawione prawidłowo,podpięta butla zabezpieczona łańcuchem",
      "Butle są przechowywane nieprawidłowo",
      "Nie dotyczy"
    ],
    "opis": "Butle z gazem powinny być przechowywane na paletach lub podkładkach (nie bezpośrednio na podłodze)."
  },
  {
    "numer": "59",
    "sekcja": "Magazyn-zaplecze",
    "tresc": "Przechowywanie wyprażonego popcornu.",
    "odpowiedzi": [
      "Popcorn przechowywany jest prawidłowo",
      "Popcorn przechowywany jest nieprawidłowo",
      "Nie dotyczy"
    ],
    "opis": "Wyprażony popcorn powinien być przechowywany wyłącznie w podgrzewaczach lub popcornicach i prażony na bieżąco. Wypełnienie\npodgrzewacza nie powinno być większe niż 2/3 pojemności."
  },
  {
    "numer": "60",
    "sekcja": "Magazyn-zaplecze",
    "tresc": "Dostępność pojemnika na straty i jego prawidłowe oznaczenie i czystość.",
    "odpowiedzi": [
      "Pojemnik jest dostępny i prawidłowo oznaczony oraz czysty.",
      "Brak pojemnika lub prawidłowego oznaczenia i brud.",
      "Nie dotyczy"
    ],
    "opis": "Pojemnik lub specjalnie wydzielone i oznaczone miejsce na straty i produkty przeterminowane powinien znajdować się w magazynie podręcznym. Pojemnik powinien być opisany, np. \"STRATY\". Produkty w pojemniku powinny być pogrupowane, ułożone asortymentem,\nczyste i poskładane. Sam pojemnik powinien być czysty. Pojemnik lub specjalnie wydzielone i oznaczone miejsce na straty i produkty przeterminowane powinien znajdować się w magazynie\npodręcznym. Produkty powinny być ułożone wg asortymentów i przechowywane w czystości i porządku."
  },
  {
    "numer": "61",
    "sekcja": "Magazyn-zaplecze",
    "tresc": "Przechowywanie towaru w magazynach.",
    "odpowiedzi": [
      "Wszystkie produkty znajdują się na paletach i regałach",
      "Przynajmniej jeden z produktów znajduje się na podłodze",
      "Nie dotyczy"
    ],
    "opis": "Towar w magazynie powienien być poukładany na paletach i regałach. Żaden produkt nie powienien znajdować się bezpośrednio na\npodłodze. Zgodnie z zaleceniami SANEPID towar w magazynie powienien być poukładany na paletach i regałach. Żaden produkt nie powienien\nznajdować się bezpośrednio na podłodze."
  },
  {
    "numer": "62",
    "sekcja": "Magazyn-zaplecze",
    "tresc": "Ułożenie towaru zgodnie z zasadą FEFO - magazyn,",
    "odpowiedzi": [
      "Towary przechowywane są poprawnie",
      "Towary ułożone sa niepoprawnie",
      "Nie dotyczy"
    ],
    "opis": "Towar w magazynie i przestrzeni sprzedaży powinien być poukładany w taki sposób, aby produkty z krótszym terminem przydatności do spożycia dostępne były w pierwszej kolejności. Produkty powinny być przechowywane zgodnie z zasadą FEFO (First Expire First Out). W praktyce oznacza to że produkty z dłuższym terminem ważności układane są pod lub z tyłu produktów przeznaczonych do sprzedaży. Zasada ma na celu uniknięcie sprzedaży nieświeżych produktów i ich przeterminowywaniu się."
  },
  {
    "numer": "63",
    "sekcja": "Magazyn-zaplecze",
    "tresc": "Czystość palet i regałów.",
    "odpowiedzi": [
      "Palety i regały są czyste",
      "Którakolwiek z palet lub regał jest brudny",
      "Nie dotyczy"
    ],
    "opis": "Wszystkie regały i palety powinny być czyste, bez zacieków, kurzu i resztek produktów. Bary kinowe są miejscem przygotowywania i wydawania produktów spożywczych. W związku z powyższym miejsca te powinny\ncharakteryzować się odpowiednim stanem higienicznym. Poza tym stałe utrzymywanie maszyn i urządzeń w czystości wydłuża okres ich\nbezawaryjnej pracy."
  },
  {
    "numer": "64",
    "sekcja": "Magazyn-zaplecze",
    "tresc": "Czystość ścian w magazynach.",
    "odpowiedzi": [
      "Ściany są czyste.",
      "Na ścianach widoczne są zabrudzenia.",
      "Nie dotyczy"
    ],
    "opis": "Brak kurzu, brak śladów tłuszczu, zacieków smug, szczególnie na bokach lady barowej oraz za ekspresami, maszynami. Bary kinowe są miejscem przygotowywania i wydawania produktów spożywczych. W związku z powyższym miejsca te powinny\ncharakteryzować się odpowiednim stanem higienicznym. Poza tym stałe utrzymywanie maszyn i urządzeń w czystości wydłuża okres ich\nbezawaryjnej pracy."
  },
  {
    "numer": "65",
    "sekcja": "Magazyn-zaplecze",
    "tresc": "Czystość podłogi magazynów.",
    "odpowiedzi": [
      "Podłoga jest czysta",
      "Podłoga jest brudna",
      "Nie dotyczy"
    ],
    "opis": "Podłoga pozbawiona jest brudu, a w szczególności tłuszczu, ziaren, wyprażonego popcornu i kurzu, zaschniętego syropu. Należy\nsprawdzić podłogę pod maszynami do popcornu, regałami, w okolicach palet. Bary kinowe są miejscem przygotowywania i wydawania produktów spożywczych. W związku z powyższym miejsca te powinny\ncharakteryzować się odpowiednim stanem higienicznym. Poza tym stałe utrzymywanie maszyn i urządzeń w czystości wydłuża okres ich\nbezawaryjnej pracy."
  },
  {
    "numer": "66",
    "sekcja": "Magazyn-zaplecze",
    "tresc": "Kompletne i sprawne oświetlenie sufitowe w magazynach.",
    "odpowiedzi": [
      "Wszystkie lampy są sprawne.",
      "Przynajmniej jedna lampa jest niesprawna.",
      "Nie dotyczy"
    ],
    "opis": "Wszystkie źródła światła w przestrzeni sprzedaży, magazynów i siedzisk są sprawne. Dotyczy również neonów, napisów itp. Wszystkie lampy, żarówki, świetlówki przestrzeni barów, kawiarni i magazynów powinny być zawsze sprawne."
  },
  {
    "numer": "67",
    "sekcja": "Magazyn-zaplecze",
    "tresc": "Sprawność umywalek i zlewów",
    "odpowiedzi": [
      "Sprawne",
      "Niesprawne",
      "Nie dotyczy"
    ],
    "opis": "Umywalki i zlewy działają - po odkręceniu baterii leci woda ciepła oraz zimna. W umywalkach jest drożny odpływ. Baterie są stabilnie\nprzytwierdzone do zlewu/blatu. Dotyczy przestrzeni baru lub kawiarni, w tym tylnej zabudowy, zaplecza, zmywalni i pomieszczenia\ncoolerów."
  }
];

export default questions;