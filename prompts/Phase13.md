# Phase 13：AI Agent
I want to turn the AI assistant into an agent.

Do not modify files.

Design an agent architecture for this application.

The agent should be able to:

1. Understand the user's request
2. Decide whether a tool is needed
3. Call a tool
4. Receive the tool result
5. Continue reasoning
6. Return the final answer

Potential tools:

- Search users
- Get user details
- Search database
- Create record
- Update record

Explain:

LLM
↓
Tool selection
↓
Tool execution
↓
Tool result
↓
LLM
↓
Final response