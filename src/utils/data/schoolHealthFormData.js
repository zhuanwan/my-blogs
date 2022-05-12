// 福田春节居民离深留深申报表单的表单设置，做静态化

export default {
  formId: '85938710575373926421',
  name: '注册',
  description: '',
  showTitle: 1,
  cover: '',
  theme: 0,
  context: [
    {
      relationChecks: [],
      name: '文字说明',
      guid: 'eb48b9d3-5024-44ff-88e7-c5231d5bddc6',
      tip:
        '您好，为有效防控新冠肺炎疫情，确保您和他人的健康，请如实填报相关信息，非常感谢！',
      type: 12,
      relationId: null
    },
    {
      verifyPhone: 2,
      validType: 0,
      relationChecks: [],
      name: '单行文本',
      limit: 30,
      guid: '70465347-7c5d-42c4-a1aa-4f124efafe25',
      tip: '所属学校',
      type: 2,
      required: true,
      relationId: null
    },
    {
      relationChecks: [],
      name: '单项选择',
      guid: '925c354f-ff97-4728-9e06-d1dc038d42b0',
      tip: '人员类别',
      type: 7,
      required: true,
      radioType: 2,
      radio: [
        {
          name: '学生',
          id: ''
        },
        {
          name: '教职工',
          id: ''
        }
      ],
      relationId: null
    },
    {
      verifyPhone: 2,
      validType: 0,
      relationChecks: [0],
      name: '单行文本',
      limit: 15,
      relationFlag: true,
      guid: '512fbe40-e2b5-4887-a8ad-17147204cfdd',
      tip: '所在班级',
      relationId: '925c354f-ff97-4728-9e06-d1dc038d42b0',
      type: 2,
      required: true
    },
    {
      verifyPhone: 2,
      validType: 0,
      relationChecks: [],
      name: '单行文本',
      limit: 15,
      guid: '34ad5a23-3117-47b2-a032-dd60fc1babb2',
      tip: '姓名',
      type: 2,
      required: true,
      relationId: null
    },
    {
      verifyPhone: 2,
      validType: 2,
      relationChecks: [],
      name: '单行文本',
      limit: 15,
      guid: 'b8590e35-d33c-4ead-a919-0f569839b21c',
      tip: '联系电话',
      type: 2,
      required: true,
      relationId: null
    },
    {
      relationChecks: [],
      name: '单项选择',
      guid: '9448a43c-e25f-4b8b-895f-326b27892c48',
      tip: '申报类型',
      type: 7,
      required: true,
      radioType: 2,
      radio: [
        {
          name: '离深',
          id: ''
        },
        {
          name: '返深',
          id: ''
        },
        {
          name: '留深',
          id: ''
        }
      ],
      relationId: null
    },
    {
      relationChecks: [0],
      name: '日期',
      relationFlag: true,
      guid: 'e5e8d35e-1d0e-40aa-bee4-30eaf6e2d96b',
      tip: '离深时间',
      relationId: '9448a43c-e25f-4b8b-895f-326b27892c48',
      type: 5,
      required: true
    },
    {
      relationChecks: [0],
      name: '单项选择',
      relationFlag: true,
      guid: 'd1f7bce4-94a5-41d7-aec9-61901e86f06a',
      tip: '离深方式',
      relationId: '9448a43c-e25f-4b8b-895f-326b27892c48',
      type: 7,
      required: true,
      radioType: 2,
      radio: [
        {
          name: '乘坐飞机、火车、高铁、大巴等公共交通工具',
          id: ''
        },
        {
          name: '自驾',
          id: ''
        },
        {
          name: '其他方式',
          id: ''
        }
      ]
    },
    {
      relationChecks: [0],
      type_a: 2,
      name: '地址',
      relationFlag: true,
      guid: '4832a818-3261-43c2-95df-2d355f95d1db',
      tip: '目的地',
      relationId: '9448a43c-e25f-4b8b-895f-326b27892c48',
      type: 11,
      required: true
    },
    {
      verifyPhone: 2,
      validType: 0,
      relationChecks: [0],
      name: '单行文本',
      limit: 100,
      relationFlag: true,
      guid: '5aecc8c1-deaf-4304-9289-efd6695d7203',
      tip: '途径城市',
      relationId: '9448a43c-e25f-4b8b-895f-326b27892c48',
      type: 2,
      required: true
    },
    {
      relationChecks: [1],
      name: '日期',
      relationFlag: true,
      guid: '329224bd-e273-4224-806f-698cad1ddeae',
      tip: '返深时间',
      relationId: '9448a43c-e25f-4b8b-895f-326b27892c48',
      type: 5,
      required: true
    },
    {
      relationChecks: [1],
      name: '单项选择',
      relationFlag: true,
      guid: 'a4169520-1e08-4147-ada2-c3d9ae6c70ba',
      tip: '返深方式',
      relationId: '9448a43c-e25f-4b8b-895f-326b27892c48',
      type: 7,
      required: true,
      radioType: 2,
      radio: [
        {
          name: '乘坐飞机、火车、高铁、大巴等公共交通工具',
          id: ''
        },
        {
          name: '自驾',
          id: ''
        },
        {
          name: '其他方式',
          id: ''
        }
      ]
    },
    {
      verifyPhone: 2,
      validType: 0,
      relationChecks: [1],
      name: '单行文本',
      limit: 100,
      relationFlag: true,
      guid: 'c31a9bb9-590d-4438-968c-27699fdb7327',
      tip: '途径城市',
      relationId: '9448a43c-e25f-4b8b-895f-326b27892c48',
      type: 2,
      required: true
    },
    {
      relationChecks: [],
      name: '标题',
      guid: '306dff69-bec2-4cd8-945b-e32892d50f20',
      tip: '健康情况',
      type: 1,
      relationId: null
    },
    {
      relationChecks: [],
      name: '多项选择',
      guid: '7c6c5db2-8c1f-491d-83a6-47f447b2ed61',
      tip: '是否有以下症状',
      type: 8,
      required: true,
      radio: [
        {
          name: '发热',
          id: ''
        },
        {
          name: '乏力',
          id: ''
        },
        {
          name: '嗅觉味觉减退',
          id: ''
        },
        {
          name: '鼻塞',
          id: ''
        },
        {
          name: '流涕',
          id: ''
        },
        {
          name: '咽痛',
          id: ''
        },
        {
          name: '结膜炎',
          id: ''
        },
        {
          name: '肌痛',
          id: ''
        },
        {
          name: '腹泻',
          id: ''
        },
        {
          name: '以上症状都没有',
          id: ''
        }
      ],
      relationId: null
    },
    {
      relationChecks: [],
      name: '标题',
      guid: '58fe9ab2-cfd6-41d5-a7d0-2ad0750594af',
      tip: '流行病史',
      type: 1,
      relationId: null
    },
    {
      relationChecks: [],
      name: '单项选择',
      relationFlag: false,
      guid: '59342783-f536-4b65-b40d-61baf5094a8a',
      tip: '14天内是否有境外旅居史或国内高中风险地区的旅居史？',
      type: 7,
      required: true,
      radioType: 2,
      radio: [
        {
          name: '是',
          id: ''
        },
        {
          name: '否',
          id: ''
        }
      ],
      relationId: null
    },
    {
      relationChecks: [],
      name: '单项选择',
      relationFlag: false,
      guid: 'cd46679f-e369-49f9-8ee7-77f55221d40e',
      tip: '14天内是否接触过新冠确诊病例、疑似病例、无症状感染者？',
      type: 7,
      required: true,
      radioType: 2,
      radio: [
        {
          name: '是',
          id: ''
        },
        {
          name: '否',
          id: ''
        }
      ],
      relationId: null
    },
    {
      relationChecks: [],
      name: '单项选择',
      relationFlag: false,
      guid: 'c646473f-cc32-4263-a269-8758c0c7a911',
      tip: '2天内家庭或单位是否同时段出现相关联的2例以上发热病人？',
      type: 7,
      required: true,
      radioType: 2,
      radio: [
        {
          name: '是',
          id: ''
        },
        {
          name: '否',
          id: ''
        }
      ],
      relationId: null
    }
  ],
  buttonText: '提交',
  shareCover: 'https://temp.aijiatui.com/ms-test/form/header/header_img_0.png',
  shareDescription: '提交',
  shareTitle: '提交',
  remindOn: 0,
  remindGroup: [],
  remindRepeat: 1,
  remindTime: null,
  remindType: 1
}
