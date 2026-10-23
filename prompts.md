# Prompt Engineering Guidelines — AZ-900 Quiz Content & Explanations

This document describes the prompt engineering methodology used to generate quiz questions and explanations for this AZ-900 practice tool. The guidelines are designed to produce content that is accurate, beginner-friendly, and aligned with the skills measured by the AZ-900 exam.

---

## Guiding Principles

1. **Beginner-first language** — Assume the learner has little to no prior cloud experience. Avoid jargon without defining it. Replace acronyms with their full name on first use (e.g., "Microsoft Entra ID (formerly Azure Active Directory)").
2. **Accuracy over flair** — Every explanation must be technically correct per current Microsoft documentation. No invented features, deprecated names without context, or speculative examples.
3. **Teach, don't just tell** — Each explanation should help the learner understand *why* the correct answer is right and *why* the distractors are wrong, in plain language.
4. **Reinforce, not overwhelm** — Keep explanations to 2–4 sentences. Give enough detail to solidify the concept without drowning the learner in edge cases.

---

## Quiz Question Generation Prompt

When generating new quiz questions, use the following prompt template:

```
You are an expert Azure instructor creating practice questions for the
Microsoft AZ-900 Azure Fundamentals exam. Your audience is a beginner
with little to no cloud experience.

Generate a multiple-choice question following these rules:

1. TOPIC: The question must fall under one of these AZ-900 domains:
   - Cloud Concepts
   - Azure Core Services
   - Security, Privacy & Compliance
   - Azure Pricing & Support
   - Management & Governance

2. FORMAT: Provide exactly 4 answer options (A–D). Only one option is
   correct. The other three must be plausible distractors that represent
   common misconceptions, not obviously wrong throwaway answers.

3. LANGUAGE:
   - Use plain, everyday language. Define any technical term on first use.
   - Avoid jargon, acronyms, or product names without context.
   - Do not use double negatives or trick phrasing.

4. DIFFICULTY: Target the recall and comprehension levels of Bloom's
   taxonomy — the level expected for a fundamentals exam.

5. EXPLANATION: Write a 2–4 sentence explanation that:
   - States why the correct answer is right
   - Briefly explains why the key distractor(s) are wrong
   - Uses a real-world analogy or concrete example where possible
   - Does not reference the exam or claim this is an exam question

6. AVOID:
   - Do not copy or paraphrase real exam questions
   - Do not include "All of the above" or "None of the above" options
   - Do not make multiple answers partially correct — one must be
     unambiguously correct
```

---

## Explanation Generation Guidelines

Explanations are the core teaching tool in this app. They appear after each answered question and in the post-quiz review section. Follow these guidelines when writing or reviewing explanations:

### Structure

Each explanation should follow this pattern:

1. **Direct answer** — State clearly why the correct option is right.
2. **Distractor contrast** — Briefly explain what the wrong options represent and why they are incorrect.
3. **Reinforcement** — Add a concrete example, analogy, or edge-case note that deepens understanding.

### Tone

- **Encouraging** — Frame mistakes as learning opportunities, not failures.
- **Conversational** — Write as if speaking to a student, not a textbook reader.
- **Concise** — 2–4 sentences maximum. If more context is needed, link to Microsoft Learn documentation conceptually rather than expanding.

### Examples

**Good explanation:**
> The consumption-based model means you pay only for what you use, when you use it — no upfront costs, and you stop paying when resources are deprovisioned. The other options describe fixed pricing (CapEx) or unrealistic free resources, neither of which matches the pay-as-you-go model.

**Avoid:**
> Correct answer is B. The consumption-based model is a pricing model in cloud computing where users are charged based on the resources they consume over time.

The first version explains *why* and contrasts with the wrong answers. The second just restates the fact without teaching.

---

## Distractor Design Guidelines

Distractors (wrong answer options) are just as important as the correct answer. Good distractors teach by representing common mistakes.

1. **Plausibility** — Each distractor should be something a beginner might reasonably believe. Avoid absurd options that make the correct answer obvious.
2. **Common misconceptions** — Base distractors on real student misunderstandings (e.g., confusing elasticity with scalability, or confusing CapEx with OpEx).
3. **Near-misses** — Include one distractor that is almost correct but has a key detail wrong (e.g., "availability zones are available in all regions" — they are not).
4. **Balanced length** — Keep all four options roughly the same length and detail level. Avoid making the correct answer noticeably longer or more specific.
5. **No throwaways** — Never include an obviously joke-level wrong answer. Every option should force the learner to think.

---

## Topic Coverage Checklist

When generating a set of questions for a topic, ensure coverage across the key exam skills. Use the following as a minimum guide:

| Topic | Key Concepts to Cover |
|---|---|
| Cloud Concepts | Public/private/hybrid cloud, consumption-based model, CapEx vs. OpEx, shared responsibility, elasticity, scalability, high availability, reliability, agility |
| Azure Core Services | Regions, availability zones, region pairs, resource groups, ARM, subscriptions, resource hierarchy |
| Security, Privacy & Compliance | Microsoft Entra ID, RBAC, MFA, Key Vault, NSGs, Azure Policy, Defender for Cloud, data residency, Service Trust Portal |
| Azure Pricing & Support | Pricing Calculator, Cost Management, SLAs, support plans, reservations, preview vs. GA, Azure Advisor |
| Management & Governance | Azure Monitor, Service Health, Azure Policy, Blueprints, Cloud Shell, ARM templates, management groups, tagging, Azure Automation |

---

## Content Review Checklist

Before adding any question to the quiz, verify:

- [ ] Only one option is unambiguously correct
- [ ] All four options are roughly equal in length and detail
- [ ] The explanation states *why* the correct answer is right
- [ ] The explanation addresses at least one common misconception
- [ ] No real exam questions are copied or closely paraphrased
- [ ] Technical terms are defined on first use
- [ ] No deprecated product names are used without the current name (e.g., "Azure AD" must include "Microsoft Entra ID")
- [ ] The question targets recall/comprehension level, not advanced scenarios

---

## Disclaimer

All questions and explanations generated using these guidelines are **original study content** created for educational purposes. They are not derived from, copied from, or representative of real Microsoft AZ-900 exam questions. This tool is not affiliated with or endorsed by Microsoft.
