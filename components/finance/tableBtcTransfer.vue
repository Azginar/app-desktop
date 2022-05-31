<template>
  <div class="table-history">
    <table>
      <thead>
        <tr>
          <th v-for="row in tableHead" :key="row.item">
            {{ row.value }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tableData" :key="row.item">
          <td>{{ row.id }}</td>
          <td>{{ row.date }}</td>
          <td><span>{{ row.account }}</span></td>
          <td><i v-if="isRowBitcoinPurse(row.bitcoinPurse)">{{ row.bitcoinPurse }}</i></td>
          <td><span>{{ row.amount }}</span></td>
          <td>
            <div v-if="isRowStatusAccepted(row.status)" class="status-block">
              <div>
                <icStatusAccepted />
              </div>
              <div>
                <p class="statusAccepted">
                  {{ row.status }}
                </p>
              </div>
            </div>
            <div v-else-if="isRowStatusNotConfirmed(row.status)" class="status-block">
              <div>
                <icStatusNotConfirmed />
              </div>
              <div>
                <p class="statusNotConfirmed">
                  {{ row.status }}
                </p>
              </div>
              <div>
                <default-button
                  label="Confirmed"
                  type="trans-button"
                />
              </div>
            </div>
            <div v-else-if="isRowStatusRejected(row.status)" class="status-block">
              <div>
                <icStatusRejected />
              </div>
              <div>
                <p class="statusRejected">
                  {{ row.status }}
                </p>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import icStatusAccepted from '../../assets/icons/status-accepted.svg'
import icStatusNotConfirmed from '../../assets/icons/status-not-confirmed.svg'
import icStatusRejected from '../../assets/icons/status-rejected.svg'
import DefaultButton from '../../components/default-button'
export default {
  name: 'TableBtcTransfer',
  components: {
    icStatusAccepted,
    icStatusNotConfirmed,
    icStatusRejected,
    'default-button': DefaultButton
  },
  props: {
    tableHead: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    isRowStatusAccepted (status) {
      return status === 'accepted'
    },
    isRowStatusNotConfirmed (status) {
      return status === 'not confirmed'
    },
    isRowStatusRejected (status) {
      return status === 'rejected'
    },
    isRowBitcoinPurse (value) {
      return value
    }
  }
}
</script>
<style>
.table-history table
{
  width: 100%;
}

.table-history table tr th
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

.table-history table tr td
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #737373;
  padding: 10px 20px 10px;
  cursor: default !important;
}

.table-history table tr td span
{
  color: #FFFFFF;
}

.table-history table tr td .status-block
{
  display: flex;
  align-items: center;
}

.table-history table tr td .status-block > div:first-child
{
  margin-right: 5px;
}

.table-history table tr td .status-block p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 4px;
}

.table-history table tr td .status-block p.statusAccepted
{
  color: #8DC640;
}

.table-history table tr td .status-block p.statusNotConfirmed
{
  color: #D2AC75;
  margin-right: 10px;
}

.table-history table tr td .status-block p.statusRejected
{
  color: #E52525;
}

.table-history table tr td .status-block .trans-button
{
  font-size: 10px;
  line-height: 12px;
  color: #B2B2B2;
  padding: 9px 20px 7px;
}

.table-history table tr td i
{
  font-style: normal;
}

.table-history table tr td:nth-child(5n) span
{
  color: #ffffff;
}

@media (max-width: 1500px) {
  .table-history table tr td i
  {
    display: inline-block;
    word-wrap: break-word;
    width: 200px;
  }
}

@media (max-width: 1200px) {
  .table-history table tr td .statusNotConfirmed + div
  {
    width: 100%;
  }

  .table-history table tr td .statusNotConfirmed
  {
    margin-right: 0;
  }

  .table-history table tr td .status-block
  {
    flex-wrap: wrap;
  }

  .table-block table tbody tr td
  {
    height: auto;
  }

  .table-history table tr td i
  {
    width: 125px;
  }
}
</style>
