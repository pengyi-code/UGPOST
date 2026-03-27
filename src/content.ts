import coverFlow from '../2.jpeg';
import coverRTCP from '../3.jpeg';
import coverPath from '../4.jpeg';
import coverDebug from '../5.jpeg';
import wechatQr from '../wechat-qr.png';

export const siteContent = {
  nav: [
    { label: '课程价值', href: '#value' },
    { label: '课程模块', href: '#modules' },
    { label: '开发能力', href: '#capabilities' },
    { label: '适合谁', href: '#audience' },
    { label: '联系方式', href: '#contact' },
  ],
  hero: {
    eyebrow: 'UG / NX 五轴后处理教程与开发',
    title: '讲透 UG/NX 五轴后处理',
    description:
      '围绕原理、流程、算法思路与开发实践建立一条完整学习路径，帮助你从会用走向能理解、能调试、能继续开发。',
    primaryCta: { label: '查看课程模块', href: '#modules' },
    secondaryCta: { label: '微信咨询', href: '#contact' },
    panelTitle: '从原理到开发实战',
    panelDescription:
      '适合希望系统学懂 UG/NX 五轴后处理，也希望把调试、优化与开发能力做扎实的人。',
    metrics: [
      { value: '4 个模块', label: '覆盖原理、流程与开发实践' },
      { value: '系统讲解', label: '从基础概念到问题定位方法' },
      { value: '面向落地', label: '兼顾学习理解与开发需求' },
    ],
  },
  value: {
    title: '把概念、流程与开发思路讲成一条清晰路径',
    description:
      '不是零散堆知识点，而是先建立理解框架，再进入调试、优化与开发语境。',
  },
  valueCards: [
    {
      title: '解决入门混乱',
      description:
        '把五轴后处理常见概念拆开讲透，建立从机床结构到指令逻辑的完整认知。',
    },
    {
      title: '解决流程不清',
      description:
        '讲清 UG/NX 后处理链路、Tcl 语法、事件流程和模板调用关系，学习不再碎片化。',
    },
    {
      title: '解决开发难落地',
      description:
        '把调试思路、bug 排查、刀路判断和旋转轴相关计算放回真实开发场景里讲。',
    },
  ],
  audiences: [
    'UG/NX 后处理学习者，想系统补齐五轴认知',
    '已有基础操作经验，想进一步理解原理与结构的人',
    '正在做后处理定制、调试或开发，希望提升定位问题能力的人',
  ],
  modulesHeading: {
    title: '四个模块，覆盖五轴后处理核心链路',
    description: '每一部分都围绕真正需要掌握的知识和能力展开。',
  },
  modules: [
    {
      title: 'Tcl 语法与流程讲解',
      description:
        '理解 Tcl 主要语法、UG 后处理流程、事件机制与常见问题，为后续开发打下基础。',
      image: coverFlow,
      alt: '五轴后处理教程封面：Tcl 语法与流程讲解',
    },
    {
      title: 'RTCP 与机床结构认知',
      description:
        '讲清五轴机床结构、RTCP 指令含义，以及有无 RTCP 在编程和后处理上的差异。',
      image: coverRTCP,
      alt: '五轴后处理教程封面：RTCP 与机床结构',
    },
    {
      title: '刀路判断与角度计算',
      description:
        '围绕刀路类型判断、欧拉角、3 轴与 3+2 区分、旋转轴角度等关键算法思路展开。',
      image: coverPath,
      alt: '五轴后处理教程封面：刀路判断与角度计算',
    },
    {
      title: '模板调试与效率方案',
      description:
        '覆盖模板初始化、后处理 bug 处理、抬刀下刀、退刀与旋转轴逻辑优化。',
      image: coverDebug,
      alt: '五轴后处理教程封面：模板调试与效率方案',
    },
  ],
  capabilitiesHeading: {
    title: '把教程理解延伸到真实开发与调试',
    description:
      '页面不堆作品集，而是直接说明你真正能解决的关键后处理问题。',
  },
  capabilities: [
    '高级模板初始化与后处理结构梳理',
    '后处理 bug 排查与问题定位',
    '抬刀 / 下刀方案设计与效率优化',
    '沿刀轴退刀算法与安全策略设计',
    '旋转轴角度计算与松开夹紧逻辑分析',
    '刀路类型识别、3 轴与 3+2 区分思路',
  ],
  outcomes: [
    '能看懂后处理结构，不再只会照着改',
    '能根据问题现象定位到流程、事件或模板逻辑',
    '能理解 RTCP、旋转轴与角度计算等关键概念',
    '能在现有基础上继续调试、优化和开发',
  ],
  audienceHeading: {
    title: '适合希望系统学懂并继续深入的人',
  },
  personas: [
    {
      title: '刚进入五轴后处理',
      description: '需要一套清晰路径，先建立整体框架，再理解关键概念和流程。',
    },
    {
      title: '已经在做调试',
      description: '遇到 bug 或逻辑问题时，希望能更快定位，而不是反复试错。',
    },
    {
      title: '希望继续做开发',
      description: '想把模板、事件、算法和旋转轴逻辑真正转化成自己的能力。',
    },
  ],
  contact: {
    title: '扫码咨询教程内容或开发合作',
    description:
      '如果你想了解教程细节、学习路径，或有后处理相关开发需求，可以直接通过微信联系。',
    note: '微信昵称：迷舟 · 湖北武汉',
    buttonLabel: '查看二维码大图',
    tip: '手机端可长按识别，桌面端可直接扫码添加。',
    qrImage: wechatQr,
    qrAlt: '微信二维码',
  },
};

export type SiteContent = typeof siteContent;
