# 🛡️ SCL AI Architect — Generador de Código IEC 61131-3

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![IEC 61131-3](https://img.shields.io/badge/IEC-61131--3-blue)](https://www.plcopen.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

> **Ejercicio 2.3** — Generación inteligente de código SCL para autómatas Siemens.

SCL AI Architect es una herramienta web que permite a ingenieros de automatización generar código **SCL (Structured Control Language)** compatible con **TIA Portal** mediante descripciones en lenguaje natural. El sistema interpreta la intención del usuario y produce bloques funcionales (FB) válidos según la norma **IEC 61131-3**.

---

## 🎯 Objetivo del Proyecto

Investigar y demostrar cómo la inteligencia artificial puede asistir en la programación de PLC industriales (Siemens S7-1200/1500), reduciendo:
- El tiempo de desarrollo de lógica de automatización.
- Los errores sintácticos en el código SCL.
- La barrera de entrada para nuevos programadores de PLC.

---

## 🚀 Características Principales

### Generación de Código SCL
- **Entrada en lenguaje natural**: Describe lo que necesitas (ej: *"semáforo con ciclo de 10 segundos"*).
- **Salida en SCL válido**: Bloques `FUNCTION_BLOCK` con declaración de variables `VAR/END_VAR`.
- **Patrones industriales**: Semáforos, bombas de lubricación, contadores, PID, y más.
- **Código genérico**: Si la descripción no coincide con un patrón conocido, genera un template base personalizable.

### Chips de Ejemplo Rápido
| Chip | Descripción | Patrón Generado |
|------|-------------|-----------------|
| 🚦 Semáforo | Control de semáforo con ciclo temporal | `Traffic_Control` con TON timers |
| 💧 Bomba | Bomba de lubricación con protección | `Pump_Lube_Management` con interlock |
| 🌡️ PID Temp | Control PID de temperatura | Template PID base |
| 🔢 Contador | Contador de piezas con reset | Contador con trigger |

### Validación de Código
- **Inspección estructural**: Verifica que el código sigue la norma IEC 61131-3.
- **Compatible con TIA Portal v17+**: El código generado es importable directamente.
- **Bloques funcionales (FB)**: Estructura estándar con VAR_INPUT, VAR_OUTPUT y VAR.

### Interfaz Premium
- Diseño glassmorphism con degradados púrpura.
- Editor de código con fuente `JetBrains Mono`.
- Botón de copia al portapapeles con feedback visual.
- Responsive y funcional en cualquier pantalla.

---

## 📋 Ejemplo de Código Generado

### Entrada
```
Control de un semáforo con ciclo de 10 segundos
```

### Salida SCL
```pascal
FUNCTION_BLOCK "Traffic_Control"
VAR_INPUT
  Start : BOOL;
END_VAR
VAR
  Timer_Red : TON;
  Timer_Green : TON;
  State : INT; // 0:Red, 1:Green, 2:Yellow
END_VAR
BEGIN
  CASE #State OF
    0:
      #Timer_Red(IN:=#Start, PT:=T#10s);
      IF #Timer_Red.Q THEN #State := 1; END_IF;
    1:
      #Timer_Green(IN:=TRUE, PT:=T#10s);
      IF #Timer_Green.Q THEN #State := 0; END_IF;
  END_CASE;
END_FUNCTION_BLOCK;
```

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura de la aplicación |
| **CSS3** | Glassmorphism, gradientes, grid layout |
| **JavaScript ES6+** | Lógica de generación y validación de código |
| **JetBrains Mono** | Fuente monoespaciada para el editor de código |
| **Clipboard API** | Copia al portapapeles moderna |

---

## 🚀 Inicio Rápido

### Opción 1: Abrir directamente
```
Abrir frontend_architect.html en cualquier navegador moderno
```

### Opción 2: Clonar repositorio
```bash
git clone https://github.com/AbyssIzangamer17/Ejercicio_2_3_SCL_IEC61131.git
cd Ejercicio_2_3_SCL_IEC61131
# Abrir frontend_architect.html en el navegador
```

### Uso Paso a Paso
1. **Escribe** una descripción en lenguaje natural en el campo de texto.
2. **Haz clic** en "⚡ CONSTRUIR LÓGICA" o usa uno de los chips de ejemplo.
3. **Revisa** el código SCL generado en el editor.
4. **Edita** el código directamente si necesitas ajustes.
5. **Valida** con "✓ Validar e Inspeccionar TIA Code".
6. **Copia** el código con "📋 COPIAR" para pegarlo en TIA Portal.

---

## 📁 Estructura del Proyecto

```
Ejercicio_2_3_SCL_IEC61131/
├── frontend_architect.html    # Aplicación principal (generador SCL)
├── programa_scl.scl           # Ejemplo de código SCL
├── backend/                   # Backend Node.js (expansión futura)
│   ├── server.js
│   └── package.json
├── frontend/                  # Frontend alternativo
│   └── index.html
├── docs/                      # Documentación técnica
├── Documentacion_SCL.docx     # Documentación del estándar
└── README.md                  # Este archivo
```

---

## 🔬 Conceptos Industriales Aplicados

- **IEC 61131-3**: Estándar internacional para lenguajes de programación de PLC.
- **SCL (Structured Control Language)**: Lenguaje de alto nivel tipo Pascal para autómatas.
- **TIA Portal**: Entorno de ingeniería de Siemens para programación de PLC S7-1200/1500.
- **Function Block (FB)**: Bloque funcional con memoria, instanciable y reutilizable.
- **Temporizadores TON**: Temporizadores de retardo a la conexión según IEC 61131-3.

---

## 👤 Autor

**Izan Urios** — 3R de Automatización y Robótica Industrial

---

## 📄 Licencia

Proyecto de código abierto bajo licencia **MIT**.
