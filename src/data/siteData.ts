// src/data/siteData.ts

// 1. 定义数据类型 (接口)
export interface ExperienceItem {
    title: string;
    company: string;
    period: string;
}

export interface ProjectItem {
    name: string;
    description: string;
    tags: string[];
    githubUrl?: string; // ? 表示可选属性
    liveUrl?: string;
}

// 2. 导出数据
export const experiences: ExperienceItem[] = [
    {
        title: 'Software Development Engineer',
        company: 'Hebei Kezhu Electronic Technology Co., Ltd.',
        period: '2025.06 - Present',
    },
    {
        title: 'M.S. Computer Vision',
        company: 'Hebei University of Science and Technology',
        period: '2022.09 - 2025.06',
    },
    // {
    //     title: 'B.S. Computer Science',
    //     company: 'University of Technology',
    //     period: '2017 - 2021',
    // },
];

export const projects: ProjectItem[] = [
    {
        name: 'Luner',
        description: 'A lightweight LLM API gateway that proxies, caches, and rate-limits AI model requests with OpenAI-compatible interfaces and a built-in web console.',
        tags: ['Go', 'LLM', 'API Gateway'],
        githubUrl: 'https://github.com/skylunna/luner',
    },
    {
        name: 'Smart Platform',
        description: 'A distributed cloud-native microservices platform built with Java, featuring API gateway, Flink stream processing, Docker containerization, and load testing.',
        tags: ['Java', 'Microservices', 'Cloud Native', 'Docker', 'Flink'],
        githubUrl: 'https://github.com/skylunna/smart-platform',
    },
    {
        name: 'LunarOS',
        description: 'A hobby x86_64 kernel written in Rust, aiming to build an operating system comparable to Linux from scratch.',
        tags: ['Rust', 'OS', 'Kernel'],
        githubUrl: 'https://github.com/skylunna/LunarOS',
    },
];