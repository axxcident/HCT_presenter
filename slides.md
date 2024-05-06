---
theme: apple-basic
image: HCT_icon.png
layout: two-cols
# backgroundSize: none
backgroundSize: contain
title: Introduction Health Check-in
info: |
  ## Introduction to Health Check-in
  for teams at Bontouch.
class: text-center
author: Axel Olivecrona
favicon: favicon.ico
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
  withToc: false
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
---

# Health Check-in App

Your teams primary tool to track work health

::right::

<div class='w-full h-full relative'>
  <div class="relative">
      <img
        v-motion
        :initial="{ y: -700, x: 0, scale: 0.9 }"
        :click-1="{ y: -100, x: 0, scale: 0.7, transition: { duration: 1000 } }"
        class="absolute inset-0 z-20"
        src="/heart.png"
        alt=""
      />
      <LightOrDark>
        <template #dark>
          <img
            v-motion
            :initial="{ x: -57, opacity: 0, scale: 0.7 }"
            :click-1="{ x: -57, y: 70, opacity: 1, scale: 0.4, transition: { duration: 1200 } }"
            class="absolute inset-0 z-0"
            src="/Heartground_black.svg"
            alt=""
          />
        </template>
        <template #light>
          <img
            v-motion
            :initial="{ x: -57, opacity: 0, scale: 0.9 }"
            :click-1="{ x: -57, y: 70, opacity: 1, scale: 0.5, transition: { duration: 1200 } }"
            class="absolute inset-0 z-1"
            src="/heartground_white.svg"
            alt=""
          />
        </template>
      </LightOrDark>
    </div>
    <div
      class="text-5xl absolute top-14 left-40 text-[#2B90B6] z-10"
      v-motion
      :initial="{ x: -80, opacity: 0}"
      :click-2="{ x: 25, opacity: 1, transition: { delay: 500, duration: 1000 } }">
      Health Check-In
    </div>
  </div>

<style>
  .grid-cols-2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<!--
It's important that members of a team work in an effient way that is also good for the health in the long term. With todays presentation I'm going to talk about the health check-in App that will allow you to keep track of your teams and yourselfs work health regarding Happiness, Productivity and Stress. Let's check it out!
-->

---
transition: slide-up
---

# Core concept

<div class="flex flex-col justify-center relative w-full">
  <code class="w-full">
    [
      <br>
      { id: 1, name: "Happiness" },
      <br>
      { id: 2, name: "Productivity"},
      <br>
      { id: 3, name: "Stress" }
      <br>
    ]
  </code>
  <div class="w-full h-full">
      <div
        v-motion
        :initial="{ x: -300, opacity: 0, scale: 0.5 }"
        :click-1="{ x: 0, y: 130, opacity: 1, scale: 0.9, transition: { duration: 600 } }"
        class="absolute left-0 top-0 z-1 w-full h-[300px] bg-white opacity-20 rounded-md px-4 mx-4"
      >
        <Chart/>
      </div>
  </div>
</div>

<style>
  .chart-container canvas {
    background-color: rgba(255, 255, 255, 1); /* White background color */
  }
</style>

<!--
Presenter note with **bold**, *italic*, and ~~striked~~ text.

Also, HTML elements are valid:
<div class="flex w-full">
  <span style="flex-grow: 1;">Left content</span>
  <span>Right content</span>
</div>
-->

---
transition: fade-out
layout: center
class: text-center
---

# Poll 1

<div class="w-full h-1/2 flex justify-center items-center">
  <img
  class="w-1/3 h-1/3"
  src="/qr-code.svg"
  alt="QR code to poll 1" />
</div>

---
transition: fade-out
layout: full
---

# What is ❤️ App offering??

<h2 class="p-4 mb-3">Health check-in is a tool that is made for you and your team, This is what it offers:</h2>
    <div
      class="text-4xl absolute top-14 left-40"
      v-motion
      :initial="{ x: -100, opacity: 0}"
      :click-1="{ x: -85, y:135, opacity: 1, transition: { delay: 500, duration: 1000 } }">
- 🕒 Sessions
    </div>
    <div
      class="text-4xl absolute top-14 left-40"
      v-motion
      :initial="{ x: -100, opacity: 0}"
      :click-2="{ x: -85, y:235, opacity: 1, transition: { delay: 500, duration: 1000 } }">
- 📊 Team Performance
    </div>
    <div
      class="text-4xl absolute top-14 left-40"
      v-motion
      :initial="{ x: -100, opacity: 0}"
      :click-3="{ x: -85, y:335, opacity: 1, transition: { delay: 500, duration: 1000 } }">
- 📈 Personal Progress
    </div>
    <div
      class="text-4xl absolute top-14 left-40"
      v-motion
      :initial="{ x: -100, opacity: 0}"
      :click-4="{ x: 315, y:135, opacity: 1, transition: { delay: 300, duration: 1000 } }">
- 💡 Collaboration
    </div>
    <div
      class="text-4xl absolute top-14 left-40"
      v-motion
      :initial="{ x: -100, opacity: 0}"
      :click-4="{ x: 315, y:235, opacity: 1, transition: { delay: 500, duration: 1000 } }">
- 🧑‍💻 Bontouch Exclusive
    </div>
    <div
      class="text-4xl absolute top-14 left-40"
      v-motion
      :initial="{ x: -100, opacity: 0}"
      :click-4="{ x: 315, y:335, opacity: 1, transition: { delay: 700, duration: 1000 } }">
- 🤳 Mobile Responsiveness
    </div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
1. Make sessions as points in time (Retro, Sprint planning) where you'd like a team to input their health factors
2. Track the health of your team(s) over time
3. Your inputs that you fill in per session/team is stored on your individual page where you can track it
4. Join any team you like, or create your own
5. Only a valid bontouch email adress can sign up
6. Made for mobile screens
-->

---
layout: iframe-right
backgroundSize: 5em 20%

# the web page source
url: https://health-checkin.vercel.app/

# a custom class name to the content
class: my-cool-content-on-the-left
id: my-coolest-id
---

# The How

<ul v-click>
  <code>Next.js</code>
  <li>Running on server</li>
  <li>Hosted on Vercel</li>
  <li>Typescript</li>
</ul>
<ul v-click>
  <code>Auth0</code>
  <li>User authorization</li>
  <li>Security</li>
</ul>
<ul v-click>
  <code>Vercel PostgreSQL</code>
  <li>User data</li>
  <li>Team data</li>
  <li>Session data</li>
</ul>

---
layout: center
url: http://localhost:3000/user-dashboard/de2412d0-6049-40d8-84d3-1b97da83fa66
id: test-id
# the web page source
class: text-center
---

# Bontour

[Health Check-in App](https://health-checkin.vercel.app/)

---

# Github issues

<article class="flex justify-between">
  <div>
    <p class="">Repository is owned by <h2 id="bontouch"> Bontouch</h2></p>
    <span>Potential <strong>improvements</strong> & <i>bugs</i></span>
    <div>
      <ul>
        <li v-click class="py-2 pt-4">Designate <span class="underline">name</span> and <span class="underline">purpose</span> to Sessions</li>
        <li v-click class="py-2">Create own KPI, <code>emotional security</code>?</li>
        <li v-click class="py-2">Anonymity</li>
      </ul>
    </div>
  </div>
  <div class="w-[55%] h-[100%]">
    <img src="/GH_Issues.png" alt="" class="rounded-md" />
  </div>
</article>

<style>
#bontouch {
  font-weight: 600;
  display: flex;
  font-size: 2rem;
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #1FA2EA 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
transition: fade-out
layout: center
class: text-center
---

# Poll 2

<div class="w-full h-1/2 flex justify-center items-center">
  <img
  class="w-1/3 h-1/3"
  src="/qr-code2.svg"
  alt="QR code to poll 2" />
</div>

---
layout: center
class: text-center
---

# Thank You

[Notion](https://www.notion.so/bontouch/Web-intern-project-Team-health-checkin-9acd5e321c684bf38e5386e1f8a2d2dc) · [GitHub](https://github.com/bontouch/health-checkin) · [Website](https://health-checkin.vercel.app)
