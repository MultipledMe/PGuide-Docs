import {defineNoteConfig, defineNotesConfig} from 'vuepress-theme-plume'

const campusWiki = defineNoteConfig({
    dir: '大学百科',
    link: '/campus-wiki/',
    sidebar: 'auto'

})

const publicService = defineNoteConfig({
    dir: '公共服务',
    link: '/public-service/',
    sidebar: 'auto'
    // : [
    //     {
    //         prefix: 'GPT',
    //         icon: '/openai.svg',
    //         text: '生成式人工智能',
    //         // link: 'GPT',
    //         items: [
    //             {
    //                 text: '公共调用网站及应用部署集合',
    //                 link: 'GPT',
    //                 icon: 'devicon:openapi',
    //                 items: [
    //                     {
    //                         text: 'LobeChat',
    //                         link: 'LobeChat',
    //                     },
    //                     {
    //                         text: 'MidJourneyProxy',
    //                         link: 'MidJourneyProxy',
    //                     }
    //                 ]
    //             },
    //
    //         ]
    //     },
    //     {
    //         prefix: 'Overleaf',
    //         icon: '/overleaf.svg',
    //         text: 'Overleaf LaTeX协作平台',
    //         link: 'Overleaf LaTeX协作平台',
    //         items: [
    //             {
    //                 icon: 'skill-icons:latex-light',
    //                 text: "30分钟学会LaTeX",
    //                 link: "https://cn.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes",
    //             }
    //         ]
    //     },
    //     {
    //         prefix: '重医开源软件镜像站',
    //         icon: '/mirror.svg',
    //         text: '重医校级开源软件镜像站',
    //     }
    // ]
})

const backendManage = defineNoteConfig({
    dir: '后台管理',
    link: '/backend-manage/',
    sidebar: 'auto'
})

const CSDIY = defineNoteConfig({
    dir: 'CS-DIY',
    link: '/csdiy/',
    sidebar: 'auto'
})

const projectDocs = defineNoteConfig({
    dir: '项目文档',
    link: '/project-docs/',
    sidebar: 'auto',
})

const learningNotes = defineNoteConfig({
    dir: '学习笔记',
    link: '/learning-notes',
    sidebar: 'auto',
})

export default defineNotesConfig({
    dir: '/notes/',
    link: '/',
    notes: [campusWiki, publicService, CSDIY, projectDocs, learningNotes, backendManage],
})