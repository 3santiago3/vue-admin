<template>
  <div>table</div>
</template>

<script>
import { getTableData } from '@/api/data'

export default {
  data() {
    return {
      tableData: [],
      columns: [
        { key: 'name', title: '姓名' },
        { key: 'age', title: '年龄', editable: true },
        { key: 'email', title: '邮箱', editable: true }
      ]
    }
  },
  mounted() {
    getTableData()
      .then(res => {
        this.tableData = res
      })
  }
}
</script>
