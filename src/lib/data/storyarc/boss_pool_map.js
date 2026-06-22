// 테마별 보스 key↔pool 매핑 + boss_list 경로 + 출력 디렉토리.
// 엔드포인트(/api/storyarc/bulk)와 러너(scripts/gen-storyarcs.mjs)가 공유하는 단일 출처.
// pool 은 보스 정체성에 종속(위치 무관). 배열 순서 = boss_list 의 bossIndex 와 일치해야 함.
// plain JS 로 둬서 node(.mjs) 와 Vite/SvelteKit(.ts) 양쪽에서 import 가능.

export const BOSS_POOL_MAP = {
	snowy: [
		{ key: 'haraldr', pool: 'pool_106' },
		{ key: 'skuld', pool: 'pool_107' },
		{ key: 'skaalbane', pool: 'pool_108' },
		{ key: 'anya', pool: 'pool_109' },
		{ key: 'skalhorn', pool: 'pool_110' },
		{ key: 'cairn', pool: 'pool_111' },
		{ key: 'fenrir', pool: 'pool_112' },
		{ key: 'bellus', pool: 'pool_035' },
		{ key: 'astrielle', pool: 'pool_034' },
		{ key: 'finn', pool: 'pool_033' }
	],
	modern: [
		{ key: 'evan', pool: 'pool_098' },
		{ key: 'minsu', pool: 'pool_099' },
		{ key: 'otto', pool: 'pool_100' },
		{ key: 'rohan', pool: 'pool_101' },
		{ key: 'kjang', pool: 'pool_Spreadsheet_Accountant_V1' },
		{ key: 'nemesis', pool: 'pool_Oathbound_Nemesis_V1' },
		{ key: 'whisper', pool: 'pool_UrbanHorror_Whisper_V1' },
		{ key: 'elias', pool: 'pool_ForgottenDebt_Elias_V1' },
		{ key: 'staticecho', pool: 'pool_DigitalChaos_StaticEcho_V1' },
		{ key: 'mnemonic', pool: 'pool_DigitalBetrayer_Mnemonic_V1' }
	],
	desert: [
		{ key: 'sahar', pool: 'pool_051' },
		{ key: 'orbel', pool: 'pool_052' },
		{ key: 'qadir', pool: 'pool_053' },
		{ key: 'sipius', pool: 'pool_ThirstyRelic_Sipius_V1' },
		{ key: 'obsidius', pool: 'pool_SandBinder_Obsidius_V1' }
	]
};

export const BOSS_LIST_FILE = {
	snowy: 'boss_list/snowy.json',
	modern: 'boss_list/modern.json',
	desert: 'boss_list/desert.json'
};

export const OUT_DIR = {
	snowy: 'src/lib/data/storyarc/snowy_test',
	modern: 'src/lib/data/storyarc/modern',
	desert: 'src/lib/data/storyarc/desert'
};
