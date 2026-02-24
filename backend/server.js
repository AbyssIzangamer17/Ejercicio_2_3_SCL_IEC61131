const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Database setup
const db = new sqlite3.Database('../database/scl_checker.db', (err) => {
    if (err) console.error(err.message);
    console.log('Connected to the SCL database.');
});

db.run(`CREATE TABLE IF NOT EXISTS validations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT,
    is_valid BOOLEAN,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

// Endpoint: Validate SCL Code
app.post('/validate', (req, res) => {
    const { code } = req.body;

    // Simulación de lógica de validación SCL
    const hasSemicolon = code.trim().endsWith(';');
    const hasVar = code.toLowerCase().includes('var') && code.toLowerCase().includes('end_var');
    const isValid = hasSemicolon && hasVar;

    db.run(`INSERT INTO validations (code, is_valid) VALUES (?, ?)`, [code, isValid], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID, isValid, message: isValid ? "Código SCL válido." : "Error de sintaxis: Falta punto y coma o bloque VAR." });
    });
});

app.listen(port, () => {
    print(`SCL Backend running at http://localhost:${port}`);
});
