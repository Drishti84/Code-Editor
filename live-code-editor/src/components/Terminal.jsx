import { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";

const MyTerminal = () => {
    const terminalRef = useRef(null); // Prevent re-creating terminals

    useEffect(() => {
        if (!terminalRef.current) {
            const term = new Terminal({
                theme: { background: "#1e1e1e", foreground: "#ffffff" },
                cursorBlink: true,
            });

            terminalRef.current = term;
            term.open(document.getElementById("terminal"));
            term.writeln("Welcome to the terminal! Type commands here.");
        }
    }, []);

    return (
        <div
            id="terminal"
            style={{
                height: "50%",
                width: "calc(100vh - 50px)",
                background: "#1e1e1e",
                padding: "10px",
                borderRadius: "5px",
                overflow: "auto"
            }}
        ></div>
    );
};

export default MyTerminal;
