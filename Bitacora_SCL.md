# Bitácora de Desarrollo: SCL AI Architect

## Ejercicio 2.3 — Generador de Código IEC 61131-3 para PLC Siemens

---

### Descripción del Proyecto

El proyecto consiste en crear una herramienta web que permita a ingenieros de automatización generar código SCL (Structured Control Language) compatible con TIA Portal mediante descripciones en lenguaje natural. El sistema interpreta la intención del usuario y produce bloques funcionales válidos según la norma IEC 61131-3.

---

### Prompts Utilizados

#### Prompt #1
**Prompt:** "El ejercicio 2.3 no es capaz de generar código, solo es capaz de validarlo."

**Para qué sirve:** Se implementó la funcionalidad de generación de código: creación de plantillas para diferentes tipos de lógica industrial, generación dinámica basada en palabras clave del usuario, y patrones como Semáforo, Bomba de lubricación, Control PID y Contador.

**Corrección:** Sí — Se utilizó para corregir la limitación de solo validar código sin generarlo.

---

#### Prompt #2
**Prompt:** "El SCL no es capaz de generar programas libres, solo es capaz de crear 3 tipos de programa. Yo quiero que con texto escrito por el usuario sea capaz de generar código SCL y validarlo."

**Para qué sirve:** Se implementó generación libre con lenguaje natural: campo de texto para describir la lógica deseada, análisis del prompt del usuario para detectar intención, generación dinámica de código SCL basado en la descripción, y mantenimiento de la validación estructural.

**Corrección:** Sí — Este prompt se usó para corregir la limitación de solo tener 3 programas fijos, permitiendo generación libre.

---

#### Prompt #3
**Prompt:** "El SCL tienes que mejorarle la interfaz, pero no toques nada más porque es perfecto."

**Para qué sirve:** Se mejoró únicamente la interfaz de usuario: header con degradado premium, chips de ejemplo rápidos (Semáforo, Bomba, PID, Contador), diseño glassmorphism mejorado, botón de copiar al portapapeles moderno, y fuente JetBrains Mono para el editor.

**Corrección:** Sí — Este prompt se usó específicamente para mejorar la UI sin modificar la lógica de generación, respetando la versión estable.

---

### Resumen de Funcionalidades

| Funcionalidad | Descripción |
|--------------|-------------|
| Generación Libre | Escribe en lenguaje natural y genera SCL |
| Validación IEC 61131-3 | Verifica estructura del código generado |
| Chips de Ejemplo | Semáforo, Bomba, PID, Contador |
| Editor de Código | Con fuente monoespaciada |
| Copiar al Portapapeles | Botón con feedback visual |
| Código Compatible TIA Portal | Importable directamente |

---

### Ejemplo de Generación

**Entrada del usuario:**
```
semáforo con ciclo de 10 segundos
```

**Código SCL generado:**
```pascal
FUNCTION_BLOCK "Traffic_Control"
VAR_INPUT
  Start : BOOL;
END_VAR
VAR
  Timer_Red : TON;
  Timer_Green : TON;
  State : INT;
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

### Conclusión

El SCL AI Architect se consolidó como una herramienta perfecta según el usuario, capaz de generar código SCL libre a partir de descripciones en lenguaje natural y validarlo según el estándar IEC 61131-3. La interfaz premium facilita la experiencia de uso y la copia del código generado para importar en TIA Portal.

---

*Documento realizado por Izan Urios — 3R de Automatización y Robótica Industrial*
