<script setup lang="ts">
import { useI18n } from 'vue-i18n-bridge';
const { t } = useI18n();
</script>

<template>
  <div id="app">
    <div>{{ t('key') }}</div>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "key": "value"
  }
}
</i18n>
