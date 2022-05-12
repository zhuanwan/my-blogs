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
      type: 2,
      tip: '单位名称',
      limit: '',
      verifyPhone: 2,
      validType: 0,
      required: true,
      guid: '6b4bd0fe-3b83-4086-b895-45a55f0edab7',
      name: '单行文本',
      relationChecks: [],
      relationFlag: false
    },
    {
      type: 2,
      tip: '管理员账号',
      limit: '11',
      verifyPhone: 2,
      validType: 2,
      required: true,
      guid: 'e7e96b54-8099-4ef3-8c94-477e1712514a',
      name: '单行文本',
      relationChecks: [],
      relationFlag: false
    },
    {
      type: 2,
      tip: '密码',
      limit: '8',
      verifyPhone: 2,
      validType: 9,
      required: true,
      guid: '362cd3b9-e64f-40fe-9d04-9de735739b6b',
      name: '单行文本',
      relationId: null,
      relationChecks: [],
      relationFlag: false
    },
    {
      type: 2,
      tip: '确认密码',
      limit: '8',
      verifyPhone: 2,
      validType: 9,
      required: true,
      guid: 'a2ea2347-fb7b-458b-822d-d2843b180938',
      name: '单行文本',
      relationId: null,
      relationChecks: [],
      relationFlag: false
    },
    {
      tip: '街道',
      radio: [
        {
          id: '708702481730768896',
          name: '福保街道'
        },
        {
          id: '7087024817307688961',
          name: '福田街道'
        },
        {
          id: '',
          name: '华富街道'
        },
        {
          id: '',
          name: '华强北街道'
        },
        {
          id: '',
          name: '莲花街道'
        },
        {
          id: '',
          name: '梅林街道'
        },
        {
          id: '',
          name: '南园街道'
        },
        {
          id: '',
          name: '沙头街道'
        },
        {
          id: '',
          name: '香蜜湖街道'
        },

        {
          id: '',
          name: '园岭街道'
        }
      ],
      required: true,
      name: '下拉框',
      active: '1',
      guid: '3331d4cf-449e-40d3-aa53-2b1956dc7ad6',
      type: 9,
      relationChecks: [],
      relationFlag: false,
      isNeedRequest: true
    },
    {
      tip: '社区',
      radio: [
        {
          id: '',
          name: ''
        }
      ],
      required: true,
      name: '下拉框',
      active: '1',
      guid: '601a51b4-18ed-45bf-b23c-959ccb7764f7',
      type: 9,
      relationChecks: [],
      relationFlag: false
    },
    {
      type: 2,
      tip: '详细经营地址',
      limit: '',
      verifyPhone: 2,
      validType: 0,
      required: true,
      guid: 'b1ac503e-ec39-4887-99a6-3bb279cf6cd0',
      name: '单行文本',
      relationChecks: [],
      relationFlag: false
    },
    {
      type: 2,
      tip: '姓名',
      limit: '',
      verifyPhone: 2,
      validType: 1,
      required: true,
      guid: '02e630a7-2bd8-4b76-b18c-509d045eeac5',
      name: '单行文本',
      relationChecks: [],
      relationFlag: false
    },
    {
      tip: '证件类型',
      radio: [
        {
          id: '',
          name: '居民身份证'
        },
        {
          id: '',
          name: '临时居民身份证'
        },
        {
          id: '',
          name: '军官证'
        },
        {
          id: '',
          name: '港澳居民往来内地通行证'
        },
        {
          id: '',
          name: '台湾居民来往大陆通行证'
        },
        {
          id: '',
          name: '护照'
        },
        {
          id: '',
          name: '其他'
        },
        {
          id: '',
          name: '港澳居民居住证'
        },
        {
          id: '',
          name: '台湾居民居住证'
        },
        {
          id: '',
          name: '外国人永久居留证'
        }
      ],
      required: true,
      name: '下拉框',
      active: '1',
      guid: 'f86e2136-5535-4f63-b458-1f941393bf39',
      type: 9,
      relationChecks: [],
      relationFlag: false
    },
    {
      type: 2,
      tip: '证件号码',
      limit: '',
      verifyPhone: 2,
      validType: 0,
      required: true,
      guid: '93a8152b-2307-4bbf-b403-3599bdbc1bb9',
      name: '单行文本',
      relationChecks: [],
      relationFlag: false
    },
    {
      type: 2,
      tip: '手机号码',
      limit: 11,
      verifyPhone: 2,
      validType: 2,
      required: true,
      guid: 'f0355d0d-2a44-4ff6-8389-2d9f2558520d',
      name: '单行文本',
      relationChecks: [],
      relationFlag: false
    },
    {
      type: 2,
      tip: '邮箱',
      limit: 15,
      verifyPhone: 2,
      validType: 3,
      required: false,
      guid: '6fd50239-baf9-49a7-8929-f7737edeb42d',
      name: '单行文本',
      relationChecks: [],
      relationFlag: false
    },
    {
      tip: '行业',
      radio: [
        // {
        //   id: '',
        //   name: '党政机关'
        // },
        {
          id: '',
          name: '大型商超'
        },
        {
          id: '',
          name: '外卖骑手'
        },
        {
          id: '',
          name: '农贸市场'
        },
        {
          id: '',
          name: '零售药店'
        },
        {
          id: '',
          name: '直接接触进口冷链食品'
        },
        {
          id: '',
          name: '小型商超'
        },
        {
          id: '',
          name: '餐饮单位'
        },
        {
          id: '',
          name: '文体旅游'
        },
        {
          id: '',
          name: '交通运输'
        },
        {
          id: '',
          name: '建筑行业'
        }
      ],
      required: true,
      name: '下拉框',
      active: '1',
      guid: '64b87bc9-a93f-49cc-adab-9a331c138ec6',
      type: 9,
      relationChecks: [],
      relationFlag: false
    },
    {
      type: 2,
      tip: '组织机构代码',
      limit: '',
      verifyPhone: 2,
      validType: 0,
      required: true,
      guid: '11e1ba1f-6dfa-4656-a0fb-3cfed215e274',
      name: '单行文本',
      relationChecks: [],
      relationFlag: false
    }
  ],
  buttonText: '注册',
  shareCover: 'https://temp.aijiatui.com/ms-test/form/header/header_img_0.png',
  shareDescription: '注册',
  shareTitle: '注册',
  remindOn: 0,
  remindGroup: [],
  remindRepeat: 1,
  remindTime: null,
  remindType: 1
}
