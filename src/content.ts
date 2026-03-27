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
    title: '讲透五轴后处理',
    description:
      '这不是只教操作的教程，而是从原理、流程、算法思路到问题定位的系统学习路径，帮助你从会用走向能改、能调、能继续开发。',
    primaryCta: { label: '查看课程模块', href: '#modules' },
    secondaryCta: { label: '微信咨询', href: '#contact' },
    metrics: [
      { value: '4 大模块', label: '覆盖原理、流程与开发实战' },
      { value: '系统讲解', label: '从基础概念到定位问题的方法' },
      { value: '面向落地', label: '兼顾教程学习与后处理开发需求' },
    ],
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
    '已经会基础操作，想进一步理解后处理原理与结构的人',
    '正在做后处理定制、调试或开发，希望提升定位问题能力的人',
  ],
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
        '覆盖高级模板初始化、后处理 bug 处理、智能抬刀/下刀、退刀与旋转轴逻辑优化。',
      image: coverDebug,
      alt: '五轴后处理教程封面：模板调试与效率方案',
    },
  ],
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
    '能理解旋转轴、RTCP、角度计算等关键概念',
    '能在现有基础上继续调试、优化和开发',
  ],
  contact: {
    title: '扫码咨询教程内容或开发合作',
    description:
      '如果你想了解教程细节、学习路径，或有后处理相关开发需求，可以直接通过微信联系。',
    note: '微信昵称：迷舟 · 湖北武汉',
    qrImage: wechatQr,
    qrAlt: '微信二维码',
  },
};

export type SiteContent = typeof siteContent;






