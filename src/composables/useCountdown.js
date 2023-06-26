import { ref, computed } from 'vue';

export default function useCountdown() {
  const msecInSec = 1000;
  const secInMin = 60;
  const secInHour = 60 * 60;
  const secInDay = 60 * 60 * 24;
  const currentDateInMSec = new Date().getTime();
  const newYearsDateInMSec = new Date('January 1, 2024 00:00:00').getTime();
  const timeLeftInSec = ref((newYearsDateInMSec - currentDateInMSec) / msecInSec);

  function formatTime(time) {
    let formattedTime = (time).toFixed(0);
    return formattedTime < 10 ? `0${formattedTime}` : formattedTime;
  }
  
  const days = computed(() => formatTime(timeLeftInSec.value / secInDay));
  const hours = computed(() => formatTime((timeLeftInSec.value % secInDay) / secInHour));
  const minutes = computed(() => formatTime(((timeLeftInSec.value % secInDay) % secInHour) / secInMin));
  const seconds = computed(() => formatTime(((timeLeftInSec.value % secInDay) % secInHour) % secInMin));

  setInterval(() => {
    timeLeftInSec.value -= 1;
  }, msecInSec);

  return {
    days,
    hours,
    minutes,
    seconds,
    timeLeftInSec,
  }
};
