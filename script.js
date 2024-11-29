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
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Zähle alle Wörter in einem Text
    if (currentElement === " ") {
      count = count + 1
    }
  }
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
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Lesen Sie die Eingabe als Liste ein, Einträge in der Liste werden von einem ','
    getrennt.result.push(currentElement)

    if (currentElement === ",") {
      return result
    }
  }
  return result
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
    // jedes zeichen soll verdoppelt werden.
    result.push(currentElement)
    result.push(currentElement)
  }
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

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Das erste und das letzte Zeichen der Eingabe sollen vertauscht werden.
    if (i === 0 || i === input.length - 1) {
      result.push(currentElement)
    } else {
      result.push(input[input.length - 1 - i])
    }
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Das mittlere Zeichen der Eingabe soll gelöscht werden. Wenn die Anzahl Zeichen gerade ist, sollen die beiden mittleren Zeichen gelöscht werden.
  }
}
linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function aufgabe26(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  }
}
linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)
