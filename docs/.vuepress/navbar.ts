// noinspection JSDeprecatedSymbols

import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {text: '首页', link: '/'},
    {
        icon: '/note.svg',
        text: '学习笔记',
        items: [
            {icon: '/note.svg',text: '前言',link: '/learning-notes/'},
            {icon: '/AI.svg', text: '机器学习', link: '/learning-notes/ml/'},
            {icon: 'logos:google-developers', text: '前端开发', link: '/learning-notes/frontend-dev/'},
            {icon: 'fluent-color:data-scatter-32', text: '后端开发', link: '/learning-notes/backend-dev/'},
            {icon: 'devicon:ros', text: 'ROS2', link: '/learning-notes/ROS2/'},
            {icon: 'marketeq:vision', text: '计算机视觉', link: '/learning-notes/CV/'}
        ]
    },
    {
        icon: '/project.svg',
        text: '项目文档',
        items: [
            {icon: '/match.svg', text: '全国大学生竞赛组队系统', link: '/project-docs/match-competitions/'},
            {icon: '/zhiyu.png', text: '植愈：AI情绪小帮手', link: '/project-docs/plant-cure/'},
            {icon: '/robot.png', text: '智慧中草药生态养护平台', link: '/project-docs/smart-car/'},
            {icon: '/univ-town.svg', text: '像素大学城', link: '/project-docs/pixel-university-town/'},
            {icon: '/command_block.gif', text: 'CQMUA服务器中心', link: '/project-docs/cqmua-center/'},
            {icon: '/analyse.svg',text: '学情分析系统',link: '/project-docs/study-analytic-system/'},
            {icon: '/zzfy.svg',text: '掌中方圆',link: '/project-docs/control-my-panel/'},
        ]
    },
    {
        icon: '/code.svg',
        text: 'CS-DIY',
        items: [
            {text: '前言', link: '/cs-diy/'},
            {icon:'/dev-standard.svg', text: '开发规范' , link: '/csdiy/dev-rules/'},
            {icon: '/path.svg', text: '学习路线', link: '/csdiy/study-path/'},
            {icon: 'carbon:cics-program', text:'编程入门', link: '/csdiy/program-begin/'},
            {icon: 'mdi:tools', text:'必学工具', link: '/csdiy/tools-must/'},
            {icon: '',text: '', link: ''}
        ]
    },
    {
        icon: '/public-service.svg',
        text: '公共服务',
        items: [
            {icon: '/openai.svg',text: '生成式人工智能',link: '/public-service/GPT/'},
            {icon: 'fluent-color:data-area-20', text: '数据中心', link: '/public-service/data-center/'},
            {icon: '/mirror.svg', text: '重庆医科大学开源软件镜像站', link: ' /public-service/cqmu-mirror/'},
            {icon: '/overleaf.svg', text: 'Overleaf在线协作企业版', link: '/public-service/overleaf/'},
            {text: '', link: ''}
        ]
    },
    {
        icon: '/wiki.svg',
        text: '大学百科',
        items: [
            {icon: '/email.svg', text: '申请学生邮箱', link: '/campus-wiki/apply-student-email/'},
            {icon: '/teacher.svg', text: '老师们说', link: '/campus-wiki/teacher-talks/'},
            {icon: 'carbon:container-software', text: '常用软件', link: '/campus-wiki/common-softwares/'},
            {icon: '/cert.svg', text: '证书及技能考试', link: '/campus-wiki/credential-skillful-exams/'},
            {icon: 'ic:baseline-school',text: '校内生活', link: '/campus-wiki/campus-life/'}
        ]
    },
    {
        icon: '/manage.svg',
        text: '后台管理',
        items: [
            {icon: '/OAuth2.svg', text: 'OAuth登录(测试版)', link: 'https://hrtcsm.logto.app/demo-app'},
            {icon: 'icon-park:data-lock', text: '数据中心', link: ''},
            {icon: '/control.svg', text: '项导运维控制中台', link: ''},
            {icon: '/vpn.svg', text: 'VPN服务', link: ''},
            {icon: '/cloud.svg', text: '云计算资源调度中心', link: ''},
        ],
    },
    {
        icon: '/link.svg',
        text: '友情链接',
        items: [
            {icon: '/friend.svg', text: '个人', link: '/friends/persons/'},
            {icon: '/organ.svg', text: '组织', link: '/friends/organizations/'},
        ]
    },
])
