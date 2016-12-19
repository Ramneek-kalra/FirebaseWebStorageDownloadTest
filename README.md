# Firebase Web Storage Download Test
---

Hivatalos doksi:
https://firebase.google.com/docs/storage/web/start

-  A RULES fülön a 4. sort cseréld ki erre.
    Ezzel engedjük, hogy autentikáció nélkül lehessen letölteni.
	```sh
	allow read, write: if true;
	```

- Hozz létre egy **files** nevű mappát. Ide fognak kerülni a feltöltött fájlok. (ez elhagyható lépés, mert ha nem létezik a mappa akkor létrehozza nekünk)

- Az upload.js 3. sorába másold be a saját APIkey-edet.
	A főoldalon az "Add Firebase to your web app" gombra kattintva kapod meg az APIkey-t.

- Nyisd meg böngészővel az index.html-t és nyomd meg a Download gombot.
