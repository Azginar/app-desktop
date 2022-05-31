<template>
  <div class="social-trading-account">
    <h3>Social trading</h3>
    <default-button
      :type="'trans-button'"
      :label="'Make account public'"
    />
    <p>
      <i>Публичный счет будет отображаться в топе счетов и будет доступен для копирования потенциальными инвесторами.</i><br><br>

      Должны быть соблюдены следующие условия:<br><br>

      – <i>Баланс счета не менее 100 USD</i><br>
      – <i>Активная торговля на счете не менее 1 месяца</i>
    </p>
  </div>
</template>
<script>
import DefaultButton from '../components/default-button.vue'
export default {
  name: 'SocialTradingAccount',
  components: {
    'default-button': DefaultButton
  }
}
</script>
<style>
  .social-trading-account
  {
    margin-bottom: 60px;
  }

  .social-trading-account h3
  {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: #FFFFFF;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(94, 94, 94, 0.5);
    margin-bottom: 30px !important;
  }

  .social-trading-account button
  {
    margin-bottom: 20px;
  }

  .social-trading-account p
  {
    font-family: Arial;
    font-weight: normal;
    font-size: 13px;
    line-height: 140%;
    color: #737373;
  }

</style>
