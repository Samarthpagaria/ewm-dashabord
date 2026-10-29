---
name: rea
description: >-
  Activate this skill when the user types "/rea <instruction>" or asks to
  reverse-engineer, analyze, decompile, inspect, trace, or recreate a feature
  from a compiled binary, native application, Electron/JavaScript app, .NET
  assembly, Android APK, website, firmware image, or any non-source-available
  target. Also activate when the user wants to investigate a bug using runtime
  evidence, compare application versions, or build a matching feature based on
  observed behavior. This skill drives the full REA investigation workflow
  backed by the configured REA MCP server. Do NOT activate for ordinary source
  repository analysis where full source code is available.
---

# REA — Reverse Engineer Anything

This skill is the entry point for `/rea <instruction>` invocations. It
orchestrates a structured reverse-engineering investigation using the **REA MCP
server** (`rea-agents@6.8.0`) configured at
`C:\Users\HP\.gemini\config\mcp_config.json`.

> **Important:** Always use REA's actual MCP tools for evidence. Do not
> fabricate source code, symbol names, API behavior, or runtime observations.

---

## Invocation

The user invokes this skill by typing:

```
/rea <instruction>
```

**Examples:**

- `/rea Reverse-engineer the search feature of this reference application and explain how it works.`
- `/rea Analyze this website's navigation and identify how its menus and routing work.`
- `/rea Investigate the authentication flow in the reference application and help me implement an equivalent in my project.`
- `/rea Inspect this Electron application, trace the settings feature, and explain the implementation.`
- `/rea Analyze this local Android APK and explain its manifest, components, and relevant methods.`
- `/rea Investigate this bug using REA evidence and implement a verified fix in my current project.`

---

## Investigation Workflow

### Step A — Identify the Target

1. Parse the instruction and extract the target (app, website, binary, APK, etc.)
2. Resolve the target's local path or URL. Ask only when it cannot be inferred.
3. Determine the target type:
   - **Website / web app**: use browser/network capture tools
   - **JavaScript / Electron app**: use `analyze-javascript-application`
   - **Native binary (ELF, PE, Mach-O)**: use Ghidra/IDA/Kuna providers
   - **.NET assembly**: use managed-code analysis tools
   - **Android APK**: use JADX provider
   - **Firmware**: use native/artifact tools
4. Confirm the user owns or has authorization to analyze the target.
5. Identify any required tools (browser, ADB, emulator) not yet available.

### Step B — Establish Readiness

1. Check that the REA MCP server is available by verifying the tool list.
2. Confirm which REA tools are exposed by the connected server.
3. Run `rea doctor --client antigravity --json` only if tools are missing or
   the server is unreachable. Do NOT run diagnostics before every investigation.
4. Check installed REA version: `rea-agents@6.8.0`.
5. Report missing providers (Ghidra, IDA, JADX, Kuna) only when they are
   actually required for the requested target type.

**Available providers (post base install):**

| Provider | Status | Required For |
|---|---|---|
| Built-in static analysis | ✅ Ready | JS/Electron/web apps |
| Browser (Playwright) | ✅ Ready | Web capture, screenshots |
| Ghidra | ❌ Not configured | Native binaries |
| IDA Pro | ❌ Not configured | Native binaries |
| JADX | ❌ Not configured | Android APKs |
| Kuna | ❌ Not configured | Native binaries |

### Step C — Investigate with Evidence

1. Select the appropriate REA operations from the actual tool catalog.
2. Use `analyze` or `analyze-javascript-application` for initial overview.
3. Trace the feature from its entry point through dependencies.
4. Use targeted follow-up tools: `decompile`, `inspect-*`, `compare-*`,
   `capture-browser-scenario`, `capture-process`, etc.
5. Preserve all Evidence (paths, symbols, offsets, screenshots) returned.
6. Distinguish **directly observed facts** from hypotheses.
7. Never invent function names, API behavior, or symbol names.

### Step D — Produce Findings

Provide:

- **What the feature does** — clear functional description
- **Component map** — relevant files, classes, modules, APIs
- **Execution flow** — input → processing → output
- **Key locations** — important functions, files, offsets, or classes
- **Evidence** — what REA returned to support each conclusion
- **Dependencies** — relevant libraries, APIs, native calls
- **Security considerations** — if applicable
- **Unknowns** — what could not be determined and why
- **Follow-up recommendations** — suggested next investigation steps

Save detailed findings as a Markdown report using the artifact system when useful.
Do NOT write temporary files into the target application's directories.

### Step E — Recreate or Modify (when requested)

Only when the user explicitly requests implementation:

1. Examine the **current project's** structure before editing anything.
2. Match its framework, conventions, and architecture.
3. Separate confirmed behavior from assumptions about inaccessible internals.
4. Implement only the requested scope.
5. Avoid overwriting user changes or unrelated files.
6. Run relevant tests, linting, type checks, and build checks where available.
7. Compare the implementation against observed behavior; report any gaps.

> **Default:** Implement changes only in the user's destination project, never
> in the target reference application unless explicitly asked.

---

## MCP Server Details

- **Config file:** `C:\Users\HP\.gemini\config\mcp_config.json`
- **Command:** `C:\Users\HP\AppData\Roaming\fnm\node-versions\v24.22.2\installation\npx.cmd -y rea-agents@6.8.0 mcp`
- **Node.js:** v24.22.2 (via fnm — satisfies `^24.22.1`)
- **Skill version:** 49 (229 tools)
- **Doctor command:** `npx -y rea-agents@6.8.0 doctor --client antigravity --json`

---

## References

- [REA GitHub](https://github.com/morluto/rea)
- [REA npm package](https://www.npmjs.com/package/rea-agents)
- [REA website](https://rea.tools/)
- Full skill instructions: `C:\Users\HP\.gemini\config\skills\reverse-engineer-anything\SKILL.md`
- Connection and recovery: `C:\Users\HP\.gemini\config\skills\reverse-engineer-anything\references\connection-and-recovery.md`

