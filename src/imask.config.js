export default {
	tel: {
		mask: [
			/**
			 * @tests
			 * Unknown:
			 * 0123456789
			 * +0123456789
			 * 55443322
			 * +55443322
			 * +89876543210
			 *
			 * Russia:
			 * 89876543210
			 * 79876543210
			 * +79876543210
			 * +7 (495) 777-66-55
			 * 8 844 277 66 55
			 *
			 * USA:
			 * 19876543210
			 * +19876543210
			 *
			 * UK:
			 * 449876543210
			 * +449876543210
			 */
			{
				mask: '0 (000) 000-00-00',
				startsWith: /^8/,
				country: 'Russia'
			},
			{
				mask: '{+}0 (000) 000-00-00',
				startsWith: /^\+?7/,
				country: 'Russia'
			},
			{
				mask: '{+}0 (000) 000-0000',
				startsWith: /^\+?1/,
				country: 'United States'
			},
			{
				mask: '{+}00 00 0000 0000',
				startsWith: /^\+?44/,
				country: 'United Kingdom'
			},
			{
				mask: '{+}00000000[0000][0000][0000]',
				startsWith: /^\+|\d/,
				country: 'Unknown'
			}
		],
		dispatch(appended, dynamicMasked) {
			const number = (dynamicMasked.value + appended).replace(/[^+\d]/g, '');

			return dynamicMasked.compiledMasks.find(mask => number.match(mask.startsWith));
		}
	}
}
