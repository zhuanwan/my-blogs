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
      verifyPhone: 2,
      validType: 1,
      name: '单行文本',
      limit: 11,
      guid: 'be8e9d68-f44f-48f6-b804-cf65ea6ace08',
      tip: '真实姓名',
      type: 2,
      required: true,
      relationId: null,
      relationChecks: []
    },
    {
      guid: 'cec419ba-3dfe-4668-b46e-44a4d3358914',
      limit: 11,
      name: '单行文本',
      relationChecks: [],
      relationFlag: false,
      required: true,
      tip: '手机号码',
      type: 2,
      validType: 2,
      verifyPhone: 2
    },
    {
      name: '单项选择',
      guid: '273d7b34-8855-4194-b47f-4b97213d671c',
      tip: '是否完成新冠疫苗全程接种',
      type: 7,
      required: true,
      radioType: 1,
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
      relationId: null,
      relationChecks: []
    },
    {
      type_a: 2,
      name: '地址',
      guid: '8197d0f4-06bc-418c-8685-5f30bda745e4',
      tip: '14天内途经地1',
      type: 11,
      required: true,
      relationId: null,
      relationChecks: []
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
