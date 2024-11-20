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

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    let count = 0
    if (currentElement === " ") {
      count = count + 1
    }
  }
  return count + 1
}
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  const input = args
  const result = []

  let hasUpperCaseLetter = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const upperCaseVersion = currentElement.toUpperCase()
    if (currentElement === "." || currentElement === " ") {
      // Sonderzeichen ignorieren
    } else if (currentElement === upperCaseVersion) {
      hasUpperCaseLetter = true
    }
    //sollte nur sonderzeichen falsch sein
    else {
      hasUpperCaseLetter = false
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
    const upper = currentElement.toUpperCase()
    const lower = upper.toLowerCase()
    if (upper === lower) {
      hasspecialcaracter = true
    }
  }
  return hasspecialcaracter
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
    }
  }
}

linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)
