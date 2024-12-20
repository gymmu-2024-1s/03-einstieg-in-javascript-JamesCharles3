import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]
    if (currentElement === "e") {
      //do nothig
    } else if (currentElement === "E") {
      //auch E ignorieren
    } else {
      result.push(currentElement)
    }

    // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args //der Eingabetext
  const result = [] //das ist die Resultatliste

  //läuft zeichen für zeichen über den ganzen Text
  for (let i = 0; i < input.length; i++) {
    const currentLetter = input[i]
    const currentUpperCaseLetter = currentLetter.toUpperCase()

    //hänge das aktuelle Zeichen doppelt an
    result.push(currentUpperCaseLetter)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []

  let count = 0 // Zähler für "e und "E

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] //Aktuelles Zeichen
    if (currentElement === "e") {
      // zähle eins hoch
      count = count + 1
    } else if (currentElement === "E") {
      //auch E ignorieren

      // zähle eins hoch
      count = count + 1
    }
  }
  // Rückgabe des Zählwerts
  return count
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []

  // Wir filtern die Eingabe so, dass nur noch Buchstaben und Leerzeichen übrig bleiben
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii >= 65 && ascii <= 90) {
      result.push(currentElement)
    } else if (ascii >= 97 && ascii <= 122) {
      result.push(currentElement)
    } else if (ascii === 32) {
      result.push(currentElement)
    }
  }
  // Jetzt könnten wir noch mehrere Leerzeichen am Stück haben, die müssen wir noch filtern

  const result2 = []
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]

    if (currentElement === " " && nextElement === " ") {
      // hier sind 2 Leerzeichen hintereinander, wir ignorieren das erste
    } else {
      result2.push(currentElement)
    }
  }
  // jetzt können wir die Leerzeichen zählen
  let count = 0
  for (let i = 0; i < result2.length; i++) {
    const currentElement = result2[i]
    if (currentElement === " ") {
      count++
    }
  }
  // da es ein wort mehr wie leerzeichen gibt, geben wie leerzeichen +1 zurück
  return count + 1
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  const input = args

  let hasUpperCaseLetter = false // Definiere eine Variable die überprüft ob ein Grossbuchstaben vorhanden ist.

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Betsimme den ASCII Wert des aktuellen Zeichens
    const ascii = currentElement.charCodeAt(0)

    if (ascii >= 65 && ascii <= 90) {
      // wenn es zwischen 65 und 90 ist, stimmt es
      hasUpperCaseLetter = true
    }
  }
  // wenn ein Gossbuchstabe gefunden wurde, gib true aus, ansonsten false
  return hasUpperCaseLetter
}

linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []
  let hasspecialcaracter = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // teste ob in dem Text mindestens 1 Sonderzeichen vorkommt
    if (
      currentElement === "!" ||
      currentElement === "@" ||
      currentElement === "#" ||
      currentElement === "$" ||
      currentElement === "%" ||
      currentElement === "^" ||
      currentElement === "&" ||
      currentElement === "*" ||
      currentElement === "(" ||
      currentElement === ")" ||
      currentElement === "-" ||
      currentElement === "."
    ) {
      hasspecialcaracter = true // true wenn Sonderzeichen gefunden wurde
    }

    if (hasspecialcaracter) {
      return true //Sonderzeichen gefunden
    }
  }
  return false //kein sonderzeichen gefunden
}

linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Prüfe ob es ein u ist
    if (currentElement === "u") {
      // prüfe ob das nächste element ein n ist
      if (input[i + 1] === "n") {
        // prüfe ob das dritte element ein d ist
        if (input[i + 2] === "d") {
          // das ist das richtige Element
          return true
        }
      }
    }
  }
  // Wenn kein und gefunden wurde, gebe false zurück
  return false
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // ersetze e mit einer 3
    if (currentElement === "e") {
      result.push("3") // "e" wird durch "3" ersetzt
    } else {
      result.push(currentElement) // anderes Zeichen beibehalten
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Teste ob eine Eingabe genau sechs Zeichen lang ist
    if (input.length === 6) {
      return true //sechs Zeichen
    }
    return false //keine sechs Zeichen
  }
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args
  const result = []

  //teste ob input genau 7 Zeichen lang ist
  if (input.length === 7) {
    //return true
  } else {
    return false
  }

  //teste ob das erste zeichen ein # ist
  if (input[0] === "#") {
    //return true
  } else {
    return false
  }

  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    //Teste ob eine Eingabe ein korrekter RGB Hexcode ist
    if (
      currentElement === "0" ||
      currentElement === "1" ||
      currentElement === "2" ||
      currentElement === "3" ||
      currentElement === "4" ||
      currentElement === "5" ||
      currentElement === "6" ||
      currentElement === "7" ||
      currentElement === "8" ||
      currentElement === "9" ||
      currentElement === "A" ||
      currentElement === "B" ||
      currentElement === "C" ||
      currentElement === "D" ||
      currentElement === "E" ||
      currentElement === "F"
    ) {
      //return true
    } else {
      return false
    }
  }
  return true
}

linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe11(args) {
  const input = args
  const result = []

  // teste ob input länger als ein zeichen ist
  if (input.length > 1) {
    return null
  }

  // teste ob die eingabe 0 Zeichen hat
  if (input.length === 0) {
    return null
  }

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Gib den ASCII code eines einzelnen Buchstabens an.
    result.push(currentElement.charCodeAt(0))

    return result
  }
}

linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Suche die Position des ersten `e`s in einem Text.
    if (currentElement === "e") {
      return i // rückgabe Position des ersten e
    }
  }
  return -1 // wenn kein e gefunden
}

linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  const result = []

  let pos = -1 // initialisiere Position mit -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Suche die Position des letzten `e`s in einem Text.
    if (currentElement === "e") {
      pos = i // Aktualisiere die Position wenn "e" gefunden wurde
    }
  }
  return pos // rückgabe Position des letzten e oder -1 wenn kein e gefunden
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Suche die Position des dritten `e`s in einem Text.
    if (currentElement === "e") {
      result.push(i)
    }
    if (result.length === 3) {
      return i // Rückgabe Position des dritten e
    }
  }
  return -1 // wenn weniger als 3 e gefunden
}

linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Lesen Sie die Eingabe nur bis zum ersten Leerzeichen ein.
    if (currentElement === " ") {
      return result.join("")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result1 = []
  const result2 = []

  let dollarFound = false // Flag, um zu prüfen, ob das Dollar gefunden wurde

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Lesen Sie die Eingabe bis zum Zeichen '$' als ersten Teil einer Liste ein, und den Rest als den zweiten Teil.
    if (currentElement === "$") {
      dollarFound = true
    } else {
      // Wenn du noch kein Dollar gefunden hast, dann hänge an result1 an
      if (dollarFound === false) {
        result1.push(currentElement)
      } else {
        // Wenn du schon ein Dollar gefunden hast, dann hänge an result2 an
        result2.push(currentElement)
      }
    }
  }

  return [result1.join(""), result2.join("")] // Rückgabe als Array mit den beiden Teilen
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  const totallist = []
  const currentlist = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // wenn wir auf ein Leerzeichen treffen, dann schreiben wir alles was wir bis jetzt haben, in die totalliste
    if (currentElement === ",") {
      totallist.push(currentlist.join("")) // füge das aktuelle element in die totalliste hinzu
      currentlist.length = 0 // leere die currentlist für das nächste element
    } else {
      currentlist.push(currentElement) // hänge das zeichen an das aktuelle element
    }
  }
  // Wir schreiben alles was wir noch bis zum ende gelesen haben, in die liste totallist.push(currentlist.join(""))

  return totallist
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  }
}
linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe19(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // jedes Zeichen verdoppeln
    result.push(currentElement)
    result.push(currentElement)
  }
  // Gib das Ergebnis als einen zusammengefügten String zurück
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Prüfen Sie ob nach jedem `.` ein Leerschlag kommt.
    if (currentElement === ".") {
      if (input[i + 1] === " ") {
        return true // wenn ja, dann true
      }
      return false // wenn nicht, dann false
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []

  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i]
    // Kehren Sie die Eingabe um.
    result.push(currentElement)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []

  let kFound = false // flag, um zu prüfen, ob das k gefunden wurde

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Ersetze alle Zeichen aus der Eingabe mit `_` , bis zum ersten "k".
    if (currentElement === "k") {
      kFound = true // markiere das k als gefunden
    }
    // ersetze alle zeichen vor k mit "_"
    if (kFound === false) {
      result.push("_") // füge "_" hinzu wenn k noch nicht gefunden wurde
    } else {
      result.push(currentElement) //behalte das zeichen wenn k gefunden wurde
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Das erste Zeichen der Eingabe soll zusätzlich ganz vorne und ganz hinten an der Ausgabe angehängt werden.

    if (i === 0) {
      result.push(currentElement)
    }

    result.push(currentElement)

    if (i === input.length - 1) {
      result.push(input[0]) // füge das erste zeichen am ende hinzu
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  const input = args
  const result = []
  //// Wenn die Eingabe kürzer als 2 Zeichen ist, wird sie unverändert zurückgegeben
  if (input.length < 2) {
    return input // Rückgabe des Eingabetexts, wenn er weniger als 2 Zeichen hat
  }

  const firstLetter = input[0]
  const lastLetter = input[input.length - 1]

  result.push(lastLetter)

  for (let i = 1; i < input.length - 1; i++) {
    const currentElement = input[i]

    result.push(currentElement)
  }

  result.push(firstLetter) // Das erste Zeichen wird am Ende des Ergebnisses hinzugefügt

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Das mittlere Zeichen der Eingabe soll gelöscht werden. Wenn die Anzahl Zeichen gerade ist, sollen die beiden mittleren Zeichen gelöscht werden.

    if (input.length % 2 === 0) {
      // das erste mittlere Zeichen
      if (i === input.length / 2 - 1) {
        continue //überspringe das zeichen
      }
      if (i === input.length / 2) {
        // Das zweite mittlere Zeichen
        continue //überspringe das zeichen
      } else {
        result.push(currentElement)
      }
    } else {
      // Wenn die Länge der Eingabe ungerade ist, lösche das mittlere Zeichen
      if (i === Math.floor(input.length / 2)) {
        continue
      }

      result.push(currentElement)
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function aufgabe26(args) {
  const input = args
  const result = []

  const firstElement = input[0] //erstes elemetn der eingabe

  const secondElement = input[1] // ergebnisarray für die modifizierten zeichen

  // Wenn das erste Element des ASCII Wert grösser ist als das zweite dann vertausche sie.
  if (firstElement.charCodeAt(0) > secondElement.charCodeAt(0)) {
    // vertausche die Elemente
    result.push(secondElement) //füge das zweite element zuerst hinzu
    result.push(firstElement) // Füge das erste Element danach hinzu
  } else {
    result.push(firstElement) // Füge das erste Element zuerst hinzu
    result.push(secondElement) // Füge das zweite Element danach hinzu
  }
  // Füge alle weiteren Elemente ab dem dritten Zeichen hinzu
  for (let i = 2; i < input.length; i++) {
    const currentElement = input[i]

    result.push(currentElement)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe27(args) {
  const input = args
  const result = [] // hier speicher wir das Ergebnis

  if (input.length === 0) {
    return false
  }
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    // Testen sie, ob eine Eingabe eine Zahl ist.
    if (ascii >= 48 && ascii <= 57) {
      // ist okay mache weiter
    } else {
      return false
    }
  }
  return true
}
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe28(args) {
  const input = args
  const result1 = []
  const result2 = []

  let secondNum = false //flag um die zweite zahl zu erkennen

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    // Testen Sie, ob in der Eingabe 2 Zahlen von einem Leerzeichen getrennt sind. Falls ja geben Sie die Summe als Ausgabe aus; sonst Fehlermeldung.
    if (ascii >= 48 && ascii <= 57) {
      if (secondNum === false) {
        result1.push(currentElement) // erste zahl wird in result1 gespeichert
      } else {
        result2.push(currentElement) // zweite zahl wird in result2 gespeichert
      }
    } else if (ascii === 32) {
      secondNum = true
    } else {
      return null
    }
  }
  // Die Zahlen werden aus den Arrays result1 und result2 zusammengesetzt
  const num1 = parseInt(result1.join(""))
  const num2 = parseInt(result2.join(""))
  return num1 + num2
}

linkupExerciseHandler("[data-click=aufgabe28]", aufgabe28)

export function eigeneAufgabe1(args) {
  const input = args // Der Eingabetext
  const result = []
  let count = 0 // Zähler für das zweite Zeichen

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] // Aktuelles Zeichen

    // Wenn das Zeichen ein Leerzeichen ist, ersetze es mit 'F' und zähle es
    if (currentElement === " ") {
      result.push("F")
      count++ // Leerzeichen zählt auch
    } else {
      // Überprüfe, ob es sich um das zweite Zeichen handelt
      if (count % 2 !== 0) {
        // Wenn es noch kein Großbuchstabe ist, wandle es um
        if (currentElement !== currentElement.toUpperCase()) {
          result.push(currentElement.toUpperCase())
        } else {
          result.push(currentElement) // Wenn es bereits ein Großbuchstabe ist, bleibt es gleich
        }
      } else {
        result.push(currentElement) // ansonsten bleibt das Zeichen unverändert
      }
      count++ // Zähler erhöhen
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=eigeneAufgabe1]", eigeneAufgabe1)

export function eigeneAufgabe2(args) {
  const input = args
  let sum = 0 // Variable, um die Summe der gefundenen Zahlen zu speichern
  let hasNumber = false // überprüft ob eine Zahl vorhanden ist
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] //Aktuelles Element
    // Versuche jedes Zeichen in der aktuellen Zeichenkette auf Zahl zu prüfen
    for (let j = 0; j < currentElement.length; j++) {
      const currentChar = currentElement[j] //Aktuelles Zeichen

      // überprüfe ob das Zeichen eine Zahl ist
      if (!isNaN(currentChar) && currentChar !== " ") {
        sum += parseInt(currentChar) // Zahl zur Summe hinzufügen
        hasNumber = true // Zahl wurde gefunden
      }
    }
  }
  // wenn eine Zahl gefunden wurde gebe die Summe zurück ansonsten gebe s zurück
  if (hasNumber) {
    return sum
  } else {
    return "s"
  }
}

linkupExerciseHandler("[data-click=eigeneAufgabe2]", eigeneAufgabe2)

export function eigeneAufgabe3(args) {
  const input = args
  const result = []
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  let count = 0 //Zähler für Vokkale

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // wenn das zeichen ein Vokal ist
    if (vowels.includes(currentElement)) {
      count++ // Zähler erhöhen
    } else {
      result.push(currentElement)
    }
  }
  return count // Rückgabe der Anzahl der Vokale
}

linkupExerciseHandler("[data-click=eigeneAufgabe3]", eigeneAufgabe3)

export function bubblesort(args) {
  const text = args
  const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i + 1]
    // Vergleiche die ASCII-Werte der beiden benachbarten Zeichen
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Wenn der ASCII-Wert des aktuellen Zeichens größer ist als der des nächsten müssen die beiden Zeichen vertauscht werden.

      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i + 1]
      list[i + 1] = list[i] // Tausche das aktuelle Element mit dem nächsten
      list[i] = tmp
      // Wenn ein Tausch stattgefunden hat, starte die Schleife von vorne
      i = -1 // starte von vorne wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")
  return result
}

linkupExerciseHandler("[data-click=bubblesort]", bubblesort)

export function Insertionsort(args) {
  const text = args
  const list = text.split("") // Text in eine Liste von Zeichen umwandeln

  // Beginnt den Sortierprozess ab dem zweiten Element der Liste
  for (let i = 1; i < list.length; i++) {
    const currentElement = list[i] // Das aktuelle Element, das an die richtige Stelle eingefügt werden soll
    let j = i - 1

    // Verschiebt Elemente, die größer als currentElement sind, nach rechts
    while (j >= 0 && list[j].charCodeAt(0) > currentElement.charCodeAt(0)) {
      const tmp = list[j + 1] // Temporäre Variable zum Tauschen der Elemente
      list[j + 1] = list[j] // Verschiebe das Element nach rechts
      list[j] = tmp // Setze das aktuelle Element an die richtige Stelle
      j--
    }
  }
  const result = list.join("") // Wandelt die sortierte Liste zurück in einen String

  return result // gebe das Sortierte Ergebnis zurück
}

linkupExerciseHandler("[data-click=Insertionsort]", Insertionsort)

export function Bucketsort(args) {
  const text = args
  const list = text.split("") // Den Text in eine Liste von Zeichen umwandeln
  const buckets = []

  // Erstelle 26 Buckets (einen für jeden Buchstaben
  for (let i = 0; i < 26; i++) {
    buckets.push([]) // Füge leere Buckets hinzu
  }

  // Verteile jedes Zeichen in den entsprechenden Buckets (basierend auf ASCII-Wert)
  for (let i = 0; i < list.length; i++) {
    const currentElement = list[i]
    const bucketIndex = currentElement.charCodeAt(0) - 97 // Berechne den Index des Buckets anhand des ASCII-Werts

    // Falls der Index im Bereich der 26 Buckets liegt
    if (bucketIndex >= 0 && bucketIndex < 26) {
      buckets[bucketIndex].push(currentElement) // Füge das Zeichen in den entsprechenden Bucket ein
    }
  }

  //Sortiere die Zeichen in jedem Bucket
  for (let i = 0; i < buckets.length; i++) {
    buckets[i].sort() // Sortiere die Zeichen im aktuellen Bucket aphabetisch
  }

  // Kombiniere die sortierten Buckets zu einem endgültigen Ergebnis
  let result = ""
  for (let i = 0; i < buckets.length; i++) {
    result += buckets[i].join("") // Füge die Zeichen jedes Buckets zu einem String zusammen
  }

  return result
}

linkupExerciseHandler("[data-click=Bucketsort]", Bucketsort)
