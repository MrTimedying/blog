"use strict";(self.webpackChunkdev_blog=self.webpackChunkdev_blog||[]).push([[441],{9441:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n='---\nAuthor: Antonio Logarzo\nTitle: devlog 008\nDate: 2024-02-01\ntags:\n  - data-architecture\n---\n\n   \n   1. Started to code the search-bar for the side-bar, which is a navigation prompt that I took from Obsidian. It is comfortable to always have under plain sight which is the focus of the application.\n      \n   ``` JS\n   const function sidebar () {\n   \tconst [searchInput, setSearchInput] = useState("");\n   }\n   ```\n   The idea is to have the search-bar function fetching into the database entries for PATIENT or CLIENT, not sure which denomination to use yet. Probably for the time the app is out of beta the Clinical Kinesiologist will be a full fledged health professional.\n   \n   Now, I find it problematic to handle the frontend without knowing exactly how the data architecture will be handled. So the first problem I need to tackle is get back into databases, because I will be using those and finally get an update on noSQL and SQL databases and add to the technical document the data architecture. Once I have the data architecture figured out I would progress with the frontend that eventually seems to be longer to develop, but impossible to handle without data architecture.\n   \n   This will also clarify the way I want periodization in general to be handled since is the central and pivotal part of the functionality. On periodization the graphing and decision making procedures of the end-user will be based. I want to change the way professional in the field of movement sciences approach their discipline: Fulcrum needs to dictate "how" professional work.\n   \n   The important part here is the <mark style="background: #FF5582A6;">definition of the data architecture and pipelines</mark>. Once I have the data architecture and pipeline ready, the app will be actually developable. \n   \n   The data architecture must be part of the Alpha and the Beta stages of the lifecycle of the app. Functionalities may be implemented also subsequently.\n   \n   [[Databases, data architecture, data pipeline]]'}}]);
//# sourceMappingURL=441.5fd82626.chunk.js.map