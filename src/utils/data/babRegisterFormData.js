// 园区（楼宇）、企业表单配置

export default {
  companyId: '588406399529160704',
  formId: '871767702895636480',
  formDataCommitTimes: 0,
  formUserCount: null,
  formEntranceVOList: [],
  name: '1',
  context: [
    {
      name: '标题',
      guid: 'e3b9d76a-2982-4de8-8c75-73317f7e9985',
      tip: '绑定单位',
      type: 1,
      showType: ['园区（楼宇）', '企业']
    },
    {
      name: '下拉框',
      guid: 'd00c72b4-87c0-4c6a-b79b-86b48649fe35',
      tip: '单位类型',
      type: 9,
      required: true,
      defaultValue: '园区（楼宇）',
      radio: [
        { name: '园区（楼宇）', id: '' },
        { name: '企业', id: '' }
      ],
      showType: ['园区（楼宇）', '企业']
    },
    {
      verifyPhone: 2,
      validType: 1,
      name: '单行文本',
      limit: 100,
      guid: '9b556952-f247-4679-9af4-33672f4e14a0',
      tip: '园区（楼宇）名称',
      type: 2,
      required: true,
      showType: ['园区（楼宇）']
    },
    {
      verifyPhone: 2,
      validType: 1,
      name: '单行文本',
      limit: 100,
      guid: '9abbee5c-90e5-4d07-86e2-219056f31047',
      tip: '园区（楼宇）编码',
      type: 2,
      required: true,
      isDisabled: true,
      showType: ['园区（楼宇）']
    },
    {
      verifyPhone: 2,
      validType: 1,
      name: '单行文本',
      limit: 1000,
      guid: 'aa878dba-dfb4-4fec-9551-f2f811de4ab5',
      tip: '园区（楼宇）地址',
      isDisabled: true,
      type: 2,
      required: true,
      showType: ['园区（楼宇）']
    },
    {
      verifyPhone: 2,
      validType: 1,
      name: '单行文本',
      limit: 100,
      guid: 'fdf5adae-62ee-4244-ac1d-bb9c7672eb88',
      tip: '企业所在园区（楼宇）名称',
      type: 2,
      required: true,
      showType: ['企业']
    },
    {
      verifyPhone: 2,
      validType: 1,
      name: '单行文本',
      limit: 100,
      guid: '0c27581c-1b3e-48c8-9194-e5e284a951ea',
      tip: '企业所在园区（楼宇）地址',
      type: 2,
      required: true,
      showType: ['企业']
    },
    {
      name: '下拉框',
      guid: '03dc783c-90cc-44c0-a492-59d655990261',
      tip: '所属街道办',
      type: 9,
      required: true,
      radio: [],
      showType: ['园区（楼宇）', '企业']
    },
    {
      name: '下拉框',
      guid: '8b1fb7f2-2b3e-417a-b5eb-9533d30c8b18',
      tip: '所属社区',
      type: 9,
      required: true,
      radio: [],
      showType: ['园区（楼宇）', '企业']
    },
    {
      verifyPhone: 2,
      validType: 1,
      name: '单行文本',
      limit: 100,
      guid: '70685e4e-8384-4b97-8030-51040877f215',
      tip: '企业名称',
      type: 2,
      required: true,
      showType: ['企业']
    },
    {
      verifyPhone: 2,
      validType: 1,
      name: '单行文本',
      limit: 100,
      guid: '4b4a0878-72d4-41bf-85ae-2e783aac1927',
      tip: '统一社会信用代码',
      type: 2,
      required: true,
      showType: ['企业']
    },
    {
      verifyPhone: 2,
      validType: 1,
      name: '单行文本',
      limit: 100,
      guid: '4b4a0878-72d4-41bf-85ae-2e783aac1928',
      tip: '纳税人识别号',
      type: 2,
      required: true,
      showType: ['企业']
    },
    {
      verifyPhone: 2,
      validType: 1,
      name: '单行文本',
      limit: 100,
      guid: '1c50dd71-9f01-4ed0-8976-f5abdcf3d8f6',
      tip: '企业地址',
      type: 2,
      required: true,
      showType: ['企业']
    },
    {
      name: '标题',
      guid: '57e7cc25-ffbf-4d53-a546-bdfadb60f6d4',
      tip: '绑定身份',
      type: 1,
      showType: ['园区（楼宇）', '企业']
    },
    {
      verifyPhone: 2,
      validType: 1,
      name: '单行文本',
      limit: 100,
      guid: 'b3ee5e5f-fc00-4771-9216-ca821d7580f1',
      tip: '真实姓名',
      type: 2,
      required: true,
      showType: ['园区（楼宇）', '企业']
    },
    {
      verifyPhone: 2,
      validType: 2,
      name: '单行文本',
      limit: 100,
      guid: '64f68d85-336e-4f34-bbf5-94cff7750fce',
      tip: '手机号码',
      type: 2,
      required: true,
      showType: ['园区（楼宇）', '企业']
    },
    {
      verifyPhone: 2,
      validType: 4,
      name: '单行文本',
      limit: 100,
      guid: '928ff0ca-854f-4d00-b40f-9b24af8e7d2c',
      tip: '身份证号',
      type: 2,
      required: true,
      showType: ['园区（楼宇）', '企业']
    }
  ],
  isEnable: 1,
  buttonText: '下一步',
  lastCommitDataTime: null,
  gmtCreate: '2021-08-02 14:53:37',
  gmtUpdate: '2021-08-02 14:53:37',
  entranceDesList: '',
  cover: '',
  listCover: 'https://temp.aijiatui.com/ms-test/form/header/header_img_0.png',
  description: '',
  theme: '0',
  shareCount: null,
  pvCount: null,
  submitUser: null,
  shareCover: 'https://ecard.szft.gov.cn/gov/form/header/header_img_19.png',
  shareDescription: '1',
  shareTitle: '1',
  showTitle: 1,
  appletShareCover:
    'https://dev-ftecard.aijiatui.com/files/qrcode/2021/0802/17b05a3b765.jpg',
  sortNum: 0,
  remindOn: 0,
  remindRepeat: 1,
  remindTime: null,
  remindGroup: null,
  remindType: 1,
  jumpType: 0,
  jumpContent: '',
  jumpAppletScheme: ''
}
