<!--
描述：招生管理-数据字典组件
开发人：hqj
开发日期：2018年9月3日
-->

<template lang="pug">
    keep-alive
        kalix-base-dict(ref="baseTableRef" v-bind:bizKey="bizKey" v-bind:bizDialog="bizDialog"
        v-bind:targetURL="targetURL" v-bind:dialogOptions="dialogOptions")
</template>

<script type="text/ecmascript-6">
    import {EnrolmentDictsTypesListURL, EnrolmentDictURL} from '../../config.toml'

    export default {
        name: 'kalix-enrolment-enrolmentdict',
        data() {
            return {
                dialogOptions: {
                    targetURL: EnrolmentDictURL,
                    dictTypesListURL: EnrolmentDictsTypesListURL,
                    bizKey: 'dict'
                },
                bizKey: 'dict',
                targetURL: EnrolmentDictURL,
                bizDialog: [
                    {id: 'view', dialog: 'basedictView'},
                    {id: 'edit', dialog: 'basedictAdd'},
                    {id: 'add', dialog: 'basedictAdd'}
                ]
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped lang="stylus">
</style>
