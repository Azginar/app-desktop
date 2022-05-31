<template>
  <div class="accounts-archive-page">
    <modal-window v-show="showRestoreModal" class="restoreModal" @close="showRestoreModal = false">
      <template v-slot:header>
        <icSuccess />
      </template>
      <template v-slot:body>
        <h3>Счет <span /> востановлен</h3>
      </template>
      <template v-slot:footer>
        <div>
          <default-button
            label="Ok"
            type="red-button"
            :click-event="handleCloseFormRestoreModal"
          />
        </div>
      </template>
    </modal-window>
    <modal-window v-show="showDeleteModal" class="deleteModal" @close="showDeleteModal = false">
      <template v-slot:header>
        <icDelete />
      </template>
      <template v-slot:body>
        <h3>Вы действительно хотите удалить счет <span /></h3>
      </template>
      <template v-slot:footer>
        <div>
          <default-button
            label="Yes"
            type="red-button"
            :click-event="handleCloseFormDeleteModal"
          />
        </div>
        <div>
          <default-button
            label="Cancel"
            type="trans-button"
            :click-event="handleCloseFormDeleteModal"
          />
        </div>
      </template>
    </modal-window>
    <table class="test">
      <thead>
        <tr>
          <th width="25%">
            <span>Account</span>
          </th>
          <th width="10%">
            Leverage
          </th>
          <th width="14%">
            Balance
          </th>
          <th width="13%">
            Credit
          </th>
          <th width="15%">
            <span>Equity</span>
          </th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tableData" :key="row.item">
          <td>
            <NuxtLink :to="row.link">
              <span id="account-archive">{{ row.account }}</span>
            </NuxtLink>
          </td>
          <td>{{ row.leverage }}</td>
          <td>{{ row.balance }}</td>
          <td>{{ row.credit }}</td>
          <td><span>{{ row.equity }}</span></td>
          <td>
            <div class="btn-block-table">
              <default-button
                :type="'trans-button'"
                :label="row.btnRest"
                :value="row.account"
                :click-event="handleOpenCloseRestoreModal"
              />
              <default-button
                :type="'trans-button'"
                :label="row.btnDel"
                :value="row.account"
                :click-event="handleOpenCloseDeleteModal"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import modalWindow from '../components/modal'
import DefaultButton from '../components/default-button.vue'
import icDelete from '../assets/icons/delete-ic.svg'
import icSuccess from '../assets/icons/success-ic.svg'
export default {
  name: 'TableArchiveAccountDate',
  components: {
    'default-button': DefaultButton,
    'modal-window': modalWindow,
    icDelete,
    icSuccess
  },
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      showDeleteModal: false,
      showRestoreModal: false
    }
  },
  methods: {
    handleOpenCloseRestoreModal (elem) {
      const accountArchive = elem.currentTarget.getAttribute('value')
      elem.target.closest('.accounts-archive-page').querySelector('.restoreModal h3 > span').innerHTML = accountArchive
      this.showRestoreModal = !this.showRestoreModal
      document.body.classList.add('overflow')
    },
    handleCloseFormRestoreModal () {
      this.showRestoreModal = false
      document.body.classList.remove('overflow')
    },
    handleOpenCloseDeleteModal (elem) {
      const accountArchive = elem.currentTarget.getAttribute('value')
      elem.target.closest('.accounts-archive-page').querySelector('.deleteModal h3 > span').innerHTML = accountArchive
      this.showDeleteModal = !this.showDeleteModal
      document.body.classList.add('overflow')
    },
    handleCloseFormDeleteModal () {
      this.showDeleteModal = false
      document.body.classList.remove('overflow')
    }
  }
}
</script>
<style>
.accounts-archive-page table
{
  width: 100%;
}

.accounts-archive-page table tr th
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  background: #2C2C2C;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
  padding: 10px 20px 9px;
  text-align: left;
  border-top: 1px solid rgba(94, 94, 94, 0.5);
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
}

.accounts-archive-page table tr td
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #737373;
  padding: 10px 20px 10px;
}

.accounts-archive-page table tr td span
{
  color: #FFFFFF;
}

.accounts-archive-page table tr td button
{
  font-size: 10px;
  line-height: 12px;
  padding: 9px 20px 7px;
}

.accounts-archive-page table tr td .btn-block-table
{
  display: flex;
  justify-content: flex-end;
}

.accounts-archive-page table tr td .btn-block-table button:first-child
{
  margin-right: 20px;
}

.overflow
{
  overflow: hidden;
}
</style>
