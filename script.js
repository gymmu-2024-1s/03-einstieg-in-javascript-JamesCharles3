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
  const input = args
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

  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      // zähle eins hoch
      count = count + 1
    } else if (currentElement === "E") {
      //auch E ignorieren

      // zähle eins hoch
      count = count + 1
    }
  }

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

  let hasUpperCaseLetter = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (ascii >= 65 && ascii <= 90) {
      hasUpperCaseLetter = true
    }
  }

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
      hasspecialcaracter = true
    }

    if (hasspecialcaracter) {
      return true
    }
  }
  return false
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
      result.push("3")
    } else {
      result.push(currentElement)
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
      return true
    }
    return false
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
      return i
    }
  }
  return -1
}

linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  const result = []

  let pos = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Suche die Position des letzten `e`s in einem Text.
    if (currentElement === "e") {
      pos = i
    }
  }
  return pos
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
      return i
    }
  }
  return -1
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

  let dollarFound = false

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
        result2.push(currentElement)
      }
    }
  }

  return [result1.join(""), result2.join("")]
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
      totallist.push(currentlist.join(""))
      currentlist.length = 0
    } else {
      currentlist.push(currentElement)
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
        return true
      }
      return false
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

  let kFound = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Ersetze alle Zeichen aus der Eingabe mit `_` , bis zum ersten "k".
    if (currentElement === "k") {
      kFound = true
    }

    if (kFound === false) {
      result.push("_")
    } else {
      result.push(currentElement)
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
      result.push(input[0])
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  const input = args
  const result = []

  if (input.length < 2) {
    return input
  }

  const firstLetter = input[0]
  const lastLetter = input[input.length - 1]

  result.push(lastLetter)

  for (let i = 1; i < input.length - 1; i++) {
    const currentElement = input[i]

    result.push(currentElement)
  }

  result.push(firstLetter)

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
      if (i === input.length / 2 - 1) {
        continue
      }
      if (i === input.length / 2) {
        continue
      } else {
        result.push(currentElement)
      }
    } else {
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

  const firstElement = input[0]

  const secondElement = input[1]

  // Wenn das erste Element des ASCII Wert grösser ist als das zweite dann vertausche sie.
  if (firstElement.charCodeAt(0) > secondElement.charCodeAt(0)) {
    // vertausche die Elemente
    result.push(secondElement)
    result.push(firstElement)
  } else {
    result.push(firstElement)
    result.push(secondElement)
  }

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

  let secondNum = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    // Testen Sie, ob in der Eingabe 2 Zahlen von einem Leerzeichen getrennt sind. Falls ja geben Sie die Summe als Ausgabe aus; sonst Fehlermeldung.
    if (ascii >= 48 && ascii <= 57) {
      if (secondNum === false) {
        result1.push(currentElement)
      } else {
        result2.push(currentElement)
      }
    } else if (ascii === 32) {
      secondNum = true
    } else {
      return null
    }
  }

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

  // Gib das Ergebnis als einen zusammengefügten String zurück
  return result.join("")
}

linkupExerciseHandler("[data-click=eigeneAufgabe1]", eigeneAufgabe1)

export function eigeneAufgabe2(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=eigeneAufgabe2]", eigeneAufgabe2)

export function eigeneAufgabe3(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // ersetze jedes "e" in einem Text durch "John Pork".
    if (currentElement === "e") {
      result.push("John Pork")
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
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
      // Wenn der ASCII-Wert des aktuellen Zeichens größer ist als der des nächsten

      // müssen die beiden Zeichen vertauscht werden.
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i + 1]
      list[i + 1] = list[i] // Tausche das aktuelle Element mit dem nächsten
      list[i] = tmp
      // Wenn ein Tausch stattgefunden hat, starte die Schleife von vorne
      i = -1 // starte von vorne wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")
  return result // Gibt den sortierten String zurück
}

linkupExerciseHandler("[data-click=bubblesort]", bubblesort)
